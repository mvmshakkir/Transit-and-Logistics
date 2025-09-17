
namespace SerExtraCore.Transactions.Pages
{
    using SerExtraCore.Master.Entities;
    using SerExtraCore.Web.Modules;
    using Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using Serenity.Reporting;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Drawing;
    using System.Linq;

    [Report, RequiredPermission("SupplierReport:SupplierDetailLedger")]
    [Category("SupplierReport/SupplierDetailLedger"), DisplayName("Supplier Detail Ledger")]
    [ReportDesign(MVC.Views.Reports.SupplierDetailLedger)]
    public class SupplierDetailLedger : IReport, ICustomizeHtmlToPdf
    {
        [HalfWidth]
        [LookupEditor(typeof(Master.Entities.SupplierRow))]
        [DisplayName("Supplier"), Required(true)]
        public Int32? SupplierId { get; set; }

        [HalfWidth]
        [DisplayName("From Date"),Required(true)]
        public DateTime? StartDate { get; set; }

        [HalfWidth]
        [DisplayName("To Date"),Required(true)]
        public DateTime? EndDate { get; set; }
    
        public object GetData()
        {
            var data = new AccountStatementViewtData();
            data.aboutreport = new AboutReport();

            using (var connection = SqlConnections.NewFor<Accounts.Entities.AccountsRow>())
            {
                var sql = @"select Id,ConsignmentId,InvoiceDate,InvoiceNO as VNo,JobNo,InvoiceNO,SupplierName,SupplierId,
                    (vehicledetailamount+invoicecharges+vehiclecharges) as Amount 
                    from(
                    select I.Id,I.ConsignmentId,InvoiceDate,I.JobNo,I.InvoiceNO,S.SupplierName,S.Id as SupplierId,
                    (select isnull(SUM(SupplierAmount),0) from InvoiceVehicleDetails where SupplierId="+ SupplierId + @" and InvoiceId=I.Id) as vehicledetailamount,
                    (select isnull(SUM(SupplierAmount),0) from InvoiceCharges where SupplierId=" + SupplierId + @" and InvoiceId=I.Id) as invoicecharges,
                    (select isnull(SUM(InvoiceCharges.SupplierAmount),0) from InvoiceCharges 
                    inner join InvoiceVehicleDetails on InvoiceCharges.InvoiceChargeVehicleDetailId=InvoiceVehicleDetails.Id 
                    where InvoiceCharges.SupplierId=" + SupplierId + @" and InvoiceVehicleDetails.InvoiceId=I.Id ) as vehiclecharges 
                    from Invoice as I 
                    inner join Supplier as S on S.Id="+ SupplierId + @") as A 
                    where (A.vehicledetailamount+A.invoicecharges+A.vehiclecharges)>0 and InvoiceDate >=" + StartDate.ToSqlDate() + " and InvoiceDate<=" + EndDate.ToSqlDate() + "";
                var valueInv = connection.Query<InvoicesList>(sql);
                data.InvoicesList = valueInv.ToList();
                if (valueInv.Count() > 0)
                {
                    var sqlpayments = @"select VNo,Amount,TrxDate,JE.SupplierId,JE.Remarks,S.SupplierName,I.Id as InvoiceId
                        from JournalEntries as JE
                        inner join Supplier as S on S.Id=JE.SupplierId 
                        inner join ConsignmentVehicleDetails as CVD on CVD.Id=JE.ConsignmentVehicleDetailsId 
                        inner join Invoice as I on I.ConsignmentId=CVD.ConsignmentId
                        where JE.SupplierId="+SupplierId+ @" and SupplierPaymentId is null 
                        union all
                        select JE.VNo, M.TotalAmount as Amount,JE.TrxDate,JE.SupplierId,
                        case when JE.Remarks is null then 'payment' else JE.Remarks end as Remarks,
                        S.SupplierName,I.Id as InvoiceId
                        from JournalEntries as JE
                        inner join Supplier as S on S.Id=JE.SupplierId 
                        inner join MoneyInOut as M on M.Id=JE.MoneyInOutId
                        inner join Invoice as I on I.ConsignmentId=JE.ConsignmentId
                        where JE.SupplierId="+SupplierId+ @" and SupplierPaymentId is null  and JE.ConsignmentId>0
                        union all 
                        select VNo,SPIC.Amount as Amount,
                        TrxDate,JE.SupplierId,Remarks,S.SupplierName,
                        case when IC.InvoiceId>0 then IC.InvoiceId else IVD.InvoiceId end as InvoiceId 
                        from JournalEntries as JE 
                        inner join Supplier as S on S.Id=JE.SupplierId 
                        left join SuppliersPaymentInvoiceCharges as SPIC on SPIC.SuppliersPaymentId=JE.SupplierPaymentId 
                        left join InvoiceCharges as IC on IC.Id=SPIC.InvoiceChargesId 
                        left join InvoiceVehicleDetails as IVD on IVD.Id=IC.InvoiceChargeVehicleDetailId 
                        where JE.SupplierId=" + SupplierId + @" and SupplierPaymentId>0 and SPIC.Amount>0 
                        union all 
                        select VNo,SPIVD.Amount as Amount,TrxDate,JE.SupplierId,Remarks,S.SupplierName,IVD.InvoiceId 
                        from JournalEntries as JE 
                        inner join Supplier as S on S.Id=JE.SupplierId 
                        left join SuppliersPaymentInvoiceVehicleDetails as SPIVD on SPIVD.SuppliersPaymentId=JE.SupplierPaymentId 
                        left join InvoiceVehicleDetails as IVD on IVD.Id=SPIVD.InvoiceVehicleDetailId 
                        where JE.SupplierId=" + SupplierId + @" and SupplierPaymentId>0  and SPIVD.Amount>0  ";
                    var valuePayments = connection.Query<PaymentList>(sqlpayments);


                    foreach (var item in data.InvoicesList)
                    {
                        var payments = valuePayments.Where(x => x.InvoiceId == item.Id).ToList();
                        item.PaymentList = payments.ToList();
                        item.Total = payments.Sum(x => x.Amount);
                        item.Balance = item.Amount - item.Total;
                    }
                }
            }

            data.aboutreport.FromDate = StartDate;
            data.aboutreport.ToDate = EndDate;

            return data;

        }
        public object GetDataForExel()
        {
            using (var connection = SqlConnections.NewFor<Entities.InvoiceChargesRow>())
            {
                int userid = 0;
                int.TryParse(Authorization.UserId, out userid);
                var sql = "SELECT  Date as Date,  COUNT(CASE WHEN Status = 1 and StudentId is not null THEN 1 ELSE NULL END) as AbsentStudents, COUNT(CASE WHEN Status = 2 and StudentId is not null THEN 1 ELSE NULL END) as PresentStudents,COUNT(CASE WHEN Status = 3 and StudentId is not null THEN 1 ELSE NULL END) as HolidayStudents,COUNT(CASE WHEN Status = 1 and StaffId is not null THEN 1 ELSE NULL END) as AbsentStaffs,COUNT(CASE WHEN Status = 2 and StaffId is not null THEN 1 ELSE NULL END) as PresentStaffs,COUNT(CASE WHEN Status = 3 and StaffId is not null THEN 1 ELSE NULL END) as HolidayStaffs FROM Attandance where date>= " + StartDate.ToSqlDate() + " and date <= " + EndDate.ToSqlDate() + " and TenantId=(select TenantId from Users where userid=" + userid + ") GROUP BY date";
                var value = connection.Query<InvoicesList>(sql);

                return sql;
            }
        }
        public List<ReportColumn> GetColumnList()
        {
            var data = ReportColumnConverter.ObjectTypeToList(typeof(InvoicesList));
            return data;
        }
        public void Customize(IHtmlToPdfOptions options)
        {

            options.Landscape = true;

        }
        [BasedOnRow(typeof(Transactions.Entities.InvoiceCollectionRow))]
        
       
        public class AboutReport
        {
            public Nullable<DateTime> FromDate { get; set; }
            public Nullable<DateTime> ToDate { get; set; }
            public string CustomerName { get; set; }
            public decimal TotalAmount { get; set; }
            public decimal TotalReceived { get; set; }
        }
        public class AccountStatementViewtData
        {
            public AboutReport aboutreport { get; set; }
            public List<InvoicesList> InvoicesList { get; set; }
        }
        public class InvoicesList
        {
            public int Id { get; set; }
            public int ConsignmentId { get; set; }
            public DateTime InvoiceDate { get; set; }
            public string VNo { get; set; }
            public string JobNo { get; set; }
            public string InvoiceNO { get; set; }
            public decimal Amount { get; set; }
            public int SupplierId { get; set; }
            public string SupplierName { get; set; }
            public decimal Total { get; set; }
            public decimal Balance { get; set; }
            public List<PaymentList> PaymentList { get; set; }
        }

        public class PaymentList
        {
            public int VNo { get; set; }
            public decimal Amount { get; set; }
            public DateTime TrxDate { get; set; }
            public int CustomerId { get; set; }
            public string Remarks { get; set; }
            public string CustomerName { get; set; }
            public int InvoiceId { get; set; }
        }

    }
}

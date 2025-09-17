
namespace SerExtraCore.Transactions.Pages
{

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

    [Report, RequiredPermission("Tax:TaxReport")]
    [Category("Tax/TaxOutputReport"), DisplayName("Tax Input Report")]
    [ReportDesign(MVC.Views.Reports.TaxOutputReport)]
    public class TaxOutputReport : IReport, ICustomizeHtmlToPdf
    {
        
        [HalfWidth]
        [DisplayName("From Date"),Required(true)]
        public DateTime? FromDate { get; set; }

        [HalfWidth]
        [DisplayName("To Date"), Required(true)]
        public DateTime? ToDate { get; set; }
       

        public object GetData()
        {
            var data = new TaxOutputViewtData();
            data.FromDate = FromDate.Value;
            data.ToDate = ToDate.Value;
            using (var connection = SqlConnections.NewFor<Accounts.Entities.AccountsRow>())
            {

                var sql = @"select TrxDate,Vno,SupplierId,Amount,TaxAmount,SupplierName,TaxRegNo
                            from(
                            select TrxDate,case when ConsignmentId>0 then JobNo else cast(VNo as varchar(20)) end as Vno,M.SupplierId,Amount,
                            TaxAmount,case when S.SupplierName is null then AH.Description else S.SupplierName end as SupplierName,S.TaxRegNo
                            from MoneyInOut as M
                            left join Consignment C on C.Id=M.ConsignmentId
                            left join Supplier as S on S.Id=M.SupplierId 
                            inner join AccountHeads as AH on AH.id=M.AccountHeadId
                            where VType=2  and TaxPer>0
                            union all
                            select max(TrxDate)TrxDate,max(RefNo) as Vno,max(SupplierId)as SupplierId,sum(TaxableAmount) as Amount,
                            sum(TaxAmount) as TaxAmount,max(S.SupplierName)SupplierName,max(S.TaxRegNo)TaxRegNo
                            from Purchase as P
                            inner join PurchaseDetails as PD on PD.PurchaseId=P.Id
                            inner join Supplier as S on S.Id=P.SupplierId
                            where TaxPer>0
                            group by PurchaseId) as A 
                            where TrxDate>=" + FromDate.ToSqlDate()+@" and TrxDate<="+ToDate.ToSqlDate()+@"
                            order by TrxDate";
                
                var details = connection.Query<Item>(sql);
                data.Details = details.ToList();
            }
            return data;
        }
        public object GetDataForExel()
        {
            //using (var connection = SqlConnections.NewFor<Entities.InvoiceChargesRow>())
            //{
            //    int userid = 0;
            //    int.TryParse(Authorization.UserId, out userid);
            //    var sql = "SELECT  Date as Date,  COUNT(CASE WHEN Status = 1 and StudentId is not null THEN 1 ELSE NULL END) as AbsentStudents, COUNT(CASE WHEN Status = 2 and StudentId is not null THEN 1 ELSE NULL END) as PresentStudents,COUNT(CASE WHEN Status = 3 and StudentId is not null THEN 1 ELSE NULL END) as HolidayStudents,COUNT(CASE WHEN Status = 1 and StaffId is not null THEN 1 ELSE NULL END) as AbsentStaffs,COUNT(CASE WHEN Status = 2 and StaffId is not null THEN 1 ELSE NULL END) as PresentStaffs,COUNT(CASE WHEN Status = 3 and StaffId is not null THEN 1 ELSE NULL END) as HolidayStaffs FROM Attandance where date>= " + StartDate.ToSqlDate() + " and date <= " + EndDate.ToSqlDate() + " and TenantId=(select TenantId from Users where userid=" + userid + ") GROUP BY date";
            //    var value = connection.Query<Item>(sql);

            //    return sql;
            //}
            return "";
        }
        public List<ReportColumn> GetColumnList()
        {
            var data = ReportColumnConverter.ObjectTypeToList(typeof(Item));
            return data;
        }
        public void Customize(IHtmlToPdfOptions options)
        {

            options.Landscape = false;

        }
        [BasedOnRow(typeof(Transactions.Entities.InvoiceCollectionRow))]
        public class Item
        {
            public DateTime TrxDate { get; set; }
            public string Vno { get; set; }
            public string SupplierName { get; set; }
            public string TaxRegNo { get; set; }
            public decimal Amount { get; set; }
            public decimal TaxAmount { get; set; }

        }
       
        public class TaxOutputViewtData
        {
            public DateTime FromDate { get; set; }
            public DateTime ToDate { get; set; }
            public List<Item> Details { get; set; }
        }



    }
}

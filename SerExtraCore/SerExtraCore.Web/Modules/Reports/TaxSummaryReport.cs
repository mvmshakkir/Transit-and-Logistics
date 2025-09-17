
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

    [Report, RequiredPermission("Tax:TaxSummaryReport")]
    [Category("Tax/TaxSummaryReport"), DisplayName("Tax Summary Report")]
    [ReportDesign(MVC.Views.Reports.TaxSummaryReport)]
    public class TaxSummaryReport : IReport, ICustomizeHtmlToPdf
    {
        
        [HalfWidth]
        [DisplayName("From Date"),Required(true)]
        public DateTime? FromDate { get; set; }

        [HalfWidth]
        [DisplayName("To Date"), Required(true)]
        public DateTime? ToDate { get; set; }
       

        public object GetData()
        {
            var data = new TaxSummaryViewtData();
            data.FromDate = FromDate.Value;
            data.ToDate = ToDate.Value;
            using (var connection = SqlConnections.NewFor<Accounts.Entities.AccountsRow>())
            {
                var sql = @"select isnull(sum(Amount),0) as Amount,isnull(sum(TaxAmount),0) as TaxAmount,'Registered Persons' as Descr,'outward' as taxtype
                            from MoneyInOut as M
                            inner join Supplier as S on S.Id=M.SupplierId
                            where VType=2 and TaxPer>0 and TaxRegNo is not null
                            and TrxDate>="+FromDate.ToSqlDate()+@" and TrxDate<="+ToDate.ToSqlDate()+@"
                            union all
                            select isnull(sum(Amount),0) as Amount,isnull(sum(TaxAmount),0) as TaxAmount,'Unregistered Persons' as Descr,'outward' as taxtype
                            from MoneyInOut as M
                            inner join Supplier as S on S.Id=M.SupplierId
                            where VType=2 and TaxPer>0 and TaxRegNo is null
                            and TrxDate>="+FromDate.ToSqlDate()+@" and TrxDate<="+ToDate.ToSqlDate()+@"
                            union all
                            select isnull(sum(TaxableAmount),0) as TaxableAmount,isnull(sum(TaxAmount),0) as TaxAmount,'Registered Persons' as Descr,'inward' as taxtype
                            from InvoiceCharges
                            left  join InvoiceVehicleDetails on InvoiceCharges.InvoiceVehicleDetailId = InvoiceVehicleDetails.Id
                            or InvoiceCharges.InvoiceChargeVehicleDetailId = InvoiceVehicleDetails.Id
                            inner join Invoice on Invoice.Id = InvoiceCharges.InvoiceId or Invoice.Id = InvoiceVehicleDetails.InvoiceId
                            inner join Customers on Customers.Id = Invoice.Billing
                            where InvoiceDate>= "+FromDate.ToSqlDate()+@" and InvoiceDate<= "+ToDate.ToSqlDate()+@" and Customers.TaxRegNo is not null
                            union all
                            select isnull(sum(TaxableAmount),0) as TaxableAmount,isnull(sum(TaxAmount),0) as TaxAmount,'Unregistered Persons' as Descr,'inward' as taxtype
                            from InvoiceCharges
                            left  join InvoiceVehicleDetails on InvoiceCharges.InvoiceVehicleDetailId = InvoiceVehicleDetails.Id
                            or InvoiceCharges.InvoiceChargeVehicleDetailId = InvoiceVehicleDetails.Id
                            inner join Invoice on Invoice.Id = InvoiceCharges.InvoiceId or Invoice.Id = InvoiceVehicleDetails.InvoiceId
                            inner join Customers on Customers.Id = Invoice.Billing
                            where InvoiceDate>= "+FromDate.ToSqlDate()+@" and InvoiceDate<= "+ToDate.ToSqlDate()+@" and Customers.TaxRegNo is null";
                
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
            public decimal Amount { get; set; }
            public decimal TaxAmount { get; set; }
            public string Descr { get; set; }
            public string taxtype { get; set; }

        }
       
        public class TaxSummaryViewtData
        {
            public DateTime FromDate { get; set; }
            public DateTime ToDate { get; set; }
            public List<Item> Details { get; set; }
        }



    }
}

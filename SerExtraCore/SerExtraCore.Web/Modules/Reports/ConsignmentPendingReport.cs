
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

    [Report, RequiredPermission("Consignment:ConsignmentPendingReport")]
    [Category("Consignment/ConsignmentPendingReport"), DisplayName("Consignment Pending")]
    [ReportDesign(MVC.Views.Reports.ConsignmentPendingReport)]
    public class ConsignmentPendingReport : IReport, ICustomizeHtmlToPdf
    {
        
        [HalfWidth]
        [DisplayName("From Date")]
        public DateTime? StartDate { get; set; }

        [HalfWidth]
        [DisplayName("To Date")]
        public DateTime? EndDate { get; set; }
       

        public object GetData()
        {
            var data = new AccountStatementViewtData();
            using (var connection = SqlConnections.NewFor<Accounts.Entities.AccountsRow>())
            {
                int userid = 0;
                int.TryParse(Authorization.UserId, out userid);
                var sql = "";
                var cond = "";
                if (StartDate !=null)
                {
                    cond = cond + " and con.Date>="+StartDate.ToSqlDate()+" "; 
                }
                if (EndDate != null)
                {
                    cond = cond + " and con.Date<=" + EndDate.ToSqlDate() + " ";
                }

                sql =sql+ @"select con.Id,con.Date,WayBillNo,JobNo,ClientJobNo,sh.CustomerName as Shipper,cons.CustomerName as Consignee,bi.CustomerName as Billing ,con.TotalAmount  from Consignment con inner join Customers sh on sh.Id=con.ShipperId inner join Customers cons on cons.Id=con.ConsigneeId inner join Customers Bi on bi.Id=con.Billing where con.Id not in (select ConsignmentId from Invoice)"+cond+"";
                var value = connection.Query<Item>(sql);
                value = value.OrderBy(i=>i.Date);
                int i = 1;
                foreach(var k in value)
                {
                    k.slno = i++;
                }
                data.Details = value.ToList();
            }
            data.aboutreport = new AboutReport();
      
        
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
                var value = connection.Query<Item>(sql);

                return sql;
            }
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
            public int slno { get; set; }
            public int Id { get; set; }
            public DateTime Date { get; set; }
            public string WayBillNo { get; set; }
            public string JobNo { get; set; }
            public string ClientJobNo { get; set; }

            public string Shipper { get; set; }
            public string Consignee { get; set; }
            public string Billing { get; set; }
            public Decimal TotalAmount { get; set; }


        }
        public class AboutReport
        {
            public Nullable<DateTime> FromDate { get; set; }
            public Nullable<DateTime> ToDate { get; set; }
           
        }
        public class AccountStatementViewtData
        {


            public List<Item> Details { get; set; }
            public AboutReport aboutreport { get; set; }

        }



    }
}

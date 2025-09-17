
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

    [Report, RequiredPermission("Profit:ProfitReport")]
    [Category("Profit/ProfitReport"), DisplayName("Profit Report")]
    [ReportDesign(MVC.Views.Reports.ProfitReport)]
    public class ProfitReport : IReport, ICustomizeHtmlToPdf
    {

        [HalfWidth]
        [DisplayName("From Date"), Required(true)]
        public DateTime? FromDate { get; set; }
        [HalfWidth]
        [DisplayName("To Date"), Required(true)]
        public DateTime? ToDate { get; set; }


        public object GetData()
        {
            var data = new ProfitReportViewtData();
            using (var connection = SqlConnections.NewFor<Accounts.Entities.AccountsRow>())
            {
                var sql = "select id,InvoiceDate,InvoiceNO from Invoice " +
                    "where InvoiceDate >="+ FromDate .ToSqlDate()+ " and InvoiceDate<="+ ToDate.ToSqlDate() + "";

                var header = connection.Query<Header>(sql);
                data.Header = header.ToList();

                foreach(var item in data.Header)
                {
                    var sqlinvchrge = "select ChargeId, Charges.ChargeName,Amount,Qty,TotalAmount," +
                        "case when InvoiceVehicleDetailId> 0 then " +
                        "(select SupplierAmount from InvoiceVehicleDetails where id = InvoiceVehicleDetailId) " +
                        "else SupplierAmount end as SupplierAmount " +
                        "from InvoiceCharges " +
                        "inner join Charges on charges.Id = ChargeId " +
                        "where InvoiceCharges.InvoiceId = "+item.Id+" or " +
                        "InvoiceVehicleDetailId = (select id from InvoiceVehicleDetails where InvoiceId = "+item.Id+")";
                    var invchrge = connection.Query<InvCharge>(sqlinvchrge);
                    item.InvCharges = invchrge.ToList();

                    var sqlexp = "select JournalEntries.Id,TrxDate,Amount,CustomerName from JournalEntries " +
                        "inner join customers on Customers.Id = JournalEntries.CustomerId " +
                        "where ConsignmentId = (select ConsignmentId from Invoice where id = " + item.Id + ")";
                    var consexp = connection.Query<ConsExp>(sqlexp);
                    item.ConsExpense = consexp.ToList();
                }
            }
         
          
        
            
            
            return data;
        }
        public object GetDataForExel()
        {
            return null;
            //using (var connection = SqlConnections.NewFor<Entities.InvoiceChargesRow>())
            //{
            //    int userid = 0;
            //    int.TryParse(Authorization.UserId, out userid);
            //    var sql = "SELECT  Date as Date,  COUNT(CASE WHEN Status = 1 and StudentId is not null THEN 1 ELSE NULL END) as AbsentStudents, COUNT(CASE WHEN Status = 2 and StudentId is not null THEN 1 ELSE NULL END) as PresentStudents,COUNT(CASE WHEN Status = 3 and StudentId is not null THEN 1 ELSE NULL END) as HolidayStudents,COUNT(CASE WHEN Status = 1 and StaffId is not null THEN 1 ELSE NULL END) as AbsentStaffs,COUNT(CASE WHEN Status = 2 and StaffId is not null THEN 1 ELSE NULL END) as PresentStaffs,COUNT(CASE WHEN Status = 3 and StaffId is not null THEN 1 ELSE NULL END) as HolidayStaffs FROM Attandance where date>= " + StartDate.ToSqlDate() + " and date <= " + EndDate.ToSqlDate() + " and TenantId=(select TenantId from Users where userid=" + userid + ") GROUP BY date";
            //    var value = connection.Query<Item>(sql);

            //    return sql;
            //}
        }
        public List<ReportColumn> GetColumnList()
        {
            var data = ReportColumnConverter.ObjectTypeToList(typeof(InvCharge));
            return data;
        }
        public void Customize(IHtmlToPdfOptions options)
        {
            options.Landscape = false;

        }
       
        public class InvCharge
        {
            public int ChargeId { get; set; }
            public string ChargeName { get; set; }
            public decimal Amount { get; set; }
            public decimal Qty { get; set; }
            public decimal TotalAmount { get; set; }
            public decimal SupplierAmount { get; set; }
            
        }

        public class ConsExp
        {
            public int Id { get; set; }
            public DateTime TrxDate { get; set; }
            public decimal Amount { get; set; }
            public string CustomerName { get; set; }
        }

        public class Header
        {
          
            public int Id { get; set; }
            public DateTime InvoiceDate { get; set; }
            public string InvoiceNO { get; set; }
            public List<InvCharge> InvCharges { get; set; }
            public List<ConsExp> ConsExpense { get; set; }
        }
       
        public class ProfitReportViewtData
        {
            public List<Header> Header { get; set; }
        }



    }
}

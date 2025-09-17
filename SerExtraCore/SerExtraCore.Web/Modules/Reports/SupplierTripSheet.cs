
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

    [Report, RequiredPermission("SupplierReport:SupplierTripSheet")]
    [Category("SupplierReport/SupplierTripSheet"), DisplayName("Supplier Trip Sheet")]
    [ReportDesign(MVC.Views.Reports.SupplierTripSheet)]
    public class SupplierTripSheet : IReport, ICustomizeHtmlToPdf
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
            data.aboutreport.FromDate = StartDate;
            data.aboutreport.ToDate = EndDate;
            using (var connection = SqlConnections.NewFor<Accounts.Entities.AccountsRow>())
            {
                var sql = @"select * from SupplierTripSheet where SupplierId="+SupplierId+ " and Date>=" + StartDate.ToSqlDate() + @" and Date<=" + EndDate.ToSqlDate() + @"";
                //sql = "SELECT JournalEntries.Id,TrxDate,VNo,VType,CASE WHEN  VType = 1 THEN 'Receipt' WHEN VType = 2 THEN 'Payment'  WHEN VType = 3 THEN 'Contra' END AS VoucherType,Amount as CreditAmount,0 as DebitAmount, acd.Description as DebitLedger,acc.Description AS CreditLedger,0 as Balance FROM JournalEntries inner join AccountHeads acd on acd.Id = DebitAccountHeadId inner join AccountHeads acc on acc.Id = CreditAccountHeadId where CreditAccountId = 2 and TrxDate>='20200301' and TrxDate<='20200331' and JournalEntries.TenantId=(select TenantId from Users where userid = 2) union SELECT JournalEntries.Id,TrxDate,VNo,VType,CASE WHEN VType = 1 THEN 'Receipt' WHEN VType = 2 THEN 'Payment' WHEN VType = 3 THEN 'Contra' END AS VoucherType,0 as CreditAmount,Amount as DebitAmount, acd.Description as DebitLedger,acc.Description AS CreditLedger,0 as Balance FROM JournalEntries inner join AccountHeads acd on acd.Id = DebitAccountHeadId inner join AccountHeads acc on acc.Id = CreditAccountHeadId where DebitAccountId = 2 and TrxDate>='20200301' and TrxDate<='20200331' and JournalEntries.TenantId=(select TenantId from Users where userid = 2) order by Id";
                var value = connection.Query<Item>(sql);
                data.Details = value.OrderBy(i=>i.Date).ToList();
                
                //   var  sql = @"select InvoiceDate,InvoiceNO,TotalAmount as InvoiceAmount,(select isnull(sum(Amount),0) from InvoiceCollectionDetails where InvoiceId=Invoice.Id) as Received from Invoice where Billing=" + CustomerId+" "+cond+"";

                //sql = "SELECT JournalEntries.Id,TrxDate,VNo,VType,CASE WHEN  VType = 1 THEN 'Receipt' WHEN VType = 2 THEN 'Payment'  WHEN VType = 3 THEN 'Contra' END AS VoucherType,Amount as CreditAmount,0 as DebitAmount, acd.Description as DebitLedger,acc.Description AS CreditLedger,0 as Balance FROM JournalEntries inner join AccountHeads acd on acd.Id = DebitAccountHeadId inner join AccountHeads acc on acc.Id = CreditAccountHeadId where CreditAccountId = 2 and TrxDate>='20200301' and TrxDate<='20200331' and JournalEntries.TenantId=(select TenantId from Users where userid = 2) union SELECT JournalEntries.Id,TrxDate,VNo,VType,CASE WHEN VType = 1 THEN 'Receipt' WHEN VType = 2 THEN 'Payment' WHEN VType = 3 THEN 'Contra' END AS VoucherType,0 as CreditAmount,Amount as DebitAmount, acd.Description as DebitLedger,acc.Description AS CreditLedger,0 as Balance FROM JournalEntries inner join AccountHeads acd on acd.Id = DebitAccountHeadId inner join AccountHeads acc on acc.Id = CreditAccountHeadId where DebitAccountId = 2 and TrxDate>='20200301' and TrxDate<='20200331' and JournalEntries.TenantId=(select TenantId from Users where userid = 2) order by Id";
                data.supplier = connection.ById<SupplierRow>(SupplierId);
            }

            decimal totalbal = 0;
            int sl = 0;
            foreach (var k in data.Details)
            {
                k.Slno = sl++;
                totalbal = totalbal + k.Balance ?? 0;
                k.TotalBalance = totalbal;

            }
            //data.aboutreport.TotalCredit = data.Details.Sum(i => i.CreditAmount);

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

            options.Landscape = true;

        }
        [BasedOnRow(typeof(Transactions.Entities.InvoiceCollectionRow))]
        public class Item
        {
            public int Slno { get; set; }
            public int Id { get; set; }
            public int SupplierId { get; set; }
           
          
            public string TrxType { get; set; }
            public DateTime Date { get; set; }

   
            public string WayBillNo { get; set; }
            public string LoadingLoc { get; set; }
            public string OffLoadingLoc { get; set; }
            public Nullable<decimal> TrxAmount { get; set; }
            public Nullable<decimal> Advance { get; set; }
            public Nullable<decimal> PaidAmount { get; set; }
            public string Description { get; set; }
            public Nullable<decimal> Balance { get; set; }
            public Nullable<decimal> TotalBalance { get; set; }

        }
        public class opening
        {
            public DateTime opdate { get; set; }
            public decimal TotalAmount { get; set; }
            public decimal Received { get; set; }
            public decimal Opening { get; set; }
            public decimal Balance { get; set; }
            public decimal TotalBalance { get; set; }
        }
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

            public opening opening { get; set; }
            public List<Item> Details { get; set; }
            public AboutReport aboutreport { get; set; }

            public SupplierRow supplier { get; set; }

        }



    }
}

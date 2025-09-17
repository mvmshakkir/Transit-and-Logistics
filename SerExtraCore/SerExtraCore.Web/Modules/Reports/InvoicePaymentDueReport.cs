
namespace SerExtraCore.Transactions.Pages
{
    using SerExtraCore.Accounts.Endpoints;
    using SerExtraCore.Master.Entities;
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

    [Report, RequiredPermission("Customers:InvoicePaymentDue")]
    [Category("Customers/InvoicePaymentDue"), DisplayName("Invoice Payment Dues")]
    [ReportDesign(MVC.Views.Reports.InvoicePaymentDueReport)]
    public class InvoicePaymentDueReport : IReport, ICustomizeHtmlToPdf
    {
        

        [HalfWidth]
        [DisplayName("As Date"),Required(true),DefaultValue("today")]
        public DateTime? StartDate { get; set; }

        [HalfWidth]
        [LookupEditor(typeof(Master.Entities.CustomersRow))]
        [DisplayName("Customer")]
        public Int32? CustomerId { get; set; }

        public object GetData()
        {
            var data = new AccountStatementViewtData();
            data.aboutreport = new AboutReport();
            using (var connection = SqlConnections.NewFor<Accounts.Entities.AccountsRow>())
            {
                int userid = 0;
                int.TryParse(Authorization.UserId, out userid);
                var cond = "";

                if (CustomerId > 0)
                {
                    cond = " and i.Billing="+CustomerId+""; 
                }
                var  sql = @"select idd.InvoiceId,i.InvoiceDate,c.CustomerName,i.InvoiceNO,i.TotalAmount,idd.DueDate,DATEDIFF(DAY,idd.DueDate,"+ StartDate.ToSqlDate() + ") as DueDays,idd.Amount from InvoiceDueDetails idd inner join Invoice i on  i.Id=idd.InvoiceId inner join Customers c on c.Id=i.Billing where idd.DueDate<=" + StartDate.ToSqlDate()+" "+cond+" order by DueDate";

                //sql = "SELECT JournalEntries.Id,TrxDate,VNo,VType,CASE WHEN  VType = 1 THEN 'Receipt' WHEN VType = 2 THEN 'Payment'  WHEN VType = 3 THEN 'Contra' END AS VoucherType,Amount as CreditAmount,0 as DebitAmount, acd.Description as DebitLedger,acc.Description AS CreditLedger,0 as Balance FROM JournalEntries inner join AccountHeads acd on acd.Id = DebitAccountHeadId inner join AccountHeads acc on acc.Id = CreditAccountHeadId where CreditAccountId = 2 and TrxDate>='20200301' and TrxDate<='20200331' and JournalEntries.TenantId=(select TenantId from Users where userid = 2) union SELECT JournalEntries.Id,TrxDate,VNo,VType,CASE WHEN VType = 1 THEN 'Receipt' WHEN VType = 2 THEN 'Payment' WHEN VType = 3 THEN 'Contra' END AS VoucherType,0 as CreditAmount,Amount as DebitAmount, acd.Description as DebitLedger,acc.Description AS CreditLedger,0 as Balance FROM JournalEntries inner join AccountHeads acd on acd.Id = DebitAccountHeadId inner join AccountHeads acc on acc.Id = CreditAccountHeadId where DebitAccountId = 2 and TrxDate>='20200301' and TrxDate<='20200331' and JournalEntries.TenantId=(select TenantId from Users where userid = 2) order by Id";
                var value = connection.Query<Item>(sql);
                value = value.OrderBy(i=>i.InvoiceDate);
                var sqlpaid = @"select InvoiceId,sum(Amount) as TotalPaid from InvoiceCollectionDetails group by InvoiceId";
                var valuepaid= connection.Query<ItemPaid>(sqlpaid).ToList();
                var pendings = new List<Item>();
                int i = 0;
                foreach (var due in value.ToList())
                {
                    
                    //due.DueDays = 
                    var item = valuepaid.Where(i =>i.InvoiceId == due.InvoiceId).SingleOrDefault();
                    bool add = true;
                    if (item != null)
                    {
                        if (due.Amount <= item.TotalPaid)
                        {
                            add = false;
                            valuepaid.Where(i => i.InvoiceId == due.InvoiceId).SingleOrDefault().TotalPaid = item.TotalPaid - due.Amount;
                        }
                        due.Amount = due.Amount - item.TotalPaid;
                    }
                    if (add)
                    {
                        i++;
                        due.Slno = i;
                        pendings.Add(due);
                    }
                }
                if (CustomerId > 0)
                {
                    data.customers = connection.ById<CustomersRow>(CustomerId);
                }
                data.Details = pendings;

                data.ReportHeader = new CommonController(null).GetConfigration(connection).ReportHeader;
            }


            //data.aboutreport.TotalCredit = data.Details.Sum(i => i.CreditAmount);
            
            data.aboutreport.FromDate = StartDate??DateTime.Today;
          
            
            return data;
        }
        public object GetDataForExel()
        {
            using (var connection = SqlConnections.NewFor<Entities.InvoiceChargesRow>())
            {
                int userid = 0;
                int.TryParse(Authorization.UserId, out userid);
                var sql = "";
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
            public int Slno { get; set; }
            public int InvoiceId{ get; set; }
       
            public DateTime InvoiceDate { get; set; }
            public string CustomerName { get; set; }
            public string InvoiceNO { get; set; }
            public decimal TotalAmount { get; set; }
            public DateTime DueDate { get; set; }
            public int DueDays { get; set; }
            public decimal Amount { get; set; }

        }
        public class ItemPaid
        {
           
            public int InvoiceId { get; set; }

          public decimal TotalPaid { get; set; }
        }
        public class opening
        {
            public decimal TotalAmount { get; set; }
            public decimal Received { get; set; }
            public decimal Balance { get; set; }
            public decimal TotalBalance { get; set; }
        }
        public class AboutReport
        {
            public DateTime FromDate { get; set; }
            public string CustomerName { get; set; }
            
            public decimal TotalAmount { get; set; }
         
            public decimal TotalReceived { get; set; }
        }
        public class AccountStatementViewtData
        {
            public string ReportHeader { get; set; }
            public opening opening { get; set; }
            public List<Item> Details { get; set; }
            public AboutReport aboutreport { get; set; }

            public CustomersRow customers { get; set; }

        }



    }
}

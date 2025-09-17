
namespace SerExtraCore.Transactions.Pages
{
    using SerExtraCore.Accounts.Entities;
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
    using static MVC.Views.Accounts;

    [Report, RequiredPermission("Vehicle:ExpensesReport")]
    [Category("Vehicle/ ExpensesReport"), DisplayName("Vehicle Expenses")]
    [ReportDesign(MVC.Views.Reports.VehicleExpensesReport)]
    public class VehicleExpensesReport : IReport, ICustomizeHtmlToPdf
    {


        [HalfWidth]
        [DisplayName("From Date"), Required(true)]
        public DateTime? StartDate { get; set; }

        [HalfWidth]
        [DisplayName("To Date"), Required(true)]
        public DateTime? EndDate { get; set; }

        [HalfWidth]
        [LookupEditor(typeof(Master.Entities.VehiclesRow))]
        [DisplayName("Vehicle")]
        public Int32? VehicleId { get; set; }

        [Category("Account Details")]
        [HalfWidth]
        [LookupEditor(typeof(Accounts.Entities.AccountHeadsRow))]
        [DisplayName("Ledger")]
        public Int32? AccountHead { get; set; }
        public object GetData()
        {
            var data = new AccountStatementViewtData();
            data.aboutreport = new AboutReport();
            data.aboutreport.FromDate = StartDate??DateTime.Today;
            data.aboutreport.ToDate = EndDate ?? DateTime.Today;
            using (var connection = SqlConnections.NewFor<Accounts.Entities.AccountsRow>())
            {
                var sql = "";
                var condveh = "";
                
                var cah = "";
               
                if (AccountHead > 0)
                {
                    cah = "(DebitAccountHeadId = " + AccountHead + @" or CreditAccountId=" + AccountHead + @")";

                    
                }
                if (VehicleId > 0)
                {
                    if (cah != "")
                    {
                        condveh = condveh + " and ";
                    }
                    condveh = condveh + "   VehicleId=" + VehicleId + " ";
                    

                }
                else
                {
                    if(cah != "")
                    {
                        condveh = condveh + " and ";
                    }
                    condveh = condveh + "   VehicleId is not null";
                }
                sql = sql + @"
SELECT JournalEntries.Id, TrxDate as TrxDate,VNo,VType,acd.Description as DebitAccount,acc.Description as CreditAccount,
CASE
    WHEN VType = 1 THEN 'Receipt'
     WHEN VType = 2 THEN 'Payment'

      WHEN VType = 3 THEN 'Contra'
      WHEN VType = 4 THEN 'Journal Entry'
END AS VoucherType,0 as CreditAmount,Amount as DebitAmount,'To '+ acc.Description AS GL,Remarks as Remarks,0 as Balance
,isnull(cus.CustomerName,' ')+isnull(s.SupplierName,' ')+isnull(v.VehicleNumber,' ')+isnull(e.EmployeeName,' ') as Party
FROM JournalEntries 
inner join AccountHeads acd on acd.Id = DebitAccountHeadId 
inner join AccountHeads acc on acc.Id = CreditAccountHeadId
left join Customers cus on cus.Id =CustomerId 
left join Supplier s on s.Id=SupplierId 
left join Vehicles v on v.Id=VehicleId
left join EmployeeMaster e on e.Id=EmployeeId
where " + cah + " " + condveh + " and TrxDate>=" + StartDate.ToSqlDate() + @" and TrxDate<=" + EndDate.ToSqlDate() + @"  order by TrxDate";
                //sql = "SELECT JournalEntries.Id,TrxDate,VNo,VType,CASE WHEN  VType = 1 THEN 'Receipt' WHEN VType = 2 THEN 'Payment'  WHEN VType = 3 THEN 'Contra' END AS VoucherType,Amount as CreditAmount,0 as DebitAmount, acd.Description as DebitLedger,acc.Description AS CreditLedger,0 as Balance FROM JournalEntries inner join AccountHeads acd on acd.Id = DebitAccountHeadId inner join AccountHeads acc on acc.Id = CreditAccountHeadId where CreditAccountId = 2 and TrxDate>='20200301' and TrxDate<='20200331' and JournalEntries.TenantId=(select TenantId from Users where userid = 2) union SELECT JournalEntries.Id,TrxDate,VNo,VType,CASE WHEN VType = 1 THEN 'Receipt' WHEN VType = 2 THEN 'Payment' WHEN VType = 3 THEN 'Contra' END AS VoucherType,0 as CreditAmount,Amount as DebitAmount, acd.Description as DebitLedger,acc.Description AS CreditLedger,0 as Balance FROM JournalEntries inner join AccountHeads acd on acd.Id = DebitAccountHeadId inner join AccountHeads acc on acc.Id = CreditAccountHeadId where DebitAccountId = 2 and TrxDate>='20200301' and TrxDate<='20200331' and JournalEntries.TenantId=(select TenantId from Users where userid = 2) order by Id";
                var value = connection.Query<Item>(sql);
                decimal bal = 0;
                //foreach (var item in value)
                //{
                //    item.Balance = bal = bal + (item.DebitAmount - item.CreditAmount);
                //    if (item.CreditAmount < 0)
                //    {
                //        item.CreditAmount = item.CreditAmount * -1;
                //    }
                //}
                data.Details = value.ToList();
                data.Details = data.Details.OrderBy(i => i.TrxDate).ToList();

                if (AccountHead > 0)
                {
                    var x = connection.ById<AccountHeadsRow>(AccountHead);
                    data.aboutreport.Ledger = x.Description;
                }
                if (VehicleId > 0)
                {
                    var x = connection.ById<VehiclesRow>(VehicleId);
                    data.aboutreport.Vehicle = x.VehicleNumber;
                }


            }
           
        
            //data.aboutreport.TotalCredit = data.Details.Sum(i => i.CreditAmount);

            //data.aboutreport.FromDate = StartDate;
            //data.aboutreport.ToDate = EndDate;
            
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
            public int Id { get; set; }
            public DateTime TrxDate { get; set; }
            public int VNo { get; set; }
            public int VType { get; set; }
            public string VoucherType { get; set; }
            public string DebitAccount { get; set; }
            public string CreditAccount { get; set; }
            public decimal CreditAmount { get; set; }
            public decimal DebitAmount { get; set; }
            public string GL { get; set; }
            public string Remarks { get; set; }
            public decimal Balance { get; set; }
            public string Party { get; set; }
        }

        public class AboutReport
        {
            public DateTime FromDate { get; set; }
            public DateTime ToDate { get; set; }
            public string CustomerName { get; set; }
            public string Ledger { get; set; }
            public string Vehicle { get; set; }
            public decimal TotalAmount { get; set; }
         
            public decimal TotalReceived { get; set; }
        }
        public class AccountStatementViewtData
        {

            
            public List<Item> Details { get; set; }
            public AboutReport aboutreport { get; set; }

         

        }



    }
}

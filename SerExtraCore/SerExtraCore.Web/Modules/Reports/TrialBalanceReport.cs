
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

    [Report, RequiredPermission("Accounts:TrialBalance")]
    [Category("Accounts/TrialBalance"), DisplayName("Trial Balance")]
    [ReportDesign(MVC.Views.Reports.TrialBalance)]
    public class TrialBalanceReport : IReport
    {
        [HalfWidth]

        [DisplayName("As Date"),Required(true)]
        public DateTime? StartDate { get; set; }

        public object GetData()
        {
            var data = new TrialBalanceViewtData();
            using (var connection = SqlConnections.NewFor<Accounts.Entities.AccountsRow>())
            {
                int userid = 0;
                int.TryParse(Authorization.UserId, out userid);
                var sql = @"select GL,CASE WHEN SUM(DebitAmount)-SUM(CreditAmount)>0 THEN SUM(DebitAmount)-SUM(CreditAmount) ELSE 0 END AS DebitAmount,CASE WHEN SUM(DebitAmount)-SUM(CreditAmount)<=0 THEN -1*(SUM(DebitAmount)-SUM(CreditAmount)) ELSE 0 END AS CreditAmount FROM(select ah.ID as GLID,ah.Description as GL,0 as CreditAmount, sum(je.Amount) as  DebitAmount   from JournalEntries je inner join AccountHeads ah on ah.ID=je.DebitAccountHeadId  where  TrxDate<="+StartDate.ToSqlDate()+ @"  group by DebitAccountHeadId,ah.ID,ah.Description
union all
select ah.ID as GLID,ah.Description as GL,sum(je.Amount) as CreditAmount, 0 as DebitAmount   from JournalEntries je inner join AccountHeads ah on ah.ID = je.CreditAccountHeadId  where TrxDate <= " + StartDate.ToSqlDate() + "  group by CreditAccountHeadId,ah.ID,ah.Description) A GROUP BY GLID, GL";
                 //sql = "SELECT JournalEntries.Id,TrxDate,VNo,VType,CASE WHEN  VType = 1 THEN 'Receipt' WHEN VType = 2 THEN 'Payment'  WHEN VType = 3 THEN 'Contra' END AS VoucherType,Amount as CreditAmount,0 as DebitAmount, acd.Description as DebitLedger,acc.Description AS CreditLedger,0 as Balance FROM JournalEntries inner join AccountHeads acd on acd.Id = DebitAccountHeadId inner join AccountHeads acc on acc.Id = CreditAccountHeadId where CreditAccountId = 2 and TrxDate>='20200301' and TrxDate<='20200331' and JournalEntries.TenantId=(select TenantId from Users where userid = 2) union SELECT JournalEntries.Id,TrxDate,VNo,VType,CASE WHEN VType = 1 THEN 'Receipt' WHEN VType = 2 THEN 'Payment' WHEN VType = 3 THEN 'Contra' END AS VoucherType,0 as CreditAmount,Amount as DebitAmount, acd.Description as DebitLedger,acc.Description AS CreditLedger,0 as Balance FROM JournalEntries inner join AccountHeads acd on acd.Id = DebitAccountHeadId inner join AccountHeads acc on acc.Id = CreditAccountHeadId where DebitAccountId = 2 and TrxDate>='20200301' and TrxDate<='20200331' and JournalEntries.TenantId=(select TenantId from Users where userid = 2) order by Id";
                var value = connection.Query<Item>(sql);
                data.Details = value.ToList();
            }
            data.aboutreport = new AboutReport();
            data.aboutreport.TotalDebit= data.Details.Sum(i => i.DebitAmount);
            data.aboutreport.TotalCredit = data.Details.Sum(i => i.CreditAmount);
        
            data.aboutreport.AsDate = StartDate.Value;
            
          
            return data;
        }
        public object GetDataForExel()
        {
            using (var connection = SqlConnections.NewFor<Entities.InvoiceCollectionRow>())
            {
                int userid = 0;
                int.TryParse(Authorization.UserId, out userid);
                var sql = @"select GL,CASE WHEN SUM(DebitAmount)-SUM(CreditAmount)>0 THEN SUM(DebitAmount)-SUM(CreditAmount) ELSE 0 END AS DebitAmount,CASE WHEN SUM(DebitAmount)-SUM(CreditAmount)<=0 THEN -1*(SUM(DebitAmount)-SUM(CreditAmount)) ELSE 0 END AS CreditAmount FROM(select ah.ID as GLID,ah.Description as GL,0 as CreditAmount, sum(je.Amount) as  DebitAmount   from JournalEntries je inner join AccountHeads ah on ah.ID=je.DebitAccountHeadId  where  TrxDate<=" + StartDate.ToSqlDate() + " and je.TenantId=(select TenantId from Users where userid = " + userid + @") group by DebitAccountHeadId,ah.ID,ah.Description
union all
select ah.ID as GLID,ah.Description as GL,sum(je.Amount) as CreditAmount, 0 as DebitAmount   from JournalEntries je inner join AccountHeads ah on ah.ID = je.CreditAccountHeadId  where TrxDate <= " + StartDate.ToSqlDate() + " and je.TenantId = (select TenantId from Users where userid = " + userid + ") group by CreditAccountHeadId,ah.ID,ah.Description) A GROUP BY GLID, GL";
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
            public string GL { get; set; }
            public decimal DebitAmount { get; set; }
            public decimal CreditAmount { get; set; }

        }
        public class AboutReport
        {
            public DateTime AsDate { get; set; }
            public decimal TotalDebit { get; set; }
            public decimal TotalCredit { get; set; }
        }
        public class TrialBalanceViewtData
        {


            public List<Item> Details { get; set; }
            public AboutReport aboutreport { get; set; }

        }



    }
}


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

    [Report, RequiredPermission("Accounts:BalanceSheet")]
    [Category("Accounts/BalanceSheet"), DisplayName("Balance Sheet")]
    [ReportDesign(MVC.Views.Reports.BalanceSheet)]
    public class BalanceSheet : IReport
    {
        [HalfWidth]

        [DisplayName("From Date"), Required(false)]
        public DateTime? fromDate { get; set; }
        [HalfWidth]
        [DisplayName("To Date"),Required(true)]
        public DateTime? StartDate { get; set; }

        public object GetData()
        {
            var data = new TrialBalanceViewtData();
            using (var connection = SqlConnections.NewFor<Accounts.Entities.AccountsRow>())
            {
                int userid = 0;
                int.TryParse(Authorization.UserId, out userid);
                var fromdate = "";
                if (fromDate != null)
                {
                    fromdate = "TrxDate >= " + fromDate.ToSqlDate() + @" and ";
                }

                var sql = @"
select max(LedgerType) as LedgerType,GL,sum(Amount) as Amount 
FROM
(select max(ah.LedgerType) as LedgerType,ah.ID as GLID,ah.Description as GL, sum(je.Amount) as  Amount   from JournalEntries je
left outer join AccountHeads ah on ah.ID=je.DebitAccountHeadId  
where " + fromdate + @"  TrxDate<=" + StartDate.ToSqlDate() + @" and ah.LedgerType in(1,2,5) group by DebitAccountHeadId,ah.ID,ah.Description
union all
select max(ah.LedgerType) as LedgerType,ah.ID as GLID,ah.Description as GL,sum(je.Amount) as Amount  
from JournalEntries je left outer join AccountHeads ah on ah.ID = je.CreditAccountHeadId  
where "+fromdate+@" TrxDate <= " + StartDate.ToSqlDate() + @" and ah.LedgerType in(1,2,5)  group by CreditAccountHeadId,ah.ID,ah.Description
) A GROUP BY GLID, GL";
                var value = connection.Query<Item>(sql);
                data.Details = value.ToList();
            }
            var ass = data.Details.Where(i => i.LedgerType == 1).ToList();
            var li = data.Details.Where(i => i.LedgerType == 2).ToList();
            var cap = data.Details.Where(i => i.LedgerType == 5).ToList();
            data.aboutreport = new AboutReport();
            data.aboutreport.TotalDebit= data.Details.Sum(i => i.Amount);
            List<PL> pLS = new List<PL>();
            int count = 0;
            if (ass.Count > li.Count)
            {
                count = ass.Count;
            }
            else
            {
                count = li.Count;
            }
            for(int i = 0; i < count; i++)
            {
                PL pL = new PL();

                if (ass.Count > i)
                {
                    pL.LedgerType= ass[i].LedgerType;
                    pL.CRGL = ass[i].GL;
                    pL.CRAMOUNT = ass[i].Amount;
                }
                if (li.Count > i)
                {
                    pL.LedgerType = li[i].LedgerType;
                    pL.DRGL = li[i].GL;
                    pL.DRAMOUNT = li[i].Amount;
                }
                pLS.Add(pL);
            }
            var ind = pLS.Where(i => i.DRAMOUNT == null).FirstOrDefault();
            var index = 0;
            if (ind != null)
            {
                index = pLS.IndexOf(ind);
            }
            foreach (var k in cap)
            {
                if (index < pLS.Count)
                {
                    pLS[index].LedgerType = k.LedgerType;
                    pLS[index].DRGL = k.GL;
                    pLS[index].DRAMOUNT = k.Amount;
                }
                else
                {
                    PL pL = new PL();

                   
                   
                        pL.LedgerType = k.LedgerType;
                        pL.DRGL =k.GL;
                        pL.DRAMOUNT = k.Amount;
                    
                    pLS.Add(pL);
                }
            }
            PL pLs = new PL();
            pLs.DRGL = "Retained Earnings";
            pLs.DRAMOUNT =  (pLS.Sum(i => i.CRAMOUNT??0) - pLS.Sum(i => i.DRAMOUNT ?? 0));
            pLS.Add(pLs);
            data.pls = pLS;
            data.aboutreport.AsDate = StartDate.Value;
            if (fromDate != null)
            {
                data.aboutreport.FromDate = fromDate.Value;
            }

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
            public int LedgerType { get; set; }
            public string GL { get; set; }
            public decimal Amount { get; set; }
            

        }
        public class PL
        {
            public int LedgerType { get; set; }
            public string DRGL { get; set; }
            public Nullable<decimal> DRAMOUNT { get; set; }
            public string CRGL { get; set; }
            public Nullable<decimal> CRAMOUNT { get; set; }


        }
        public class AboutReport
        {
            public DateTime? FromDate { get; set; }
            public DateTime AsDate { get; set; }
            public decimal TotalDebit { get; set; }
            public decimal TotalCredit { get; set; }
        }
        public class TrialBalanceViewtData
        {

            public List<PL> pls { get; set; }
            public List<Item> Details { get; set; }
            public AboutReport aboutreport { get; set; }

        }



    }
}

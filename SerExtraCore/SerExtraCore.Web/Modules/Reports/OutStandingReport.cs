
namespace SerExtraCore.Transactions.Pages
{
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

    [Report, RequiredPermission("Customers:OutstandingReport")]
    [Category("Customers/OutstandingReport"), DisplayName("Outstanding Report")]
    [ReportDesign(MVC.Views.Reports.OutstandingReport)]
    public class OutStandingReport : IReport, ICustomizeHtmlToPdf
    {
        

        

        [HalfWidth]
        [DisplayName("As on Date")]
        public DateTime? EndDate { get; set; }

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
                //if (StartDate != null)
                //{
                //    if (cond == "")
                //    {
                //        cond = " where ";
                //    }
                //    else
                //    {
                //        cond = cond + " and ";
                //    }
                //    cond = cond + " InvoiceDate>="+StartDate.ToSqlDate()+"";
                   
                    
                //}
                if (EndDate != null)
                {
                    if (cond == "")
                    {
                        cond = " where ";
                    }
                    else
                    {
                        cond = cond + " and ";
                    }
                    cond = cond + " st.TrxDate<=" + EndDate.ToSqlDate() + "";
                }
                if (CustomerId > 0)
                {
                    if (cond == "")
                    {
                        cond = " where ";
                    }
                    else
                    {
                        cond = cond+" and ";
                    }
                    cond = cond + " st.CustomerId=" + CustomerId + " ";
                    data.customers = connection.ById<CustomersRow>(CustomerId);
                }
                var  sql = @"select st.CustomerId,max(c.CustomerName) as CustomerName,sum(st.TrxAmount) as TrxAmount,sum(st.Received) as ReceivedAmount,sum(isnull(st.TrxAmount,0))-sum(isnull(st.Received,0)) as Balance from V_CustomerStatement st inner join Customers c on c.Id=st.CustomerId " + cond + " group by st.CustomerId";

                //sql = "SELECT JournalEntries.Id,TrxDate,VNo,VType,CASE WHEN  VType = 1 THEN 'Receipt' WHEN VType = 2 THEN 'Payment'  WHEN VType = 3 THEN 'Contra' END AS VoucherType,Amount as CreditAmount,0 as DebitAmount, acd.Description as DebitLedger,acc.Description AS CreditLedger,0 as Balance FROM JournalEntries inner join AccountHeads acd on acd.Id = DebitAccountHeadId inner join AccountHeads acc on acc.Id = CreditAccountHeadId where CreditAccountId = 2 and TrxDate>='20200301' and TrxDate<='20200331' and JournalEntries.TenantId=(select TenantId from Users where userid = 2) union SELECT JournalEntries.Id,TrxDate,VNo,VType,CASE WHEN VType = 1 THEN 'Receipt' WHEN VType = 2 THEN 'Payment' WHEN VType = 3 THEN 'Contra' END AS VoucherType,0 as CreditAmount,Amount as DebitAmount, acd.Description as DebitLedger,acc.Description AS CreditLedger,0 as Balance FROM JournalEntries inner join AccountHeads acd on acd.Id = DebitAccountHeadId inner join AccountHeads acc on acc.Id = CreditAccountHeadId where DebitAccountId = 2 and TrxDate>='20200301' and TrxDate<='20200331' and JournalEntries.TenantId=(select TenantId from Users where userid = 2) order by Id";
                var value = connection.Query<Item>(sql);
                var slno = 0;
                
                foreach (var item in value)
                {
                    item.Slno = ++slno;
                    
                }
                data.Details = value.ToList();
                data.aboutreport.TotalAmount = data.Details.Sum(i => i.ReceivedAmount);
               
            }


            //data.aboutreport.TotalCredit = data.Details.Sum(i => i.CreditAmount);

            //data.aboutreport.FromDate = StartDate;

            data.Details = data.Details.Where(i => i.Balance != 0).ToList();


            data.aboutreport.ToDate = EndDate;
            
            return data;
        }
        public object GetDataForExel()
        {
            using (var connection = SqlConnections.NewFor<Entities.InvoiceChargesRow>())
            {
                int userid = 0;
                int.TryParse(Authorization.UserId, out userid);
                var sql = "SELECT  Date as Date,  COUNT(CASE WHEN Status = 1 and StudentId is not null THEN 1 ELSE NULL END) as AbsentStudents, COUNT(CASE WHEN Status = 2 and StudentId is not null THEN 1 ELSE NULL END) as PresentStudents,COUNT(CASE WHEN Status = 3 and StudentId is not null THEN 1 ELSE NULL END) as HolidayStudents,COUNT(CASE WHEN Status = 1 and StaffId is not null THEN 1 ELSE NULL END) as AbsentStaffs,COUNT(CASE WHEN Status = 2 and StaffId is not null THEN 1 ELSE NULL END) as PresentStaffs,COUNT(CASE WHEN Status = 3 and StaffId is not null THEN 1 ELSE NULL END) as HolidayStaffs FROM Attandance where  date <= " + EndDate.ToSqlDate() + " and TenantId=(select TenantId from Users where userid=" + userid + ") GROUP BY date";
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
            public string CustomerName { get; set; }
            public decimal TrxAmount { get; set; }
            public decimal ReceivedAmount { get; set; }
            public decimal Balance { get; set; }

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

          
            public List<Item> Details { get; set; }
            public AboutReport aboutreport { get; set; }

            public CustomersRow customers { get; set; }

        }



    }
}

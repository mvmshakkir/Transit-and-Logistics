
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
    using static MVC.Views.Accounts;

    [Report, RequiredPermission("Accounts:PartyStatement")]
    [Category("Accounts/PartyStatement"), DisplayName("Party Statement")]
    [ReportDesign(MVC.Views.Reports.PartyStatements)]
    public class PartyStatementReport : IReport, ICustomizeHtmlToPdf
    {
        [HalfWidth]
        [LookupEditor(typeof(Master.Entities.CustomersRow))]
        [DisplayName("Customer"), Required(true)]

        public Int32? Party { get; set; }
        [HalfWidth]
        [LookupEditor(typeof(Accounts.Entities.AccountHeadsRow))]
        [DisplayName("Ledger")]
        public Int32? AccountHead { get; set; }
        [HalfWidth]
        [DisplayName("From Date"),Required(true)]
        public DateTime? StartDate { get; set; }
        [HalfWidth]
        [DisplayName("To Date"), Required(true)]
        public DateTime? EndDate { get; set; }
        [DisplayName("Include Opening"),DefaultValue(true)]
        public Boolean? Openinig { get; set; }

        public object GetData()
        {
            var data = new PartyStatementViewtData();
            data.aboutreport = new AboutReport();
            using (var connection = SqlConnections.NewFor<Accounts.Entities.AccountsRow>())
            {
                string op = "";
                int userid = 0;
                int.TryParse(Authorization.UserId, out userid);
                string cond = "";
                if (AccountHead > 0)
                {
                    cond = "  and  (CreditAccountHeadId="+AccountHead+ " or DebitAccountHeadId=" + AccountHead + ") ";
                }
               
                if (Openinig??false)
                {
                    op = "select null as TrxDate,'' as VNo,'' as DebitLedger,'' as CreditLedger,isnull(sum(isnull(Debit,0)),0) as Debit,isnull(sum(isnull(Credit,0)),0) as Credit,'Opening' as Remarks from V_AccountStatement where customerId=" + Party+" and TrxDate<"+StartDate.ToSqlDate()+" " + cond+" union all ";
                }


				//var sql = op+ "select TrxDate,VNo,DebitLedger,CreditLedger,Debit,Credit,Remarks from V_AccountStatement where CustomerId=" + Party+ " and TrxDate>=" + StartDate.ToSqlDate() + " and TrxDate<=" + EndDate.ToSqlDate() + " " + cond + " order by TrxDate";
				//var sql = op + "select DISTINCT VNo, TrxDate, DebitLedger, CreditLedger, Debit, Credit, Remarks from V_AccountStatement where CustomerId=" + Party + " and TrxDate>=" + StartDate.ToSqlDate() + " and TrxDate<=" + EndDate.ToSqlDate() + " " + cond + " order by TrxDate";
				var sql = op + "SELECT TrxDate, VNo, DebitLedger, CreditLedger, Debit, Credit, Remarks FROM V_AccountStatement WHERE CustomerId=" + Party + " AND TrxDate >= " + StartDate.ToSqlDate() + " AND TrxDate <= " + EndDate.ToSqlDate() + " " + cond + " GROUP BY VNo, TrxDate, DebitLedger, CreditLedger, Debit, Credit, Remarks ORDER BY TrxDate";

				var value = connection.Query<Item>(sql);
                data.Details = value.ToList();
                data.aboutreport.TotalPayment = value.ToList().Sum(i=>i.Debit);
                data.aboutreport.TotalReceipt = value.ToList().Sum(i => i.Credit);
                var sqlparty = "select * from Customers where id="+Party+"";
                var valueparty = connection.Query<CustomersRow>(sqlparty);
                data.aboutreport.PartyName = valueparty.ToList()[0].CustomerName;
                if (AccountHead > 0)
                {
                    var sqlaccounthead = "select * from AccountHeads where id=" + AccountHead + "";
                    var valueaccount = connection.Query<Accounts.Entities.AccountHeadsRow>(sqlaccounthead);
                    data.aboutreport.Ledger = valueaccount.ToList()[0].Description;
                }
                var tbal = 0;
                foreach(var r in data.Details)
                {
                    r.Balance = tbal+( r.Debit - r.Credit);
                }
            }

            data.aboutreport.FromDate = StartDate??DateTime.Today;
            data.aboutreport.ToDate = EndDate ?? DateTime.Today;
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
            public Nullable<DateTime> TrxDate { get; set; }
            public int VNo { get; set; }
            public string DebitLedger { get; set; }
            public string CreditLedger { get; set; }
            public decimal Debit { get; set; }
            public decimal Credit { get; set; }
            public decimal Balance { get; set; }
            public string Remarks { get; set; }


        }
        public class AboutReport
        {
            public DateTime FromDate { get; set; }
            public DateTime ToDate { get; set; }
            public string PartyName { get; set; }
            public string Ledger { get; set; }
            public decimal TotalReceipt { get; set; }
            public decimal TotalPayment { get; set; }
        }
        public class PartyStatementViewtData
        {


            public List<Item> Details { get; set; }
            public AboutReport aboutreport { get; set; }

        }



    }
}

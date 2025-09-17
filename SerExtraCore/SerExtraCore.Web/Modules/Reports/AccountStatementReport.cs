
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

    [Report, RequiredPermission("Accounts:AccountStatement")]
    [Category("Accounts/AccountStatementReport"), DisplayName("Account Statement")]
    [ReportDesign(MVC.Views.Reports.AccountStatements)]
    public class AccountStatementReport : IReport, ICustomizeHtmlToPdf
    {
        [Category("Account Details")]
        [HalfWidth]
        [LookupEditor(typeof(Accounts.Entities.AccountHeadsRow))]
        [DisplayName("Ledger"), Required(true)]
        public Int32? AccountHead { get; set; }

        [HalfWidth]
        [LookupEditor(typeof(Accounts.Entities.AccountsRow),CascadeField = "AccountHeadId",CascadeFrom = "AccountHead")]
        [DisplayName("Account"), Required(false)]
        public Int32? Account { get; set; }

        [Category("Transaction Date")]

        [HalfWidth]
        [DisplayName("From Date"),Required(true)]
        public DateTime? StartDate { get; set; }

        [HalfWidth]
        [DisplayName("To Date"), Required(true)]
        public DateTime? EndDate { get; set; }
        [DisplayName("Include Opening"),DefaultValue(true)]
        public Boolean? Openinig { get; set; }

        [Category("Party Details")]
        [HalfWidth]
        [LookupEditor(typeof(Master.Entities.CustomersRow))]
        [DisplayName("Customer"), Required(false)]
        public Int32? CustomerId { get; set; }

        [HalfWidth]
        [LookupEditor(typeof(Master.Entities.EmployeeMasterRow))]
        [DisplayName("Employee"), Required(false)]
        public Int32? EmployeeId { get; set; }

        [HalfWidth]
        [LookupEditor(typeof(Master.Entities.SupplierRow))]
        [DisplayName("Supplier"), Required(false)]
        public Int32? SupplierId { get; set; }

        [HalfWidth]
        [LookupEditor(typeof(Master.Entities.VehiclesRow))]
        [DisplayName("Vehicle"), Required(false)]
        public Int32? VehicleId { get; set; }

        public object GetData()
        {
            var data = new AccountStatementViewtData();
            using (var connection = SqlConnections.NewFor<Accounts.Entities.AccountsRow>())
            {
                int userid = 0;
                int.TryParse(Authorization.UserId, out userid);
                var sql = "";
                string acccr = "";
                string accdb = "";
                var condveh = "";
                if (VehicleId > 0)
                {
                    condveh = condveh+" and  VehicleId=" + VehicleId + " ";
                }
                if (SupplierId > 0)
                {
                    condveh = condveh+ " and  JournalEntries.SupplierId=" + SupplierId + " ";
                }
                if (CustomerId > 0)
                {
                    condveh = condveh+ " and  CustomerId=" + CustomerId + " ";
                }
                if (EmployeeId > 0)
                {
                    condveh = condveh+ " and  EmployeeId=" + EmployeeId + " ";
                }
                if (Account > 0)
                {
                    acccr = " and CreditAccountId=" + Account + "";
                    accdb = " and DebitAccountId=" + Account + "";
                }
                if (Openinig ?? false)
                {
                    sql = "select null as Trd,0 as Id,'Opening' as TrxDate,0 as VNo,0 as VType,'' VoucherType,sum(case when CreditAccountHeadId=" + AccountHead+ " "+acccr+" then Amount else 0 end) as CreditAmount,sum(case when DebitAccountHeadId="+AccountHead+ " "+accdb+ " then Amount else 0 end) as DebitAmount,'' as GL,'' as Remarks,0 as Balance,'' as Party   from JournalEntries where ((DebitAccountHeadId = " + AccountHead + " "+accdb+") or (CreditAccountHeadId = " + AccountHead+" "+acccr+")) and TrxDate<"+StartDate.ToSqlDate()+ ""+ condveh+"  union all ";
                }
               
                sql =sql+ @"SELECT TrxDate as Trd,JournalEntries.Id,convert(varchar, TrxDate, 103) as TrxDate,
case when ((VType=2 or VType=1) and isnull(MoneyInOutId,0)>0) then (select VNo from MoneyInOut where id=MoneyInOutId) else VNo end as VNo,VType,
CASE
    WHEN  VType = 1 THEN 'Receipt'
     WHEN VType = 2 THEN 'Payment'

      WHEN VType = 3 THEN 'Contra'
     WHEN VType = 4 THEN 'Journal Entry'
END AS VoucherType,Amount as CreditAmount,0 as DebitAmount,'By '+ acd.Description AS GL,Remarks as Remarks,0 as Balance
,isnull(cus.CustomerName,' ')+isnull(s.SupplierName,' ')+isnull(v.VehicleNumber,' ')+isnull(e.EmployeeName,' ') as Party
FROM JournalEntries inner join AccountHeads acd on acd.Id = DebitAccountHeadId inner join AccountHeads acc on acc.Id = CreditAccountHeadId
left join Customers cus on cus.Id =CustomerId 
left join Supplier s on s.Id=SupplierId 
left join Vehicles v on v.Id=VehicleId
left join EmployeeMaster e on e.Id=EmployeeId
where CreditAccountHeadId = " + AccountHead + @" "+acccr+"  "+condveh+" and TrxDate>="+StartDate.ToSqlDate()+@" and TrxDate<=" + EndDate.ToSqlDate() + @"
union all
SELECT TrxDate as Trd,JournalEntries.Id,convert(varchar, TrxDate, 103) as TrxDate,
case when ((VType=2 or VType=1) and isnull(MoneyInOutId,0)>0) then (select VNo from MoneyInOut where id=MoneyInOutId) else VNo end as VNo,VType,
CASE
    WHEN VType = 1 THEN 'Receipt'
     WHEN VType = 2 THEN 'Payment'

      WHEN VType = 3 THEN 'Contra'
      WHEN VType = 4 THEN 'Journal Entry'
END AS VoucherType,0 as CreditAmount,Amount as DebitAmount,'To '+ acc.Description AS GL,Remarks as Remarks,0 as Balance
,isnull(cus.CustomerName,' ')+isnull(s.SupplierName,' ')+isnull(v.VehicleNumber,' ')+isnull(e.EmployeeName,' ') as Party
FROM JournalEntries inner join AccountHeads acd on acd.Id = DebitAccountHeadId inner join AccountHeads acc on acc.Id = CreditAccountHeadId
left join Customers cus on cus.Id =CustomerId 
left join Supplier s on s.Id=SupplierId 
left join Vehicles v on v.Id=VehicleId
left join EmployeeMaster e on e.Id=EmployeeId
where DebitAccountHeadId = " + AccountHead + @"" + condveh + " " + accdb+" and TrxDate>=" + StartDate.ToSqlDate() + @" and TrxDate<=" + EndDate.ToSqlDate() + @"  order by Trd";
                //sql = "SELECT JournalEntries.Id,TrxDate,VNo,VType,CASE WHEN  VType = 1 THEN 'Receipt' WHEN VType = 2 THEN 'Payment'  WHEN VType = 3 THEN 'Contra' END AS VoucherType,Amount as CreditAmount,0 as DebitAmount, acd.Description as DebitLedger,acc.Description AS CreditLedger,0 as Balance FROM JournalEntries inner join AccountHeads acd on acd.Id = DebitAccountHeadId inner join AccountHeads acc on acc.Id = CreditAccountHeadId where CreditAccountId = 2 and TrxDate>='20200301' and TrxDate<='20200331' and JournalEntries.TenantId=(select TenantId from Users where userid = 2) union SELECT JournalEntries.Id,TrxDate,VNo,VType,CASE WHEN VType = 1 THEN 'Receipt' WHEN VType = 2 THEN 'Payment' WHEN VType = 3 THEN 'Contra' END AS VoucherType,0 as CreditAmount,Amount as DebitAmount, acd.Description as DebitLedger,acc.Description AS CreditLedger,0 as Balance FROM JournalEntries inner join AccountHeads acd on acd.Id = DebitAccountHeadId inner join AccountHeads acc on acc.Id = CreditAccountHeadId where DebitAccountId = 2 and TrxDate>='20200301' and TrxDate<='20200331' and JournalEntries.TenantId=(select TenantId from Users where userid = 2) order by Id";
                var value = connection.Query<Item>(sql);
                
                decimal bal = 0;
                foreach(var item in value)
                {
                    item.Balance = bal=bal + (item.DebitAmount - item.CreditAmount);
                    if (item.CreditAmount < 0)
                    {
                        item.CreditAmount = item.CreditAmount * -1;
                    }
                }
                data.Details = value.ToList();
            }
            data.aboutreport = new AboutReport();
            data.aboutreport.TotalDebit= data.Details.Sum(i => i.DebitAmount);
            data.aboutreport.TotalCredit = data.Details.Sum(i => i.CreditAmount);
        
            data.aboutreport.FromDate = StartDate.Value;
            data.aboutreport.ToDate = EndDate.Value;
            using (var connection = SqlConnections.NewFor<Accounts.Entities.AccountsRow>())
            {
                if (Account >0)
                {
                    var q2 = "select * from Accounts where id=" + Account + "";
                    var value = connection.Query<Accounts.Entities.AccountsRow>(q2);
                    foreach (var r in value)
                    {
                        data.aboutreport.AccountNo = r.AccountNo;
                        data.aboutreport.AccountName = r.AccountName;
                    }
                }
            }
            using (var connection = SqlConnections.NewFor<Accounts.Entities.AccountsRow>())
            {
                if (AccountHead > 0)
                {
                    var q2 = "select * from AccountHeads where id=" + AccountHead + "";
                    var value = connection.Query<Accounts.Entities.AccountHeadsRow>(q2);
                    foreach (var r in value)
                    {
                        data.aboutreport.Ledger = r.Description;
                    }
                }
            }
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
            public int Id { get; set; }
            public string TrxDate { get; set; }
            public int VNo { get; set; }
            public int VType { get; set; }
            public string VoucherType { get; set; }
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
            public string AccountNo { get; set; }

            public string AccountName { get; set; }
            public string Ledger { get; set; }
            public decimal TotalDebit { get; set; }
            public string ReportType { get; set; }
            public decimal TotalCredit { get; set; }
        }
        public class AccountStatementViewtData
        {


            public List<Item> Details { get; set; }
            public AboutReport aboutreport { get; set; }

        }



    }
}

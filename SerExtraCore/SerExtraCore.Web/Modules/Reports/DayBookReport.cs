
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

    [Report, RequiredPermission("Accounts:DayBook")]
    [Category("Accounts/DayBook"), DisplayName("Day Book")]
    [ReportDesign(MVC.Views.Reports.DayBookReport)]
    public class DayBookReport : IReport, ICustomizeHtmlToPdf
    {
        
        [HalfWidth]
        [DisplayName("From Date"),Required(true)]
        public DateTime? StartDate { get; set; }

        [HalfWidth]
        [DisplayName("To Date"), Required(true)]
        public DateTime? EndDate { get; set; }

        public object GetData()
        {
            var data = new AccountStatementViewtData();
            using (var connection = SqlConnections.NewFor<Accounts.Entities.AccountsRow>())
            {
                
               
               var sql = @"select je.VType,je.Id,je.TrxDate,case when isnull(je.MoneyInOutId,0)>0 then M.VNo else je.VNo end as Vno,Je.Remarks,
isnull(cus.CustomerName,' ')+isnull(s.SupplierName,' ')+isnull(v.VehicleNumber,' ')+isnull(e.EmployeeName,' ') as Party,
case when je.VType=1 then 'Receipt' else case when je.VType=2 then 'Payment' else case when je.VType=3 then 'Contra' else case when je.VType=4  then 'Journal Entry' end end end end VoucherType,
case when je.VType=1 or je.VType=3 or je.VType=4 then je.Amount else 0 end  as DebitAmount,
case when je.VType=2 or je.VType=3 or je.VType=4 then je.Amount else 0 end as CreditAmount,
case when je.VType=1 then cah.Description else case when je.VType=2 then dah.Description else case when (je.VType=3 or je.VType=4)  then dah.Description + '/'+cah.Description end end end AccountHead,
case when je.VType=1 then dac.AccountName else case when je.VType=2 then cac.AccountName else case when (je.VType=3 or je.VType=4)  then dac.AccountName + '/'+cac.AccountName end end end Account
from JournalEntries je inner join AccountHeads acd on acd.Id = DebitAccountHeadId inner join AccountHeads acc on acc.Id = CreditAccountHeadId 
left join Customers cus on cus.Id =CustomerId 
left join Supplier s on s.Id=SupplierId 
left join Vehicles v on v.Id=VehicleId
left join EmployeeMaster e on e.Id=EmployeeId
left join AccountHeads cah on cah.ID=je.CreditAccountHeadId
left join AccountHeads dah on dah.ID=je.DebitAccountHeadId
left join Accounts cac on cac.Id=je.CreditAccountId
left join Accounts dac on dac.ID=je.DebitAccountId 
left join MoneyInOut as M on M.Id=je.MoneyInOutId
where je.TrxDate>=" + StartDate.ToSqlDate()+ " and je.TrxDate<=" + EndDate.ToSqlDate() + "";
                //sql = "SELECT JournalEntries.Id,TrxDate,VNo,VType,CASE WHEN  VType = 1 THEN 'Receipt' WHEN VType = 2 THEN 'Payment'  WHEN VType = 3 THEN 'Contra' END AS VoucherType,Amount as CreditAmount,0 as DebitAmount, acd.Description as DebitLedger,acc.Description AS CreditLedger,0 as Balance FROM JournalEntries inner join AccountHeads acd on acd.Id = DebitAccountHeadId inner join AccountHeads acc on acc.Id = CreditAccountHeadId where CreditAccountId = 2 and TrxDate>='20200301' and TrxDate<='20200331' and JournalEntries.TenantId=(select TenantId from Users where userid = 2) union SELECT JournalEntries.Id,TrxDate,VNo,VType,CASE WHEN VType = 1 THEN 'Receipt' WHEN VType = 2 THEN 'Payment' WHEN VType = 3 THEN 'Contra' END AS VoucherType,0 as CreditAmount,Amount as DebitAmount, acd.Description as DebitLedger,acc.Description AS CreditLedger,0 as Balance FROM JournalEntries inner join AccountHeads acd on acd.Id = DebitAccountHeadId inner join AccountHeads acc on acc.Id = CreditAccountHeadId where DebitAccountId = 2 and TrxDate>='20200301' and TrxDate<='20200331' and JournalEntries.TenantId=(select TenantId from Users where userid = 2) order by Id";
                var value = connection.Query<Item>(sql);
                int i= 0;
                foreach(var item in value)
                {
                  item.SlNo=++i;
                }
                data.Details = value.ToList();
                data.Details = value.OrderBy(i=>i.TrxDate).ToList();
            }
            data.aboutreport = new AboutReport();
            data.aboutreport.TotalDebit= data.Details.Sum(i => i.DebitAmount);
            data.aboutreport.TotalCredit = data.Details.Sum(i => i.CreditAmount);
        
            data.aboutreport.FromDate = StartDate.Value;
            data.aboutreport.ToDate = EndDate.Value;
           
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
            public int SlNo { get; set; }
            public int VType { get; set; }
            public int Id { get; set; }
            public DateTime TrxDate { get; set; }
            public int VNo { get; set; }
            public string Remarks { get; set; }
            public string Party { get; set; }
            public string VoucherType { get; set; }
            
            public decimal DebitAmount { get; set; }
            public decimal CreditAmount { get; set; }
            public string AccountHead { get; set; }
            
            public string Account { get; set; }
           
        }
        public class AboutReport
        {
            public DateTime FromDate { get; set; }
            public DateTime ToDate { get; set; }
         
            public decimal TotalDebit { get; set; }
           
            public decimal TotalCredit { get; set; }
        }
        public class AccountStatementViewtData
        {


            public List<Item> Details { get; set; }
            public AboutReport aboutreport { get; set; }

        }



    }
}

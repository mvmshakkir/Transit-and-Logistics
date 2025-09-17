
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

    [Report, RequiredPermission("Customers:CustomerPersonalLedger")]
    [Category("Customers/CustomerPersonalLedger"), DisplayName("Customer Personal Ledger")]
    [ReportDesign(MVC.Views.Reports.CustomerPersonalLedger)]
    public class CustomerPersonalLedger : IReport, ICustomizeHtmlToPdf
    {
        [HalfWidth]
        [LookupEditor(typeof(Master.Entities.CustomersRow))]
        [DisplayName("Customer"), Required(true)]
        public Int32? CustomerId { get; set; }

        [HalfWidth]
        [DisplayName("From Date")]
        public DateTime? StartDate { get; set; }

        [HalfWidth]
        [DisplayName("To Date")]
        public DateTime? EndDate { get; set; }
        [DisplayName("Include Opening"), DefaultValue(true)]
        public Boolean? Openinig { get; set; }
        public object GetData()
        {
            var data = new AccountStatementViewtData();
            data.aboutreport = new AboutReport();
          
            using (var connection = SqlConnections.NewFor<Accounts.Entities.AccountsRow>())
            {
                data.customers = connection.ById<CustomersRow>(CustomerId);
                int userid = 0;
                int.TryParse(Authorization.UserId, out userid);
                var sql = "";
                var cond = "";
                var condop = "";

                if (CustomerId > 0)
                {
                    if (cond == "")
                    {
                        cond = cond + " where ";
                    }
                    else
                    {
                        cond = cond + " and ";
                    }
                    if (condop == "")
                    {
                        condop = condop + " where ";
                    }
                    else
                    {
                        condop = condop + " and ";
                    }
                    condop = condop + " CustomerId=" + CustomerId + " ";
                    cond = cond + " CustomerId=" + CustomerId + " ";

                    data.customers = connection.ById<CustomersRow>(CustomerId);


                }
                if (StartDate != null)
                {
                    if (cond == "")
                    {
                        cond = cond + " where ";
                    }
                    else
                    {
                        cond = cond + " and ";
                    }
                    if (condop == "")
                    {
                        condop = condop + " where ";
                    }
                    else
                    {
                        condop = condop + " and ";
                    }
                    condop = condop + " TrxDate<" + StartDate.ToSqlDate() + @"  ";
                    cond = cond + " TrxDate >=" + StartDate.ToSqlDate() + @" ";
                }
                if (EndDate != null)
                {
                    if (cond == "")
                    {
                        cond = cond + " where ";
                    }
                    else
                    {
                        cond = cond + " and ";
                    }
                    cond = cond + " TrxDate <=" + EndDate.ToSqlDate() + @" ";
                }
                string op = "";
                int i = 1;
                if (Openinig ?? false)
                {
                    if (StartDate != null)
                    {
                        i = 0;
                        op = "SELECT 'Opening' as TrxType,0 as CustomerId,null as TrxDate,'' as TrxNo,sum(TrxAmount) as TrxAmount,sum(isnull(Received,0)) as Received,0 as PaymentType  FROM V_CustomerStatement " + condop + " union all ";
                    }
                }
                 sql = op+" select * from V_CustomerStatement " + cond + "";
 //               if (StartDate != null)
 //               {
 //                   cond = cond + " and InvoiceDate>="+StartDate.ToSqlDate()+"";
 //                   cond2= " and TrxDate>=" + StartDate.ToSqlDate() + "";
 //                   if (Openinig??false)
 //                   {
 //                       var op = "select sum(TotalAmount) as TotalAmount,sum(Received) as Received,(select Opening from Customers where Id="+CustomerId+ ") as Opening from (select Id,InvoiceDate,InvoiceNO,TotalAmount,isnull((select sum(Amount) from JournalEntries where CustomerId=" + CustomerId+" and VType=1 and TrxDate<" + EndDate.ToSqlDate() + "),0)+isnull((select sum(Amount) from PDCPaymentDetails pyd inner join Consignment c on c.Id=pyd.ConsignmentAdvanceId  where ChequeStatus = 1 and c.Date <" + StartDate.ToSqlDate() + "),0) as Received from Invoice where Billing=" + CustomerId + " and  InvoiceDate<" + StartDate.ToSqlDate() + ") as op";
 //                       var openning = connection.Query<opening>(op);
 //                       if (openning.Count() > 0)
 //                       {
 //                           data.opening = openning.ToList()[0];
 //                       }
                        
 //                   }
 //               }
 //               if (EndDate != null)
 //               {
 //                   cond = cond + " and InvoiceDate<=" + EndDate.ToSqlDate() + "";
 //                   cond2 = cond2+" and TrxDate<=" + EndDate.ToSqlDate() + "";
 //               }
 //               var sql = @" select 'Invoice' as TrxType,InvoiceDate,InvoiceNO,TotalAmount as InvoiceAmount,(select isnull(sum(Amount),0) from InvoiceCollectionDetails where InvoiceId=Invoice.Id)+isnull(AdvanceAmount,0) as Received from Invoice 
 //where Billing=" + CustomerId + " " + cond + @"
 //union all
 // select 'Receipt' as TrxType,TrxDate as InvoiceDate,CONVERT(nvarchar, VNo) InvoiceNO,Amount as InvoiceAmount,Amount as Received from JournalEntries 
 //where CustomerId=" + CustomerId + " " + cond2 + @" and EntityType is null and VType=1
 //union all
 // select 'Payment' as TrxType,TrxDate InvoiceDate,CONVERT(nvarchar, VNo) InvoiceNO,Amount as InvoiceAmount,Amount as Received from JournalEntries 
 //where CustomerId=" + CustomerId + " " + cond2 + @" and EntityType is null and VType=2";


             //   var  sql = @"select InvoiceDate,InvoiceNO,TotalAmount as InvoiceAmount,(select isnull(sum(Amount),0) from InvoiceCollectionDetails where InvoiceId=Invoice.Id) as Received from Invoice where Billing=" + CustomerId+" "+cond+"";

                //sql = "SELECT JournalEntries.Id,TrxDate,VNo,VType,CASE WHEN  VType = 1 THEN 'Receipt' WHEN VType = 2 THEN 'Payment'  WHEN VType = 3 THEN 'Contra' END AS VoucherType,Amount as CreditAmount,0 as DebitAmount, acd.Description as DebitLedger,acc.Description AS CreditLedger,0 as Balance FROM JournalEntries inner join AccountHeads acd on acd.Id = DebitAccountHeadId inner join AccountHeads acc on acc.Id = CreditAccountHeadId where CreditAccountId = 2 and TrxDate>='20200301' and TrxDate<='20200331' and JournalEntries.TenantId=(select TenantId from Users where userid = 2) union SELECT JournalEntries.Id,TrxDate,VNo,VType,CASE WHEN VType = 1 THEN 'Receipt' WHEN VType = 2 THEN 'Payment' WHEN VType = 3 THEN 'Contra' END AS VoucherType,0 as CreditAmount,Amount as DebitAmount, acd.Description as DebitLedger,acc.Description AS CreditLedger,0 as Balance FROM JournalEntries inner join AccountHeads acd on acd.Id = DebitAccountHeadId inner join AccountHeads acc on acc.Id = CreditAccountHeadId where DebitAccountId = 2 and TrxDate>='20200301' and TrxDate<='20200331' and JournalEntries.TenantId=(select TenantId from Users where userid = 2) order by Id";
                var value = connection.Query<Item>(sql);
                value = value.OrderBy(i=>i.TrxDate);
                decimal bal = 0;
                decimal total = 0;
                decimal recived = 0;
                var slno = 0;
                value = value.OrderBy(i => i.TrxDate);
                decimal totalbal = 0;
                data.Details = value.ToList();
                data.Details.RemoveAll(i => (i.TrxAmount??0) == 0 && (i.Received??0) == 0);
                int ll = 1;
                foreach (var k in data.Details)
                {
                    k.Slno = ll;
                    ll++;
                    totalbal = totalbal + ((k.TrxAmount??0) - (k.Received??0));
                    k.TotalBalance = totalbal;
                    switch (k.PaymentType)
                    {
                        case 0:
                            k.Payment_Type = "";
                            break;
                        case 1:
                            k.Payment_Type = "Cash";
                            break;
                        case 2:
                            k.Payment_Type = "Bank";
                            break;
                        case 3:
                            k.Payment_Type = "Cheque";
                            break;
                        default:
                            k.Payment_Type = "";
                            break;
                    }


                }
              
                data.aboutreport.TotalReceived = data.Details.Sum(i => i.Received??0) + recived;
               
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

            options.Landscape = false;

        }
        [BasedOnRow(typeof(Transactions.Entities.InvoiceCollectionRow))]
        public class Item
        {
            public int Slno { get; set; }
            public string TrxType { get; set; }
            public int CustomerId { get; set; }
            
            public Nullable<DateTime> TrxDate { get; set; }
            public string TrxNo { get; set; }
            public Nullable<decimal> TrxAmount { get; set; }
            public Nullable<decimal> Received { get; set; }
            public int PaymentType { get; set; }
            public string Payment_Type { get; set; }
            public Nullable<decimal> TotalBalance { get; set; }

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

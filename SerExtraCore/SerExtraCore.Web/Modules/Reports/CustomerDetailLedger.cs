
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

    [Report, RequiredPermission("Customers:CustomerDetailLedger")]
    [Category("Customers/CustomerDetailLedger"), DisplayName("Customer Detail Ledger")]
    [ReportDesign(MVC.Views.Reports.CustomerDetailLedger)]
    public class CustomerDetailLedger : IReport, ICustomizeHtmlToPdf
    {
        [HalfWidth]
        [LookupEditor(typeof(Master.Entities.CustomersRow))]
        [DisplayName("Customer"), Required(true)]
        public Int32? CustomerId { get; set; }

        [HalfWidth]
        [DisplayName("From Date"), Required(true)]
        public DateTime? StartDate { get; set; }

        [HalfWidth]
        [DisplayName("To Date"), Required(true)]
        public DateTime? EndDate { get; set; }
       
        public object GetData()
        {
            var data = new AccountStatementViewtData();
            data.aboutreport = new AboutReport();
          
            using (var connection = SqlConnections.NewFor<Accounts.Entities.AccountsRow>())
            {
                var sql = @"select I.Id,I.ConsignmentId,InvoiceDate,I.JobNo,I.InvoiceNO,I.TotalAmount as Amount,I.Billing as CustomerId,C.CustomerName 
                            from Invoice as I
                            inner join Customers as C on C.Id=I.Billing
                            where I.Billing=" + CustomerId + " and InvoiceDate >=" + StartDate.ToSqlDate() + " and InvoiceDate<=" + EndDate.ToSqlDate()+"";
                var valueInv = connection.Query<InvoicesList>(sql);
                data.InvoicesList = valueInv.ToList();
                if (valueInv.Count() > 0)
                {
                    var sqlcollection = @"select VNo,Amount,TrxDate,CustomerId,JE.Remarks,C.CustomerName,I.Id as InvoiceId 
                                        from JournalEntries as JE
                                        inner join Customers as C on C.Id=JE.CustomerId
                                        inner join Invoice as I on I.ConsignmentId=JE.ConsignmentAdvanceConsignmentId
                                        where JE.CustomerId="+CustomerId+@"
                                        union all
                                        select VNo,ICD.Amount,TrxDate,CustomerId,JE.Remarks,C.CustomerName,ICD.InvoiceId
                                        from JournalEntries as JE
                                        inner join Customers as C on C.Id=JE.CustomerId
                                        inner join InvoiceCollectionDetails as ICD on ICD.InvoiceCollectionId=JE.InvoiceCollectionId
                                        where JE.CustomerId="+CustomerId+@"
                                        union all
                                        select JE.VNo,M.TotalAmount as Amount,JE.TrxDate,JE.CustomerId,case when JE.Remarks is null then 'customer payment' else JE.Remarks end as Remarks,
                                        C.CustomerName,I.Id as InvoiceId
                                        from JournalEntries as JE
                                        inner join Customers as C on C.Id=JE.CustomerId
                                        inner join MoneyInOut as M on M.Id=JE.MoneyInOutId
                                        inner join Invoice as I on I.ConsignmentId=JE.ConsignmentId
                                        where JE.CustomerId="+CustomerId+@" and JE.ConsignmentId>0  ";
                    var valueCollection = connection.Query<CollectionList>(sqlcollection);

                    
                    foreach (var item in data.InvoicesList)
                    {
                        var collection = valueCollection.Where(x => x.InvoiceId == item.Id).ToList();
                        item.CollectionList = collection.ToList();
                        item.Total = collection.Where(x => x.Remarks != "customer payment").Sum(x => x.Amount);
                        var p = collection.Where(x => x.Remarks == "customer payment").Sum(x => x.Amount);
                        item.Balance = item.Amount - item.Total + p;
                    }
                }

            }
           
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
                var value = connection.Query<InvoicesList>(sql);

                return sql;
            }
        }
        public List<ReportColumn> GetColumnList()
        {
            var data = ReportColumnConverter.ObjectTypeToList(typeof(InvoicesList));
            return data;
        }
        public void Customize(IHtmlToPdfOptions options)
        {
            options.Landscape = true;
        }

        [BasedOnRow(typeof(Transactions.Entities.InvoiceCollectionRow))]
       
        public class AboutReport
        {
            public Nullable<DateTime> FromDate { get; set; }
            public Nullable<DateTime> ToDate { get; set; }
            public string CustomerName { get; set; }
        }
        public class AccountStatementViewtData
        {
            public AboutReport aboutreport { get; set; }
            public List<InvoicesList> InvoicesList { get; set; }
        }
        public class InvoicesList
        {
            public int Id { get; set; }
            public int ConsignmentId { get; set; }
            public DateTime InvoiceDate { get; set; }
            public int VNo { get; set; }
            public string JobNo { get; set; }
            public string InvoiceNO { get; set; }
            public decimal Amount { get; set; }
            public int CustomerId { get; set; }
            public string CustomerName { get; set; }
            public decimal Total { get; set; }
            public decimal Balance { get; set; }
            public List<CollectionList> CollectionList { get; set; }
        }

        public class CollectionList
        {
            public int VNo { get; set; }
            public decimal Amount { get; set; }
            public DateTime TrxDate { get; set; }
            public int CustomerId { get; set; }
            public string Remarks { get; set; }
            public string CustomerName { get; set; }
            public int InvoiceId { get; set; }
        }


    }
}

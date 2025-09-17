
namespace SerExtraCore.Transactions.Pages
{
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

    [Report, RequiredPermission("SupplierReport:SupplierPersonalLedger")]
    [Category("SupplierReport/SupplierPersonalLedger"), DisplayName("Supplier Personal Ledger")]
    [ReportDesign(MVC.Views.Reports.SupplierPersonalLedger)]
    public class SupplierPersonalLedger : IReport, ICustomizeHtmlToPdf
    {
        [HalfWidth]
        [LookupEditor(typeof(Master.Entities.SupplierRow))]
        [DisplayName("Supplier"), Required(true)]
        public Int32? SupplierId { get; set; }

        [HalfWidth]
        [DisplayName("From Date"),Required(true)]
        public DateTime? StartDate { get; set; }

        [HalfWidth]
        [DisplayName("To Date"),Required(true)]
        public DateTime? EndDate { get; set; }
        [DisplayName("Include Opening"), DefaultValue(true)]
        public Boolean? Openinig { get; set; }
        public object GetData()
        {
            var data = new AccountStatementViewtData();
            using (var connection = SqlConnections.NewFor<Accounts.Entities.AccountsRow>())
            {
                int userid = 0;
                int.TryParse(Authorization.UserId, out userid);
                var sql = "";
                var cond = "";
                var condop = "";



                if (SupplierId > 0)
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
                    condop = condop + " SupplierId=" + SupplierId + " ";
                    cond = cond + " SupplierId=" + SupplierId + " ";

                    data.supplierRow = connection.ById<SupplierRow>(SupplierId);


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
                        op = "SELECT NULL as ConsignmentDate,'' as ConsignmentJobNo,0 as Id,0 as SuuplierId,'Opening' as TrxType,null as TrxDate,'' TrxNo,'' WayBillNo,'' Description,'' as InvoiceNo,sum(TrxAmount) as TrxAmount,sum(isnull(Payment,0)) as Payment,0 as PaymentType  FROM V_SupplierStatement " + condop + " union all ";
                    }
                }
                sql = op + @"SELECT * FROM V_SupplierStatement " + cond + "";
                var value = connection.Query<Item>(sql);
                
                value = value.OrderBy(i => i.TrxDate).ThenByDescending(i => i.Id);
                decimal totalbal = 0;
                data.Details = value.ToList();
                data.Details.RemoveAll(i => i.TrxAmount == 0 && i.Payment == 0);
                int ll = 1;
                foreach (var k in data.Details)
                {
                    k.Slno = ll;
                    ll++;
                    totalbal = totalbal + (k.TrxAmount-k.Payment);
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
                


            }
            data.aboutreport = new AboutReport();
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

            options.Landscape = true;

        }
        [BasedOnRow(typeof(Transactions.Entities.InvoiceCollectionRow))]
        public class Item
        {
            public int Slno { get; set; }
            public Nullable<DateTime>  ConsignmentDate { get; set; }
            public string ConsignmentJobNo { get; set; }
            public int Id { get; set; }
            public int SupplierId { get; set; }
            public string TrxType { get; set; }
            public Nullable<DateTime> TrxDate { get; set; }
            public string TrxNo { get; set; }
            public string WayBillNo { get; set; }
            public string Description { get; set; }
            public string InvoiceNO { get; set; }
            public decimal TrxAmount { get; set; }
            public decimal Payment { get; set; }
            public int PaymentType { get; set; }
            public string Payment_Type { get; set; }
            public decimal TotalBalance { get; set; }

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
            public SupplierRow supplierRow { get; set; }
          

        }



    }
}

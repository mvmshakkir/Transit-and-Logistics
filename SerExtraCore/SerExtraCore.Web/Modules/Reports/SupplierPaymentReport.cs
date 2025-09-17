
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

    //[Report, RequiredPermission("SupplierReport:SupplierReport")]
    //[Category("SupplierReport/SupplierPaymentReport"), DisplayName("Supplier Payment Report")]
    //[ReportDesign(MVC.Views.Reports.SupplierPaymentReport)]
    public class SupplierPaymentReport : IReport, ICustomizeHtmlToPdf
    {

        [HalfWidth]
        [LookupEditor(typeof(Master.Entities.SupplierRow))]
        [DisplayName("Supplier")]

        public Int32? SupplierId { get; set; }
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
                    condop= condop+ " SupplierId=" + SupplierId + " ";
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
                    condop = condop + " ConsignmentDate<" + StartDate.ToSqlDate() + @"  ";
                    cond = cond + " ConsignmentDate >=" + StartDate.ToSqlDate() + @" ";
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
                    cond = cond + " ConsignmentDate <=" + EndDate.ToSqlDate() + @" ";
                }
                string op = "";
                int i = 1;
                if (Openinig??false)
                {
                    if (StartDate != null)
                    {
                        i = 0;
                        op = "SELECT 0 as Id,0 as SuuplierId,'Opening' as TrxType,null as ConsignmentDate,'' WayBillNo,'' LoadingLoc,'' OffLoadingLoc,sum(TrxAmount) as TrxAmount,sum(isnull(Advance,0)) as Advance,sum(isnull(PaidAmount,0)) as PaidAmount,sum(TrxAmount) -sum(isnull(Advance,0)) -sum(isnull(PaidAmount,0)) as Balance  FROM V_SupplierPayment " + condop + " union all ";
                    }
                }
                sql = op+ @"SELECT * FROM V_SupplierPayment " + cond + "";
                var value = connection.Query<Item>(sql);
                value = value.OrderBy(i => i.ConsignmentDate).ThenByDescending(i => i.Id);
                decimal totalbal = 0;
                foreach (var k in value)
                {
                    k.slno = i++;
                    totalbal = totalbal + k.Balance??0;
                    k.TotalBalance = totalbal;

                }
                data.Details = value.ToList();


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

            options.Landscape = true;

        }
        [BasedOnRow(typeof(Transactions.Entities.InvoiceCollectionRow))]
        public class Item
        {
            public int slno { get; set; }
            public int Id { get; set; }
            public int SupplierId { get; set; }
            public string TrxType { get; set; }
            public Nullable<DateTime> ConsignmentDate { get; set; }
            public string WayBillNo { get; set; }
            public string LoadingLoc { get; set; }
            public string OffLoadingLoc { get; set; }
            public Nullable<Decimal> TrxAmount { get; set; }
            public Nullable<Decimal> Advance { get; set; }
            public Nullable<Decimal> PaidAmount { get; set; }
            public Nullable<Decimal> Balance { get; set; }
            public Nullable<Decimal> TotalBalance { get; set; }


        }
        
        public class AboutReport
        {
            public Nullable<DateTime> FromDate { get; set; }
            public Nullable<DateTime> ToDate { get; set; }
           
        }
        public class AccountStatementViewtData
        {


            public List<Item> Details { get; set; }
          
            public AboutReport aboutreport { get; set; }

            public SupplierRow supplierRow { get; set; }
           

        }



    }
}

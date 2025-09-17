
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

    [Report, RequiredPermission("SupplierReport:SupplierReport")]
    [Category("SupplierReport/SupplierReport"), DisplayName("Supplier Outstanding Report")]
    [ReportDesign(MVC.Views.Reports.SupplierReport)]
    public class SupplierReport : IReport, ICustomizeHtmlToPdf
    {
        [HalfWidth]
        [DisplayName("As on Date")]
        public DateTime? EndDate { get; set; }

        [HalfWidth]
        [LookupEditor(typeof(Master.Entities.SupplierRow))]
        [DisplayName("Supplier")]

        public Int32? SupplierId { get; set; }




        public object GetData()
        {
            var data = new AccountStatementViewtData();
            using (var connection = SqlConnections.NewFor<Accounts.Entities.AccountsRow>())
            {
                int userid = 0;
                int.TryParse(Authorization.UserId, out userid);
                var sql = "";
                var cond = "";
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
                if (SupplierId > 0)
                {
                    if (cond == "")
                    {
                        cond = " where ";
                    }
                    else
                    {
                        cond = cond + " and ";
                    }
                    cond = cond+ " st.SupplierId=" +SupplierId+"";
                }


                sql = @"select st.SupplierId,max(s.SupplierName) as SupplierName,sum(st.TrxAmount) as TrxAmount,sum(st.Payment) as PaidAmount,sum(isnull(st.TrxAmount,0))-sum(isnull(st.Payment,0)) as Balance from V_SupplierStatement st inner join Supplier s on s.Id=st.SupplierId "+ cond+" group by st.SupplierId";
                var value = connection.Query<Item>(sql);
                int i = 1;
                foreach (var k in value)
                {
                    k.slno = i++;
                }
                data.Details = value.Where(i=>i.Balance!=0).ToList();
                data.aboutreport = new AboutReport();
                data.aboutreport.ToDate = EndDate;
                return data;
            }
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

            options.Landscape = false;

        }
        [BasedOnRow(typeof(Transactions.Entities.InvoiceCollectionRow))]
        public class Item
        {
            public int slno { get; set; }
            public int SupplierId { get; set; }
            public string SupplierName { get; set; }
            public decimal TrxAmount { get; set; }
            public decimal PaidAmount { get; set; }
            public decimal Balance { get; set; }


        }
        public class ItemSupplier
        {

            public int Id { get; set; }
            public string InvoiceNO { get; set; }
            public Nullable<DateTime> InvoiceDate { get; set; }
            public Nullable<Decimal> Amount { get; set; }
            public Nullable<DateTime> ConsignmentDate { get; set; }
            public string WayBillNo { get; set; }
            public string ShippingAreaFrom { get; set; }
            public string ShippingAreaTo { get; set; }
            public string ConsignmentJobNo { get; set; }
            public Nullable<Decimal> Advance { get; set; }
            public Nullable<int> PaymentId { get; set; }
            public Nullable<DateTime> PaymentDate { get; set; }
            public string PaymentCode { get; set; }
            public Nullable<Decimal> PaidAmount { get; set; }

            public Nullable<Decimal> Balance { get; set; }
            public string Description { get; set; }
        }
        public class AboutReport
        {
            public Nullable<DateTime> FromDate { get; set; }
            public Nullable<DateTime> ToDate { get; set; }
           
        }
        public class AccountStatementViewtData
        {


            public List<Item> Details { get; set; }
            public List<ItemSupplier> SupplierDetails { get; set; }
            public AboutReport aboutreport { get; set; }

            public SupplierRow supplierRow { get; set; }
            public Nullable<int> supplierid { get; set; }

        }



    }
}

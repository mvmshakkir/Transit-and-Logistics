
namespace SerExtraCore.Transactions.Entities
{
    using SerExtraCore.Master.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Transactions"), TableName("[dbo].[PurchaseDetails]")]
    [DisplayName("Purchase Details"), InstanceName("Purchase Details")]
    [ReadPermission("Transactions:Purchase")]
    [ModifyPermission("Transactions:Purchase")]
    public sealed class PurchaseDetailsRow : Row, IIdRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Purchase"), NotNull, ForeignKey("[dbo].[Purchase]", "Id"), LeftJoin("jPurchase"), TextualField("PurchaseRefNo")]
        public Int32? PurchaseId
        {
            get { return Fields.PurchaseId[this]; }
            set { Fields.PurchaseId[this] = value; }
        }

        [DisplayName("Product"), NotNull, ForeignKey("[dbo].[Products]", "Id"), LeftJoin("jProduct"), TextualField("ProductProductCode")]
        [LookupEditor(typeof(ProductsRow), InplaceAdd = true)]
        public Int32? ProductId
        {
            get { return Fields.ProductId[this]; }
            set { Fields.ProductId[this] = value; }
        }

        [DisplayName("Unit Price"), Size(18), Scale(3), NotNull]
        public Decimal? UnitPrice
        {
            get { return Fields.UnitPrice[this]; }
            set { Fields.UnitPrice[this] = value; }
        }

        [DisplayName("Quantity"), Size(18), Scale(3), NotNull,DefaultValue(1)]
        public Decimal? Quantity
        {
            get { return Fields.Quantity[this]; }
            set { Fields.Quantity[this] = value; }
        }

        [DisplayName("Total Amount"), Size(18), Scale(3), NotNull, ReadOnly(true)]
        public Decimal? TotalAmount
        {
            get { return Fields.TotalAmount[this]; }
            set { Fields.TotalAmount[this] = value; }
        }

        [DisplayName("Dis Per"), Size(18), Scale(3), NotNull,DefaultValue(0)]
        public Decimal? DisPer
        {
            get { return Fields.DisPer[this]; }
            set { Fields.DisPer[this] = value; }
        }

        [DisplayName("Dis Amount"), Size(18), Scale(3), NotNull, ReadOnly(true),DefaultValue(0)]
        public Decimal? DisAmount
        {
            get { return Fields.DisAmount[this]; }
            set { Fields.DisAmount[this] = value; }
        }

        [DisplayName("Taxable Amount"), Size(18), Scale(3), NotNull,ReadOnly(true)]
        public Decimal? TaxableAmount
        {
            get { return Fields.TaxableAmount[this]; }
            set { Fields.TaxableAmount[this] = value; }
        }

        [DisplayName("Tax Per"), Size(18), Scale(3), NotNull,DefaultValue(0)]
        public Decimal? TaxPer
        {
            get { return Fields.TaxPer[this]; }
            set { Fields.TaxPer[this] = value; }
        }

        [DisplayName("Tax Amount"), Size(18), Scale(3), NotNull,ReadOnly(true),DefaultValue(0)]
        public Decimal? TaxAmount
        {
            get { return Fields.TaxAmount[this]; }
            set { Fields.TaxAmount[this] = value; }
        }

        [DisplayName("Line Total"), Size(18), Scale(3), NotNull,ReadOnly(true)]
        public Decimal? LineTotal
        {
            get { return Fields.LineTotal[this]; }
            set { Fields.LineTotal[this] = value; }
        }

        [DisplayName("Purchase Trx Date"), Expression("jPurchase.[TrxDate]")]
        public DateTime? PurchaseTrxDate
        {
            get { return Fields.PurchaseTrxDate[this]; }
            set { Fields.PurchaseTrxDate[this] = value; }
        }

        [DisplayName("Purchase Ref No"), Expression("jPurchase.[RefNo]")]
        public String PurchaseRefNo
        {
            get { return Fields.PurchaseRefNo[this]; }
            set { Fields.PurchaseRefNo[this] = value; }
        }

        [DisplayName("Purchase Total Amount"), Expression("jPurchase.[TotalAmount]")]
        public Decimal? PurchaseTotalAmount
        {
            get { return Fields.PurchaseTotalAmount[this]; }
            set { Fields.PurchaseTotalAmount[this] = value; }
        }

        [DisplayName("Product Code"), Expression("jProduct.[ProductCode]"),MinSelectLevel(SelectLevel.List)]
        public String ProductProductCode
        {
            get { return Fields.ProductProductCode[this]; }
            set { Fields.ProductProductCode[this] = value; }
        }

        [DisplayName("Product Name"), Expression("jProduct.[ProductName]"), MinSelectLevel(SelectLevel.List)]
        public String ProductProductName
        {
            get { return Fields.ProductProductName[this]; }
            set { Fields.ProductProductName[this] = value; }
        }

        [DisplayName("Product Unit Price"), Expression("jProduct.[UnitPrice]")]
        public Decimal? ProductUnitPrice
        {
            get { return Fields.ProductUnitPrice[this]; }
            set { Fields.ProductUnitPrice[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PurchaseDetailsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field PurchaseId;
            public Int32Field ProductId;
            public DecimalField UnitPrice;
            public DecimalField Quantity;
            public DecimalField TotalAmount;
            public DecimalField DisPer;
            public DecimalField DisAmount;
            public DecimalField TaxableAmount;
            public DecimalField TaxPer;
            public DecimalField TaxAmount;
            public DecimalField LineTotal;

            public DateTimeField PurchaseTrxDate;
            public StringField PurchaseRefNo;
            public DecimalField PurchaseTotalAmount;

            public StringField ProductProductCode;
            public StringField ProductProductName;
            public DecimalField ProductUnitPrice;
        }
    }
}

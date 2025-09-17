
namespace SerExtraCore.Transactions.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Transactions"), TableName("[dbo].[SuppliersPaymentInvoiceCharges]")]
    [DisplayName("Suppliers Payment Invoice Charges"), InstanceName("Suppliers Payment Invoice Charges")]
    [ReadPermission("Transactions:SuppliersPayment")]
    [ModifyPermission("Transactions:SuppliersPayment")]
    [LookupScript(Permission = "*", Expiration = -1)]
    public sealed class SuppliersPaymentInvoiceChargesRow : Row, IIdRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Suppliers Payment"), NotNull, ForeignKey("[dbo].[SuppliersPayment]", "Id"), LeftJoin("jSuppliersPayment"), TextualField("SuppliersPaymentCode")]
        public Int32? SuppliersPaymentId
        {
            get { return Fields.SuppliersPaymentId[this]; }
            set { Fields.SuppliersPaymentId[this] = value; }
        }

        //[LookupEditor(typeof(InvoiceChargesRow), Multiple = true, InplaceAdd = true, CascadeField = "SupplierId", CascadeFrom = "SupplierId"), NotMapped]
        [DisplayName("Invoice Charges"), NotNull, ForeignKey("[dbo].[InvoiceCharges]", "Id"), LeftJoin("jInvoiceCharges"), TextualField("InvoiceChargesDescription"),LookupInclude]
        [LookupEditor(typeof(InvoiceChargesRow), InplaceAdd = true)]
        public Int32? InvoiceChargesId
        {
            get { return Fields.InvoiceChargesId[this]; }
            set { Fields.InvoiceChargesId[this] = value; }
        }

        [DisplayName("Amount"), LookupInclude]
        public Decimal? Amount
        {
            get { return Fields.Amount[this]; }
            set { Fields.Amount[this] = value; }
        }

        [DisplayName("Suppliers Payment Code"), Expression("jSuppliersPayment.[Code]")]
        public String SuppliersPaymentCode
        {
            get { return Fields.SuppliersPaymentCode[this]; }
            set { Fields.SuppliersPaymentCode[this] = value; }
        }

        [DisplayName("Suppliers Payment Date"), Expression("jSuppliersPayment.[Date]")]
        public DateTime? SuppliersPaymentDate
        {
            get { return Fields.SuppliersPaymentDate[this]; }
            set { Fields.SuppliersPaymentDate[this] = value; }
        }

        [DisplayName("Suppliers Payment Supplier Id"), Expression("jSuppliersPayment.[SupplierId]")]
        public Int32? SuppliersPaymentSupplierId
        {
            get { return Fields.SuppliersPaymentSupplierId[this]; }
            set { Fields.SuppliersPaymentSupplierId[this] = value; }
        }

        [DisplayName("Suppliers Payment Total Amount"), Expression("jSuppliersPayment.[TotalAmount]")]
        public Decimal? SuppliersPaymentTotalAmount
        {
            get { return Fields.SuppliersPaymentTotalAmount[this]; }
            set { Fields.SuppliersPaymentTotalAmount[this] = value; }
        }

        [DisplayName("Suppliers Payment Payment Type"), Expression("jSuppliersPayment.[PaymentType]")]
        public Int32? SuppliersPaymentPaymentType
        {
            get { return Fields.SuppliersPaymentPaymentType[this]; }
            set { Fields.SuppliersPaymentPaymentType[this] = value; }
        }

        [DisplayName("Suppliers Payment Account Id"), Expression("jSuppliersPayment.[AccountId]")]
        public Int32? SuppliersPaymentAccountId
        {
            get { return Fields.SuppliersPaymentAccountId[this]; }
            set { Fields.SuppliersPaymentAccountId[this] = value; }
        }

        [DisplayName("Suppliers Payment Status"), Expression("jSuppliersPayment.[Status]")]
        public Int32? SuppliersPaymentStatus
        {
            get { return Fields.SuppliersPaymentStatus[this]; }
            set { Fields.SuppliersPaymentStatus[this] = value; }
        }

        [DisplayName("Suppliers Payment Status User"), Expression("jSuppliersPayment.[StatusUser]")]
        public Int32? SuppliersPaymentStatusUser
        {
            get { return Fields.SuppliersPaymentStatusUser[this]; }
            set { Fields.SuppliersPaymentStatusUser[this] = value; }
        }

        [DisplayName("Suppliers Payment Old Balance"), Expression("jSuppliersPayment.[OldBalance]")]
        public Decimal? SuppliersPaymentOldBalance
        {
            get { return Fields.SuppliersPaymentOldBalance[this]; }
            set { Fields.SuppliersPaymentOldBalance[this] = value; }
        }

        [DisplayName("Suppliers Payment Document No"), Expression("jSuppliersPayment.[DocumentNO]")]
        public String SuppliersPaymentDocumentNo
        {
            get { return Fields.SuppliersPaymentDocumentNo[this]; }
            set { Fields.SuppliersPaymentDocumentNo[this] = value; }
        }

        [DisplayName("Suppliers Payment Description"), Expression("jSuppliersPayment.[Description]")]
        public String SuppliersPaymentDescription
        {
            get { return Fields.SuppliersPaymentDescription[this]; }
            set { Fields.SuppliersPaymentDescription[this] = value; }
        }

        [DisplayName("Invoice Charges Invoice Id"), Expression("jInvoiceCharges.[InvoiceId]")]
        public Int32? InvoiceChargesInvoiceId
        {
            get { return Fields.InvoiceChargesInvoiceId[this]; }
            set { Fields.InvoiceChargesInvoiceId[this] = value; }
        }

        [DisplayName("Invoice Charges Charge Id"), Expression("jInvoiceCharges.[ChargeId]")]
        public Int32? InvoiceChargesChargeId
        {
            get { return Fields.InvoiceChargesChargeId[this]; }
            set { Fields.InvoiceChargesChargeId[this] = value; }
        }

        [DisplayName("Invoice Charges Description"), Expression("jInvoiceCharges.[Description]")]
        public String InvoiceChargesDescription
        {
            get { return Fields.InvoiceChargesDescription[this]; }
            set { Fields.InvoiceChargesDescription[this] = value; }
        }

        [DisplayName("Invoice Charges Amount"), Expression("jInvoiceCharges.[Amount]")]
        public Decimal? InvoiceChargesAmount
        {
            get { return Fields.InvoiceChargesAmount[this]; }
            set { Fields.InvoiceChargesAmount[this] = value; }
        }

        [DisplayName("Invoice Charges Qty"), Expression("jInvoiceCharges.[Qty]")]
        public Decimal? InvoiceChargesQty
        {
            get { return Fields.InvoiceChargesQty[this]; }
            set { Fields.InvoiceChargesQty[this] = value; }
        }

        [DisplayName("Invoice Charges Total Amount"), Expression("jInvoiceCharges.[TotalAmount]")]
        public Decimal? InvoiceChargesTotalAmount
        {
            get { return Fields.InvoiceChargesTotalAmount[this]; }
            set { Fields.InvoiceChargesTotalAmount[this] = value; }
        }

        [DisplayName("Invoice Charges Currency Id"), Expression("jInvoiceCharges.[CurrencyId]")]
        public Int32? InvoiceChargesCurrencyId
        {
            get { return Fields.InvoiceChargesCurrencyId[this]; }
            set { Fields.InvoiceChargesCurrencyId[this] = value; }
        }

        [DisplayName("Invoice Charges Exchange Rate"), Expression("jInvoiceCharges.[ExchangeRate]")]
        public Decimal? InvoiceChargesExchangeRate
        {
            get { return Fields.InvoiceChargesExchangeRate[this]; }
            set { Fields.InvoiceChargesExchangeRate[this] = value; }
        }

        [DisplayName("Invoice Charges Total Amount In Local Currency"), Expression("jInvoiceCharges.[TotalAmountInLocalCurrency]")]
        public Decimal? InvoiceChargesTotalAmountInLocalCurrency
        {
            get { return Fields.InvoiceChargesTotalAmountInLocalCurrency[this]; }
            set { Fields.InvoiceChargesTotalAmountInLocalCurrency[this] = value; }
        }

        [DisplayName("Invoice Charges Date"), Expression("jInvoiceCharges.[Date]")]
        public DateTime? InvoiceChargesDate
        {
            get { return Fields.InvoiceChargesDate[this]; }
            set { Fields.InvoiceChargesDate[this] = value; }
        }

        [DisplayName("Invoice Charges Invoice Vehicle Detail Id"), Expression("jInvoiceCharges.[InvoiceVehicleDetailId]")]
        public Int32? InvoiceChargesInvoiceVehicleDetailId
        {
            get { return Fields.InvoiceChargesInvoiceVehicleDetailId[this]; }
            set { Fields.InvoiceChargesInvoiceVehicleDetailId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SuppliersPaymentInvoiceChargesRow()
            : base(Fields)
        {
        }

        [DisplayName("Invoice Charges"), NotMapped]
        public String InvoiceChargeFullName
        {
            get { return Fields.InvoiceChargeFullName[this]; }
            set { Fields.InvoiceChargeFullName[this] = value; }
        }
        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field SuppliersPaymentId;
            public Int32Field InvoiceChargesId;
            public StringField InvoiceChargeFullName;

            public DecimalField Amount;

            public StringField SuppliersPaymentCode;
            public DateTimeField SuppliersPaymentDate;
            public Int32Field SuppliersPaymentSupplierId;
            public DecimalField SuppliersPaymentTotalAmount;
            public Int32Field SuppliersPaymentPaymentType;
            public Int32Field SuppliersPaymentAccountId;
            public Int32Field SuppliersPaymentStatus;
            public Int32Field SuppliersPaymentStatusUser;
            public DecimalField SuppliersPaymentOldBalance;
            public StringField SuppliersPaymentDocumentNo;
            public StringField SuppliersPaymentDescription;

            public Int32Field InvoiceChargesInvoiceId;
            public Int32Field InvoiceChargesChargeId;
            public StringField InvoiceChargesDescription;
            public DecimalField InvoiceChargesAmount;
            public DecimalField InvoiceChargesQty;
            public DecimalField InvoiceChargesTotalAmount;
            public Int32Field InvoiceChargesCurrencyId;
            public DecimalField InvoiceChargesExchangeRate;
            public DecimalField InvoiceChargesTotalAmountInLocalCurrency;
            public DateTimeField InvoiceChargesDate;
            public Int32Field InvoiceChargesInvoiceVehicleDetailId;
        }
    }
}

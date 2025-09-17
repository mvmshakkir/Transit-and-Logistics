
namespace SerExtraCore.Transactions.Entities
{
    using SerExtraCore.Accounts.Entities;
    using SerExtraCore.Master.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Transactions"), TableName("[dbo].[InvoiceCharges]")]
    [DisplayName("Material Details"), InstanceName("Material Details")]
    [ReadPermission("Transactions:Invoice")]
    [ModifyPermission("Transactions:Invoice")]
    [LookupScript(Permission ="*", Expiration = -1)]
    public sealed class InvoiceChargesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }


        [DisplayName ("ConsignmentId"),NotMapped]
        public Int32? ConsignmentId
        {
            get
            {
                return Fields.ConsignmentId[this];
            }

            set { Fields.ConsignmentId[this] = value; }
        }




        [DisplayName("Invoice"), ForeignKey("[dbo].[Invoice]", "Id"), LeftJoin("jInvoice"), TextualField("InvoiceInvoiceNo")]
        public Int32? InvoiceId
        {
            get { return Fields.InvoiceId[this]; }
            set { Fields.InvoiceId[this] = value; }
        }

        [DisplayName("Charge"), ForeignKey("[dbo].[Charges]", "Id"), LeftJoin("jCharge"), TextualField("ChargeChargeName")]
        [LookupEditor(typeof(ChargesRow), InplaceAdd = true)]
        public Int32? ChargeId
        {
            get { return Fields.ChargeId[this]; }
            set { Fields.ChargeId[this] = value; }
        }

        [DisplayName("Description"), Size(500), QuickSearch,TextAreaEditor]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Rate"), Size(18), Scale(3)]
        public Decimal? Amount
        {
            get { return Fields.Amount[this]; }
            set { Fields.Amount[this] = value; }
        }

        [DisplayName("Qty"), Size(18), Scale(3)]
        public Decimal? Qty
        {
            get { return Fields.Qty[this]; }
            set { Fields.Qty[this] = value; }
        }

        [DisplayName("Total Amount"), Size(18), Scale(3),ReadOnly(true)]
        public Decimal? TotalAmount
        {
            get { return Fields.TotalAmount[this]; }
            set { Fields.TotalAmount[this] = value; }
        }

        [DisplayName("Currency"), ForeignKey("[dbo].[Currencies]", "Id"), LeftJoin("jCurrency"), TextualField("CurrencyCurrencyCode")]
        [LookupEditor(typeof(CurrenciesRow), InplaceAdd = true)]
        public Int32? CurrencyId
        {
            get { return Fields.CurrencyId[this]; }
            set { Fields.CurrencyId[this] = value; }
        }

        [DisplayName("Exchange Rate"), Size(18), Scale(3)]
        public Decimal? ExchangeRate
        {
            get { return Fields.ExchangeRate[this]; }
            set { Fields.ExchangeRate[this] = value; }
        }

        [DisplayName("Total Amount(Local Currency)"), Size(18), Scale(3), ReadOnly(true)]
        public Decimal? TotalAmountInLocalCurrency
        {
            get { return Fields.TotalAmountInLocalCurrency[this]; }
            set { Fields.TotalAmountInLocalCurrency[this] = value; }
        }

        [DisplayName("Invoice Invoice Date"), Expression("jInvoice.[InvoiceDate]")]
        public DateTime? InvoiceInvoiceDate
        {
            get { return Fields.InvoiceInvoiceDate[this]; }
            set { Fields.InvoiceInvoiceDate[this] = value; }
        }

        [DisplayName("Invoice Invoice No"), Expression("jInvoice.[InvoiceNO]")]
        public String InvoiceInvoiceNo
        {
            get { return Fields.InvoiceInvoiceNo[this]; }
            set { Fields.InvoiceInvoiceNo[this] = value; }
        }

        [DisplayName("Invoice Consignment Id"), Expression("jInvoice.[ConsignmentId]")]
        public Int32? InvoiceConsignmentId
        {
            get { return Fields.InvoiceConsignmentId[this]; }
            set { Fields.InvoiceConsignmentId[this] = value; }
        }

        [DisplayName("Invoice Consignment Date"), Expression("jInvoice.[ConsignmentDate]")]
        public DateTime? InvoiceConsignmentDate
        {
            get { return Fields.InvoiceConsignmentDate[this]; }
            set { Fields.InvoiceConsignmentDate[this] = value; }
        }

        [DisplayName("Invoice Way Bill No"), Expression("jInvoice.[WayBillNo]")]
        public String InvoiceWayBillNo
        {
            get { return Fields.InvoiceWayBillNo[this]; }
            set { Fields.InvoiceWayBillNo[this] = value; }
        }

        [DisplayName("Invoice Job No"), Expression("jInvoice.[JobNo]")]
        public String InvoiceJobNo
        {
            get { return Fields.InvoiceJobNo[this]; }
            set { Fields.InvoiceJobNo[this] = value; }
        }

        [DisplayName("Invoice Client Job No"), Expression("jInvoice.[ClientJobNo]")]
        public String InvoiceClientJobNo
        {
            get { return Fields.InvoiceClientJobNo[this]; }
            set { Fields.InvoiceClientJobNo[this] = value; }
        }

        [DisplayName("Invoice Shipper Id"), Expression("jInvoice.[ShipperId]")]
        public Int32? InvoiceShipperId
        {
            get { return Fields.InvoiceShipperId[this]; }
            set { Fields.InvoiceShipperId[this] = value; }
        }

        [DisplayName("Invoice Consignee Id"), Expression("jInvoice.[ConsigneeId]")]
        public Int32? InvoiceConsigneeId
        {
            get { return Fields.InvoiceConsigneeId[this]; }
            set { Fields.InvoiceConsigneeId[this] = value; }
        }

        [DisplayName("Invoice Vehicle Id"), Expression("jInvoice.[VehicleId]")]
        public Int32? InvoiceVehicleId
        {
            get { return Fields.InvoiceVehicleId[this]; }
            set { Fields.InvoiceVehicleId[this] = value; }
        }

        [DisplayName("Invoice Type"), Expression("jInvoice.[Type]")]
        public String InvoiceType
        {
            get { return Fields.InvoiceType[this]; }
            set { Fields.InvoiceType[this] = value; }
        }

        [DisplayName("Invoice Vehicle Number"), Expression("jInvoice.[VehicleNumber]")]
        public String InvoiceVehicleNumber
        {
            get { return Fields.InvoiceVehicleNumber[this]; }
            set { Fields.InvoiceVehicleNumber[this] = value; }
        }

        [DisplayName("Invoice Driver"), Expression("jInvoice.[Driver]")]
        public Int32? InvoiceDriver
        {
            get { return Fields.InvoiceDriver[this]; }
            set { Fields.InvoiceDriver[this] = value; }
        }

        [DisplayName("Invoice Payment"), Expression("jInvoice.[Payment]")]
        public Int32? InvoicePayment
        {
            get { return Fields.InvoicePayment[this]; }
            set { Fields.InvoicePayment[this] = value; }
        }

        [DisplayName("Invoice Type Of Pkg"), Expression("jInvoice.[TypeOfPkg]")]
        public String InvoiceTypeOfPkg
        {
            get { return Fields.InvoiceTypeOfPkg[this]; }
            set { Fields.InvoiceTypeOfPkg[this] = value; }
        }

        [DisplayName("Invoice Total Volume"), Expression("jInvoice.[TotalVolume]")]
        public String InvoiceTotalVolume
        {
            get { return Fields.InvoiceTotalVolume[this]; }
            set { Fields.InvoiceTotalVolume[this] = value; }
        }

        [DisplayName("Invoice Total Weight"), Expression("jInvoice.[TotalWeight]")]
        public String InvoiceTotalWeight
        {
            get { return Fields.InvoiceTotalWeight[this]; }
            set { Fields.InvoiceTotalWeight[this] = value; }
        }

        [DisplayName("Invoice Total No Of Pkgs"), Expression("jInvoice.[TotalNoOfPkgs]")]
        public String InvoiceTotalNoOfPkgs
        {
            get { return Fields.InvoiceTotalNoOfPkgs[this]; }
            set { Fields.InvoiceTotalNoOfPkgs[this] = value; }
        }

        [DisplayName("Invoice Shipping Area From"), Expression("jInvoice.[ShippingAreaFrom]")]
        public Int32? InvoiceShippingAreaFrom
        {
            get { return Fields.InvoiceShippingAreaFrom[this]; }
            set { Fields.InvoiceShippingAreaFrom[this] = value; }
        }

        [DisplayName("Invoice Shipping Area To"), Expression("jInvoice.[ShippingAreaTo]")]
        public Int32? InvoiceShippingAreaTo
        {
            get { return Fields.InvoiceShippingAreaTo[this]; }
            set { Fields.InvoiceShippingAreaTo[this] = value; }
        }

        [DisplayName("Invoice Total Amount"), Expression("jInvoice.[TotalAmount]")]
        public Decimal? InvoiceTotalAmount
        {
            get { return Fields.InvoiceTotalAmount[this]; }
            set { Fields.InvoiceTotalAmount[this] = value; }
        }

        [DisplayName("Invoice Driver Km From"), Expression("jInvoice.[DriverKMFrom]")]
        public Decimal? InvoiceDriverKmFrom
        {
            get { return Fields.InvoiceDriverKmFrom[this]; }
            set { Fields.InvoiceDriverKmFrom[this] = value; }
        }

        [DisplayName("Invoice Driver Km To"), Expression("jInvoice.[DriverKMTo]")]
        public Decimal? InvoiceDriverKmTo
        {
            get { return Fields.InvoiceDriverKmTo[this]; }
            set { Fields.InvoiceDriverKmTo[this] = value; }
        }

        [DisplayName("Invoice Gpskm From"), Expression("jInvoice.[GPSKMFrom]")]
        public Decimal? InvoiceGpskmFrom
        {
            get { return Fields.InvoiceGpskmFrom[this]; }
            set { Fields.InvoiceGpskmFrom[this] = value; }
        }

        [DisplayName("Invoice Gpskm To"), Expression("jInvoice.[GPSKMTo]")]
        public Decimal? InvoiceGpskmTo
        {
            get { return Fields.InvoiceGpskmTo[this]; }
            set { Fields.InvoiceGpskmTo[this] = value; }
        }

        [DisplayName("Invoice Status"), Expression("jInvoice.[Status]")]
        public Int32? InvoiceStatus
        {
            get { return Fields.InvoiceStatus[this]; }
            set { Fields.InvoiceStatus[this] = value; }
        }

        [DisplayName("Invoice Status User"), Expression("jInvoice.[StatusUser]")]
        public Int32? InvoiceStatusUser
        {
            get { return Fields.InvoiceStatusUser[this]; }
            set { Fields.InvoiceStatusUser[this] = value; }
        }

        [DisplayName("Material"), Expression("jCharge.[ChargeName]"),MinSelectLevel(SelectLevel.List)]
        public String ChargeChargeName
        {
            get { return Fields.ChargeChargeName[this]; }
            set { Fields.ChargeChargeName[this] = value; }
        }

        [DisplayName("Charge Description"), Expression("jCharge.[Description]")]
        public String ChargeDescription
        {
            get { return Fields.ChargeDescription[this]; }
            set { Fields.ChargeDescription[this] = value; }
        }

        [DisplayName("Currency Code"), Expression("jCurrency.[CurrencyCode]"),LookupInclude, MinSelectLevel(SelectLevel.List)]
        public String CurrencyCurrencyCode
        {
            get { return Fields.CurrencyCurrencyCode[this]; }
            set { Fields.CurrencyCurrencyCode[this] = value; }
        }

        [DisplayName("Currency Currency Name"), Expression("jCurrency.[CurrencyName]")]
        public String CurrencyCurrencyName
        {
            get { return Fields.CurrencyCurrencyName[this]; }
            set { Fields.CurrencyCurrencyName[this] = value; }
        }

        [DisplayName("Currency Exchange Rate"), Expression("jCurrency.[ExchangeRate]")]
        public Decimal? CurrencyExchangeRate
        {
            get { return Fields.CurrencyExchangeRate[this]; }
            set { Fields.CurrencyExchangeRate[this] = value; }
        }
        [DisplayName("Charge Chart Order"), Expression("jCharge.[ChartOrder]"), MinSelectLevel(SelectLevel.List),LookupInclude]
        public Int32? ChargeChartOrder
        {
            get { return Fields.ChargeChartOrder[this]; }
            set { Fields.ChargeChartOrder[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        
        public static readonly RowFields Fields = new RowFields().Init();

        public InvoiceChargesRow()
            : base(Fields)
        {
        }
        [DisplayName("Date"), LookupInclude]
        public DateTime? Date
        {
            get { return Fields.Date[this]; }
            set { Fields.Date[this] = value; }
        }
        [DisplayName("SlNo"), NotMapped]
        public Int32? Slno
        {
            get { return Fields.Slno[this]; }
            set { Fields.Slno[this] = value; }
        }

        [DisplayName("Invoice VehicleDetail"), ForeignKey("[dbo].[InvoiceVehicleDetails]", "Id"), LeftJoin("jInvoiceVehicleDetails")]
        public Int32? InvoiceVehicleDetailId
        {
            get { return Fields.InvoiceVehicleDetailId[this]; }
            set { Fields.InvoiceVehicleDetailId[this] = value; }
        }


        [DisplayName("Supplier Amount"), Size(18), Scale(3),LookupInclude]
        public Decimal? SupplierAmount
        {
            get { return Fields.SupplierAmount[this]; }
            set { Fields.SupplierAmount[this] = value; }
        }
        [DisplayName("Supplier"), ForeignKey("[dbo].[Supplier]", "Id"), LeftJoin("jSupplier")]
        [LookupEditor(typeof(SupplierRow), InplaceAdd = true),LookupInclude]
        public Int32? SupplierId
        {
            get { return Fields.SupplierId[this]; }
            set { Fields.SupplierId[this] = value; }
        }


        [DisplayName("Advance Amount"), Size(18), Scale(3),LookupInclude]
        public Decimal? SupplierAdvanceAmount
        {
            get { return Fields.SupplierAdvanceAmount[this]; }
            set { Fields.SupplierAdvanceAmount[this] = value; }
        }
        [DisplayName("Payment Type"), QuickSearch, QuickFilter]
        public AccountTypes? PaymentType
        {
            get { return (AccountTypes?)Fields.PaymentType[this]; }
            set { Fields.PaymentType[this] = (int?)value; }
        }

        [DisplayName("Account"), ForeignKey("[dbo].[Accounts]", "Id"), LeftJoin("jAccount"), TextualField("AccountAccountName")]
        [LookupEditor(typeof(AccountsRow), CascadeField = "Type", CascadeFrom = "PaymentType")]
        public Int32? AccountId
        {
            get { return Fields.AccountId[this]; }
            set { Fields.AccountId[this] = value; }
        }

        [DisplayName("Supplier Payment Status"), QuickSearch, QuickFilter, LookupInclude]
        public PaymentStatus? SupplierPaymentStatus
        {
            get { return (PaymentStatus?)Fields.SupplierPaymentStatus[this]; }
            set { Fields.SupplierPaymentStatus[this] = (int?)value; }
        }

        [DisplayName("FullName"), QuickSearch, LookupInclude]
        [Expression("(select isnull(i.InvoiceNO,'')+isnull(iv.InvoiceNO,'')+' ('+isnull(ivd.Description,'')+')' as FullName from InvoiceCharges ivd left join Invoice i on i.Id=ivd.InvoiceId left join InvoiceVehicleDetails ivdd on ivdd.Id=ivd.InvoiceChargeVehicleDetailId left join Invoice iv on iv.Id=ivdd.InvoiceId where ivd.Id=T0.[Id])")]
        [Expression("(select i.InvoiceNO+' ('+isnull(CONVERT(VARCHAR(10), ivd.StartDate, 101),'')+'-'+isnull(CONVERT(VARCHAR(10), ivd.EndDate, 101),'')+')' as FullName from InvoiceCharges ivd inner join Invoice i on i.Id=ivd.InvoiceId where ivd.Id=T0.[Id])", Dialect = "Sqlite")]
        public String FullName
        {
            get { return Fields.FullName[this]; }
            set { Fields.FullName[this] = value; }
        }
        StringField INameRow.NameField
        {
            get { return Fields.FullName; }
        }

        [DisplayName("Invoice Charge Vehicle Detail"), ForeignKey("[dbo].[InvoiceVehicleDetails]", "Id"), LeftJoin("jInvoiceChargeVehicleDetail")]
        public Int32? InvoiceChargeVehicleDetailId
        {
            get { return Fields.InvoiceChargeVehicleDetailId[this]; }
            set { Fields.InvoiceChargeVehicleDetailId[this] = value; }
        }

        [DisplayName("TaxPer"), Size(18), Scale(2)]
        public Decimal? TaxPer
        {
            get { return Fields.TaxPer[this]; }
            set { Fields.TaxPer[this] = value; }
        }

        [DisplayName("Tax Amount"), Size(18), Scale(3), ReadOnly(true)]
        public Decimal? TaxAmount
        {
            get { return Fields.TaxAmount[this]; }
            set { Fields.TaxAmount[this] = value; }
        }
        [DisplayName("Taxable Amount"), ReadOnly(true), Size(18), Scale(3)]
        public Decimal? TaxableAmount
        {
            get { return Fields.TaxableAmount[this]; }
            set { Fields.TaxableAmount[this] = value; }
        }
        [DisplayName("Amount"), Size(18), Scale(3), ReadOnly(true)]
        public Decimal? Total
        {
            get { return Fields.Total[this]; }
            set { Fields.Total[this] = value; }
        }
        //[DisplayName("Dis Amount"), Size(18), Scale(3)]
        [DisplayName("Extra Amount"), Size(18), Scale(3)]
        public Decimal? DisAmount
        {
            get { return Fields.DisAmount[this]; }
            set { Fields.DisAmount[this] = value; }
        }










        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field InvoiceId;
            public Int32Field ChargeId;
            public StringField Description;
            public DecimalField Amount;
            public DecimalField Qty;
            public DecimalField TotalAmount;
            public Int32Field CurrencyId;
            public DecimalField ExchangeRate;
            public DecimalField TotalAmountInLocalCurrency;

            public Int32Field Slno;

            public StringField FullName;


            public DecimalField SupplierAmount;
            public Int32Field SupplierId;
            public DecimalField SupplierAdvanceAmount;
            public Int32Field PaymentType;
            public Int32Field AccountId;
            public Int32Field SupplierPaymentStatus;

            public Int32Field InvoiceVehicleDetailId;
            public Int32Field InvoiceChargeVehicleDetailId;

            public DateTimeField Date;


            public DecimalField TaxPer;
            public DecimalField TaxAmount;
            public DecimalField TaxableAmount;

            public DecimalField Total;
            public DecimalField DisAmount;

            public DateTimeField InvoiceInvoiceDate;
            public StringField InvoiceInvoiceNo;
            public Int32Field InvoiceConsignmentId;
            public DateTimeField InvoiceConsignmentDate;
            public StringField InvoiceWayBillNo;
            public StringField InvoiceJobNo;
            public StringField InvoiceClientJobNo;
            public Int32Field InvoiceShipperId;
            public Int32Field InvoiceConsigneeId;
            public Int32Field InvoiceVehicleId;
            public StringField InvoiceType;
            public StringField InvoiceVehicleNumber;
            public Int32Field InvoiceDriver;
            public Int32Field InvoicePayment;
            public StringField InvoiceTypeOfPkg;
            public StringField InvoiceTotalVolume;
            public StringField InvoiceTotalWeight;
            public StringField InvoiceTotalNoOfPkgs;
            public Int32Field InvoiceShippingAreaFrom;
            public Int32Field InvoiceShippingAreaTo;
            public DecimalField InvoiceTotalAmount;
            public DecimalField InvoiceDriverKmFrom;
            public DecimalField InvoiceDriverKmTo;
            public DecimalField InvoiceGpskmFrom;
            public DecimalField InvoiceGpskmTo;
            public Int32Field InvoiceStatus;
            public Int32Field InvoiceStatusUser;

            public StringField ChargeChargeName;
            public StringField ChargeDescription;
            public Int32Field ChargeChartOrder;

            public StringField CurrencyCurrencyCode;
            public StringField CurrencyCurrencyName;
            public DecimalField CurrencyExchangeRate;

            public Int32Field ConsignmentId;
        }
    }
}

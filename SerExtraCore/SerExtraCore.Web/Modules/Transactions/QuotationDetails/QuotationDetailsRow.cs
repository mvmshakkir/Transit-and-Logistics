
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

    [ConnectionKey("Default"), Module("Transactions"), TableName("[dbo].[QuotationDetails]")]
    [DisplayName("Quotation Details"), InstanceName("Quotation Details")]
    [ReadPermission("Transactions:Quotations")]
    [ModifyPermission("Transactions:Quotations")]
    public sealed class QuotationDetailsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Quotation"), NotNull, ForeignKey("[dbo].[Quotations]", "Id"), LeftJoin("jQuotation"), TextualField("QuotationQuotNo")]
        public Int32? QuotationId
        {
            get { return Fields.QuotationId[this]; }
            set { Fields.QuotationId[this] = value; }
        }

        [DisplayName("Charge"), NotNull, ForeignKey("[dbo].[Charges]", "Id"), LeftJoin("jCharge"), TextualField("ChargeChargeName")]
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

        [DisplayName("Unit"), Size(255)]
        public String Unit
        {
            get { return Fields.Unit[this]; }
            set { Fields.Unit[this] = value; }
        }

        [DisplayName("Quantity"), Size(18), Scale(3)]
        public Decimal? Quantity
        {
            get { return Fields.Quantity[this]; }
            set { Fields.Quantity[this] = value; }
        }

        [DisplayName("Rate"), Size(18), Scale(3)]
        public Decimal? Rate
        {
            get { return Fields.Rate[this]; }
            set { Fields.Rate[this] = value; }
        }

        [DisplayName("Taxable Amount"), Size(18), Scale(3),ReadOnly(true)]
        public Decimal? TaxableAmount
        {
            get { return Fields.TaxableAmount[this]; }
            set { Fields.TaxableAmount[this] = value; }
        }

        [DisplayName("Tax Per"), Size(18), Scale(3)]
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

        [DisplayName("Total Amount"), Size(18), Scale(3), ReadOnly(true)]
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

        [DisplayName("Total Amount In Local Currency"), Size(18), Scale(3), ReadOnly(true)]
        public Decimal? TotalAmountInLocalCurrency
        {
            get { return Fields.TotalAmountInLocalCurrency[this]; }
            set { Fields.TotalAmountInLocalCurrency[this] = value; }
        }

        [DisplayName("Quotation Customer Id"), Expression("jQuotation.[CustomerId]")]
        public Int32? QuotationCustomerId
        {
            get { return Fields.QuotationCustomerId[this]; }
            set { Fields.QuotationCustomerId[this] = value; }
        }

        [DisplayName("Quotation Date"), Expression("jQuotation.[Date]")]
        public DateTime? QuotationDate
        {
            get { return Fields.QuotationDate[this]; }
            set { Fields.QuotationDate[this] = value; }
        }

        [DisplayName("Quotation Quot No"), Expression("jQuotation.[QuotNo]")]
        public String QuotationQuotNo
        {
            get { return Fields.QuotationQuotNo[this]; }
            set { Fields.QuotationQuotNo[this] = value; }
        }

        [DisplayName("Quotation Contact Person"), Expression("jQuotation.[ContactPerson]")]
        public String QuotationContactPerson
        {
            get { return Fields.QuotationContactPerson[this]; }
            set { Fields.QuotationContactPerson[this] = value; }
        }

        [DisplayName("Quotation Mobile"), Expression("jQuotation.[Mobile]")]
        public String QuotationMobile
        {
            get { return Fields.QuotationMobile[this]; }
            set { Fields.QuotationMobile[this] = value; }
        }

        [DisplayName("Quotation Email"), Expression("jQuotation.[Email]")]
        public String QuotationEmail
        {
            get { return Fields.QuotationEmail[this]; }
            set { Fields.QuotationEmail[this] = value; }
        }

        [DisplayName("Quotation Enquiryref"), Expression("jQuotation.[ENQUIRYREF]")]
        public String QuotationEnquiryref
        {
            get { return Fields.QuotationEnquiryref[this]; }
            set { Fields.QuotationEnquiryref[this] = value; }
        }

        [DisplayName("Quotation Fax No"), Expression("jQuotation.[FaxNo]")]
        public String QuotationFaxNo
        {
            get { return Fields.QuotationFaxNo[this]; }
            set { Fields.QuotationFaxNo[this] = value; }
        }

        [DisplayName("Quotation Total Amount"), Expression("jQuotation.[TotalAmount]")]
        public Decimal? QuotationTotalAmount
        {
            get { return Fields.QuotationTotalAmount[this]; }
            set { Fields.QuotationTotalAmount[this] = value; }
        }

        [DisplayName("Quotation Note"), Expression("jQuotation.[Note]")]
        public String QuotationNote
        {
            get { return Fields.QuotationNote[this]; }
            set { Fields.QuotationNote[this] = value; }
        }

        [DisplayName("Quotation Vehicle Type"), Expression("jQuotation.[VehicleType]")]
        public String QuotationVehicleType
        {
            get { return Fields.QuotationVehicleType[this]; }
            set { Fields.QuotationVehicleType[this] = value; }
        }

        [DisplayName("Charge Name"), Expression("jCharge.[ChargeName]"), MinSelectLevel(SelectLevel.List)]
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

        [DisplayName("Charge Chart Order"), Expression("jCharge.[ChartOrder]")]
        public Int32? ChargeChartOrder
        {
            get { return Fields.ChargeChartOrder[this]; }
            set { Fields.ChargeChartOrder[this] = value; }
        }

        [DisplayName("Charge Tax Per"), Expression("jCharge.[TaxPer]")]
        public Decimal? ChargeTaxPer
        {
            get { return Fields.ChargeTaxPer[this]; }
            set { Fields.ChargeTaxPer[this] = value; }
        }

        [DisplayName("Charge Tax Code Id"), Expression("jCharge.[TaxCodeId]")]
        public Int32? ChargeTaxCodeId
        {
            get { return Fields.ChargeTaxCodeId[this]; }
            set { Fields.ChargeTaxCodeId[this] = value; }
        }

        [DisplayName("Currency"), Expression("jCurrency.[CurrencyCode]"), MinSelectLevel(SelectLevel.List)]
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

        [DisplayName("Currency Currency Unit"), Expression("jCurrency.[CurrencyUnit]")]
        public String CurrencyCurrencyUnit
        {
            get { return Fields.CurrencyCurrencyUnit[this]; }
            set { Fields.CurrencyCurrencyUnit[this] = value; }
        }

        [DisplayName("Currency Sub Currency Unit"), Expression("jCurrency.[SubCurrencyUnit]")]
        public String CurrencySubCurrencyUnit
        {
            get { return Fields.CurrencySubCurrencyUnit[this]; }
            set { Fields.CurrencySubCurrencyUnit[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Description; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public QuotationDetailsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field QuotationId;
            public Int32Field ChargeId;
            public StringField Description;
            public StringField Unit;
            public DecimalField Quantity;
            public DecimalField Rate;
            public DecimalField TaxableAmount;
            public DecimalField TaxPer;
            public DecimalField TaxAmount;
            public DecimalField TotalAmount;
            public Int32Field CurrencyId;
            public DecimalField ExchangeRate;
            public DecimalField TotalAmountInLocalCurrency;

            public Int32Field QuotationCustomerId;
            public DateTimeField QuotationDate;
            public StringField QuotationQuotNo;
            public StringField QuotationContactPerson;
            public StringField QuotationMobile;
            public StringField QuotationEmail;
            public StringField QuotationEnquiryref;
            public StringField QuotationFaxNo;
            public DecimalField QuotationTotalAmount;
            public StringField QuotationNote;
            public StringField QuotationVehicleType;

            public StringField ChargeChargeName;
            public StringField ChargeDescription;
            public Int32Field ChargeChartOrder;
            public DecimalField ChargeTaxPer;
            public Int32Field ChargeTaxCodeId;

            public StringField CurrencyCurrencyCode;
            public StringField CurrencyCurrencyName;
            public DecimalField CurrencyExchangeRate;
            public StringField CurrencyCurrencyUnit;
            public StringField CurrencySubCurrencyUnit;
        }
    }
}

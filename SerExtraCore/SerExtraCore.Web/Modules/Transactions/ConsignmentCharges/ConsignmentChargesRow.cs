
namespace SerExtraCore.Transactions.Entities
{
    using SerExtraCore.Accounts.Entities;
    using SerExtraCore.Master.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;
	using SerExtraCore.UOM.Entities;

    [ConnectionKey("Default"), Module("Transactions"), TableName("[dbo].[ConsignmentCharges]")]
    //[DisplayName("Consignment Charges"), InstanceName("Consignment Charges")]
    [DisplayName("Material Details"), InstanceName("Material Details")]
    [ReadPermission("Transactions:Consignment")]
    [ModifyPermission("Transactions:Consignment")]
    public sealed class ConsignmentChargesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }
		[DisplayName("Unit"), ForeignKey("[dbo].[UOM]", "Id"), LookupInclude, LeftJoin("jUOM"), TextualField("Unit")]
		[LookupEditor(typeof(UOMRow), InplaceAdd = true), QuickFilter, QuickSearch]
		public Int32? UOMId
		{
			get { return Fields.UOMId[this]; }
			set { Fields.UOMId[this] = value; }
		}

		[DisplayName("Unit"), Expression("jUOM.[Unit]"), LookupInclude, QuickSearch]
		[MinSelectLevel(SelectLevel.List)]
		public String UomUnit
		{
			get { return Fields.UomUnit[this]; }
			set { Fields.UomUnit[this] = value; }
		}














		[DisplayName("Consignment"), ForeignKey("[dbo].[Consignment]", "Id"), LeftJoin("jConsignment"), TextualField("ConsignmentWayBillNo")]
        public Int32? ConsignmentId
        {
            get { return Fields.ConsignmentId[this]; }
            set { Fields.ConsignmentId[this] = value; }
        }

        [DisplayName("Charge"),  ForeignKey("[dbo].[Charges]", "Id"), LeftJoin("jCharge"), TextualField("ChargeChargeName")]
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

        [DisplayName("Total Amount"), Size(18), Scale(3), ReadOnly(true)]
        public Decimal? TotalAmountInLocalCurrency
        {
            get { return Fields.TotalAmountInLocalCurrency[this]; }
            set { Fields.TotalAmountInLocalCurrency[this] = value; }
        }

        [DisplayName("Consignment Date"), Expression("jConsignment.[Date]")]
        public DateTime? ConsignmentDate
        {
            get { return Fields.ConsignmentDate[this]; }
            set { Fields.ConsignmentDate[this] = value; }
        }

        [DisplayName("Consignment Way Bill No"), Expression("jConsignment.[WayBillNo]")]
        public String ConsignmentWayBillNo
        {
            get { return Fields.ConsignmentWayBillNo[this]; }
            set { Fields.ConsignmentWayBillNo[this] = value; }
        }

        [DisplayName("Consignment Job No"), Expression("jConsignment.[JobNo]")]
        public String ConsignmentJobNo
        {
            get { return Fields.ConsignmentJobNo[this]; }
            set { Fields.ConsignmentJobNo[this] = value; }
        }

        [DisplayName("Consignment Client Job No"), Expression("jConsignment.[ClientJobNo]")]
        public String ConsignmentClientJobNo
        {
            get { return Fields.ConsignmentClientJobNo[this]; }
            set { Fields.ConsignmentClientJobNo[this] = value; }
        }

        [DisplayName("Consignment Shipper Id"), Expression("jConsignment.[ShipperId]")]
        public Int32? ConsignmentShipperId
        {
            get { return Fields.ConsignmentShipperId[this]; }
            set { Fields.ConsignmentShipperId[this] = value; }
        }

        [DisplayName("Consignment Consignee Id"), Expression("jConsignment.[ConsigneeId]")]
        public Int32? ConsignmentConsigneeId
        {
            get { return Fields.ConsignmentConsigneeId[this]; }
            set { Fields.ConsignmentConsigneeId[this] = value; }
        }

        [DisplayName("Consignment Vehicle Id"), Expression("jConsignment.[VehicleId]")]
        public Int32? ConsignmentVehicleId
        {
            get { return Fields.ConsignmentVehicleId[this]; }
            set { Fields.ConsignmentVehicleId[this] = value; }
        }

        [DisplayName("Consignment Type"), Expression("jConsignment.[Type]")]
        public String ConsignmentType
        {
            get { return Fields.ConsignmentType[this]; }
            set { Fields.ConsignmentType[this] = value; }
        }

        [DisplayName("Consignment Vehicle Number"), Expression("jConsignment.[VehicleNumber]")]
        public String ConsignmentVehicleNumber
        {
            get { return Fields.ConsignmentVehicleNumber[this]; }
            set { Fields.ConsignmentVehicleNumber[this] = value; }
        }

        [DisplayName("Consignment Driver"), Expression("jConsignment.[Driver]")]
        public Int32? ConsignmentDriver
        {
            get { return Fields.ConsignmentDriver[this]; }
            set { Fields.ConsignmentDriver[this] = value; }
        }

        [DisplayName("Consignment Payment"), Expression("jConsignment.[Payment]")]
        public Int32? ConsignmentPayment
        {
            get { return Fields.ConsignmentPayment[this]; }
            set { Fields.ConsignmentPayment[this] = value; }
        }

        [DisplayName("Consignment Type Of Pkg"), Expression("jConsignment.[TypeOfPkg]")]
        public String ConsignmentTypeOfPkg
        {
            get { return Fields.ConsignmentTypeOfPkg[this]; }
            set { Fields.ConsignmentTypeOfPkg[this] = value; }
        }

        [DisplayName("Consignment Total Volume"), Expression("jConsignment.[TotalVolume]")]
        public String ConsignmentTotalVolume
        {
            get { return Fields.ConsignmentTotalVolume[this]; }
            set { Fields.ConsignmentTotalVolume[this] = value; }
        }

        [DisplayName("Consignment Total Weight"), Expression("jConsignment.[TotalWeight]")]
        public String ConsignmentTotalWeight
        {
            get { return Fields.ConsignmentTotalWeight[this]; }
            set { Fields.ConsignmentTotalWeight[this] = value; }
        }

        [DisplayName("Consignment Total No Of Pkgs"), Expression("jConsignment.[TotalNoOfPkgs]")]
        public String ConsignmentTotalNoOfPkgs
        {
            get { return Fields.ConsignmentTotalNoOfPkgs[this]; }
            set { Fields.ConsignmentTotalNoOfPkgs[this] = value; }
        }

        [DisplayName("Consignment Shipping Area From"), Expression("jConsignment.[ShippingAreaFrom]")]
        public Int32? ConsignmentShippingAreaFrom
        {
            get { return Fields.ConsignmentShippingAreaFrom[this]; }
            set { Fields.ConsignmentShippingAreaFrom[this] = value; }
        }

        [DisplayName("Consignment Shipping Area To"), Expression("jConsignment.[ShippingAreaTo]")]
        public Int32? ConsignmentShippingAreaTo
        {
            get { return Fields.ConsignmentShippingAreaTo[this]; }
            set { Fields.ConsignmentShippingAreaTo[this] = value; }
        }

        [DisplayName("Consignment Total Amount"), Expression("jConsignment.[TotalAmount]")]
        public Decimal? ConsignmentTotalAmount
        {
            get { return Fields.ConsignmentTotalAmount[this]; }
            set { Fields.ConsignmentTotalAmount[this] = value; }
        }

        [DisplayName("Material"), Expression("jCharge.[ChargeName]"),LookupInclude,MinSelectLevel(SelectLevel.List)]
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

        [DisplayName("Currency"), Expression("jCurrency.[CurrencyCode]"),LookupInclude,MinSelectLevel(SelectLevel.List)]
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

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Description; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ConsignmentChargesRow()
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

        [DisplayName("ConsignmentVehicleDetails"), ForeignKey("[dbo].[ConsignmentVehicleDetails]", "Id"), LeftJoin("jConsignmentVehicleDetails")]
        public Int32? ConsignmentChargesId
        {
            get { return Fields.ConsignmentChargesId[this]; }
            set { Fields.ConsignmentChargesId[this] = value; }
        }

        [DisplayName("Supplier Amount"), Size(18), Scale(3)]
        public Decimal? SupplierAmount
        {
            get { return Fields.SupplierAmount[this]; }
            set { Fields.SupplierAmount[this] = value; }
        }
        [DisplayName("Supplier"), ForeignKey("[dbo].[Supplier]", "Id"), LeftJoin("jSupplier")]
        [LookupEditor(typeof(SupplierRow), InplaceAdd = true)]
        public Int32? SupplierId
        {
            get { return Fields.SupplierId[this]; }
            set { Fields.SupplierId[this] = value; }
        }


        [DisplayName("Advance Amount"), Size(18), Scale(3)]
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

        [DisplayName("Payments"), MasterDetailRelation(foreignKey: "ConsignmentChargesId"), NotMapped, AuditLog]
        [MinSelectLevel(SelectLevel.List)]
        public List<Accounts.Entities.PaymentRow> Payments
        {
            get { return Fields.Payments[this]; }
            set { Fields.Payments[this] = value; }
        }

        [DisplayName("Consignment Charges Vehicle Details"), ForeignKey("[dbo].[ConsignmentVehicleDetails]", "Id"), LeftJoin("jConsignmentVehicleDetailsCharges")]
        public Int32? ConsignmentVehicleDetailId
        {
            get { return Fields.ConsignmentVehicleDetailId[this]; }
            set { Fields.ConsignmentVehicleDetailId[this] = value; }
        }
        [DisplayName("TaxPer"), Size(18), Scale(2)]
        public Decimal? TaxPer
        {
            get { return Fields.TaxPer[this]; }
            set { Fields.TaxPer[this] = value; }
        }

        [DisplayName("Tax Amount"), Size(18), Scale(3),ReadOnly(true)]
        public Decimal? TaxAmount
        {
            get { return Fields.TaxAmount[this]; }
            set { Fields.TaxAmount[this] = value; }
        }
        [DisplayName("Taxable Amount"),ReadOnly(true), Size(18), Scale(3)]
        public Decimal? TaxableAmount
        {
            get { return Fields.TaxableAmount[this]; }
            set { Fields.TaxableAmount[this] = value; }
        }

        [DisplayName("Amount"), Size(18), Scale(3)]
        public Decimal? Total
        {
            get { return Fields.Total[this]; }
            set { Fields.Total[this] = value; }
        }
        [DisplayName("Extra Amount"), Size(18), Scale(3)]
        public Decimal? DisAmount
        {
            get { return Fields.DisAmount[this]; }
            set { Fields.DisAmount[this] = value; }
        }
        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field ConsignmentId;
            public Int32Field ChargeId;
            public StringField Description;
            public DecimalField Amount;
            public DecimalField Qty;
            public DecimalField TotalAmount;
            public Int32Field CurrencyId;
            public DecimalField ExchangeRate;
            public DecimalField TotalAmountInLocalCurrency;
            public DateTimeField Date;

            public DecimalField TaxPer;
            public DecimalField TaxAmount;
            public DecimalField TaxableAmount;

            public DecimalField Total;
            public DecimalField DisAmount;

            public Int32Field Slno;

            public RowListField<Accounts.Entities.PaymentRow> Payments;

            public DecimalField SupplierAmount;
            public Int32Field SupplierId;
            public DecimalField SupplierAdvanceAmount;
            public Int32Field PaymentType;
            public Int32Field AccountId;

            public Int32Field ConsignmentChargesId;

            public Int32Field ConsignmentVehicleDetailId;

            public DateTimeField ConsignmentDate;
            public StringField ConsignmentWayBillNo;
            public StringField ConsignmentJobNo;
            public StringField ConsignmentClientJobNo;
            public Int32Field ConsignmentShipperId;
            public Int32Field ConsignmentConsigneeId;
            public Int32Field ConsignmentVehicleId;
            public StringField ConsignmentType;
            public StringField ConsignmentVehicleNumber;
            public Int32Field ConsignmentDriver;
            public Int32Field ConsignmentPayment;
            public StringField ConsignmentTypeOfPkg;
            public StringField ConsignmentTotalVolume;
            public StringField ConsignmentTotalWeight;
            public StringField ConsignmentTotalNoOfPkgs;
            public Int32Field ConsignmentShippingAreaFrom;
            public Int32Field ConsignmentShippingAreaTo;
            public DecimalField ConsignmentTotalAmount;



            public StringField ChargeChargeName;
            public StringField ChargeDescription;

            public StringField CurrencyCurrencyCode;
            public StringField CurrencyCurrencyName;
            public DecimalField CurrencyExchangeRate;


			public Int32Field UOMId;

			//public StringField Materials;

			public StringField UomUnit;
		}
    }
}

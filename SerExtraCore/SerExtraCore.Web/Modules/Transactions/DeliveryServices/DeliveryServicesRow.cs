
namespace SerExtraCore.Transactions.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using SerExtraCore.Accounts.Entities;
    using SerExtraCore.Master.Entities;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Transactions"), TableName("[dbo].[DeliveryServices]")]
    [DisplayName("Delivery Services"), InstanceName("Delivery Services")]
    [ReadPermission("Transactions:DeliveryServices")]
    [ModifyPermission("Transactions:DeliveryServices")]
    public sealed class DeliveryServicesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Bill No"), Size(255), NotNull, QuickSearch]
        public String BillNo
        {
            get { return Fields.BillNo[this]; }
            set { Fields.BillNo[this] = value; }
        }

        [DisplayName("Trx Date"), NotNull, DefaultValue("today"), QuickFilter]
        public DateTime? TrxDate
        {
            get { return Fields.TrxDate[this]; }
            set { Fields.TrxDate[this] = value; }
        }

        [DisplayName("Consignee"), NotNull, ForeignKey("[dbo].[Customers]", "Id"), LeftJoin("jConsignee"), TextualField("ConsigneeCustomerCode")]
        [LookupEditor(typeof(CustomersRow),InplaceAdd =true), QuickFilter]
        public Int32? ConsigneeId
        {
            get { return Fields.ConsigneeId[this]; }
            set { Fields.ConsigneeId[this] = value; }
        }

        [DisplayName("Consignor"), NotNull, ForeignKey("[dbo].[Customers]", "Id"), LeftJoin("jConsignor"), TextualField("ConsignorCustomerCode")]
        [LookupEditor(typeof(CustomersRow),InplaceAdd =true), QuickFilter]
        public Int32? ConsignorId
        {
            get { return Fields.ConsignorId[this]; }
            set { Fields.ConsignorId[this] = value; }
        }

        [DisplayName("Shipping Area From"), ForeignKey("[dbo].[ShippingAreas]", "Id"), LeftJoin("jShippingAreaFrom"), TextualField("ShippingAreaFromAreaName")]
        [LookupEditor(typeof(ShippingAreasRow), InplaceAdd = true), QuickFilter]
        public Int32? ShippingAreaFrom
        {
            get { return Fields.ShippingAreaFrom[this]; }
            set { Fields.ShippingAreaFrom[this] = value; }
        }

        [DisplayName("Shipping Area To"), ForeignKey("[dbo].[ShippingAreas]", "Id"), LeftJoin("jShippingAreaTo"), TextualField("ShippingAreaToAreaName")]
        [LookupEditor(typeof(ShippingAreasRow), InplaceAdd = true), QuickFilter]
        public Int32? ShippingAreaTo
        {
            get { return Fields.ShippingAreaTo[this]; }
            set { Fields.ShippingAreaTo[this] = value; }
        }

        [DisplayName("Hand Date"), DefaultValue("today"), QuickFilter]
        public DateTime? HandDate
        {
            get { return Fields.HandDate[this]; }
            set { Fields.HandDate[this] = value; }
        }

        [DisplayName("Received Date"), DefaultValue("today"),QuickFilter]
        public DateTime? ReceivedDate
        {
            get { return Fields.ReceivedDate[this]; }
            set { Fields.ReceivedDate[this] = value; }
        }

        [DisplayName("Note"), Size(500),TextAreaEditor]
        public String Note
        {
            get { return Fields.Note[this]; }
            set { Fields.Note[this] = value; }
        }

        [DisplayName("Payment Mode"), NotNull]
        public PaymentType? PaymentType
        {
            get { return (PaymentType?)Fields.PaymentType[this]; }
            set { Fields.PaymentType[this] = (int?)value; }
        }

        [DisplayName("Total Amount"), Size(18), Scale(3), NotNull,ReadOnly(true)]
        public Decimal? TotalAmount
        {
            get { return Fields.TotalAmount[this]; }
            set { Fields.TotalAmount[this] = value; }
        }

        [DisplayName("Consignee Customer Code"), Expression("jConsignee.[CustomerCode]")]
        public String ConsigneeCustomerCode
        {
            get { return Fields.ConsigneeCustomerCode[this]; }
            set { Fields.ConsigneeCustomerCode[this] = value; }
        }

        [DisplayName("Consignee Name"), Expression("jConsignee.[CustomerName]")]
        public String ConsigneeCustomerName
        {
            get { return Fields.ConsigneeCustomerName[this]; }
            set { Fields.ConsigneeCustomerName[this] = value; }
        }

        [DisplayName("Consignee Address"), Expression("jConsignee.[Address]")]
        public String ConsigneeAddress
        {
            get { return Fields.ConsigneeAddress[this]; }
            set { Fields.ConsigneeAddress[this] = value; }
        }

        [DisplayName("Consignee Place"), Expression("jConsignee.[Place]")]
        public String ConsigneePlace
        {
            get { return Fields.ConsigneePlace[this]; }
            set { Fields.ConsigneePlace[this] = value; }
        }

        [DisplayName("Consignee Telephone"), Expression("jConsignee.[Telephone]")]
        public String ConsigneeTelephone
        {
            get { return Fields.ConsigneeTelephone[this]; }
            set { Fields.ConsigneeTelephone[this] = value; }
        }

        [DisplayName("Consignee Email"), Expression("jConsignee.[Email]")]
        public String ConsigneeEmail
        {
            get { return Fields.ConsigneeEmail[this]; }
            set { Fields.ConsigneeEmail[this] = value; }
        }

        [DisplayName("Consignee Contact Person"), Expression("jConsignee.[ContactPerson]")]
        public String ConsigneeContactPerson
        {
            get { return Fields.ConsigneeContactPerson[this]; }
            set { Fields.ConsigneeContactPerson[this] = value; }
        }

        [DisplayName("Consignee Mobile"), Expression("jConsignee.[Mobile]")]
        public String ConsigneeMobile
        {
            get { return Fields.ConsigneeMobile[this]; }
            set { Fields.ConsigneeMobile[this] = value; }
        }

        [DisplayName("Consignee Creation Date"), Expression("jConsignee.[CreationDate]")]
        public DateTime? ConsigneeCreationDate
        {
            get { return Fields.ConsigneeCreationDate[this]; }
            set { Fields.ConsigneeCreationDate[this] = value; }
        }

        [DisplayName("Consignee Description"), Expression("jConsignee.[Description]")]
        public String ConsigneeDescription
        {
            get { return Fields.ConsigneeDescription[this]; }
            set { Fields.ConsigneeDescription[this] = value; }
        }

        [DisplayName("Consignee Due Days"), Expression("jConsignee.[DueDays]")]
        public Int32? ConsigneeDueDays
        {
            get { return Fields.ConsigneeDueDays[this]; }
            set { Fields.ConsigneeDueDays[this] = value; }
        }

        [DisplayName("Consignee Opening"), Expression("jConsignee.[Opening]")]
        public Decimal? ConsigneeOpening
        {
            get { return Fields.ConsigneeOpening[this]; }
            set { Fields.ConsigneeOpening[this] = value; }
        }

        [DisplayName("Consignee Opening Date"), Expression("jConsignee.[OpeningDate]")]
        public DateTime? ConsigneeOpeningDate
        {
            get { return Fields.ConsigneeOpeningDate[this]; }
            set { Fields.ConsigneeOpeningDate[this] = value; }
        }

        [DisplayName("Consignee Tax Reg No"), Expression("jConsignee.[TaxRegNo]")]
        public String ConsigneeTaxRegNo
        {
            get { return Fields.ConsigneeTaxRegNo[this]; }
            set { Fields.ConsigneeTaxRegNo[this] = value; }
        }

        [DisplayName("Consignor Customer Code"), Expression("jConsignor.[CustomerCode]")]
        public String ConsignorCustomerCode
        {
            get { return Fields.ConsignorCustomerCode[this]; }
            set { Fields.ConsignorCustomerCode[this] = value; }
        }

        [DisplayName("Consignor Name"), Expression("jConsignor.[CustomerName]")]
        public String ConsignorCustomerName
        {
            get { return Fields.ConsignorCustomerName[this]; }
            set { Fields.ConsignorCustomerName[this] = value; }
        }

        [DisplayName("Consignor Address"), Expression("jConsignor.[Address]")]
        public String ConsignorAddress
        {
            get { return Fields.ConsignorAddress[this]; }
            set { Fields.ConsignorAddress[this] = value; }
        }

        [DisplayName("Consignor Place"), Expression("jConsignor.[Place]")]
        public String ConsignorPlace
        {
            get { return Fields.ConsignorPlace[this]; }
            set { Fields.ConsignorPlace[this] = value; }
        }

        [DisplayName("Consignor Telephone"), Expression("jConsignor.[Telephone]")]
        public String ConsignorTelephone
        {
            get { return Fields.ConsignorTelephone[this]; }
            set { Fields.ConsignorTelephone[this] = value; }
        }

        [DisplayName("Consignor Email"), Expression("jConsignor.[Email]")]
        public String ConsignorEmail
        {
            get { return Fields.ConsignorEmail[this]; }
            set { Fields.ConsignorEmail[this] = value; }
        }

        [DisplayName("Consignor Contact Person"), Expression("jConsignor.[ContactPerson]")]
        public String ConsignorContactPerson
        {
            get { return Fields.ConsignorContactPerson[this]; }
            set { Fields.ConsignorContactPerson[this] = value; }
        }

        [DisplayName("Consignor Mobile"), Expression("jConsignor.[Mobile]")]
        public String ConsignorMobile
        {
            get { return Fields.ConsignorMobile[this]; }
            set { Fields.ConsignorMobile[this] = value; }
        }

        [DisplayName("Consignor Creation Date"), Expression("jConsignor.[CreationDate]")]
        public DateTime? ConsignorCreationDate
        {
            get { return Fields.ConsignorCreationDate[this]; }
            set { Fields.ConsignorCreationDate[this] = value; }
        }

        [DisplayName("Consignor Description"), Expression("jConsignor.[Description]")]
        public String ConsignorDescription
        {
            get { return Fields.ConsignorDescription[this]; }
            set { Fields.ConsignorDescription[this] = value; }
        }

        [DisplayName("Consignor Due Days"), Expression("jConsignor.[DueDays]")]
        public Int32? ConsignorDueDays
        {
            get { return Fields.ConsignorDueDays[this]; }
            set { Fields.ConsignorDueDays[this] = value; }
        }

        [DisplayName("Consignor Opening"), Expression("jConsignor.[Opening]")]
        public Decimal? ConsignorOpening
        {
            get { return Fields.ConsignorOpening[this]; }
            set { Fields.ConsignorOpening[this] = value; }
        }

        [DisplayName("Consignor Opening Date"), Expression("jConsignor.[OpeningDate]")]
        public DateTime? ConsignorOpeningDate
        {
            get { return Fields.ConsignorOpeningDate[this]; }
            set { Fields.ConsignorOpeningDate[this] = value; }
        }

        [DisplayName("Consignor Tax Reg No"), Expression("jConsignor.[TaxRegNo]")]
        public String ConsignorTaxRegNo
        {
            get { return Fields.ConsignorTaxRegNo[this]; }
            set { Fields.ConsignorTaxRegNo[this] = value; }
        }

        [DisplayName("Shipping Area From"), Expression("jShippingAreaFrom.[AreaName]")]
        public String ShippingAreaFromAreaName
        {
            get { return Fields.ShippingAreaFromAreaName[this]; }
            set { Fields.ShippingAreaFromAreaName[this] = value; }
        }

        [DisplayName("Shipping Area From Description"), Expression("jShippingAreaFrom.[Description]")]
        public String ShippingAreaFromDescription
        {
            get { return Fields.ShippingAreaFromDescription[this]; }
            set { Fields.ShippingAreaFromDescription[this] = value; }
        }

        [DisplayName("Shipping Area To"), Expression("jShippingAreaTo.[AreaName]")]
        public String ShippingAreaToAreaName
        {
            get { return Fields.ShippingAreaToAreaName[this]; }
            set { Fields.ShippingAreaToAreaName[this] = value; }
        }

        [DisplayName("Shipping Area To Description"), Expression("jShippingAreaTo.[Description]")]
        public String ShippingAreaToDescription
        {
            get { return Fields.ShippingAreaToDescription[this]; }
            set { Fields.ShippingAreaToDescription[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.BillNo; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DeliveryServicesRow()
            : base(Fields)
        {
        }
        [DisplayName("Delivery Service Details"), MasterDetailRelation(foreignKey: "DeliveryServiceId"), NotMapped]
        public List<DeliveryServiceDetailsRow> DeliveryServiceDetails
        {
            get { return Fields.DeliveryServiceDetails[this]; }
            set { Fields.DeliveryServiceDetails[this] = value; }
        }

        [DisplayName("Receipts"), MasterDetailRelation(foreignKey: "DeliveryServiceId"), NotMapped, AuditLog]
        [MinSelectLevel(SelectLevel.List)]
        public List<Accounts.Entities.ReceiptRow> Receipts
        {
            get { return Fields.Receipts[this]; }
            set { Fields.Receipts[this] = value; }
        }

        [DisplayName("Payment Type"), QuickSearch, QuickFilter]
        public PymentTypes? PaymentTypeA
        {
            get { return (PymentTypes?)Fields.PaymentTypeA[this]; }
            set { Fields.PaymentTypeA[this] = (int?)value; }
        }

        [DisplayName("Account"), ForeignKey("[dbo].[Accounts]", "Id"), LeftJoin("jAccount"), TextualField("AccountAccountName")]
        [LookupEditor(typeof(AccountsRow), CascadeField = "Type", CascadeFrom = "PaymentTypeA")]
        public Int32? AccountId
        {
            get { return Fields.AccountId[this]; }
            set { Fields.AccountId[this] = value; }
        }

        [DisplayName(" Delivery Status"), QuickSearch, QuickFilter,DefaultValue(1)]
        public DeliveryStatus? DeliveryStatus
        {
            get { return (DeliveryStatus?)Fields.DeliveryStatus[this]; }
            set { Fields.DeliveryStatus[this] = (int?)value; }
        }

        [DisplayName("Receiver Details"), Size(500), TextAreaEditor,QuickSearch]
        public String ReceiverDetails
        {
            get { return Fields.ReceiverDetails[this]; }
            set { Fields.ReceiverDetails[this] = value; }
        }
        [DisplayName("ID No"), Size(200), QuickSearch]
        public String IDNo
        {
            get { return Fields.IDNo[this]; }
            set { Fields.IDNo[this] = value; }
        }
        [DisplayName("Contact No"), Size(200), QuickSearch]
        public String ContactNo
        {
            get { return Fields.ContactNo[this]; }
            set { Fields.ContactNo[this] = value; }
        }
        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField BillNo;
            public DateTimeField TrxDate;
            public Int32Field ConsigneeId;
            public Int32Field ConsignorId;
            public Int32Field ShippingAreaFrom;
            public Int32Field ShippingAreaTo;
            public DateTimeField HandDate;
            public DateTimeField ReceivedDate;
            public StringField Note;
            public Int32Field PaymentType;
            public DecimalField TotalAmount;

            public Int32Field PaymentTypeA;
            public Int32Field AccountId;

            public Int32Field DeliveryStatus;

            public StringField ReceiverDetails;
            public StringField ContactNo;
            public StringField IDNo;

            public StringField ConsigneeCustomerCode;
            public StringField ConsigneeCustomerName;
            public StringField ConsigneeAddress;
            public StringField ConsigneePlace;
            public StringField ConsigneeTelephone;
            public StringField ConsigneeEmail;
            public StringField ConsigneeContactPerson;
            public StringField ConsigneeMobile;
            public DateTimeField ConsigneeCreationDate;
            public StringField ConsigneeDescription;
            public Int32Field ConsigneeDueDays;
            public DecimalField ConsigneeOpening;
            public DateTimeField ConsigneeOpeningDate;
            public StringField ConsigneeTaxRegNo;

            public StringField ConsignorCustomerCode;
            public StringField ConsignorCustomerName;
            public StringField ConsignorAddress;
            public StringField ConsignorPlace;
            public StringField ConsignorTelephone;
            public StringField ConsignorEmail;
            public StringField ConsignorContactPerson;
            public StringField ConsignorMobile;
            public DateTimeField ConsignorCreationDate;
            public StringField ConsignorDescription;
            public Int32Field ConsignorDueDays;
            public DecimalField ConsignorOpening;
            public DateTimeField ConsignorOpeningDate;
            public StringField ConsignorTaxRegNo;

            public StringField ShippingAreaFromAreaName;
            public StringField ShippingAreaFromDescription;

            public StringField ShippingAreaToAreaName;
            public StringField ShippingAreaToDescription;

            public RowListField<DeliveryServiceDetailsRow> DeliveryServiceDetails;

            public RowListField<Accounts.Entities.ReceiptRow> Receipts;
        }
    }
}

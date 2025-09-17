
namespace SerExtraCore.Transactions.Entities
{
    using SerExtraCore.Master.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Transactions"), TableName("[dbo].[Quotations]")]
    [DisplayName("Quotations"), InstanceName("Quotations")]
    [ReadPermission("Transactions:Quotations")]
    [ModifyPermission("Transactions:Quotations")]
    public sealed class QuotationsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Customer"), NotNull, ForeignKey("[dbo].[Customers]", "Id"), LeftJoin("jCustomer"), TextualField("CustomerCustomerName")]
        [LookupEditor(typeof(CustomersRow), InplaceAdd = true), LookupInclude]
        public Int32? CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
        }

        [DisplayName("Date"), NotNull,DefaultValue("today")]
        public DateTime? Date
        {
            get { return Fields.Date[this]; }
            set { Fields.Date[this] = value; }
        }

        [DisplayName("Quot No"), Size(255), QuickSearch]
        public String QuotNo
        {
            get { return Fields.QuotNo[this]; }
            set { Fields.QuotNo[this] = value; }
        }

        [DisplayName("Contact Person"), Size(255)]
        public String ContactPerson
        {
            get { return Fields.ContactPerson[this]; }
            set { Fields.ContactPerson[this] = value; }
        }

        [DisplayName("Mobile"), Size(255)]
        public String Mobile
        {
            get { return Fields.Mobile[this]; }
            set { Fields.Mobile[this] = value; }
        }

        [DisplayName("Email"), Size(255)]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [DisplayName("Enquiryref"), Column("ENQUIRYREF"), Size(255)]
        public String Enquiryref
        {
            get { return Fields.Enquiryref[this]; }
            set { Fields.Enquiryref[this] = value; }
        }

        [DisplayName("Fax No"), Size(255)]
        public String FaxNo
        {
            get { return Fields.FaxNo[this]; }
            set { Fields.FaxNo[this] = value; }
        }

        [DisplayName("Total Amount"), Size(18), Scale(3), ReadOnly(true)]
        public Decimal? TotalAmount
        {
            get { return Fields.TotalAmount[this]; }
            set { Fields.TotalAmount[this] = value; }
        }

        [DisplayName("Note"), Size(500),TextAreaEditor]
        public String Note
        {
            get { return Fields.Note[this]; }
            set { Fields.Note[this] = value; }
        }

        [DisplayName("Vehicle Type"), Size(500)]
        public String VehicleType
        {
            get { return Fields.VehicleType[this]; }
            set { Fields.VehicleType[this] = value; }
        }

        [DisplayName("Customer Customer Code"), Expression("jCustomer.[CustomerCode]")]
        public String CustomerCustomerCode
        {
            get { return Fields.CustomerCustomerCode[this]; }
            set { Fields.CustomerCustomerCode[this] = value; }
        }

        [DisplayName("Customer Name"), Expression("jCustomer.[CustomerName]")]
        public String CustomerCustomerName
        {
            get { return Fields.CustomerCustomerName[this]; }
            set { Fields.CustomerCustomerName[this] = value; }
        }

        [DisplayName("Customer Address"), Expression("jCustomer.[Address]")]
        public String CustomerAddress
        {
            get { return Fields.CustomerAddress[this]; }
            set { Fields.CustomerAddress[this] = value; }
        }

        [DisplayName("Customer Place"), Expression("jCustomer.[Place]")]
        public String CustomerPlace
        {
            get { return Fields.CustomerPlace[this]; }
            set { Fields.CustomerPlace[this] = value; }
        }

        [DisplayName("Customer Telephone"), Expression("jCustomer.[Telephone]")]
        public String CustomerTelephone
        {
            get { return Fields.CustomerTelephone[this]; }
            set { Fields.CustomerTelephone[this] = value; }
        }

        [DisplayName("Customer Email"), Expression("jCustomer.[Email]")]
        public String CustomerEmail
        {
            get { return Fields.CustomerEmail[this]; }
            set { Fields.CustomerEmail[this] = value; }
        }

        [DisplayName("Customer Contact Person"), Expression("jCustomer.[ContactPerson]")]
        public String CustomerContactPerson
        {
            get { return Fields.CustomerContactPerson[this]; }
            set { Fields.CustomerContactPerson[this] = value; }
        }

        [DisplayName("Customer Mobile"), Expression("jCustomer.[Mobile]")]
        public String CustomerMobile
        {
            get { return Fields.CustomerMobile[this]; }
            set { Fields.CustomerMobile[this] = value; }
        }

        [DisplayName("Customer Creation Date"), Expression("jCustomer.[CreationDate]")]
        public DateTime? CustomerCreationDate
        {
            get { return Fields.CustomerCreationDate[this]; }
            set { Fields.CustomerCreationDate[this] = value; }
        }

        [DisplayName("Customer Description"), Expression("jCustomer.[Description]")]
        public String CustomerDescription
        {
            get { return Fields.CustomerDescription[this]; }
            set { Fields.CustomerDescription[this] = value; }
        }

        [DisplayName("Customer Due Days"), Expression("jCustomer.[DueDays]")]
        public Int32? CustomerDueDays
        {
            get { return Fields.CustomerDueDays[this]; }
            set { Fields.CustomerDueDays[this] = value; }
        }

        [DisplayName("Customer Opening"), Expression("jCustomer.[Opening]")]
        public Decimal? CustomerOpening
        {
            get { return Fields.CustomerOpening[this]; }
            set { Fields.CustomerOpening[this] = value; }
        }

        [DisplayName("Customer Opening Date"), Expression("jCustomer.[OpeningDate]")]
        public DateTime? CustomerOpeningDate
        {
            get { return Fields.CustomerOpeningDate[this]; }
            set { Fields.CustomerOpeningDate[this] = value; }
        }

        [DisplayName("Customer Tax Reg No"), Expression("jCustomer.[TaxRegNo]")]
        public String CustomerTaxRegNo
        {
            get { return Fields.CustomerTaxRegNo[this]; }
            set { Fields.CustomerTaxRegNo[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.QuotNo; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public QuotationsRow()
            : base(Fields)
        {
        }
        [DisplayName("Details"), MasterDetailRelation(foreignKey: "QuotationId"), NotMapped]
        public List<QuotationDetailsRow> QuotationDetails
        {
            get { return Fields.QuotationDetails[this]; }
            set { Fields.QuotationDetails[this] = value; }
        }
        [DisplayName("Terms & Conditions"), Size(5000),HtmlContentEditor]
        public String TermsAndConditions
        {
            get { return Fields.TermsAndConditions[this]; }
            set { Fields.TermsAndConditions[this] = value; }
        }
        [DisplayName("Quotation Type"), NotNull, DefaultValue(1), LookupInclude, QuickSearch, QuickFilter]
        public QuotationTypes? QuotationType
        {
            get { return (QuotationTypes?)Fields.QuotationType[this]; }
            set { Fields.QuotationType[this] = (int?)value; }
        }
        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field CustomerId;
            public DateTimeField Date;
            public StringField QuotNo;
            public StringField ContactPerson;
            public StringField Mobile;
            public StringField Email;
            public StringField Enquiryref;
            public StringField FaxNo;
            public DecimalField TotalAmount;
            public StringField Note;
            public StringField VehicleType;
            public StringField TermsAndConditions;

            public Int32Field QuotationType;

            public RowListField<QuotationDetailsRow> QuotationDetails;

            public StringField CustomerCustomerCode;
            public StringField CustomerCustomerName;
            public StringField CustomerAddress;
            public StringField CustomerPlace;
            public StringField CustomerTelephone;
            public StringField CustomerEmail;
            public StringField CustomerContactPerson;
            public StringField CustomerMobile;
            public DateTimeField CustomerCreationDate;
            public StringField CustomerDescription;
            public Int32Field CustomerDueDays;
            public DecimalField CustomerOpening;
            public DateTimeField CustomerOpeningDate;
            public StringField CustomerTaxRegNo;
        }
    }
}

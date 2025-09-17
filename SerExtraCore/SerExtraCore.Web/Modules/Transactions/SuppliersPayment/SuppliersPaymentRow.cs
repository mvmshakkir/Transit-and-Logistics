
namespace SerExtraCore.Transactions.Entities
{
    using SerExtraCore.Accounts.Entities;
    using SerExtraCore.Administration.Entities;
    using SerExtraCore.Master.Entities;
    using SerExtraCore.PDCPayments.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Transactions"), TableName("[dbo].[SuppliersPayment]")]
    [DisplayName("Suppliers Payment"), InstanceName("Suppliers Payment")]
    [ReadPermission("Transactions:SuppliersPayment")]
    [ModifyPermission("Transactions:SuppliersPayment")]
    public sealed class SuppliersPaymentRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Code"), Size(200), NotNull, QuickSearch]
        public String Code
        {
            get { return Fields.Code[this]; }
            set { Fields.Code[this] = value; }
        }

        [DisplayName("Date"), Size(200), NotNull,DefaultValue("today"), QuickSearch, QuickFilter]
        public DateTime? Date
        {
            get { return Fields.Date[this]; }
            set { Fields.Date[this] = value; }
        }

        [DisplayName("Supplier"), NotNull, ForeignKey("[dbo].[Supplier]", "Id"), LeftJoin("jSupplier"), TextualField("SupplierSupplierName")]

        [LookupEditor(typeof(SupplierRow))]
        public Int32? SupplierId
        {
            get { return Fields.SupplierId[this]; }
            set { Fields.SupplierId[this] = value; }
        }

        [DisplayName("Total Amount"), Size(18), Scale(3), NotNull,ReadOnly(true)]
        public Decimal? TotalAmount
        {
            get { return Fields.TotalAmount[this]; }
            set { Fields.TotalAmount[this] = value; }
        }

        [DisplayName("Supplier Supplier Code"), Expression("jSupplier.[SupplierCode]")]
        public String SupplierSupplierCode
        {
            get { return Fields.SupplierSupplierCode[this]; }
            set { Fields.SupplierSupplierCode[this] = value; }
        }

        [DisplayName("Supplier Name"), Expression("jSupplier.[SupplierName]"),LookupInclude,QuickFilter,QuickSearch]
        public String SupplierSupplierName
        {
            get { return Fields.SupplierSupplierName[this]; }
            set { Fields.SupplierSupplierName[this] = value; }
        }

        [DisplayName("Supplier Address"), Expression("jSupplier.[Address]")]
        public String SupplierAddress
        {
            get { return Fields.SupplierAddress[this]; }
            set { Fields.SupplierAddress[this] = value; }
        }

        [DisplayName("Supplier Place"), Expression("jSupplier.[Place]")]
        public String SupplierPlace
        {
            get { return Fields.SupplierPlace[this]; }
            set { Fields.SupplierPlace[this] = value; }
        }

        [DisplayName("Supplier Telephone"), Expression("jSupplier.[Telephone]")]
        public String SupplierTelephone
        {
            get { return Fields.SupplierTelephone[this]; }
            set { Fields.SupplierTelephone[this] = value; }
        }

        [DisplayName("Supplier Email"), Expression("jSupplier.[Email]")]
        public String SupplierEmail
        {
            get { return Fields.SupplierEmail[this]; }
            set { Fields.SupplierEmail[this] = value; }
        }

        [DisplayName("Supplier Contact Person"), Expression("jSupplier.[ContactPerson]")]
        public String SupplierContactPerson
        {
            get { return Fields.SupplierContactPerson[this]; }
            set { Fields.SupplierContactPerson[this] = value; }
        }

        [DisplayName("Supplier Mobile"), Expression("jSupplier.[Mobile]")]
        public String SupplierMobile
        {
            get { return Fields.SupplierMobile[this]; }
            set { Fields.SupplierMobile[this] = value; }
        }

        [DisplayName("Supplier Creation Date"), Expression("jSupplier.[CreationDate]")]
        public DateTime? SupplierCreationDate
        {
            get { return Fields.SupplierCreationDate[this]; }
            set { Fields.SupplierCreationDate[this] = value; }
        }

        [DisplayName("Supplier Description"), Expression("jSupplier.[Description]")]
        public String SupplierDescription
        {
            get { return Fields.SupplierDescription[this]; }
            set { Fields.SupplierDescription[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Code; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SuppliersPaymentRow()
            : base(Fields)
        {
        }
        [LookupEditor(typeof(InvoiceRow), Multiple = true, InplaceAdd = true,CascadeField = "SupplierId",CascadeFrom = "SupplierId",FilterField = "SupplierPaymentStatus",FilterValue =1), NotMapped]
        [LinkingSetRelation(typeof(SuppliersPaymentInvoicesRow), "SuppliersPaymentId", "InvoiceId")]
        [MinSelectLevel(SelectLevel.Details), QuickFilter(CssClass = "hidden-xs"), DisplayName("Invoices")]
        public List<Int32> Invoices
        {
            get { return Fields.Invoices[this]; }
            set { Fields.Invoices[this] = value; }
        }

        [DisplayName("Payments"), MasterDetailRelation(foreignKey: "SupplierPaymentId"), NotMapped,LookupInclude]
        [MinSelectLevel(SelectLevel.List)]
        public List<Accounts.Entities.PaymentRow> Payments
        {
            get { return Fields.Payments[this]; }
            set { Fields.Payments[this] = value; }
        }


        [DisplayName("Payment Type"), QuickSearch, QuickFilter]
        public PymentTypes? PaymentType
        {
            get { return (PymentTypes?)Fields.PaymentType[this]; }
            set { Fields.PaymentType[this] = (int?)value; }
        }

        [DisplayName("Account"), ForeignKey("[dbo].[Accounts]", "Id"), LeftJoin("jAccount"), TextualField("AccountAccountName")]
        [LookupEditor(typeof(AccountsRow), CascadeField = "Type", CascadeFrom = "PaymentType")]
        public Int32? AccountId
        {
            get { return Fields.AccountId[this]; }
            set { Fields.AccountId[this] = value; }
        }

        [DisplayName("Status"), NotNull, DefaultValue(1), QuickSearch, QuickFilter]
        public InvoiceStatus? Status
        {
            get { return (InvoiceStatus?)Fields.Status[this]; }
            set { Fields.Status[this] = (int?)value; }
        }

        [DisplayName("Status User"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jStatusUser"), TextualField("StatusUserUsername"), ReadOnly(true)]
        [LookupEditor(typeof(UserRow))]
        public Int32? StatusUser
        {
            get { return Fields.StatusUser[this]; }
            set { Fields.StatusUser[this] = value; }
        }
        [DisplayName("Account Type"), Expression("jAccount.[Type]")]
        public Int32? AccountType
        {
            get { return Fields.AccountType[this]; }
            set { Fields.AccountType[this] = value; }
        }

        [DisplayName("Account Name"), Expression("jAccount.[AccountName]"), QuickFilter, QuickSearch]
        public String AccountAccountName
        {
            get { return Fields.AccountAccountName[this]; }
            set { Fields.AccountAccountName[this] = value; }
        }

        [DisplayName("Account Account No"), Expression("jAccount.[AccountNo]")]
        public String AccountAccountNo
        {
            get { return Fields.AccountAccountNo[this]; }
            set { Fields.AccountAccountNo[this] = value; }
        }

        [DisplayName("Account Bank Name"), Expression("jAccount.[BankName]")]
        public String AccountBankName
        {
            get { return Fields.AccountBankName[this]; }
            set { Fields.AccountBankName[this] = value; }
        }

        [DisplayName("Account Brach Name"), Expression("jAccount.[BrachName]")]
        public String AccountBrachName
        {
            get { return Fields.AccountBrachName[this]; }
            set { Fields.AccountBrachName[this] = value; }
        }

        [DisplayName("Account Account Head Id"), Expression("jAccount.[AccountHeadId]")]
        public Int32? AccountAccountHeadId
        {
            get { return Fields.AccountAccountHeadId[this]; }
            set { Fields.AccountAccountHeadId[this] = value; }
        }

        [DisplayName("Status User Username"), Expression("jStatusUser.[Username]")]
        public String StatusUserUsername
        {
            get { return Fields.StatusUserUsername[this]; }
            set { Fields.StatusUserUsername[this] = value; }
        }

        [DisplayName("Status User Display Name"), Expression("jStatusUser.[DisplayName]")]
        public String StatusUserDisplayName
        {
            get { return Fields.StatusUserDisplayName[this]; }
            set { Fields.StatusUserDisplayName[this] = value; }
        }

        [DisplayName("Status User Email"), Expression("jStatusUser.[Email]")]
        public String StatusUserEmail
        {
            get { return Fields.StatusUserEmail[this]; }
            set { Fields.StatusUserEmail[this] = value; }
        }

        [DisplayName("Status User Source"), Expression("jStatusUser.[Source]")]
        public String StatusUserSource
        {
            get { return Fields.StatusUserSource[this]; }
            set { Fields.StatusUserSource[this] = value; }
        }

        [DisplayName("Status User Password Hash"), Expression("jStatusUser.[PasswordHash]")]
        public String StatusUserPasswordHash
        {
            get { return Fields.StatusUserPasswordHash[this]; }
            set { Fields.StatusUserPasswordHash[this] = value; }
        }

        [DisplayName("Status User Password Salt"), Expression("jStatusUser.[PasswordSalt]")]
        public String StatusUserPasswordSalt
        {
            get { return Fields.StatusUserPasswordSalt[this]; }
            set { Fields.StatusUserPasswordSalt[this] = value; }
        }

        [DisplayName("Status User Last Directory Update"), Expression("jStatusUser.[LastDirectoryUpdate]")]
        public DateTime? StatusUserLastDirectoryUpdate
        {
            get { return Fields.StatusUserLastDirectoryUpdate[this]; }
            set { Fields.StatusUserLastDirectoryUpdate[this] = value; }
        }

        [DisplayName("Status User User Image"), Expression("jStatusUser.[UserImage]")]
        public String StatusUserUserImage
        {
            get { return Fields.StatusUserUserImage[this]; }
            set { Fields.StatusUserUserImage[this] = value; }
        }

        [DisplayName("Status User Insert Date"), Expression("jStatusUser.[InsertDate]")]
        public DateTime? StatusUserInsertDate
        {
            get { return Fields.StatusUserInsertDate[this]; }
            set { Fields.StatusUserInsertDate[this] = value; }
        }

        [DisplayName("Status User Insert User Id"), Expression("jStatusUser.[InsertUserId]")]
        public Int32? StatusUserInsertUserId
        {
            get { return Fields.StatusUserInsertUserId[this]; }
            set { Fields.StatusUserInsertUserId[this] = value; }
        }

        [DisplayName("Status User Update Date"), Expression("jStatusUser.[UpdateDate]")]
        public DateTime? StatusUserUpdateDate
        {
            get { return Fields.StatusUserUpdateDate[this]; }
            set { Fields.StatusUserUpdateDate[this] = value; }
        }

        [DisplayName("Status User Update User Id"), Expression("jStatusUser.[UpdateUserId]")]
        public Int32? StatusUserUpdateUserId
        {
            get { return Fields.StatusUserUpdateUserId[this]; }
            set { Fields.StatusUserUpdateUserId[this] = value; }
        }

        [DisplayName("Status User Is Active"), Expression("jStatusUser.[IsActive]")]
        public Int16? StatusUserIsActive
        {
            get { return Fields.StatusUserIsActive[this]; }
            set { Fields.StatusUserIsActive[this] = value; }
        }
        [DisplayName("SlNo"), NotMapped]
        public Int32? Slno
        {
            get { return Fields.Slno[this]; }
            set { Fields.Slno[this] = value; }
        }

        //[LookupEditor(typeof(InvoiceVehicleDetailsRow), Multiple = true, InplaceAdd = true, CascadeField = "SupplierId", CascadeFrom = "SupplierId"), NotMapped]
        //[LinkingSetRelation(typeof(SuppliersPaymentInvoiceVehicleDetailsRow), "SuppliersPaymentId", "InvoiceVehicleDetailId")]
        //[MinSelectLevel(SelectLevel.Details), QuickFilter(CssClass = "hidden-xs"), DisplayName("Invoic Vehicle Details")]
        //public List<Int32> InvoiceVehicleDetails
        //{
        //    get { return Fields.InvoiceVehicleDetails[this]; }
        //    set { Fields.InvoiceVehicleDetails[this] = value; }
        //}

        [DisplayName("Invoice Vehicle Details"), MasterDetailRelation(foreignKey: "SuppliersPaymentId"), NotMapped]
        public List<SuppliersPaymentInvoiceVehicleDetailsRow> InvoiceVehicleDetails
        {
            get { return Fields.InvoiceVehicleDetails[this]; }
            set { Fields.InvoiceVehicleDetails[this] = value; }
        }

      

        [DisplayName("Old Balance"), Size(18), Scale(3),ReadOnly(true)]
        public Decimal? OldBalance
        {
            get { return Fields.OldBalance[this]; }
            set { Fields.OldBalance[this] = value; }
        }
        [DisplayName("PDC Payment Details"), MasterDetailRelation(foreignKey: "SuppliersPaymentId"), NotMapped]
        public List<PdcPaymentDetailsRow> PdcPaymentDetails
        {
            get { return Fields.PdcPaymentDetails[this]; }
            set { Fields.PdcPaymentDetails[this] = value; }
        }

        [DisplayName("DocumentNO"), Size(200)]
        public String DocumentNO
        {
            get { return Fields.DocumentNO[this]; }
            set { Fields.DocumentNO[this] = value; }
        }
        [DisplayName("Description"), Size(200),TextAreaEditor]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        //[LookupEditor(typeof(InvoiceChargesRow), Multiple = true, InplaceAdd = true, CascadeField = "SupplierId", CascadeFrom = "SupplierId"), NotMapped]
        //[LinkingSetRelation(typeof(SuppliersPaymentInvoiceChargesRow), "SuppliersPaymentId", "InvoiceChargesId")]
        //[MinSelectLevel(SelectLevel.Details), QuickFilter(CssClass = "hidden-xs"), DisplayName("Invoice Charges")]
        //public List<Int32> InvoiceCharges
        //{
        //    get { return Fields.InvoiceCharges[this]; }
        //    set { Fields.InvoiceCharges[this] = value; }
        //}
        [DisplayName("Invoice Charges"), MasterDetailRelation(foreignKey: "SuppliersPaymentId"),  NotMapped]
        public List<SuppliersPaymentInvoiceChargesRow> InvoiceCharges
        {
            get { return Fields.InvoiceCharges[this]; }
            set { Fields.InvoiceCharges[this] = value; }
        }
        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Code;
            public DateTimeField Date;
            public Int32Field SupplierId;
            public DecimalField TotalAmount;

            public DecimalField OldBalance;

            public Int32Field PaymentType;
            public Int32Field AccountId;
            public Int32Field Status;
            public Int32Field StatusUser;

            public StringField DocumentNO;
            public StringField Description;

            public Int32Field Slno;

            public ListField<Int32> Invoices;

            //public ListField<Int32> InvoiceVehicleDetails;
            public RowListField<SuppliersPaymentInvoiceVehicleDetailsRow> InvoiceVehicleDetails;
            
            //public ListField<Int32> InvoiceCharges;
            public RowListField<SuppliersPaymentInvoiceChargesRow> InvoiceCharges;

            public RowListField<Accounts.Entities.PaymentRow> Payments;

            public StringField SupplierSupplierCode;
            public StringField SupplierSupplierName;
            public StringField SupplierAddress;
            public StringField SupplierPlace;
            public StringField SupplierTelephone;
            public StringField SupplierEmail;
            public StringField SupplierContactPerson;
            public StringField SupplierMobile;
            public DateTimeField SupplierCreationDate;
            public StringField SupplierDescription;

            public RowListField<PdcPaymentDetailsRow> PdcPaymentDetails;


            public Int32Field AccountType;
            public StringField AccountAccountName;
            public StringField AccountAccountNo;
            public StringField AccountBankName;
            public StringField AccountBrachName;
            public Int32Field AccountAccountHeadId;

            public StringField StatusUserUsername;
            public StringField StatusUserDisplayName;
            public StringField StatusUserEmail;
            public StringField StatusUserSource;
            public StringField StatusUserPasswordHash;
            public StringField StatusUserPasswordSalt;
            public DateTimeField StatusUserLastDirectoryUpdate;
            public StringField StatusUserUserImage;
            public DateTimeField StatusUserInsertDate;
            public Int32Field StatusUserInsertUserId;
            public DateTimeField StatusUserUpdateDate;
            public Int32Field StatusUserUpdateUserId;
            public Int16Field StatusUserIsActive;
        }
    }
}

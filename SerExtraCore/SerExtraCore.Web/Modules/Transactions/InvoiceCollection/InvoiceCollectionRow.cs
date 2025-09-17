
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

    [ConnectionKey("Default"), Module("Transactions"), TableName("[dbo].[InvoiceCollection]")]
    [DisplayName("Invoice Collection"), InstanceName("Invoice Collection")]
    [ReadPermission("Transactions:InvoiceCollection")]
    [ModifyPermission("Transactions:InvoiceCollection")]
    public sealed class InvoiceCollectionRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Trx Date"), NotNull,DefaultValue("today"),QuickFilter,QuickSearch,DateFormatter(DisplayFormat ="dd/MM/yyyy")]
        public DateTime? TrxDate
        {
            get { return Fields.TrxDate[this]; }
            set { Fields.TrxDate[this] = value; }
        }

        [DisplayName("Collection Number"), Size(200), NotNull, QuickSearch]
        public String CollectionNumber
        {
            get { return Fields.CollectionNumber[this]; }
            set { Fields.CollectionNumber[this] = value; }
        }

        [DisplayName("Customer"), NotNull, ForeignKey("[dbo].[Customers]", "Id"), LeftJoin("jCustomer"), TextualField("CustomerCustomerName")]
        [LookupEditor(typeof(CustomersRow), InplaceAdd = true)]
        public Int32? CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
        }

        [DisplayName("Total Amount"), NotNull,ReadOnly(true), Size(18), Scale(3),AuditLog]
        public Decimal? TotalAmount
        {
            get { return Fields.TotalAmount[this]; }
            set { Fields.TotalAmount[this] = value; }
        }

        [DisplayName("Payment Type"), NotNull,QuickSearch,QuickFilter]
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

        [DisplayName("Status"), NotNull,DefaultValue(1),QuickSearch,QuickFilter]
        public InvoiceStatus? Status
        {
            get { return (InvoiceStatus?)Fields.Status[this]; }
            set { Fields.Status[this] = (int?)value; }
        }

        [DisplayName("Status User"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jStatusUser"), TextualField("StatusUserUsername"),ReadOnly(true)]
        [LookupEditor(typeof(UserRow))]
        public Int32? StatusUser
        {
            get { return Fields.StatusUser[this]; }
            set { Fields.StatusUser[this] = value; }
        }

        [DisplayName("Customer Customer Code"), Expression("jCustomer.[CustomerCode]")]
        public String CustomerCustomerCode
        {
            get { return Fields.CustomerCustomerCode[this]; }
            set { Fields.CustomerCustomerCode[this] = value; }
        }

        [DisplayName("Customer Name"), Expression("jCustomer.[CustomerName]"),QuickFilter,QuickSearch]
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

        [DisplayName("Account Type"), Expression("jAccount.[Type]")]
        public Int32? AccountType
        {
            get { return Fields.AccountType[this]; }
            set { Fields.AccountType[this] = value; }
        }

        [DisplayName("Account Name"), Expression("jAccount.[AccountName]"),QuickFilter,QuickSearch]
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

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CollectionNumber; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public InvoiceCollectionRow()
            : base(Fields)
        {
        }
        [DisplayName("Detail List"), MasterDetailRelation(foreignKey: "InvoiceCollectionId"), NotMapped]
        public List<InvoiceCollectionDetailsRow> DetailList
        {
            get { return Fields.DetailList[this]; }
            set { Fields.DetailList[this] = value; }
        }
        [DisplayName("Receipts"), MasterDetailRelation(foreignKey: "InvoiceCollectionId"), NotMapped,AuditLog]
        [MinSelectLevel(SelectLevel.List)]
        public List<Accounts.Entities.ReceiptRow> Receipts
        {
            get { return Fields.Receipts[this]; }
            set { Fields.Receipts[this] = value; }
        }
        [DisplayName("SlNo"), NotMapped]
        public Int32? Slno
        {
            get { return Fields.Slno[this]; }
            set { Fields.Slno[this] = value; }
        }
        [DisplayName("PDC Receipt Details"), MasterDetailRelation(foreignKey: "InvoiceCollectionId"), NotMapped]
        public List<PdcPaymentDetailsRow> PdcPaymentDetails
        {
            get { return Fields.PdcPaymentDetails[this]; }
            set { Fields.PdcPaymentDetails[this] = value; }
        }
        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public DateTimeField TrxDate;
            public StringField CollectionNumber;
            public Int32Field CustomerId;
            public DecimalField TotalAmount;
            public Int32Field PaymentType;
            public Int32Field AccountId;
            public Int32Field Status;
            public Int32Field StatusUser;

            public Int32Field Slno;

            public RowListField<InvoiceCollectionDetailsRow> DetailList;

            public RowListField<Accounts.Entities.ReceiptRow> Receipts;

            public RowListField<PdcPaymentDetailsRow> PdcPaymentDetails;

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


namespace SerExtraCore.Accounts.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Accounts"), TableName("[dbo].[JournalEntries]")]
    [DisplayName("Contra"), InstanceName("Contra")]
    [ReadPermission("Accounts:Contra")]
    [ModifyPermission("Accounts:Contra")]
    public sealed class ContraRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("V Type"), NotNull]
        public Int32? VType
        {
            get { return Fields.VType[this]; }
            set { Fields.VType[this] = value; }
        }

        [DisplayName("Trx Date"), NotNull,DefaultValue("today"),QuickSearch,QuickFilter]
        public DateTime? TrxDate
        {
            get { return Fields.TrxDate[this]; }
            set { Fields.TrxDate[this] = value; }
        }

        [DisplayName("V No"), NotNull,QuickSearch]
        public Int32? VNo
        {
            get { return Fields.VNo[this]; }
            set { Fields.VNo[this] = value; }
        }

        [DisplayName("Customer"), ForeignKey("[dbo].[Customers]", "Id"), LeftJoin("jCustomer"), TextualField("CustomerCustomerCode")]
        public Int32? CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
        }

        [DisplayName("Employee"), ForeignKey("[dbo].[EmployeeMaster]", "Id"), LeftJoin("jEmployee"), TextualField("EmployeeEmployeeCode")]
        public Int32? EmployeeId
        {
            get { return Fields.EmployeeId[this]; }
            set { Fields.EmployeeId[this] = value; }
        }

        [DisplayName("Debit Account Head"), NotNull, ForeignKey("[dbo].[AccountHeads]", "ID"), LeftJoin("jDebitAccountHead"), TextualField("DebitAccountHeadCode")]
        public Int32? DebitAccountHeadId
        {
            get { return Fields.DebitAccountHeadId[this]; }
            set { Fields.DebitAccountHeadId[this] = value; }
        }

        [DisplayName("Credit Account Head"), NotNull, ForeignKey("[dbo].[AccountHeads]", "ID"), LeftJoin("jCreditAccountHead"), TextualField("CreditAccountHeadCode")]
        public Int32? CreditAccountHeadId
        {
            get { return Fields.CreditAccountHeadId[this]; }
            set { Fields.CreditAccountHeadId[this] = value; }
        }

        [DisplayName("Amount"), Size(18), Scale(3), NotNull]
        public Decimal? Amount
        {
            get { return Fields.Amount[this]; }
            set { Fields.Amount[this] = value; }
        }

        [DisplayName("Payment Method"), NotNull]
        public Int32? PaymentMethod
        {
            get { return Fields.PaymentMethod[this]; }
            set { Fields.PaymentMethod[this] = value; }
        }

        [DisplayName("Debit Account"), ForeignKey("[dbo].[Accounts]", "Id"), LeftJoin("jDebitAccount"), TextualField("DebitAccountAccountName")]
        [LookupEditor(typeof(AccountsRow)), QuickSearch, QuickFilter]
        [NotNull]
        public Int32? DebitAccountId
        {
            get { return Fields.DebitAccountId[this]; }
            set { Fields.DebitAccountId[this] = value; }
        }

        [DisplayName("Credit Account"), ForeignKey("[dbo].[Accounts]", "Id"), LeftJoin("jCreditAccount"), TextualField("CreditAccountAccountName")]
        [LookupEditor(typeof(AccountsRow)), QuickSearch, QuickFilter]
        [NotNull]
        public Int32? CreditAccountId
        {
            get { return Fields.CreditAccountId[this]; }
            set { Fields.CreditAccountId[this] = value; }
        }

        [DisplayName("Remarks"), Size(500), QuickSearch,TextAreaEditor]
        public String Remarks
        {
            get { return Fields.Remarks[this]; }
            set { Fields.Remarks[this] = value; }
        }

        [DisplayName("Invoice Collection"), ForeignKey("[dbo].[InvoiceCollection]", "Id"), LeftJoin("jInvoiceCollection"), TextualField("InvoiceCollectionCollectionNumber")]
        public Int32? InvoiceCollectionId
        {
            get { return Fields.InvoiceCollectionId[this]; }
            set { Fields.InvoiceCollectionId[this] = value; }
        }

        [DisplayName("Entity Type"), Size(255)]
        public String EntityType
        {
            get { return Fields.EntityType[this]; }
            set { Fields.EntityType[this] = value; }
        }

        [DisplayName("Customer Customer Code"), Expression("jCustomer.[CustomerCode]")]
        public String CustomerCustomerCode
        {
            get { return Fields.CustomerCustomerCode[this]; }
            set { Fields.CustomerCustomerCode[this] = value; }
        }

        [DisplayName("Customer Customer Name"), Expression("jCustomer.[CustomerName]")]
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

        [DisplayName("Employee Employee Code"), Expression("jEmployee.[EmployeeCode]")]
        public String EmployeeEmployeeCode
        {
            get { return Fields.EmployeeEmployeeCode[this]; }
            set { Fields.EmployeeEmployeeCode[this] = value; }
        }

        [DisplayName("Employee Employee Name"), Expression("jEmployee.[EmployeeName]")]
        public String EmployeeEmployeeName
        {
            get { return Fields.EmployeeEmployeeName[this]; }
            set { Fields.EmployeeEmployeeName[this] = value; }
        }

        [DisplayName("Employee Address"), Expression("jEmployee.[Address]")]
        public String EmployeeAddress
        {
            get { return Fields.EmployeeAddress[this]; }
            set { Fields.EmployeeAddress[this] = value; }
        }

        [DisplayName("Employee Country Id"), Expression("jEmployee.[CountryId]")]
        public Int32? EmployeeCountryId
        {
            get { return Fields.EmployeeCountryId[this]; }
            set { Fields.EmployeeCountryId[this] = value; }
        }

        [DisplayName("Employee Employee Status"), Expression("jEmployee.[EmployeeStatus]")]
        public Int32? EmployeeEmployeeStatus
        {
            get { return Fields.EmployeeEmployeeStatus[this]; }
            set { Fields.EmployeeEmployeeStatus[this] = value; }
        }

        [DisplayName("Employee Employee Type Id"), Expression("jEmployee.[EmployeeTypeId]")]
        public Int32? EmployeeEmployeeTypeId
        {
            get { return Fields.EmployeeEmployeeTypeId[this]; }
            set { Fields.EmployeeEmployeeTypeId[this] = value; }
        }

        [DisplayName("Employee Designation Id"), Expression("jEmployee.[DesignationId]")]
        public Int32? EmployeeDesignationId
        {
            get { return Fields.EmployeeDesignationId[this]; }
            set { Fields.EmployeeDesignationId[this] = value; }
        }

        [DisplayName("Employee Resident Id"), Expression("jEmployee.[ResidentID]")]
        public String EmployeeResidentId
        {
            get { return Fields.EmployeeResidentId[this]; }
            set { Fields.EmployeeResidentId[this] = value; }
        }

        [DisplayName("Employee Rid Expiry Date"), Expression("jEmployee.[RIDExpiryDate]")]
        public DateTime? EmployeeRidExpiryDate
        {
            get { return Fields.EmployeeRidExpiryDate[this]; }
            set { Fields.EmployeeRidExpiryDate[this] = value; }
        }

        [DisplayName("Employee Passport Number"), Expression("jEmployee.[PassportNumber]")]
        public String EmployeePassportNumber
        {
            get { return Fields.EmployeePassportNumber[this]; }
            set { Fields.EmployeePassportNumber[this] = value; }
        }

        [DisplayName("Employee Passport Expiry Date"), Expression("jEmployee.[PassportExpiryDate]")]
        public DateTime? EmployeePassportExpiryDate
        {
            get { return Fields.EmployeePassportExpiryDate[this]; }
            set { Fields.EmployeePassportExpiryDate[this] = value; }
        }

        [DisplayName("Employee Mobile Number"), Expression("jEmployee.[MobileNumber]")]
        public String EmployeeMobileNumber
        {
            get { return Fields.EmployeeMobileNumber[this]; }
            set { Fields.EmployeeMobileNumber[this] = value; }
        }

        [DisplayName("Employee Basic Salary"), Expression("jEmployee.[BasicSalary]")]
        public Decimal? EmployeeBasicSalary
        {
            get { return Fields.EmployeeBasicSalary[this]; }
            set { Fields.EmployeeBasicSalary[this] = value; }
        }

        [DisplayName("Employee Allowance"), Expression("jEmployee.[Allowance]")]
        public Decimal? EmployeeAllowance
        {
            get { return Fields.EmployeeAllowance[this]; }
            set { Fields.EmployeeAllowance[this] = value; }
        }

        [DisplayName("Debit Account Head Code"), Expression("jDebitAccountHead.[Code]")]
        public String DebitAccountHeadCode
        {
            get { return Fields.DebitAccountHeadCode[this]; }
            set { Fields.DebitAccountHeadCode[this] = value; }
        }

        [DisplayName("Debit Account Head Description"), Expression("jDebitAccountHead.[Description]")]
        public String DebitAccountHeadDescription
        {
            get { return Fields.DebitAccountHeadDescription[this]; }
            set { Fields.DebitAccountHeadDescription[this] = value; }
        }

        [DisplayName("Debit Account Head Parent Head Id"), Expression("jDebitAccountHead.[ParentHeadId]")]
        public Int32? DebitAccountHeadParentHeadId
        {
            get { return Fields.DebitAccountHeadParentHeadId[this]; }
            set { Fields.DebitAccountHeadParentHeadId[this] = value; }
        }

        [DisplayName("Debit Account Head Ledger Type"), Expression("jDebitAccountHead.[LedgerType]")]
        public Int32? DebitAccountHeadLedgerType
        {
            get { return Fields.DebitAccountHeadLedgerType[this]; }
            set { Fields.DebitAccountHeadLedgerType[this] = value; }
        }

        [DisplayName("Credit Account Head Code"), Expression("jCreditAccountHead.[Code]")]
        public String CreditAccountHeadCode
        {
            get { return Fields.CreditAccountHeadCode[this]; }
            set { Fields.CreditAccountHeadCode[this] = value; }
        }

        [DisplayName("Credit Account Head Description"), Expression("jCreditAccountHead.[Description]")]
        public String CreditAccountHeadDescription
        {
            get { return Fields.CreditAccountHeadDescription[this]; }
            set { Fields.CreditAccountHeadDescription[this] = value; }
        }

        [DisplayName("Credit Account Head Parent Head Id"), Expression("jCreditAccountHead.[ParentHeadId]")]
        public Int32? CreditAccountHeadParentHeadId
        {
            get { return Fields.CreditAccountHeadParentHeadId[this]; }
            set { Fields.CreditAccountHeadParentHeadId[this] = value; }
        }

        [DisplayName("Credit Account Head Ledger Type"), Expression("jCreditAccountHead.[LedgerType]")]
        public Int32? CreditAccountHeadLedgerType
        {
            get { return Fields.CreditAccountHeadLedgerType[this]; }
            set { Fields.CreditAccountHeadLedgerType[this] = value; }
        }

        [DisplayName("Debit Account Type"), Expression("jDebitAccount.[Type]")]
        public Int32? DebitAccountType
        {
            get { return Fields.DebitAccountType[this]; }
            set { Fields.DebitAccountType[this] = value; }
        }

        [DisplayName("Debit Account Name"), Expression("jDebitAccount.[AccountName]"),QuickSearch,QuickFilter]
        public String DebitAccountAccountName
        {
            get { return Fields.DebitAccountAccountName[this]; }
            set { Fields.DebitAccountAccountName[this] = value; }
        }

        [DisplayName("Debit Account Account No"), Expression("jDebitAccount.[AccountNo]")]
        public String DebitAccountAccountNo
        {
            get { return Fields.DebitAccountAccountNo[this]; }
            set { Fields.DebitAccountAccountNo[this] = value; }
        }

        [DisplayName("Debit Account Bank Name"), Expression("jDebitAccount.[BankName]")]
        public String DebitAccountBankName
        {
            get { return Fields.DebitAccountBankName[this]; }
            set { Fields.DebitAccountBankName[this] = value; }
        }

        [DisplayName("Debit Account Brach Name"), Expression("jDebitAccount.[BrachName]")]
        public String DebitAccountBrachName
        {
            get { return Fields.DebitAccountBrachName[this]; }
            set { Fields.DebitAccountBrachName[this] = value; }
        }

        [DisplayName("Debit Account Account Head Id"), Expression("jDebitAccount.[AccountHeadId]")]
        public Int32? DebitAccountAccountHeadId
        {
            get { return Fields.DebitAccountAccountHeadId[this]; }
            set { Fields.DebitAccountAccountHeadId[this] = value; }
        }

        [DisplayName("Credit Account Type"), Expression("jCreditAccount.[Type]")]
        public Int32? CreditAccountType
        {
            get { return Fields.CreditAccountType[this]; }
            set { Fields.CreditAccountType[this] = value; }
        }

        [DisplayName("Credit Account Name"), Expression("jCreditAccount.[AccountName]"),QuickFilter,QuickSearch]
        public String CreditAccountAccountName
        {
            get { return Fields.CreditAccountAccountName[this]; }
            set { Fields.CreditAccountAccountName[this] = value; }
        }

        [DisplayName("Credit Account Account No"), Expression("jCreditAccount.[AccountNo]")]
        public String CreditAccountAccountNo
        {
            get { return Fields.CreditAccountAccountNo[this]; }
            set { Fields.CreditAccountAccountNo[this] = value; }
        }

        [DisplayName("Credit Account Bank Name"), Expression("jCreditAccount.[BankName]")]
        public String CreditAccountBankName
        {
            get { return Fields.CreditAccountBankName[this]; }
            set { Fields.CreditAccountBankName[this] = value; }
        }

        [DisplayName("Credit Account Brach Name"), Expression("jCreditAccount.[BrachName]")]
        public String CreditAccountBrachName
        {
            get { return Fields.CreditAccountBrachName[this]; }
            set { Fields.CreditAccountBrachName[this] = value; }
        }

        [DisplayName("Credit Account Account Head Id"), Expression("jCreditAccount.[AccountHeadId]")]
        public Int32? CreditAccountAccountHeadId
        {
            get { return Fields.CreditAccountAccountHeadId[this]; }
            set { Fields.CreditAccountAccountHeadId[this] = value; }
        }

        [DisplayName("Invoice Collection Trx Date"), Expression("jInvoiceCollection.[TrxDate]")]
        public DateTime? InvoiceCollectionTrxDate
        {
            get { return Fields.InvoiceCollectionTrxDate[this]; }
            set { Fields.InvoiceCollectionTrxDate[this] = value; }
        }

        [DisplayName("Invoice Collection Collection Number"), Expression("jInvoiceCollection.[CollectionNumber]")]
        public String InvoiceCollectionCollectionNumber
        {
            get { return Fields.InvoiceCollectionCollectionNumber[this]; }
            set { Fields.InvoiceCollectionCollectionNumber[this] = value; }
        }

        [DisplayName("Invoice Collection Customer Id"), Expression("jInvoiceCollection.[CustomerId]")]
        public Int32? InvoiceCollectionCustomerId
        {
            get { return Fields.InvoiceCollectionCustomerId[this]; }
            set { Fields.InvoiceCollectionCustomerId[this] = value; }
        }

        [DisplayName("Invoice Collection Total Amount"), Expression("jInvoiceCollection.[TotalAmount]")]
        public Int32? InvoiceCollectionTotalAmount
        {
            get { return Fields.InvoiceCollectionTotalAmount[this]; }
            set { Fields.InvoiceCollectionTotalAmount[this] = value; }
        }

        [DisplayName("Invoice Collection Payment Type"), Expression("jInvoiceCollection.[PaymentType]")]
        public Int32? InvoiceCollectionPaymentType
        {
            get { return Fields.InvoiceCollectionPaymentType[this]; }
            set { Fields.InvoiceCollectionPaymentType[this] = value; }
        }

        [DisplayName("Invoice Collection Account Id"), Expression("jInvoiceCollection.[AccountId]")]
        public Int32? InvoiceCollectionAccountId
        {
            get { return Fields.InvoiceCollectionAccountId[this]; }
            set { Fields.InvoiceCollectionAccountId[this] = value; }
        }

        [DisplayName("Invoice Collection Status"), Expression("jInvoiceCollection.[Status]")]
        public Int32? InvoiceCollectionStatus
        {
            get { return Fields.InvoiceCollectionStatus[this]; }
            set { Fields.InvoiceCollectionStatus[this] = value; }
        }

        [DisplayName("Invoice Collection Status User"), Expression("jInvoiceCollection.[StatusUser]")]
        public Int32? InvoiceCollectionStatusUser
        {
            get { return Fields.InvoiceCollectionStatusUser[this]; }
            set { Fields.InvoiceCollectionStatusUser[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Remarks; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ContraRow()
            : base(Fields)
        {
        }
        [DisplayName("SlNo"), NotMapped]
        public Int32? Slno
        {
            get { return Fields.Slno[this]; }
            set { Fields.Slno[this] = value; }
        }
        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field VType;
            public DateTimeField TrxDate;
            public Int32Field VNo;
            public Int32Field CustomerId;
            public Int32Field EmployeeId;
            public Int32Field DebitAccountHeadId;
            public Int32Field CreditAccountHeadId;
            public DecimalField Amount;
            public Int32Field PaymentMethod;
            public Int32Field DebitAccountId;
            public Int32Field CreditAccountId;
            public StringField Remarks;
            public Int32Field InvoiceCollectionId;
            public StringField EntityType;

            public Int32Field Slno;

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

            public StringField EmployeeEmployeeCode;
            public StringField EmployeeEmployeeName;
            public StringField EmployeeAddress;
            public Int32Field EmployeeCountryId;
            public Int32Field EmployeeEmployeeStatus;
            public Int32Field EmployeeEmployeeTypeId;
            public Int32Field EmployeeDesignationId;
            public StringField EmployeeResidentId;
            public DateTimeField EmployeeRidExpiryDate;
            public StringField EmployeePassportNumber;
            public DateTimeField EmployeePassportExpiryDate;
            public StringField EmployeeMobileNumber;
            public DecimalField EmployeeBasicSalary;
            public DecimalField EmployeeAllowance;

            public StringField DebitAccountHeadCode;
            public StringField DebitAccountHeadDescription;
            public Int32Field DebitAccountHeadParentHeadId;
            public Int32Field DebitAccountHeadLedgerType;

            public StringField CreditAccountHeadCode;
            public StringField CreditAccountHeadDescription;
            public Int32Field CreditAccountHeadParentHeadId;
            public Int32Field CreditAccountHeadLedgerType;

            public Int32Field DebitAccountType;
            public StringField DebitAccountAccountName;
            public StringField DebitAccountAccountNo;
            public StringField DebitAccountBankName;
            public StringField DebitAccountBrachName;
            public Int32Field DebitAccountAccountHeadId;

            public Int32Field CreditAccountType;
            public StringField CreditAccountAccountName;
            public StringField CreditAccountAccountNo;
            public StringField CreditAccountBankName;
            public StringField CreditAccountBrachName;
            public Int32Field CreditAccountAccountHeadId;

            public DateTimeField InvoiceCollectionTrxDate;
            public StringField InvoiceCollectionCollectionNumber;
            public Int32Field InvoiceCollectionCustomerId;
            public Int32Field InvoiceCollectionTotalAmount;
            public Int32Field InvoiceCollectionPaymentType;
            public Int32Field InvoiceCollectionAccountId;
            public Int32Field InvoiceCollectionStatus;
            public Int32Field InvoiceCollectionStatusUser;
        }
    }
}

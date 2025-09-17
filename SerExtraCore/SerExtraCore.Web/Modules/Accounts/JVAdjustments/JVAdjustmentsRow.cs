
namespace SerExtraCore.Accounts.Entities
{
    using SerExtraCore.Master.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;
    using System.Collections.Generic;

    [ConnectionKey("Default"), Module("Accounts"), TableName("[dbo].[JournalEntries]")]
    [DisplayName("Journal Entry"), InstanceName("Journal Entry")]
    [ReadPermission("Accounts:JournalEntry")]
    [ModifyPermission("Accounts:JournalEntry")]
    public sealed class JVAdjustmentsRow : Row, IIdRow, INameRow
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

        //[DisplayName("FreightId"),LookupInclude]
        //public Int32? FreightId
        //{
        //    get { return Fields.FreightId[this]; }
        //    set { Fields.FreightId[this] = value; }
        //}
        //[DisplayName("Receipts"), MasterDetailRelation(foreignKey: "FreightId"), NotMapped, AuditLog]
        //[MinSelectLevel(SelectLevel.List)]
        //public List<Accounts.Entities.ReceiptRow> FreightId
        //{
        //    get { return Fields.FreightId[this]; }
        //    set { Fields.FreightId[this] = value; }
        //}

        [DisplayName("Trx Date"), NotNull, DefaultValue("today"), QuickSearch, QuickFilter]
        public DateTime? TrxDate
        {
            get { return Fields.TrxDate[this]; }
            set { Fields.TrxDate[this] = value; }
        }

        [DisplayName("V No"), NotNull, QuickSearch]
        public Int32? VNo
        {
            get { return Fields.VNo[this]; }
            set { Fields.VNo[this] = value; }
        }

        [DisplayName("Customer"), ForeignKey("[dbo].[Customers]", "Id"), LeftJoin("jCustomer"), TextualField("CustomerCustomerCode")]
        [LookupEditor(typeof(CustomersRow), InplaceAdd = true)]
        public Int32? CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
        }

        [DisplayName("Employee"), ForeignKey("[dbo].[EmployeeMaster]", "Id"), LeftJoin("jEmployee"), TextualField("EmployeeEmployeeCode")]
        [LookupEditor(typeof(EmployeeMasterRow), InplaceAdd = true)]
        public Int32? EmployeeId
        {
            get { return Fields.EmployeeId[this]; }
            set { Fields.EmployeeId[this] = value; }
        }

        [DisplayName("Debit Ledger"), NotNull, ForeignKey("[dbo].[AccountHeads]", "ID"), LeftJoin("jDebitAccountHead"), TextualField("DebitAccountHeadDescription")]
        [LookupEditor(typeof(Accounts.Entities.AccountHeadsRow))]
        public Int32? DebitAccountHeadId
        {
            get { return Fields.DebitAccountHeadId[this]; }
            set { Fields.DebitAccountHeadId[this] = value; }
        }

        [DisplayName("Credit Ledger"), NotNull, ForeignKey("[dbo].[AccountHeads]", "ID"), LeftJoin("jCreditAccountHead"), TextualField("CreditAccountHeadDescription")]
        [LookupEditor(typeof(Accounts.Entities.AccountHeadsRow))]
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
        public AccountTypes? PaymentMethod
        {
            get { return (AccountTypes?)Fields.PaymentMethod[this]; }
            set { Fields.PaymentMethod[this] = (int?)value; }
        }

        [DisplayName("Debit Account"), ForeignKey("[dbo].[Accounts]", "Id"), LeftJoin("jDebitAccount"), TextualField("DebitAccountAccountName")]

        [LookupEditor(typeof(AccountsRow), CascadeField = "AccountHeadId", CascadeFrom = "DebitAccountHeadId")]
        public Int32? DebitAccountId
        {
            get { return Fields.DebitAccountId[this]; }
            set { Fields.DebitAccountId[this] = value; }
        }

        [DisplayName("Credit Account"), ForeignKey("[dbo].[Accounts]", "Id"), LeftJoin("jCreditAccount"), TextualField("CreditAccountAccountName")]
        [LookupEditor(typeof(AccountsRow), CascadeField = "AccountHeadId", CascadeFrom = "CreditAccountHeadId")]
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

        [DisplayName("Supplier Payment"), ForeignKey("[dbo].[SuppliersPayment]", "Id"), LeftJoin("jSupplierPayment"), TextualField("SupplierPaymentCode")]
        public Int32? SupplierPaymentId
        {
            get { return Fields.SupplierPaymentId[this]; }
            set { Fields.SupplierPaymentId[this] = value; }
        }

        [DisplayName("Supplier"), ForeignKey("[dbo].[Supplier]", "Id"), LeftJoin("jSupplier"), TextualField("SupplierSupplierCode")]
        public Int32? SupplierId
        {
            get { return Fields.SupplierId[this]; }
            set { Fields.SupplierId[this] = value; }
        }

        [DisplayName("Consignment"), ForeignKey("[dbo].[Consignment]", "Id"), LeftJoin("jConsignment"), TextualField("ConsignmentWayBillNo")]
        public Int32? ConsignmentId
        {
            get { return Fields.ConsignmentId[this]; }
            set { Fields.ConsignmentId[this] = value; }
        }

        [DisplayName("Vehicle"), ForeignKey("[dbo].[Vehicles]", "Id"), LeftJoin("jVehicle"), TextualField("VehicleVehicleNumber")]
        [LookupEditor(typeof(VehiclesRow), InplaceAdd = true)]
        public Int32? VehicleId
        {
            get { return Fields.VehicleId[this]; }
            set { Fields.VehicleId[this] = value; }
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

        [DisplayName("Employee Employee Code"), Expression("jEmployee.[EmployeeCode]")]
        public String EmployeeEmployeeCode
        {
            get { return Fields.EmployeeEmployeeCode[this]; }
            set { Fields.EmployeeEmployeeCode[this] = value; }
        }

        [DisplayName("Employee Name"), Expression("jEmployee.[EmployeeName]")]
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

        [DisplayName("Debit Ledger"), Expression("jDebitAccountHead.[Description]")]
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

        [DisplayName("Credit Ledger"), Expression("jCreditAccountHead.[Description]")]
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

        [DisplayName("Debit Account"), Expression("jDebitAccount.[AccountName]")]
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

        [DisplayName("Credit Account"), Expression("jCreditAccount.[AccountName]")]
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
        public Decimal? InvoiceCollectionTotalAmount
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

        [DisplayName("Supplier Payment Code"), Expression("jSupplierPayment.[Code]")]
        public String SupplierPaymentCode
        {
            get { return Fields.SupplierPaymentCode[this]; }
            set { Fields.SupplierPaymentCode[this] = value; }
        }

        [DisplayName("Supplier Payment Date"), Expression("jSupplierPayment.[Date]")]
        public DateTime? SupplierPaymentDate
        {
            get { return Fields.SupplierPaymentDate[this]; }
            set { Fields.SupplierPaymentDate[this] = value; }
        }

        [DisplayName("Supplier Payment Supplier Id"), Expression("jSupplierPayment.[SupplierId]")]
        public Int32? SupplierPaymentSupplierId
        {
            get { return Fields.SupplierPaymentSupplierId[this]; }
            set { Fields.SupplierPaymentSupplierId[this] = value; }
        }

        [DisplayName("Supplier Payment Total Amount"), Expression("jSupplierPayment.[TotalAmount]")]
        public Decimal? SupplierPaymentTotalAmount
        {
            get { return Fields.SupplierPaymentTotalAmount[this]; }
            set { Fields.SupplierPaymentTotalAmount[this] = value; }
        }

        [DisplayName("Supplier Payment Payment Type"), Expression("jSupplierPayment.[PaymentType]")]
        public Int32? SupplierPaymentPaymentType
        {
            get { return Fields.SupplierPaymentPaymentType[this]; }
            set { Fields.SupplierPaymentPaymentType[this] = value; }
        }

        [DisplayName("Supplier Payment Account Id"), Expression("jSupplierPayment.[AccountId]")]
        public Int32? SupplierPaymentAccountId
        {
            get { return Fields.SupplierPaymentAccountId[this]; }
            set { Fields.SupplierPaymentAccountId[this] = value; }
        }

        [DisplayName("Supplier Payment Status"), Expression("jSupplierPayment.[Status]")]
        public Int32? SupplierPaymentStatus
        {
            get { return Fields.SupplierPaymentStatus[this]; }
            set { Fields.SupplierPaymentStatus[this] = value; }
        }

        [DisplayName("Supplier Payment Status User"), Expression("jSupplierPayment.[StatusUser]")]
        public Int32? SupplierPaymentStatusUser
        {
            get { return Fields.SupplierPaymentStatusUser[this]; }
            set { Fields.SupplierPaymentStatusUser[this] = value; }
        }

        [DisplayName("Supplier Supplier Code"), Expression("jSupplier.[SupplierCode]")]
        public String SupplierSupplierCode
        {
            get { return Fields.SupplierSupplierCode[this]; }
            set { Fields.SupplierSupplierCode[this] = value; }
        }

        [DisplayName("Supplier Supplier Name"), Expression("jSupplier.[SupplierName]")]
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

        [DisplayName("Consignment Status"), Expression("jConsignment.[Status]")]
        public Int32? ConsignmentStatus
        {
            get { return Fields.ConsignmentStatus[this]; }
            set { Fields.ConsignmentStatus[this] = value; }
        }

        [DisplayName("Consignment Payment Mode"), Expression("jConsignment.[PaymentMode]")]
        public Int32? ConsignmentPaymentMode
        {
            get { return Fields.ConsignmentPaymentMode[this]; }
            set { Fields.ConsignmentPaymentMode[this] = value; }
        }

        [DisplayName("Consignment Billing"), Expression("jConsignment.[Billing]")]
        public Int32? ConsignmentBilling
        {
            get { return Fields.ConsignmentBilling[this]; }
            set { Fields.ConsignmentBilling[this] = value; }
        }

        [DisplayName("Consignment Start Date"), Expression("jConsignment.[StartDate]")]
        public DateTime? ConsignmentStartDate
        {
            get { return Fields.ConsignmentStartDate[this]; }
            set { Fields.ConsignmentStartDate[this] = value; }
        }

        [DisplayName("Consignment End Date"), Expression("jConsignment.[EndDate]")]
        public DateTime? ConsignmentEndDate
        {
            get { return Fields.ConsignmentEndDate[this]; }
            set { Fields.ConsignmentEndDate[this] = value; }
        }

        [DisplayName("Consignment Supplier Amount"), Expression("jConsignment.[SupplierAmount]")]
        public Decimal? ConsignmentSupplierAmount
        {
            get { return Fields.ConsignmentSupplierAmount[this]; }
            set { Fields.ConsignmentSupplierAmount[this] = value; }
        }

        [DisplayName("Consignment Supplier Id"), Expression("jConsignment.[SupplierId]")]
        public Int32? ConsignmentSupplierId
        {
            get { return Fields.ConsignmentSupplierId[this]; }
            set { Fields.ConsignmentSupplierId[this] = value; }
        }

        [DisplayName("Vehicle Type Of Vehicle"), Expression("jVehicle.[TypeOfVehicle]")]
        public Int32? VehicleTypeOfVehicle
        {
            get { return Fields.VehicleTypeOfVehicle[this]; }
            set { Fields.VehicleTypeOfVehicle[this] = value; }
        }

        [DisplayName("Vehicle Through"), Expression("jVehicle.[Through]")]
        public Int32? VehicleThrough
        {
            get { return Fields.VehicleThrough[this]; }
            set { Fields.VehicleThrough[this] = value; }
        }

        [DisplayName("Vehicle Number"), Expression("jVehicle.[VehicleNumber]")]
        public String VehicleVehicleNumber
        {
            get { return Fields.VehicleVehicleNumber[this]; }
            set { Fields.VehicleVehicleNumber[this] = value; }
        }

        [DisplayName("Vehicle Vehicle Model"), Expression("jVehicle.[VehicleModel]")]
        public Int32? VehicleVehicleModel
        {
            get { return Fields.VehicleVehicleModel[this]; }
            set { Fields.VehicleVehicleModel[this] = value; }
        }

        [DisplayName("Vehicle Registraion Number"), Expression("jVehicle.[RegistraionNumber]")]
        public String VehicleRegistraionNumber
        {
            get { return Fields.VehicleRegistraionNumber[this]; }
            set { Fields.VehicleRegistraionNumber[this] = value; }
        }

        [DisplayName("Vehicle Description"), Expression("jVehicle.[Description]")]
        public String VehicleDescription
        {
            get { return Fields.VehicleDescription[this]; }
            set { Fields.VehicleDescription[this] = value; }
        }

        [DisplayName("Vehicle Registration Date"), Expression("jVehicle.[RegistrationDate]")]
        public DateTime? VehicleRegistrationDate
        {
            get { return Fields.VehicleRegistrationDate[this]; }
            set { Fields.VehicleRegistrationDate[this] = value; }
        }

        [DisplayName("Vehicle Expiry Date"), Expression("jVehicle.[ExpiryDate]")]
        public DateTime? VehicleExpiryDate
        {
            get { return Fields.VehicleExpiryDate[this]; }
            set { Fields.VehicleExpiryDate[this] = value; }
        }

        [DisplayName("Vehicle Driver"), Expression("jVehicle.[Driver]")]
        public Int32? VehicleDriver
        {
            get { return Fields.VehicleDriver[this]; }
            set { Fields.VehicleDriver[this] = value; }
        }

        [DisplayName("Vehicle Pdo Approved"), Expression("jVehicle.[PDOApproved]")]
        public Boolean? VehiclePdoApproved
        {
            get { return Fields.VehiclePdoApproved[this]; }
            set { Fields.VehiclePdoApproved[this] = value; }
        }

        [DisplayName("Vehicle Prime Mover"), Expression("jVehicle.[PrimeMover]")]
        public String VehiclePrimeMover
        {
            get { return Fields.VehiclePrimeMover[this]; }
            set { Fields.VehiclePrimeMover[this] = value; }
        }

        [DisplayName("Vehicle Supplier Id"), Expression("jVehicle.[SupplierId]")]
        public Int32? VehicleSupplierId
        {
            get { return Fields.VehicleSupplierId[this]; }
            set { Fields.VehicleSupplierId[this] = value; }
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

        public JVAdjustmentsRow()
            : base(Fields)
        {
        }
        [DisplayName("SlNo"), NotMapped]
        public Int32? Slno
        {
            get { return Fields.Slno[this]; }
            set { Fields.Slno[this] = value; }
        }

        [DisplayName("Opening Customer"), ForeignKey("[dbo].[Customers]", "Id"), LeftJoin("jOpeningCustomer")]
        public Int32? OpeningCustomerId
        {
            get { return Fields.OpeningCustomerId[this]; }
            set { Fields.OpeningCustomerId[this] = value; }
        }

        [DisplayName("Opening Supplier"), ForeignKey("[dbo].[Supplier]", "Id"), LeftJoin("jOpeningSupplier")]
        public Int32? OpeningSupplierId
        {
            get { return Fields.OpeningSupplierId[this]; }
            set { Fields.OpeningSupplierId[this] = value; }
        }

        [DisplayName("Supplier"), ForeignKey("[dbo].[Supplier]", "Id"), LeftJoin("Supplier")]
        [LookupEditor(typeof(SupplierRow), InplaceAdd = true)]
        public Int32? DebitSupplierId
        {
            get { return Fields.DebitSupplierId[this]; }
            set { Fields.DebitSupplierId[this] = value; }
        }

        //credit parties

        [DisplayName("Supplier"), ForeignKey("[dbo].[Supplier]", "Id"), LeftJoin("JCSupplier")]
        [LookupEditor(typeof(SupplierRow), InplaceAdd = true)]
        public Int32? CreditSupplierId
        {
            get { return Fields.CreditSupplierId[this]; }
            set { Fields.CreditSupplierId[this] = value; }
        }

        [DisplayName("Employee"), ForeignKey("[dbo].[EmployeeMaster]", "Id"), LeftJoin("jCEmployee")]
        [LookupEditor(typeof(EmployeeMasterRow), InplaceAdd = true)]
        public Int32? CreditEmployeeId
        {
            get { return Fields.CreditEmployeeId[this]; }
            set { Fields.CreditEmployeeId[this] = value; }
        }

        [DisplayName("Vehicle"), ForeignKey("[dbo].[Vehicles]", "Id"), LeftJoin("jCVehicle")]
        [LookupEditor(typeof(VehiclesRow), InplaceAdd = true)]
        public Int32? CreditVehicleId
        {
            get { return Fields.CreditVehicleId[this]; }
            set { Fields.CreditVehicleId[this] = value; }
        }
        [DisplayName("Customer"), ForeignKey("[dbo].[Customers]", "Id"), LeftJoin("jCCustomer")]
        [LookupEditor(typeof(CustomersRow), InplaceAdd = true)]
        public Int32? CreditCustomerId
        {
            get { return Fields.CreditCustomerId[this]; }
            set { Fields.CreditCustomerId[this] = value; }
        }
        [DisplayName("Bank Reconciliation")]
        public Boolean? BankReconciliation
        {
            get { return Fields.BankReconciliation[this]; }
            set { Fields.BankReconciliation[this] = value; }
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
            public Int32Field SupplierPaymentId;
            public Int32Field SupplierId;
            public Int32Field ConsignmentId;
            public Int32Field VehicleId;

            public Int32Field Slno;

            public Int32Field OpeningCustomerId;
            public Int32Field OpeningSupplierId;


            public Int32Field DebitSupplierId;

            //credit parties
            public Int32Field CreditSupplierId;
            public Int32Field CreditCustomerId;
            public Int32Field CreditVehicleId;
            public Int32Field CreditEmployeeId;

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
            public DecimalField InvoiceCollectionTotalAmount;
            public Int32Field InvoiceCollectionPaymentType;
            public Int32Field InvoiceCollectionAccountId;
            public Int32Field InvoiceCollectionStatus;
            public Int32Field InvoiceCollectionStatusUser;

            public StringField SupplierPaymentCode;
            public DateTimeField SupplierPaymentDate;
            public Int32Field SupplierPaymentSupplierId;
            public DecimalField SupplierPaymentTotalAmount;
            public Int32Field SupplierPaymentPaymentType;
            public Int32Field SupplierPaymentAccountId;
            public Int32Field SupplierPaymentStatus;
            public Int32Field SupplierPaymentStatusUser;

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
            public Int32Field ConsignmentStatus;
            public Int32Field ConsignmentPaymentMode;
            public Int32Field ConsignmentBilling;
            public DateTimeField ConsignmentStartDate;
            public DateTimeField ConsignmentEndDate;
            public DecimalField ConsignmentSupplierAmount;
            public Int32Field ConsignmentSupplierId;

            public Int32Field VehicleTypeOfVehicle;
            public Int32Field VehicleThrough;
            public StringField VehicleVehicleNumber;
            public Int32Field VehicleVehicleModel;
            public StringField VehicleRegistraionNumber;
            public StringField VehicleDescription;
            public DateTimeField VehicleRegistrationDate;
            public DateTimeField VehicleExpiryDate;
            public Int32Field VehicleDriver;
            public BooleanField VehiclePdoApproved;
            public StringField VehiclePrimeMover;
            public Int32Field VehicleSupplierId;

            public BooleanField BankReconciliation;

           // public Int32Field FreightId;
        }
    }
}

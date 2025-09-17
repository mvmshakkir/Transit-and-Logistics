
namespace SerExtraCore.Administration.Entities
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

    [ConnectionKey("Default"), Module("Administration"), TableName("[dbo].[Configuration]")]
    [DisplayName("Configuration"), InstanceName("Configuration")]
    [ReadPermission("Administration:Configuration")]
    [ModifyPermission("Administration:Configuration")]
    [LookupScript(Permission ="*")]
    public sealed class ConfigurationRow : Row, IIdRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Invoice Collection Ledger"), NotNull, ForeignKey("[dbo].[AccountHeads]", "ID"), LeftJoin("jInvoiceCollectionLedger"), TextualField("InvoiceCollectionLedgerCode")]
        [LookupEditor(typeof(AccountHeadsRow), InplaceAdd = true)]
        public Int32? InvoiceCollectionLedgerId
        {
            get { return Fields.InvoiceCollectionLedgerId[this]; }
            set { Fields.InvoiceCollectionLedgerId[this] = value; }
        }

        [DisplayName("Invoice Collection Ledger Code"), Expression("jInvoiceCollectionLedger.[Code]")]
        public String InvoiceCollectionLedgerCode
        {
            get { return Fields.InvoiceCollectionLedgerCode[this]; }
            set { Fields.InvoiceCollectionLedgerCode[this] = value; }
        }

        [DisplayName("Invoice Collection Ledger Description"), Expression("jInvoiceCollectionLedger.[Description]")]
        public String InvoiceCollectionLedgerDescription
        {
            get { return Fields.InvoiceCollectionLedgerDescription[this]; }
            set { Fields.InvoiceCollectionLedgerDescription[this] = value; }
        }

        [DisplayName("Invoice Collection Ledger Parent Head Id"), Expression("jInvoiceCollectionLedger.[ParentHeadId]")]
        public Int32? InvoiceCollectionLedgerParentHeadId
        {
            get { return Fields.InvoiceCollectionLedgerParentHeadId[this]; }
            set { Fields.InvoiceCollectionLedgerParentHeadId[this] = value; }
        }

        [DisplayName("Invoice Collection Ledger Ledger Type"), Expression("jInvoiceCollectionLedger.[LedgerType]")]
        public Int32? InvoiceCollectionLedgerLedgerType
        {
            get { return Fields.InvoiceCollectionLedgerLedgerType[this]; }
            set { Fields.InvoiceCollectionLedgerLedgerType[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ConfigurationRow()
            : base(Fields)
        {
        }

        [DisplayName("Invoice Collection Approval Hierarchy"), ForeignKey("[dbo].[UserHierarchy]", "Id"), LeftJoin("jCollectionUserHierarchy")]
        [LookupEditor(typeof(UserHierarchyRow), InplaceAdd = true)]
        public Int32? InvoiceCollectionApprovalHierarchyId
        {
            get { return Fields.InvoiceCollectionApprovalHierarchyId[this]; }
            set { Fields.InvoiceCollectionApprovalHierarchyId[this] = value; }
        }

        [DisplayName("Invoice Approval Hierarchy"), ForeignKey("[dbo].[UserHierarchy]", "Id"), LeftJoin("jInvoiceUserHierarchy")]
        [LookupEditor(typeof(UserHierarchyRow), InplaceAdd = true)]
        public Int32? InvoiceApprovalHierarchyId
        {
            get { return Fields.InvoiceApprovalHierarchyId[this]; }
            set { Fields.InvoiceApprovalHierarchyId[this] = value; }
        }

        [DisplayName("Default Currency"), ForeignKey("[dbo].[Currencies]", "Id"), LeftJoin("jDefaultCurrencies")]
        [LookupEditor(typeof(CurrenciesRow), InplaceAdd = true)]
        public Int32? DefaultCurrency
        {
            get { return Fields.DefaultCurrency[this]; }
            set { Fields.DefaultCurrency[this] = value; }
        }

        [DisplayName("Supplier Payment Ledger"), NotNull, ForeignKey("[dbo].[AccountHeads]", "ID"), LeftJoin("jSupplierPaymentLedger"), TextualField("InvoiceCollectionLedgerCode")]
        [LookupEditor(typeof(AccountHeadsRow), InplaceAdd = true)]
        public Int32? SupplierPaymentLedgerId
        {
            get { return Fields.SupplierPaymentLedgerId[this]; }
            set { Fields.SupplierPaymentLedgerId[this] = value; }
        }

        [DisplayName("Bank Name"), Size(300)]
        public String BankName
        {
            get { return Fields.BankName[this]; }
            set { Fields.BankName[this] = value; }
        }
        [DisplayName("Account Name"), Size(300)]
        public String AccountName
        {
            get { return Fields.AccountName[this]; }
            set { Fields.AccountName[this] = value; }
        }
        [DisplayName("Swift Code"), Size(300)]
        public String SwiftCode
        {
            get { return Fields.SwiftCode[this]; }
            set { Fields.SwiftCode[this] = value; }
        }
        [DisplayName("Account Number"), Size(300)]
        public String AccountNumber
        {
            get { return Fields.AccountNumber[this]; }
            set { Fields.AccountNumber[this] = value; }
        }
        [DisplayName("Iban No"), Size(300)]
        public String IbanNo
        {
            get { return Fields.IbanNo[this]; }
            set { Fields.IbanNo[this] = value; }
        }

        [DisplayName("PDC Withdrawals Ledger"), ForeignKey("[dbo].[AccountHeads]", "ID"), LeftJoin("jPDCWithdrawalsLedger")]
        [LookupEditor(typeof(AccountHeadsRow), InplaceAdd = true)]
        public Int32? PDCWithdrawalsLedger
        {
            get { return Fields.PDCWithdrawalsLedger[this]; }
            set { Fields.PDCWithdrawalsLedger[this] = value; }
        }
        [DisplayName("PDC Deposits Ledger"), ForeignKey("[dbo].[AccountHeads]", "ID"), LeftJoin("jPDCDepositsLedger")]
        [LookupEditor(typeof(AccountHeadsRow), InplaceAdd = true)]
        public Int32? PDCDepositsLedger
        {
            get { return Fields.PDCDepositsLedger[this]; }
            set { Fields.PDCDepositsLedger[this] = value; }
        }

        [DisplayName("Shipper"),NotNull]
        public Boolean? Shipper
        {
            get { return Fields.Shipper[this]; }
            set { Fields.Shipper[this] = value; }
        }
        [DisplayName("Consignee"), NotNull]
        public Boolean? Consignee
        {
            get { return Fields.Consignee[this]; }
            set { Fields.Consignee[this] = value; }
        }

        [DisplayName("Salary Ledger"), NotNull, ForeignKey("[dbo].[AccountHeads]", "ID"), LeftJoin("jSalaryLedger")]
        [LookupEditor(typeof(AccountHeadsRow), InplaceAdd = true)]
        public Int32? SalaryLedgerId
        {
            get { return Fields.SalaryLedgerId[this]; }
            set { Fields.SalaryLedgerId[this] = value; }
        }
        [DisplayName("Tax Registration Number"), Size(500), QuickSearch]
        public String TaxRegNo
        {
            get { return Fields.TaxRegNo[this]; }
            set { Fields.TaxRegNo[this] = value; }
        }
        [DisplayName("Invoice Remarks"), Size(500),TextAreaEditor]
        public String InvoiceRemarks
        {
            get { return Fields.InvoiceRemarks[this]; }
            set { Fields.InvoiceRemarks[this] = value; }
        }
        [DisplayName("Quotation Prefix"), Size(500), QuickSearch,LookupInclude]
        public String QuotationPrefix
        {
            get { return Fields.QuotationPrefix[this]; }
            set { Fields.QuotationPrefix[this] = value; }
        }
        [DisplayName("KSA Terms & Conditions"), Size(5000), HtmlContentEditor]
        public String KSATermsAndConditions
        {
            get { return Fields.KSATermsAndConditions[this]; }
            set { Fields.KSATermsAndConditions[this] = value; }
        }
        [DisplayName("PDO Terms & Conditions"), Size(5000), HtmlContentEditor]
        public String PDOTermsAndConditions
        {
            get { return Fields.PDOTermsAndConditions[this]; }
            set { Fields.PDOTermsAndConditions[this] = value; }
        }
        [DisplayName("UAE Terms & Conditions"), Size(5000), HtmlContentEditor]
        public String UAETermsAndConditions
        {
            get { return Fields.UAETermsAndConditions[this]; }
            set { Fields.UAETermsAndConditions[this] = value; }
        }
        [DisplayName("Customer Opening Ledger"), ForeignKey("[dbo].[AccountHeads]", "ID"), LeftJoin("jCustomerOpeningLedger")]
        [LookupEditor(typeof(AccountHeadsRow), InplaceAdd = true)]
        public Int32? CustomerOpeningLedgerId
        {
            get { return Fields.CustomerOpeningLedgerId[this]; }
            set { Fields.CustomerOpeningLedgerId[this] = value; }
        }
        [DisplayName("Supplier Opening Ledger"), ForeignKey("[dbo].[AccountHeads]", "ID"), LeftJoin("jSupplierOpeningLedger")]
        [LookupEditor(typeof(AccountHeadsRow), InplaceAdd = true)]
        public Int32? SupplierOpeningLedgerId
        {
            get { return Fields.SupplierOpeningLedgerId[this]; }
            set { Fields.SupplierOpeningLedgerId[this] = value; }
        }

        [DisplayName("Opening Ledger"), ForeignKey("[dbo].[AccountHeads]", "ID"), LeftJoin("jOpeningLedger")]
        [LookupEditor(typeof(AccountHeadsRow), InplaceAdd = true)]
        public Int32? OpeningLedgerId
        {
            get { return Fields.OpeningLedgerId[this]; }
            set { Fields.OpeningLedgerId[this] = value; }
        }

        [DisplayName("Purchase Ledger"), ForeignKey("[dbo].[AccountHeads]", "ID"), LeftJoin("jPurchaseLedger")]
        [LookupEditor(typeof(AccountHeadsRow), InplaceAdd = true)]
        public Int32? PurchaseLedgerId
        {
            get { return Fields.PurchaseLedgerId[this]; }
            set { Fields.PurchaseLedgerId[this] = value; }
        }

        [DisplayName("Tax Ledger"), ForeignKey("[dbo].[AccountHeads]", "ID"), LeftJoin("jTaxLedger")]
        [LookupEditor(typeof(AccountHeadsRow), InplaceAdd = true)]
        public Int32? TaxLedgerId
        {
            get { return Fields.TaxLedgerId[this]; }
            set { Fields.TaxLedgerId[this] = value; }
        }
        [DisplayName("Invoice Ledger"), ForeignKey("[dbo].[AccountHeads]", "ID"), LeftJoin("jInvoiceLedger")]
        [LookupEditor(typeof(AccountHeadsRow), InplaceAdd = true)]
        public Int32? InvoiceLedgerId
        {
            get { return Fields.InvoiceLedgerId[this]; }
            set { Fields.InvoiceLedgerId[this] = value; }
        }
        [DisplayName("Charges Ledger"), ForeignKey("[dbo].[AccountHeads]", "ID"), LeftJoin("jChargesLedger")]
        [LookupEditor(typeof(AccountHeadsRow), InplaceAdd = true)]
        public Int32? ChargesLedgerId
        {
            get { return Fields.ChargesLedgerId[this]; }
            set { Fields.ChargesLedgerId[this] = value; }
        }
        [DisplayName("Receivable Ledger"), ForeignKey("[dbo].[AccountHeads]", "ID"), LeftJoin("jReceivableLedger")]
        [LookupEditor(typeof(AccountHeadsRow), InplaceAdd = true)]
        public Int32? ReceivableLedgerId
        {
            get { return Fields.ReceivableLedgerId[this]; }
            set { Fields.ReceivableLedgerId[this] = value; }
        }

        [DisplayName("Driver Advance Ledger"), ForeignKey("[dbo].[AccountHeads]", "ID"), LeftJoin("jDriverAdvanceLedger")]
        [LookupEditor(typeof(AccountHeadsRow), InplaceAdd = true)]
        public Int32? DriverAdvanceLedgerId
        {
            get { return Fields.DriverAdvanceLedgerId[this]; }
            set { Fields.DriverAdvanceLedgerId[this] = value; }
        }

        [DisplayName("Report Header"), Size(5000), HtmlContentEditor,LookupInclude]
        public String ReportHeader
        {
            get { return Fields.ReportHeader[this]; }
            set { Fields.ReportHeader[this] = value; }
        }
        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field InvoiceCollectionLedgerId;

            public Int32Field SupplierPaymentLedgerId;

            public Int32Field PDCWithdrawalsLedger;
            public Int32Field PDCDepositsLedger;

            public Int32Field PurchaseLedgerId;

            public Int32Field InvoiceCollectionApprovalHierarchyId;
            public Int32Field InvoiceApprovalHierarchyId;

            public Int32Field DefaultCurrency;

            public Int32Field TaxLedgerId;

            public BooleanField Shipper;
            public BooleanField Consignee;

            public StringField TaxRegNo;
            public StringField QuotationPrefix;


            public StringField BankName;
            public StringField AccountName;
            public StringField SwiftCode;
            public StringField AccountNumber;
            public StringField IbanNo;

            public StringField InvoiceRemarks;


            public Int32Field SalaryLedgerId;
            public Int32Field InvoiceLedgerId;
            public Int32Field ChargesLedgerId;
            public Int32Field ReceivableLedgerId;
            public Int32Field DriverAdvanceLedgerId;

            public Int32Field OpeningLedgerId;
            public Int32Field CustomerOpeningLedgerId;
            public Int32Field SupplierOpeningLedgerId;


            public StringField KSATermsAndConditions;
            public StringField PDOTermsAndConditions;
            public StringField UAETermsAndConditions;

            public StringField ReportHeader;

            public StringField InvoiceCollectionLedgerCode;
            public StringField InvoiceCollectionLedgerDescription;
            public Int32Field InvoiceCollectionLedgerParentHeadId;
            public Int32Field InvoiceCollectionLedgerLedgerType;


        }
    }
}

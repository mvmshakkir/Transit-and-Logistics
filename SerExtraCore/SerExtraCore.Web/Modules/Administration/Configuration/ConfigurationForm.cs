
namespace SerExtraCore.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.Configuration")]
    [BasedOnRow(typeof(Entities.ConfigurationRow), CheckNames = true)]
    public class ConfigurationForm
    {
        [Tab("Configuration")]
        [HalfWidth]

        public Int32 InvoiceCollectionApprovalHierarchyId { get; set; }
        [HalfWidth]
        public Int32 InvoiceApprovalHierarchyId { get; set; }

      
        [HalfWidth]
        public String QuotationPrefix{ get; set; }
        [HalfWidth]
        public Int32 DefaultCurrency { get; set; }
        [HalfWidth]
        public String BankName { get; set; }
        [HalfWidth]
        public String AccountName { get; set; }
        [HalfWidth]
        public String SwiftCode { get; set; }
        [HalfWidth]
        public String AccountNumber { get; set; }
        [HalfWidth]
        public String IbanNo { get; set; }

        public String TaxRegNo { get; set; }
        public String InvoiceRemarks { get; set; }
        [Category("Fields")]
        [HalfWidth]
        public Boolean Shipper { get; set; }
        [HalfWidth]
        public Boolean Consignee { get; set; }

        

        [Category("Terms & Conditions")]
        [Tab("KSA")]
        public String KSATermsAndConditions { get; set; }
        [Tab("PDO")]
        public String PDOTermsAndConditions { get; set; }
        [Tab("UAE")]
        public String UAETermsAndConditions { get; set; }

        [Tab("Ledger")]

        [Category("Opening Ledger")]
        [HalfWidth]
        public Int32 CustomerOpeningLedgerId { get; set; }
        [HalfWidth]
        public Int32 SupplierOpeningLedgerId { get; set; }
        [HalfWidth]
        public Int32 OpeningLedgerId { get; set; }

        [Category("Other Ledger")]
        [HalfWidth]
        public Int32 InvoiceCollectionLedgerId { get; set; }
        [HalfWidth]
        public Int32 SupplierPaymentLedgerId { get; set; }
        [HalfWidth]
        public Int32 PDCWithdrawalsLedger { get; set; }
        [HalfWidth]
        public Int32 PDCDepositsLedger { get; set; }

        [HalfWidth]
        public Int32 SalaryLedgerId { get; set; }

        [HalfWidth]
        public Int32 PurchaseLedgerId { get; set; }
        [HalfWidth]
        public Int32? TaxLedgerId { get; set; }
        [HalfWidth]
        public Int32? InvoiceLedgerId { get; set; }
        [HalfWidth]
        public Int32? ReceivableLedgerId { get; set; }
        [HalfWidth]
        public Int32? ChargesLedgerId { get; set; }
        [HalfWidth]
        public Int32? DriverAdvanceLedgerId { get; set; }
        [Tab("Report Header")]
        public String ReportHeader { get; set; }
    }
}
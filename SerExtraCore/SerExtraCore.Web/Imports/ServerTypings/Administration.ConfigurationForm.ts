namespace SerExtraCore.Administration {
    export interface ConfigurationForm {
        InvoiceCollectionApprovalHierarchyId: Serenity.LookupEditor;
        InvoiceApprovalHierarchyId: Serenity.LookupEditor;
        QuotationPrefix: Serenity.StringEditor;
        DefaultCurrency: Serenity.LookupEditor;
        BankName: Serenity.StringEditor;
        AccountName: Serenity.StringEditor;
        SwiftCode: Serenity.StringEditor;
        AccountNumber: Serenity.StringEditor;
        IbanNo: Serenity.StringEditor;
        TaxRegNo: Serenity.StringEditor;
        InvoiceRemarks: Serenity.TextAreaEditor;
        Shipper: Serenity.BooleanEditor;
        Consignee: Serenity.BooleanEditor;
        KSATermsAndConditions: Serenity.HtmlContentEditor;
        PDOTermsAndConditions: Serenity.HtmlContentEditor;
        UAETermsAndConditions: Serenity.HtmlContentEditor;
        CustomerOpeningLedgerId: Serenity.LookupEditor;
        SupplierOpeningLedgerId: Serenity.LookupEditor;
        OpeningLedgerId: Serenity.LookupEditor;
        InvoiceCollectionLedgerId: Serenity.LookupEditor;
        SupplierPaymentLedgerId: Serenity.LookupEditor;
        PDCWithdrawalsLedger: Serenity.LookupEditor;
        PDCDepositsLedger: Serenity.LookupEditor;
        SalaryLedgerId: Serenity.LookupEditor;
        PurchaseLedgerId: Serenity.LookupEditor;
        TaxLedgerId: Serenity.LookupEditor;
        InvoiceLedgerId: Serenity.LookupEditor;
        ReceivableLedgerId: Serenity.LookupEditor;
        ChargesLedgerId: Serenity.LookupEditor;
        DriverAdvanceLedgerId: Serenity.LookupEditor;
        ReportHeader: Serenity.HtmlContentEditor;
    }

    export class ConfigurationForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Administration.Configuration';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ConfigurationForm.init)  {
                ConfigurationForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.TextAreaEditor;
                var w3 = s.BooleanEditor;
                var w4 = s.HtmlContentEditor;

                Q.initFormType(ConfigurationForm, [
                    'InvoiceCollectionApprovalHierarchyId', w0,
                    'InvoiceApprovalHierarchyId', w0,
                    'QuotationPrefix', w1,
                    'DefaultCurrency', w0,
                    'BankName', w1,
                    'AccountName', w1,
                    'SwiftCode', w1,
                    'AccountNumber', w1,
                    'IbanNo', w1,
                    'TaxRegNo', w1,
                    'InvoiceRemarks', w2,
                    'Shipper', w3,
                    'Consignee', w3,
                    'KSATermsAndConditions', w4,
                    'PDOTermsAndConditions', w4,
                    'UAETermsAndConditions', w4,
                    'CustomerOpeningLedgerId', w0,
                    'SupplierOpeningLedgerId', w0,
                    'OpeningLedgerId', w0,
                    'InvoiceCollectionLedgerId', w0,
                    'SupplierPaymentLedgerId', w0,
                    'PDCWithdrawalsLedger', w0,
                    'PDCDepositsLedger', w0,
                    'SalaryLedgerId', w0,
                    'PurchaseLedgerId', w0,
                    'TaxLedgerId', w0,
                    'InvoiceLedgerId', w0,
                    'ReceivableLedgerId', w0,
                    'ChargesLedgerId', w0,
                    'DriverAdvanceLedgerId', w0,
                    'ReportHeader', w4
                ]);
            }
        }
    }
}
namespace SerExtraCore.Administration {
    export interface ConfigurationRow {
        Id?: number;
        InvoiceCollectionLedgerId?: number;
        SupplierPaymentLedgerId?: number;
        PDCWithdrawalsLedger?: number;
        PDCDepositsLedger?: number;
        PurchaseLedgerId?: number;
        InvoiceCollectionApprovalHierarchyId?: number;
        InvoiceApprovalHierarchyId?: number;
        DefaultCurrency?: number;
        TaxLedgerId?: number;
        Shipper?: boolean;
        Consignee?: boolean;
        TaxRegNo?: string;
        QuotationPrefix?: string;
        BankName?: string;
        AccountName?: string;
        SwiftCode?: string;
        AccountNumber?: string;
        IbanNo?: string;
        InvoiceRemarks?: string;
        SalaryLedgerId?: number;
        InvoiceLedgerId?: number;
        ChargesLedgerId?: number;
        ReceivableLedgerId?: number;
        DriverAdvanceLedgerId?: number;
        OpeningLedgerId?: number;
        CustomerOpeningLedgerId?: number;
        SupplierOpeningLedgerId?: number;
        KSATermsAndConditions?: string;
        PDOTermsAndConditions?: string;
        UAETermsAndConditions?: string;
        ReportHeader?: string;
        InvoiceCollectionLedgerCode?: string;
        InvoiceCollectionLedgerDescription?: string;
        InvoiceCollectionLedgerParentHeadId?: number;
        InvoiceCollectionLedgerLedgerType?: number;
    }

    export namespace ConfigurationRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Administration.Configuration';
        export const lookupKey = 'Administration.Configuration';

        export function getLookup(): Q.Lookup<ConfigurationRow> {
            return Q.getLookup<ConfigurationRow>('Administration.Configuration');
        }
        export const deletePermission = 'Administration:Configuration';
        export const insertPermission = 'Administration:Configuration';
        export const readPermission = 'Administration:Configuration';
        export const updatePermission = 'Administration:Configuration';

        export declare const enum Fields {
            Id = "Id",
            InvoiceCollectionLedgerId = "InvoiceCollectionLedgerId",
            SupplierPaymentLedgerId = "SupplierPaymentLedgerId",
            PDCWithdrawalsLedger = "PDCWithdrawalsLedger",
            PDCDepositsLedger = "PDCDepositsLedger",
            PurchaseLedgerId = "PurchaseLedgerId",
            InvoiceCollectionApprovalHierarchyId = "InvoiceCollectionApprovalHierarchyId",
            InvoiceApprovalHierarchyId = "InvoiceApprovalHierarchyId",
            DefaultCurrency = "DefaultCurrency",
            TaxLedgerId = "TaxLedgerId",
            Shipper = "Shipper",
            Consignee = "Consignee",
            TaxRegNo = "TaxRegNo",
            QuotationPrefix = "QuotationPrefix",
            BankName = "BankName",
            AccountName = "AccountName",
            SwiftCode = "SwiftCode",
            AccountNumber = "AccountNumber",
            IbanNo = "IbanNo",
            InvoiceRemarks = "InvoiceRemarks",
            SalaryLedgerId = "SalaryLedgerId",
            InvoiceLedgerId = "InvoiceLedgerId",
            ChargesLedgerId = "ChargesLedgerId",
            ReceivableLedgerId = "ReceivableLedgerId",
            DriverAdvanceLedgerId = "DriverAdvanceLedgerId",
            OpeningLedgerId = "OpeningLedgerId",
            CustomerOpeningLedgerId = "CustomerOpeningLedgerId",
            SupplierOpeningLedgerId = "SupplierOpeningLedgerId",
            KSATermsAndConditions = "KSATermsAndConditions",
            PDOTermsAndConditions = "PDOTermsAndConditions",
            UAETermsAndConditions = "UAETermsAndConditions",
            ReportHeader = "ReportHeader",
            InvoiceCollectionLedgerCode = "InvoiceCollectionLedgerCode",
            InvoiceCollectionLedgerDescription = "InvoiceCollectionLedgerDescription",
            InvoiceCollectionLedgerParentHeadId = "InvoiceCollectionLedgerParentHeadId",
            InvoiceCollectionLedgerLedgerType = "InvoiceCollectionLedgerLedgerType"
        }
    }
}

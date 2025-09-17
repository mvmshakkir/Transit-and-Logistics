namespace SerExtraCore.PDCPayments {
    export interface PdcPaymentDetailsRow {
        Id?: number;
        PdcPaymentsId?: number;
        Date?: string;
        ChequeNo?: string;
        Amount?: number;
        Receipts?: Accounts.ReceiptRow[];
        Payment?: Accounts.PaymentRow[];
        PaymentType?: AccountTypes;
        AccountId?: number;
        ChequeStatus?: ChequeStatus;
        StatusDate?: string;
        ChequeType?: ChequeType;
        SuppliersPaymentId?: number;
        InvoiceCollectionId?: number;
        ConsignmentAdvanceId?: number;
        PurchaseId?: number;
        MoneyInOutId?: number;
        AccountAccountName?: string;
        PdcPaymentsPdcNumber?: string;
        PdcPaymentsTrxDate?: string;
        PdcPaymentsCompany?: string;
        PdcPaymentsStartDate?: string;
        PdcPaymentsInstallments?: number;
        PdcPaymentsEndDate?: string;
        PdcPaymentsInstallmentAmount?: number;
        PdcPaymentsNotes?: string;
    }

    export namespace PdcPaymentDetailsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'ChequeNo';
        export const localTextPrefix = 'PDCPayments.PdcPaymentDetails';
        export const deletePermission = 'PDCPayments:PdcPayments';
        export const insertPermission = 'PDCPayments:PdcPayments';
        export const readPermission = 'PDCPayments:PdcPayments';
        export const updatePermission = 'PDCPayments:PdcPayments';

        export declare const enum Fields {
            Id = "Id",
            PdcPaymentsId = "PdcPaymentsId",
            Date = "Date",
            ChequeNo = "ChequeNo",
            Amount = "Amount",
            Receipts = "Receipts",
            Payment = "Payment",
            PaymentType = "PaymentType",
            AccountId = "AccountId",
            ChequeStatus = "ChequeStatus",
            StatusDate = "StatusDate",
            ChequeType = "ChequeType",
            SuppliersPaymentId = "SuppliersPaymentId",
            InvoiceCollectionId = "InvoiceCollectionId",
            ConsignmentAdvanceId = "ConsignmentAdvanceId",
            PurchaseId = "PurchaseId",
            MoneyInOutId = "MoneyInOutId",
            AccountAccountName = "AccountAccountName",
            PdcPaymentsPdcNumber = "PdcPaymentsPdcNumber",
            PdcPaymentsTrxDate = "PdcPaymentsTrxDate",
            PdcPaymentsCompany = "PdcPaymentsCompany",
            PdcPaymentsStartDate = "PdcPaymentsStartDate",
            PdcPaymentsInstallments = "PdcPaymentsInstallments",
            PdcPaymentsEndDate = "PdcPaymentsEndDate",
            PdcPaymentsInstallmentAmount = "PdcPaymentsInstallmentAmount",
            PdcPaymentsNotes = "PdcPaymentsNotes"
        }
    }
}

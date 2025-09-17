namespace SerExtraCore.Transactions {
    export interface PurchaseRow {
        Id?: number;
        TrxDate?: string;
        RefNo?: string;
        TotalAmount?: number;
        PurchaseDetails?: PurchaseDetailsRow[];
        SupplierId?: number;
        SupplierName?: string;
        PaymentMode?: ConsignmentPaymentMode;
        PaidAmount?: number;
        PaymentType?: PymentTypes;
        AccountId?: number;
        AccountAccountName?: string;
        PdcPaymentDetails?: PDCPayments.PdcPaymentDetailsRow[];
        Payment?: Accounts.PaymentRow[];
    }

    export namespace PurchaseRow {
        export const idProperty = 'Id';
        export const nameProperty = 'RefNo';
        export const localTextPrefix = 'Transactions.Purchase';
        export const deletePermission = 'Transactions:Purchase';
        export const insertPermission = 'Transactions:Purchase';
        export const readPermission = 'Transactions:Purchase';
        export const updatePermission = 'Transactions:Purchase';

        export declare const enum Fields {
            Id = "Id",
            TrxDate = "TrxDate",
            RefNo = "RefNo",
            TotalAmount = "TotalAmount",
            PurchaseDetails = "PurchaseDetails",
            SupplierId = "SupplierId",
            SupplierName = "SupplierName",
            PaymentMode = "PaymentMode",
            PaidAmount = "PaidAmount",
            PaymentType = "PaymentType",
            AccountId = "AccountId",
            AccountAccountName = "AccountAccountName",
            PdcPaymentDetails = "PdcPaymentDetails",
            Payment = "Payment"
        }
    }
}

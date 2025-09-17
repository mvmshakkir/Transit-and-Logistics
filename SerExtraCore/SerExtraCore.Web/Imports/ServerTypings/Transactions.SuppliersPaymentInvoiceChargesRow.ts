namespace SerExtraCore.Transactions {
    export interface SuppliersPaymentInvoiceChargesRow {
        Id?: number;
        SuppliersPaymentId?: number;
        InvoiceChargesId?: number;
        InvoiceChargeFullName?: string;
        Amount?: number;
        SuppliersPaymentCode?: string;
        SuppliersPaymentDate?: string;
        SuppliersPaymentSupplierId?: number;
        SuppliersPaymentTotalAmount?: number;
        SuppliersPaymentPaymentType?: number;
        SuppliersPaymentAccountId?: number;
        SuppliersPaymentStatus?: number;
        SuppliersPaymentStatusUser?: number;
        SuppliersPaymentOldBalance?: number;
        SuppliersPaymentDocumentNo?: string;
        SuppliersPaymentDescription?: string;
        InvoiceChargesInvoiceId?: number;
        InvoiceChargesChargeId?: number;
        InvoiceChargesDescription?: string;
        InvoiceChargesAmount?: number;
        InvoiceChargesQty?: number;
        InvoiceChargesTotalAmount?: number;
        InvoiceChargesCurrencyId?: number;
        InvoiceChargesExchangeRate?: number;
        InvoiceChargesTotalAmountInLocalCurrency?: number;
        InvoiceChargesDate?: string;
        InvoiceChargesInvoiceVehicleDetailId?: number;
    }

    export namespace SuppliersPaymentInvoiceChargesRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Transactions.SuppliersPaymentInvoiceCharges';
        export const lookupKey = 'Transactions.SuppliersPaymentInvoiceCharges';

        export function getLookup(): Q.Lookup<SuppliersPaymentInvoiceChargesRow> {
            return Q.getLookup<SuppliersPaymentInvoiceChargesRow>('Transactions.SuppliersPaymentInvoiceCharges');
        }
        export const deletePermission = 'Transactions:SuppliersPayment';
        export const insertPermission = 'Transactions:SuppliersPayment';
        export const readPermission = 'Transactions:SuppliersPayment';
        export const updatePermission = 'Transactions:SuppliersPayment';

        export declare const enum Fields {
            Id = "Id",
            SuppliersPaymentId = "SuppliersPaymentId",
            InvoiceChargesId = "InvoiceChargesId",
            InvoiceChargeFullName = "InvoiceChargeFullName",
            Amount = "Amount",
            SuppliersPaymentCode = "SuppliersPaymentCode",
            SuppliersPaymentDate = "SuppliersPaymentDate",
            SuppliersPaymentSupplierId = "SuppliersPaymentSupplierId",
            SuppliersPaymentTotalAmount = "SuppliersPaymentTotalAmount",
            SuppliersPaymentPaymentType = "SuppliersPaymentPaymentType",
            SuppliersPaymentAccountId = "SuppliersPaymentAccountId",
            SuppliersPaymentStatus = "SuppliersPaymentStatus",
            SuppliersPaymentStatusUser = "SuppliersPaymentStatusUser",
            SuppliersPaymentOldBalance = "SuppliersPaymentOldBalance",
            SuppliersPaymentDocumentNo = "SuppliersPaymentDocumentNo",
            SuppliersPaymentDescription = "SuppliersPaymentDescription",
            InvoiceChargesInvoiceId = "InvoiceChargesInvoiceId",
            InvoiceChargesChargeId = "InvoiceChargesChargeId",
            InvoiceChargesDescription = "InvoiceChargesDescription",
            InvoiceChargesAmount = "InvoiceChargesAmount",
            InvoiceChargesQty = "InvoiceChargesQty",
            InvoiceChargesTotalAmount = "InvoiceChargesTotalAmount",
            InvoiceChargesCurrencyId = "InvoiceChargesCurrencyId",
            InvoiceChargesExchangeRate = "InvoiceChargesExchangeRate",
            InvoiceChargesTotalAmountInLocalCurrency = "InvoiceChargesTotalAmountInLocalCurrency",
            InvoiceChargesDate = "InvoiceChargesDate",
            InvoiceChargesInvoiceVehicleDetailId = "InvoiceChargesInvoiceVehicleDetailId"
        }
    }
}

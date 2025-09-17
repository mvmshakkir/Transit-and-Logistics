namespace SerExtraCore.Transactions {
    export interface PurchaseDetailsRow {
        Id?: number;
        PurchaseId?: number;
        ProductId?: number;
        UnitPrice?: number;
        Quantity?: number;
        TotalAmount?: number;
        DisPer?: number;
        DisAmount?: number;
        TaxableAmount?: number;
        TaxPer?: number;
        TaxAmount?: number;
        LineTotal?: number;
        PurchaseTrxDate?: string;
        PurchaseRefNo?: string;
        PurchaseTotalAmount?: number;
        ProductProductCode?: string;
        ProductProductName?: string;
        ProductUnitPrice?: number;
    }

    export namespace PurchaseDetailsRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Transactions.PurchaseDetails';
        export const deletePermission = 'Transactions:Purchase';
        export const insertPermission = 'Transactions:Purchase';
        export const readPermission = 'Transactions:Purchase';
        export const updatePermission = 'Transactions:Purchase';

        export declare const enum Fields {
            Id = "Id",
            PurchaseId = "PurchaseId",
            ProductId = "ProductId",
            UnitPrice = "UnitPrice",
            Quantity = "Quantity",
            TotalAmount = "TotalAmount",
            DisPer = "DisPer",
            DisAmount = "DisAmount",
            TaxableAmount = "TaxableAmount",
            TaxPer = "TaxPer",
            TaxAmount = "TaxAmount",
            LineTotal = "LineTotal",
            PurchaseTrxDate = "PurchaseTrxDate",
            PurchaseRefNo = "PurchaseRefNo",
            PurchaseTotalAmount = "PurchaseTotalAmount",
            ProductProductCode = "ProductProductCode",
            ProductProductName = "ProductProductName",
            ProductUnitPrice = "ProductUnitPrice"
        }
    }
}

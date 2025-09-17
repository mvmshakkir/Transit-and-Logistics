namespace SerExtraCore.Transactions {
    export interface InvoiceCollectionDetailsRow {
        Id?: number;
        InvoiceCollectionId?: number;
        InvoiceId?: number;
        Amount?: number;
        ChequeNumber?: string;
        ChequeDate?: string;
        InvoiceCollectionTrxDate?: string;
        InvoiceCollectionCollectionNumber?: string;
        InvoiceCollectionCustomerId?: number;
        InvoiceCollectionTotalAmount?: number;
        InvoiceCollectionPaymentType?: number;
        InvoiceCollectionAccountId?: number;
        InvoiceCollectionStatus?: number;
        InvoiceCollectionStatusUser?: number;
        InvoiceInvoiceDate?: string;
        InvoiceInvoiceNo?: string;
        InvoiceConsignmentId?: number;
        InvoiceConsignmentDate?: string;
        InvoiceWayBillNo?: string;
        InvoiceJobNo?: string;
        InvoiceClientJobNo?: string;
        InvoiceShipperId?: number;
        InvoiceConsigneeId?: number;
        InvoiceVehicleId?: number;
        InvoiceType?: string;
        InvoiceVehicleNumber?: string;
        InvoiceDriver?: number;
        InvoicePayment?: number;
        InvoiceTypeOfPkg?: string;
        InvoiceTotalVolume?: string;
        InvoiceTotalWeight?: string;
        InvoiceTotalNoOfPkgs?: string;
        InvoiceShippingAreaFrom?: number;
        InvoiceShippingAreaTo?: number;
        InvoiceTotalAmount?: number;
        InvoiceDriverKmFrom?: number;
        InvoiceDriverKmTo?: number;
        InvoiceGpskmFrom?: number;
        InvoiceGpskmTo?: number;
        InvoiceStatus?: number;
        InvoiceStatusUser?: number;
        InvoicePaymentStatus?: number;
    }

    export namespace InvoiceCollectionDetailsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'ChequeNumber';
        export const localTextPrefix = 'Transactions.InvoiceCollectionDetails';
        export const deletePermission = 'Transactions:InvoiceCollection';
        export const insertPermission = 'Transactions:InvoiceCollection';
        export const readPermission = 'Transactions:InvoiceCollection';
        export const updatePermission = 'Transactions:InvoiceCollection';

        export declare const enum Fields {
            Id = "Id",
            InvoiceCollectionId = "InvoiceCollectionId",
            InvoiceId = "InvoiceId",
            Amount = "Amount",
            ChequeNumber = "ChequeNumber",
            ChequeDate = "ChequeDate",
            InvoiceCollectionTrxDate = "InvoiceCollectionTrxDate",
            InvoiceCollectionCollectionNumber = "InvoiceCollectionCollectionNumber",
            InvoiceCollectionCustomerId = "InvoiceCollectionCustomerId",
            InvoiceCollectionTotalAmount = "InvoiceCollectionTotalAmount",
            InvoiceCollectionPaymentType = "InvoiceCollectionPaymentType",
            InvoiceCollectionAccountId = "InvoiceCollectionAccountId",
            InvoiceCollectionStatus = "InvoiceCollectionStatus",
            InvoiceCollectionStatusUser = "InvoiceCollectionStatusUser",
            InvoiceInvoiceDate = "InvoiceInvoiceDate",
            InvoiceInvoiceNo = "InvoiceInvoiceNo",
            InvoiceConsignmentId = "InvoiceConsignmentId",
            InvoiceConsignmentDate = "InvoiceConsignmentDate",
            InvoiceWayBillNo = "InvoiceWayBillNo",
            InvoiceJobNo = "InvoiceJobNo",
            InvoiceClientJobNo = "InvoiceClientJobNo",
            InvoiceShipperId = "InvoiceShipperId",
            InvoiceConsigneeId = "InvoiceConsigneeId",
            InvoiceVehicleId = "InvoiceVehicleId",
            InvoiceType = "InvoiceType",
            InvoiceVehicleNumber = "InvoiceVehicleNumber",
            InvoiceDriver = "InvoiceDriver",
            InvoicePayment = "InvoicePayment",
            InvoiceTypeOfPkg = "InvoiceTypeOfPkg",
            InvoiceTotalVolume = "InvoiceTotalVolume",
            InvoiceTotalWeight = "InvoiceTotalWeight",
            InvoiceTotalNoOfPkgs = "InvoiceTotalNoOfPkgs",
            InvoiceShippingAreaFrom = "InvoiceShippingAreaFrom",
            InvoiceShippingAreaTo = "InvoiceShippingAreaTo",
            InvoiceTotalAmount = "InvoiceTotalAmount",
            InvoiceDriverKmFrom = "InvoiceDriverKmFrom",
            InvoiceDriverKmTo = "InvoiceDriverKmTo",
            InvoiceGpskmFrom = "InvoiceGpskmFrom",
            InvoiceGpskmTo = "InvoiceGpskmTo",
            InvoiceStatus = "InvoiceStatus",
            InvoiceStatusUser = "InvoiceStatusUser",
            InvoicePaymentStatus = "InvoicePaymentStatus"
        }
    }
}

namespace SerExtraCore.Transactions {
    export interface InvoiceTripDatesRow {
        Id?: number;
        InvoiceId?: number;
        StartDate?: string;
        EndDate?: string;
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
        InvoicePaymentMode?: number;
        InvoiceBilling?: number;
        InvoiceStartDate?: string;
        InvoiceEndDate?: string;
    }

    export namespace InvoiceTripDatesRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Transactions.InvoiceTripDates';
        export const deletePermission = 'Transactions:Invoice';
        export const insertPermission = 'Transactions:Invoice';
        export const readPermission = 'Transactions:Invoice';
        export const updatePermission = 'Transactions:Invoice';

        export declare const enum Fields {
            Id = "Id",
            InvoiceId = "InvoiceId",
            StartDate = "StartDate",
            EndDate = "EndDate",
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
            InvoicePaymentStatus = "InvoicePaymentStatus",
            InvoicePaymentMode = "InvoicePaymentMode",
            InvoiceBilling = "InvoiceBilling",
            InvoiceStartDate = "InvoiceStartDate",
            InvoiceEndDate = "InvoiceEndDate"
        }
    }
}

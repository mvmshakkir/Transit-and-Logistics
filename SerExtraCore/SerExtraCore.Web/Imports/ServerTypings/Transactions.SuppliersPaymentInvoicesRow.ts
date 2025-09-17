namespace SerExtraCore.Transactions {
    export interface SuppliersPaymentInvoicesRow {
        Id?: number;
        SuppliersPaymentId?: number;
        InvoiceId?: number;
        SuppliersPaymentCode?: string;
        SuppliersPaymentDate?: string;
        SuppliersPaymentSupplierId?: number;
        SuppliersPaymentTotalAmount?: number;
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
        InvoiceSupplierAmount?: number;
        InvoiceSupplierId?: number;
        InvoiceSupplierPaymentStatus?: number;
    }

    export namespace SuppliersPaymentInvoicesRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Transactions.SuppliersPaymentInvoices';
        export const deletePermission = 'Transactions:SuppliersPayment';
        export const insertPermission = 'Transactions:SuppliersPayment';
        export const readPermission = 'Transactions:SuppliersPayment';
        export const updatePermission = 'Transactions:SuppliersPayment';

        export declare const enum Fields {
            Id = "Id",
            SuppliersPaymentId = "SuppliersPaymentId",
            InvoiceId = "InvoiceId",
            SuppliersPaymentCode = "SuppliersPaymentCode",
            SuppliersPaymentDate = "SuppliersPaymentDate",
            SuppliersPaymentSupplierId = "SuppliersPaymentSupplierId",
            SuppliersPaymentTotalAmount = "SuppliersPaymentTotalAmount",
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
            InvoiceEndDate = "InvoiceEndDate",
            InvoiceSupplierAmount = "InvoiceSupplierAmount",
            InvoiceSupplierId = "InvoiceSupplierId",
            InvoiceSupplierPaymentStatus = "InvoiceSupplierPaymentStatus"
        }
    }
}

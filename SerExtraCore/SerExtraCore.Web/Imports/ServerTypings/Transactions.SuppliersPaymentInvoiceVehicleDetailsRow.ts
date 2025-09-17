namespace SerExtraCore.Transactions {
    export interface SuppliersPaymentInvoiceVehicleDetailsRow {
        Id?: number;
        SuppliersPaymentId?: number;
        InvoiceVehicleDetailId?: number;
        Amount?: number;
        SuppliersPaymentCode?: string;
        SuppliersPaymentDate?: string;
        SuppliersPaymentSupplierId?: number;
        SuppliersPaymentTotalAmount?: number;
        SuppliersPaymentPaymentType?: number;
        SuppliersPaymentAccountId?: number;
        SuppliersPaymentStatus?: number;
        SuppliersPaymentStatusUser?: number;
        InvoiceVehicleDetailInvoiceId?: number;
        InvoiceVehicleDetailFullName?: string;
        InvoiceVehicleDetailVehicleId?: number;
        InvoiceVehicleDetailType?: string;
        InvoiceVehicleDetailVehicleNumber?: string;
        InvoiceVehicleDetailDriver?: number;
        InvoiceVehicleDetailShippingAreaFrom?: number;
        InvoiceVehicleDetailShippingAreaTo?: number;
        InvoiceVehicleDetailTypeOfVehicle?: number;
        InvoiceVehicleDetailStartDate?: string;
        InvoiceVehicleDetailEndDate?: string;
        InvoiceVehicleDetailDriverName?: string;
        InvoiceVehicleDetailNumber?: string;
        InvoiceVehicleDetailResidentId?: string;
        InvoiceVehicleDetailCountryId?: number;
        InvoiceVehicleDetailSupplierAmount?: number;
        InvoiceVehicleDetailSupplierId?: number;
        InvoiceVehicleDetailSupplierPaymentStatus?: number;
    }

    export namespace SuppliersPaymentInvoiceVehicleDetailsRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Transactions.SuppliersPaymentInvoiceVehicleDetails';
        export const lookupKey = 'Transactions.SuppliersPaymentInvoiceVehicleDetails';

        export function getLookup(): Q.Lookup<SuppliersPaymentInvoiceVehicleDetailsRow> {
            return Q.getLookup<SuppliersPaymentInvoiceVehicleDetailsRow>('Transactions.SuppliersPaymentInvoiceVehicleDetails');
        }
        export const deletePermission = 'Transactions:SuppliersPayment';
        export const insertPermission = 'Transactions:SuppliersPayment';
        export const readPermission = 'Transactions:SuppliersPayment';
        export const updatePermission = 'Transactions:SuppliersPayment';

        export declare const enum Fields {
            Id = "Id",
            SuppliersPaymentId = "SuppliersPaymentId",
            InvoiceVehicleDetailId = "InvoiceVehicleDetailId",
            Amount = "Amount",
            SuppliersPaymentCode = "SuppliersPaymentCode",
            SuppliersPaymentDate = "SuppliersPaymentDate",
            SuppliersPaymentSupplierId = "SuppliersPaymentSupplierId",
            SuppliersPaymentTotalAmount = "SuppliersPaymentTotalAmount",
            SuppliersPaymentPaymentType = "SuppliersPaymentPaymentType",
            SuppliersPaymentAccountId = "SuppliersPaymentAccountId",
            SuppliersPaymentStatus = "SuppliersPaymentStatus",
            SuppliersPaymentStatusUser = "SuppliersPaymentStatusUser",
            InvoiceVehicleDetailInvoiceId = "InvoiceVehicleDetailInvoiceId",
            InvoiceVehicleDetailFullName = "InvoiceVehicleDetailFullName",
            InvoiceVehicleDetailVehicleId = "InvoiceVehicleDetailVehicleId",
            InvoiceVehicleDetailType = "InvoiceVehicleDetailType",
            InvoiceVehicleDetailVehicleNumber = "InvoiceVehicleDetailVehicleNumber",
            InvoiceVehicleDetailDriver = "InvoiceVehicleDetailDriver",
            InvoiceVehicleDetailShippingAreaFrom = "InvoiceVehicleDetailShippingAreaFrom",
            InvoiceVehicleDetailShippingAreaTo = "InvoiceVehicleDetailShippingAreaTo",
            InvoiceVehicleDetailTypeOfVehicle = "InvoiceVehicleDetailTypeOfVehicle",
            InvoiceVehicleDetailStartDate = "InvoiceVehicleDetailStartDate",
            InvoiceVehicleDetailEndDate = "InvoiceVehicleDetailEndDate",
            InvoiceVehicleDetailDriverName = "InvoiceVehicleDetailDriverName",
            InvoiceVehicleDetailNumber = "InvoiceVehicleDetailNumber",
            InvoiceVehicleDetailResidentId = "InvoiceVehicleDetailResidentId",
            InvoiceVehicleDetailCountryId = "InvoiceVehicleDetailCountryId",
            InvoiceVehicleDetailSupplierAmount = "InvoiceVehicleDetailSupplierAmount",
            InvoiceVehicleDetailSupplierId = "InvoiceVehicleDetailSupplierId",
            InvoiceVehicleDetailSupplierPaymentStatus = "InvoiceVehicleDetailSupplierPaymentStatus"
        }
    }
}

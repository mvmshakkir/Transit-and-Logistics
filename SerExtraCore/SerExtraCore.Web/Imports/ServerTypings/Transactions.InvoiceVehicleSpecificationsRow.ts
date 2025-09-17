namespace SerExtraCore.Transactions {
    export interface InvoiceVehicleSpecificationsRow {
        Id?: number;
        InvoiceVehicleDetailId?: number;
        SpecificationId?: number;
        InvoiceVehicleDetailInvoiceId?: number;
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
        InvoiceVehicleDetailDriverKmFrom?: number;
        InvoiceVehicleDetailDriverKmTo?: number;
        InvoiceVehicleDetailGpskmFrom?: number;
        InvoiceVehicleDetailGpskmTo?: number;
        InvoiceVehicleDetailTypeOfPkg?: string;
        InvoiceVehicleDetailTotalVolume?: string;
        InvoiceVehicleDetailTotalWeight?: string;
        InvoiceVehicleDetailTotalNoOfPkgs?: string;
        SpecificationSpecifications?: string;
        SpecificationDescription?: string;
    }

    export namespace InvoiceVehicleSpecificationsRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Transactions.InvoiceVehicleSpecifications';
        export const deletePermission = 'Transactions:Invoice';
        export const insertPermission = 'Transactions:Invoice';
        export const readPermission = 'Transactions:Invoice';
        export const updatePermission = 'Transactions:Invoice';

        export declare const enum Fields {
            Id = "Id",
            InvoiceVehicleDetailId = "InvoiceVehicleDetailId",
            SpecificationId = "SpecificationId",
            InvoiceVehicleDetailInvoiceId = "InvoiceVehicleDetailInvoiceId",
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
            InvoiceVehicleDetailSupplierPaymentStatus = "InvoiceVehicleDetailSupplierPaymentStatus",
            InvoiceVehicleDetailDriverKmFrom = "InvoiceVehicleDetailDriverKmFrom",
            InvoiceVehicleDetailDriverKmTo = "InvoiceVehicleDetailDriverKmTo",
            InvoiceVehicleDetailGpskmFrom = "InvoiceVehicleDetailGpskmFrom",
            InvoiceVehicleDetailGpskmTo = "InvoiceVehicleDetailGpskmTo",
            InvoiceVehicleDetailTypeOfPkg = "InvoiceVehicleDetailTypeOfPkg",
            InvoiceVehicleDetailTotalVolume = "InvoiceVehicleDetailTotalVolume",
            InvoiceVehicleDetailTotalWeight = "InvoiceVehicleDetailTotalWeight",
            InvoiceVehicleDetailTotalNoOfPkgs = "InvoiceVehicleDetailTotalNoOfPkgs",
            SpecificationSpecifications = "SpecificationSpecifications",
            SpecificationDescription = "SpecificationDescription"
        }
    }
}

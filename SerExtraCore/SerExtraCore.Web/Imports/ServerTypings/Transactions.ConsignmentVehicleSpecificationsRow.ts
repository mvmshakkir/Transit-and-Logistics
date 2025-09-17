namespace SerExtraCore.Transactions {
    export interface ConsignmentVehicleSpecificationsRow {
        Id?: number;
        ConsignmentVehicleDetailId?: number;
        SpecificationId?: number;
        ConsignmentVehicleDetailConsignmentId?: number;
        ConsignmentVehicleDetailVehicleId?: number;
        ConsignmentVehicleDetailType?: string;
        ConsignmentVehicleDetailVehicleNumber?: string;
        ConsignmentVehicleDetailDriver?: number;
        ConsignmentVehicleDetailShippingAreaFrom?: number;
        ConsignmentVehicleDetailShippingAreaTo?: number;
        ConsignmentVehicleDetailTypeOfVehicle?: number;
        ConsignmentVehicleDetailStartDate?: string;
        ConsignmentVehicleDetailEndDate?: string;
        ConsignmentVehicleDetailDriverName?: string;
        ConsignmentVehicleDetailNumber?: string;
        ConsignmentVehicleDetailResidentId?: string;
        ConsignmentVehicleDetailCountryId?: number;
        ConsignmentVehicleDetailSupplierAmount?: number;
        ConsignmentVehicleDetailSupplierId?: number;
        ConsignmentVehicleDetailDriverKmFrom?: number;
        ConsignmentVehicleDetailDriverKmTo?: number;
        ConsignmentVehicleDetailGpskmFrom?: number;
        ConsignmentVehicleDetailGpskmTo?: number;
        ConsignmentVehicleDetailTypeOfPkg?: string;
        ConsignmentVehicleDetailTotalVolume?: string;
        ConsignmentVehicleDetailTotalWeight?: string;
        ConsignmentVehicleDetailTotalNoOfPkgs?: string;
        SpecificationSpecifications?: string;
        SpecificationDescription?: string;
    }

    export namespace ConsignmentVehicleSpecificationsRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Transactions.ConsignmentVehicleSpecifications';
        export const deletePermission = 'Transactions:Consignment';
        export const insertPermission = 'Transactions:Consignment';
        export const readPermission = 'Transactions:Consignment';
        export const updatePermission = 'Transactions:Consignment';

        export declare const enum Fields {
            Id = "Id",
            ConsignmentVehicleDetailId = "ConsignmentVehicleDetailId",
            SpecificationId = "SpecificationId",
            ConsignmentVehicleDetailConsignmentId = "ConsignmentVehicleDetailConsignmentId",
            ConsignmentVehicleDetailVehicleId = "ConsignmentVehicleDetailVehicleId",
            ConsignmentVehicleDetailType = "ConsignmentVehicleDetailType",
            ConsignmentVehicleDetailVehicleNumber = "ConsignmentVehicleDetailVehicleNumber",
            ConsignmentVehicleDetailDriver = "ConsignmentVehicleDetailDriver",
            ConsignmentVehicleDetailShippingAreaFrom = "ConsignmentVehicleDetailShippingAreaFrom",
            ConsignmentVehicleDetailShippingAreaTo = "ConsignmentVehicleDetailShippingAreaTo",
            ConsignmentVehicleDetailTypeOfVehicle = "ConsignmentVehicleDetailTypeOfVehicle",
            ConsignmentVehicleDetailStartDate = "ConsignmentVehicleDetailStartDate",
            ConsignmentVehicleDetailEndDate = "ConsignmentVehicleDetailEndDate",
            ConsignmentVehicleDetailDriverName = "ConsignmentVehicleDetailDriverName",
            ConsignmentVehicleDetailNumber = "ConsignmentVehicleDetailNumber",
            ConsignmentVehicleDetailResidentId = "ConsignmentVehicleDetailResidentId",
            ConsignmentVehicleDetailCountryId = "ConsignmentVehicleDetailCountryId",
            ConsignmentVehicleDetailSupplierAmount = "ConsignmentVehicleDetailSupplierAmount",
            ConsignmentVehicleDetailSupplierId = "ConsignmentVehicleDetailSupplierId",
            ConsignmentVehicleDetailDriverKmFrom = "ConsignmentVehicleDetailDriverKmFrom",
            ConsignmentVehicleDetailDriverKmTo = "ConsignmentVehicleDetailDriverKmTo",
            ConsignmentVehicleDetailGpskmFrom = "ConsignmentVehicleDetailGpskmFrom",
            ConsignmentVehicleDetailGpskmTo = "ConsignmentVehicleDetailGpskmTo",
            ConsignmentVehicleDetailTypeOfPkg = "ConsignmentVehicleDetailTypeOfPkg",
            ConsignmentVehicleDetailTotalVolume = "ConsignmentVehicleDetailTotalVolume",
            ConsignmentVehicleDetailTotalWeight = "ConsignmentVehicleDetailTotalWeight",
            ConsignmentVehicleDetailTotalNoOfPkgs = "ConsignmentVehicleDetailTotalNoOfPkgs",
            SpecificationSpecifications = "SpecificationSpecifications",
            SpecificationDescription = "SpecificationDescription"
        }
    }
}

namespace SerExtraCore.Transactions {
    export interface ConsignmentTripDatesRow {
        Id?: number;
        ConsignmentId?: number;
        StartDate?: string;
        EndDate?: string;
        ConsignmentDate?: string;
        ConsignmentWayBillNo?: string;
        ConsignmentJobNo?: string;
        ConsignmentClientJobNo?: string;
        ConsignmentShipperId?: number;
        ConsignmentConsigneeId?: number;
        ConsignmentVehicleId?: number;
        ConsignmentType?: string;
        ConsignmentVehicleNumber?: string;
        ConsignmentDriver?: number;
        ConsignmentPayment?: number;
        ConsignmentTypeOfPkg?: string;
        ConsignmentTotalVolume?: string;
        ConsignmentTotalWeight?: string;
        ConsignmentTotalNoOfPkgs?: string;
        ConsignmentShippingAreaFrom?: number;
        ConsignmentShippingAreaTo?: number;
        ConsignmentTotalAmount?: number;
        ConsignmentStatus?: number;
        ConsignmentPaymentMode?: number;
        ConsignmentBilling?: number;
        ConsignmentStartDate?: string;
        ConsignmentEndDate?: string;
    }

    export namespace ConsignmentTripDatesRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Transactions.ConsignmentTripDates';
        export const deletePermission = 'Transactions:Consignment';
        export const insertPermission = 'Transactions:Consignment';
        export const readPermission = 'Transactions:Consignment';
        export const updatePermission = 'Transactions:Consignment';

        export declare const enum Fields {
            Id = "Id",
            ConsignmentId = "ConsignmentId",
            StartDate = "StartDate",
            EndDate = "EndDate",
            ConsignmentDate = "ConsignmentDate",
            ConsignmentWayBillNo = "ConsignmentWayBillNo",
            ConsignmentJobNo = "ConsignmentJobNo",
            ConsignmentClientJobNo = "ConsignmentClientJobNo",
            ConsignmentShipperId = "ConsignmentShipperId",
            ConsignmentConsigneeId = "ConsignmentConsigneeId",
            ConsignmentVehicleId = "ConsignmentVehicleId",
            ConsignmentType = "ConsignmentType",
            ConsignmentVehicleNumber = "ConsignmentVehicleNumber",
            ConsignmentDriver = "ConsignmentDriver",
            ConsignmentPayment = "ConsignmentPayment",
            ConsignmentTypeOfPkg = "ConsignmentTypeOfPkg",
            ConsignmentTotalVolume = "ConsignmentTotalVolume",
            ConsignmentTotalWeight = "ConsignmentTotalWeight",
            ConsignmentTotalNoOfPkgs = "ConsignmentTotalNoOfPkgs",
            ConsignmentShippingAreaFrom = "ConsignmentShippingAreaFrom",
            ConsignmentShippingAreaTo = "ConsignmentShippingAreaTo",
            ConsignmentTotalAmount = "ConsignmentTotalAmount",
            ConsignmentStatus = "ConsignmentStatus",
            ConsignmentPaymentMode = "ConsignmentPaymentMode",
            ConsignmentBilling = "ConsignmentBilling",
            ConsignmentStartDate = "ConsignmentStartDate",
            ConsignmentEndDate = "ConsignmentEndDate"
        }
    }
}

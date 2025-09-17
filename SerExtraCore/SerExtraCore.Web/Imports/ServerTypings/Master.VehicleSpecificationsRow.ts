namespace SerExtraCore.Master {
    export interface VehicleSpecificationsRow {
        Id?: number;
        VehicleId?: number;
        SpecificationId?: number;
        VehicleTypeOfVehicle?: number;
        VehicleThrough?: number;
        VehicleVehicleNumber?: string;
        VehicleVehicleModel?: number;
        VehicleRegistraionNumber?: string;
        VehicleDescription?: string;
        VehicleRegistrationDate?: string;
        VehicleExpiryDate?: string;
        VehicleDriver?: number;
        VehiclePdoApproved?: boolean;
        Slno?: number;
        SpecificationSpecifications?: string;
        SpecificationDescription?: string;
    }

    export namespace VehicleSpecificationsRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Master.VehicleSpecifications';
        export const deletePermission = 'Master:Vehicles';
        export const insertPermission = 'Master:Vehicles';
        export const readPermission = 'Master:Vehicles';
        export const updatePermission = 'Master:Vehicles';

        export declare const enum Fields {
            Id = "Id",
            VehicleId = "VehicleId",
            SpecificationId = "SpecificationId",
            VehicleTypeOfVehicle = "VehicleTypeOfVehicle",
            VehicleThrough = "VehicleThrough",
            VehicleVehicleNumber = "VehicleVehicleNumber",
            VehicleVehicleModel = "VehicleVehicleModel",
            VehicleRegistraionNumber = "VehicleRegistraionNumber",
            VehicleDescription = "VehicleDescription",
            VehicleRegistrationDate = "VehicleRegistrationDate",
            VehicleExpiryDate = "VehicleExpiryDate",
            VehicleDriver = "VehicleDriver",
            VehiclePdoApproved = "VehiclePdoApproved",
            Slno = "Slno",
            SpecificationSpecifications = "SpecificationSpecifications",
            SpecificationDescription = "SpecificationDescription"
        }
    }
}

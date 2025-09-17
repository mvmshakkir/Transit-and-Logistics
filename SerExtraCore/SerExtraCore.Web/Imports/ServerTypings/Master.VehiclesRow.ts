namespace SerExtraCore.Master {
    export interface VehiclesRow {
        Id?: number;
        TypeOfVehicle?: VehicleTypes;
        Through?: number;
        VehicleNumber?: string;
        VehicleModel?: number;
        RegistraionNumber?: string;
        Description?: string;
        RegistrationDate?: string;
        ExpiryDate?: string;
        Driver?: number;
        PdoApproved?: boolean;
        SupplierId?: number;
        Slno?: number;
        VehicleSpecifications?: number[];
        PrimeMover?: string;
        ThroughName?: number;
        ThroughDescription?: string;
        SupplierName?: string;
        DriverEmployeeCode?: string;
        DriverEmployeeName?: string;
        DriverAddress?: string;
        DriverCountryId?: number;
        DriverEmployeeStatus?: number;
        DriverEmployeeTypeId?: number;
        DriverDesignationId?: number;
        DriverResidentId?: string;
        DriverRidExpiryDate?: string;
        DriverPassportNumber?: string;
        DriverPassportExpiryDate?: string;
        DriverMobileNumber?: string;
        DriverBasicSalary?: number;
        DriverAllowance?: number;
        ModelName?: string;
        HSN?: string;
        OwnerId?: number;
        OwnerName?: string;
    }

    export namespace VehiclesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'VehicleNumber';
        export const localTextPrefix = 'Master.Vehicles';
        export const lookupKey = 'Master.Vehicles';

        export function getLookup(): Q.Lookup<VehiclesRow> {
            return Q.getLookup<VehiclesRow>('Master.Vehicles');
        }
        export const deletePermission = 'Master:Vehicles';
        export const insertPermission = 'Master:Vehicles';
        export const readPermission = 'Master:Vehicles';
        export const updatePermission = 'Master:Vehicles';

        export declare const enum Fields {
            Id = "Id",
            TypeOfVehicle = "TypeOfVehicle",
            Through = "Through",
            VehicleNumber = "VehicleNumber",
            VehicleModel = "VehicleModel",
            RegistraionNumber = "RegistraionNumber",
            Description = "Description",
            RegistrationDate = "RegistrationDate",
            ExpiryDate = "ExpiryDate",
            Driver = "Driver",
            PdoApproved = "PdoApproved",
            SupplierId = "SupplierId",
            Slno = "Slno",
            VehicleSpecifications = "VehicleSpecifications",
            PrimeMover = "PrimeMover",
            ThroughName = "ThroughName",
            ThroughDescription = "ThroughDescription",
            SupplierName = "SupplierName",
            DriverEmployeeCode = "DriverEmployeeCode",
            DriverEmployeeName = "DriverEmployeeName",
            DriverAddress = "DriverAddress",
            DriverCountryId = "DriverCountryId",
            DriverEmployeeStatus = "DriverEmployeeStatus",
            DriverEmployeeTypeId = "DriverEmployeeTypeId",
            DriverDesignationId = "DriverDesignationId",
            DriverResidentId = "DriverResidentId",
            DriverRidExpiryDate = "DriverRidExpiryDate",
            DriverPassportNumber = "DriverPassportNumber",
            DriverPassportExpiryDate = "DriverPassportExpiryDate",
            DriverMobileNumber = "DriverMobileNumber",
            DriverBasicSalary = "DriverBasicSalary",
            DriverAllowance = "DriverAllowance",
            ModelName = "ModelName",
            HSN = "HSN",
            OwnerId = "OwnerId",
            OwnerName = "OwnerName"
        }
    }
}
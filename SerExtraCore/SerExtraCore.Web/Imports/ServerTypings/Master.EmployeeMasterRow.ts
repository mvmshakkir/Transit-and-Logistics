namespace SerExtraCore.Master {
    export interface EmployeeMasterRow {
        Id?: number;
        EmployeeCode?: string;
        EmployeeName?: string;
        Address?: string;
        CountryId?: number;
        EmployeeStatus?: EmployeeStatus;
        EmployeeTypeId?: number;
        DesignationId?: number;
        ResidentId?: string;
        RidExpiryDate?: string;
        PassportNumber?: string;
        PassportExpiryDate?: string;
        MobileNumber?: string;
        BasicSalary?: number;
        Allowance?: number;
        Slno?: number;
        FullName?: string;
        CountryCountryCode?: string;
        CountryCountryName?: string;
        EmployeeTypeType?: string;
        EmployeeTypeDescription?: string;
        DesignationName?: string;
        DesignationDescription?: string;
    }

    export namespace EmployeeMasterRow {
        export const idProperty = 'Id';
        export const nameProperty = 'FullName';
        export const localTextPrefix = 'Master.EmployeeMaster';
        export const lookupKey = 'Master.EmployeeMaster';

        export function getLookup(): Q.Lookup<EmployeeMasterRow> {
            return Q.getLookup<EmployeeMasterRow>('Master.EmployeeMaster');
        }
        export const deletePermission = 'Master:EmployeeMaster';
        export const insertPermission = 'Master:EmployeeMaster';
        export const readPermission = 'Master:EmployeeMaster';
        export const updatePermission = 'Master:EmployeeMaster';

        export declare const enum Fields {
            Id = "Id",
            EmployeeCode = "EmployeeCode",
            EmployeeName = "EmployeeName",
            Address = "Address",
            CountryId = "CountryId",
            EmployeeStatus = "EmployeeStatus",
            EmployeeTypeId = "EmployeeTypeId",
            DesignationId = "DesignationId",
            ResidentId = "ResidentId",
            RidExpiryDate = "RidExpiryDate",
            PassportNumber = "PassportNumber",
            PassportExpiryDate = "PassportExpiryDate",
            MobileNumber = "MobileNumber",
            BasicSalary = "BasicSalary",
            Allowance = "Allowance",
            Slno = "Slno",
            FullName = "FullName",
            CountryCountryCode = "CountryCountryCode",
            CountryCountryName = "CountryCountryName",
            EmployeeTypeType = "EmployeeTypeType",
            EmployeeTypeDescription = "EmployeeTypeDescription",
            DesignationName = "DesignationName",
            DesignationDescription = "DesignationDescription"
        }
    }
}

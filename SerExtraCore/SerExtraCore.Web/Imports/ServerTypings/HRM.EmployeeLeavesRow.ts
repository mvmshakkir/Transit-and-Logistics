namespace SerExtraCore.HRM {
    export interface EmployeeLeavesRow {
        Id?: number;
        EmployeeId?: number;
        FromDate?: string;
        ToDate?: string;
        Days?: number;
        Remarks?: string;
        Attachments?: string;
        EmployeeEmployeeCode?: string;
        EmployeeEmployeeName?: string;
        EmployeeAddress?: string;
        EmployeeCountryId?: number;
        EmployeeEmployeeStatus?: number;
        EmployeeEmployeeTypeId?: number;
        EmployeeDesignationId?: number;
        EmployeeResidentId?: string;
        EmployeeRidExpiryDate?: string;
        EmployeePassportNumber?: string;
        EmployeePassportExpiryDate?: string;
        EmployeeMobileNumber?: string;
        EmployeeBasicSalary?: number;
        EmployeeAllowance?: number;
    }

    export namespace EmployeeLeavesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Attachments';
        export const localTextPrefix = 'HRM.EmployeeLeaves';
        export const deletePermission = 'HRM:EmployeeLeaves';
        export const insertPermission = 'HRM:EmployeeLeaves';
        export const readPermission = 'HRM:EmployeeLeaves';
        export const updatePermission = 'HRM:EmployeeLeaves';

        export declare const enum Fields {
            Id = "Id",
            EmployeeId = "EmployeeId",
            FromDate = "FromDate",
            ToDate = "ToDate",
            Days = "Days",
            Remarks = "Remarks",
            Attachments = "Attachments",
            EmployeeEmployeeCode = "EmployeeEmployeeCode",
            EmployeeEmployeeName = "EmployeeEmployeeName",
            EmployeeAddress = "EmployeeAddress",
            EmployeeCountryId = "EmployeeCountryId",
            EmployeeEmployeeStatus = "EmployeeEmployeeStatus",
            EmployeeEmployeeTypeId = "EmployeeEmployeeTypeId",
            EmployeeDesignationId = "EmployeeDesignationId",
            EmployeeResidentId = "EmployeeResidentId",
            EmployeeRidExpiryDate = "EmployeeRidExpiryDate",
            EmployeePassportNumber = "EmployeePassportNumber",
            EmployeePassportExpiryDate = "EmployeePassportExpiryDate",
            EmployeeMobileNumber = "EmployeeMobileNumber",
            EmployeeBasicSalary = "EmployeeBasicSalary",
            EmployeeAllowance = "EmployeeAllowance"
        }
    }
}

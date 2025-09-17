namespace SerExtraCore.HRM {
    export interface PayrollPaymentRow {
        Id?: number;
        TrxDate?: string;
        PayrollStructureId?: number;
        EmployeeId?: number;
        BasicPay?: number;
        Allowance?: number;
        OverTime?: number;
        Other?: number;
        Total?: number;
        Remarks?: string;
        PayrollStructureStructureName?: string;
        PayrollStructureFromDate?: string;
        PayrollStructureToDate?: string;
        PayrollStructureRemarks?: string;
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
        PaymentType?: AccountTypes;
        AccountId?: number;
        Payments?: Accounts.PaymentRow[];
        AccountAccountName?: string;
    }

    export namespace PayrollPaymentRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Remarks';
        export const localTextPrefix = 'HRM.PayrollPayment';
        export const deletePermission = 'HRM:PayrollStructures';
        export const insertPermission = 'HRM:PayrollStructures';
        export const readPermission = 'HRM:PayrollStructures';
        export const updatePermission = 'HRM:PayrollStructures';

        export declare const enum Fields {
            Id = "Id",
            TrxDate = "TrxDate",
            PayrollStructureId = "PayrollStructureId",
            EmployeeId = "EmployeeId",
            BasicPay = "BasicPay",
            Allowance = "Allowance",
            OverTime = "OverTime",
            Other = "Other",
            Total = "Total",
            Remarks = "Remarks",
            PayrollStructureStructureName = "PayrollStructureStructureName",
            PayrollStructureFromDate = "PayrollStructureFromDate",
            PayrollStructureToDate = "PayrollStructureToDate",
            PayrollStructureRemarks = "PayrollStructureRemarks",
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
            EmployeeAllowance = "EmployeeAllowance",
            PaymentType = "PaymentType",
            AccountId = "AccountId",
            Payments = "Payments",
            AccountAccountName = "AccountAccountName"
        }
    }
}

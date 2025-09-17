namespace SerExtraCore.Accounts {
    export interface MoneyOutRow {
        Id?: number;
        VType?: number;
        TrxDate?: string;
        VNo?: number;
        CustomerId?: number;
        EmployeeId?: number;
        SupplierId?: number;
        VehicleId?: number;
        Amount?: number;
        TaxPer?: number;
        TaxAmount?: number;
        TotalAmount?: number;
        AccountHeadId?: number;
        PaymentMethod?: AccountTypes;
        AccountId?: number;
        Remarks?: string;
        Payments?: PaymentRow[];
        PdcPaymentDetails?: PDCPayments.PdcPaymentDetailsRow[];
        CustomerCustomerCode?: string;
        CustomerCustomerName?: string;
        CustomerAddress?: string;
        CustomerPlace?: string;
        CustomerTelephone?: string;
        CustomerEmail?: string;
        CustomerContactPerson?: string;
        CustomerMobile?: string;
        CustomerCreationDate?: string;
        CustomerDescription?: string;
        CustomerDueDays?: number;
        CustomerOpening?: number;
        CustomerOpeningDate?: string;
        CustomerTaxRegNo?: string;
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
        SupplierSupplierCode?: string;
        SupplierSupplierName?: string;
        SupplierAddress?: string;
        SupplierPlace?: string;
        SupplierTelephone?: string;
        SupplierEmail?: string;
        SupplierContactPerson?: string;
        SupplierMobile?: string;
        SupplierCreationDate?: string;
        SupplierDescription?: string;
        SupplierOpening?: number;
        SupplierOpeningDate?: string;
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
        VehiclePrimeMover?: string;
        VehicleSupplierId?: number;
        AccountHeadCode?: string;
        AccountHeadDescription?: string;
        AccountHeadParentHeadId?: number;
        AccountHeadLedgerType?: number;
        AccountType?: number;
        AccountAccountName?: string;
        AccountAccountNo?: string;
        AccountBankName?: string;
        AccountBrachName?: string;
        AccountAccountHeadId?: number;
        ConsignmentId?: number;
        ConsignmentJobNo?: string;
        TSNo?: string;
        TsId?: number;
        FuelId?: number;
    }

    export namespace MoneyOutRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Remarks';
        export const localTextPrefix = 'Accounts.MoneyOut';
        export const lookupKey = 'Accounts.MoneyOut';

        export function getLookup(): Q.Lookup<MoneyOutRow> {
            return Q.getLookup<MoneyOutRow>('Accounts.MoneyOut');
        }
        export const deletePermission = 'Accounts:Payment';
        export const insertPermission = 'Accounts:Payment';
        export const readPermission = 'Accounts:Payment';
        export const updatePermission = 'Accounts:Payment';

        export declare const enum Fields {
            Id = "Id",
            VType = "VType",
            TrxDate = "TrxDate",
            VNo = "VNo",
            CustomerId = "CustomerId",
            EmployeeId = "EmployeeId",
            SupplierId = "SupplierId",
            VehicleId = "VehicleId",
            Amount = "Amount",
            TaxPer = "TaxPer",
            TaxAmount = "TaxAmount",
            TotalAmount = "TotalAmount",
            AccountHeadId = "AccountHeadId",
            PaymentMethod = "PaymentMethod",
            AccountId = "AccountId",
            Remarks = "Remarks",
            Payments = "Payments",
            PdcPaymentDetails = "PdcPaymentDetails",
            CustomerCustomerCode = "CustomerCustomerCode",
            CustomerCustomerName = "CustomerCustomerName",
            CustomerAddress = "CustomerAddress",
            CustomerPlace = "CustomerPlace",
            CustomerTelephone = "CustomerTelephone",
            CustomerEmail = "CustomerEmail",
            CustomerContactPerson = "CustomerContactPerson",
            CustomerMobile = "CustomerMobile",
            CustomerCreationDate = "CustomerCreationDate",
            CustomerDescription = "CustomerDescription",
            CustomerDueDays = "CustomerDueDays",
            CustomerOpening = "CustomerOpening",
            CustomerOpeningDate = "CustomerOpeningDate",
            CustomerTaxRegNo = "CustomerTaxRegNo",
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
            SupplierSupplierCode = "SupplierSupplierCode",
            SupplierSupplierName = "SupplierSupplierName",
            SupplierAddress = "SupplierAddress",
            SupplierPlace = "SupplierPlace",
            SupplierTelephone = "SupplierTelephone",
            SupplierEmail = "SupplierEmail",
            SupplierContactPerson = "SupplierContactPerson",
            SupplierMobile = "SupplierMobile",
            SupplierCreationDate = "SupplierCreationDate",
            SupplierDescription = "SupplierDescription",
            SupplierOpening = "SupplierOpening",
            SupplierOpeningDate = "SupplierOpeningDate",
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
            VehiclePrimeMover = "VehiclePrimeMover",
            VehicleSupplierId = "VehicleSupplierId",
            AccountHeadCode = "AccountHeadCode",
            AccountHeadDescription = "AccountHeadDescription",
            AccountHeadParentHeadId = "AccountHeadParentHeadId",
            AccountHeadLedgerType = "AccountHeadLedgerType",
            AccountType = "AccountType",
            AccountAccountName = "AccountAccountName",
            AccountAccountNo = "AccountAccountNo",
            AccountBankName = "AccountBankName",
            AccountBrachName = "AccountBrachName",
            AccountAccountHeadId = "AccountAccountHeadId",
            ConsignmentId = "ConsignmentId",
            ConsignmentJobNo = "ConsignmentJobNo",
            TSNo = "TSNo",
            TsId = "TsId",
            FuelId = "FuelId"
        }
    }
}

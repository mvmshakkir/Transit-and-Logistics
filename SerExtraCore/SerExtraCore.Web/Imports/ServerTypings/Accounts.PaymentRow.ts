namespace SerExtraCore.Accounts {
    export interface PaymentRow {
        Id?: number;
        VType?: number;
        TrxDate?: string;
        VNo?: number;
        CustomerId?: number;
        EmployeeId?: number;
        DebitAccountHeadId?: number;
        CreditAccountHeadId?: number;
        Amount?: number;
        PaymentMethod?: AccountTypes;
        DebitAccountId?: number;
        CreditAccountId?: number;
        Remarks?: string;
        InvoiceCollectionId?: number;
        EntityType?: string;
        Slno?: number;
        VehicleId?: number;
        VehicleNumber?: string;
        SupplierPaymentId?: number;
        PayrollPaymentId?: number;
        ConsignmentVehicleDetailsId?: number;
        ConsignmentChargesId?: number;
        PDCPaymentDetailsId?: number;
        PurchaseId?: number;
        MoneyInOutId?: number;
        SupplierId?: number;
        ConsignmentId?: number;
        ConsignmentJobNo?: string;
        SupplierName?: string;
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
        DebitAccountHeadCode?: string;
        DebitAccountHeadDescription?: string;
        DebitAccountHeadParentHeadId?: number;
        DebitAccountHeadLedgerType?: number;
        CreditAccountHeadCode?: string;
        CreditAccountHeadDescription?: string;
        CreditAccountHeadParentHeadId?: number;
        CreditAccountHeadLedgerType?: number;
        DebitAccountType?: number;
        DebitAccountAccountName?: string;
        DebitAccountAccountNo?: string;
        DebitAccountBankName?: string;
        DebitAccountBrachName?: string;
        DebitAccountAccountHeadId?: number;
        CreditAccountType?: number;
        CreditAccountAccountName?: string;
        CreditAccountAccountNo?: string;
        CreditAccountBankName?: string;
        CreditAccountBrachName?: string;
        CreditAccountAccountHeadId?: number;
        InvoiceCollectionTrxDate?: string;
        InvoiceCollectionCollectionNumber?: string;
        InvoiceCollectionCustomerId?: number;
        InvoiceCollectionTotalAmount?: number;
        InvoiceCollectionPaymentType?: number;
        InvoiceCollectionAccountId?: number;
        InvoiceCollectionStatus?: number;
        InvoiceCollectionStatusUser?: number;
        TSNo?: string;
        FuelId?: number;
        FuelTsId?: number;
    }

    export namespace PaymentRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Remarks';
        export const localTextPrefix = 'Accounts.Payment';
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
            DebitAccountHeadId = "DebitAccountHeadId",
            CreditAccountHeadId = "CreditAccountHeadId",
            Amount = "Amount",
            PaymentMethod = "PaymentMethod",
            DebitAccountId = "DebitAccountId",
            CreditAccountId = "CreditAccountId",
            Remarks = "Remarks",
            InvoiceCollectionId = "InvoiceCollectionId",
            EntityType = "EntityType",
            Slno = "Slno",
            VehicleId = "VehicleId",
            VehicleNumber = "VehicleNumber",
            SupplierPaymentId = "SupplierPaymentId",
            PayrollPaymentId = "PayrollPaymentId",
            ConsignmentVehicleDetailsId = "ConsignmentVehicleDetailsId",
            ConsignmentChargesId = "ConsignmentChargesId",
            PDCPaymentDetailsId = "PDCPaymentDetailsId",
            PurchaseId = "PurchaseId",
            MoneyInOutId = "MoneyInOutId",
            SupplierId = "SupplierId",
            ConsignmentId = "ConsignmentId",
            ConsignmentJobNo = "ConsignmentJobNo",
            SupplierName = "SupplierName",
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
            DebitAccountHeadCode = "DebitAccountHeadCode",
            DebitAccountHeadDescription = "DebitAccountHeadDescription",
            DebitAccountHeadParentHeadId = "DebitAccountHeadParentHeadId",
            DebitAccountHeadLedgerType = "DebitAccountHeadLedgerType",
            CreditAccountHeadCode = "CreditAccountHeadCode",
            CreditAccountHeadDescription = "CreditAccountHeadDescription",
            CreditAccountHeadParentHeadId = "CreditAccountHeadParentHeadId",
            CreditAccountHeadLedgerType = "CreditAccountHeadLedgerType",
            DebitAccountType = "DebitAccountType",
            DebitAccountAccountName = "DebitAccountAccountName",
            DebitAccountAccountNo = "DebitAccountAccountNo",
            DebitAccountBankName = "DebitAccountBankName",
            DebitAccountBrachName = "DebitAccountBrachName",
            DebitAccountAccountHeadId = "DebitAccountAccountHeadId",
            CreditAccountType = "CreditAccountType",
            CreditAccountAccountName = "CreditAccountAccountName",
            CreditAccountAccountNo = "CreditAccountAccountNo",
            CreditAccountBankName = "CreditAccountBankName",
            CreditAccountBrachName = "CreditAccountBrachName",
            CreditAccountAccountHeadId = "CreditAccountAccountHeadId",
            InvoiceCollectionTrxDate = "InvoiceCollectionTrxDate",
            InvoiceCollectionCollectionNumber = "InvoiceCollectionCollectionNumber",
            InvoiceCollectionCustomerId = "InvoiceCollectionCustomerId",
            InvoiceCollectionTotalAmount = "InvoiceCollectionTotalAmount",
            InvoiceCollectionPaymentType = "InvoiceCollectionPaymentType",
            InvoiceCollectionAccountId = "InvoiceCollectionAccountId",
            InvoiceCollectionStatus = "InvoiceCollectionStatus",
            InvoiceCollectionStatusUser = "InvoiceCollectionStatusUser",
            TSNo = "TSNo",
            FuelId = "FuelId",
            FuelTsId = "FuelTsId"
        }
    }
}
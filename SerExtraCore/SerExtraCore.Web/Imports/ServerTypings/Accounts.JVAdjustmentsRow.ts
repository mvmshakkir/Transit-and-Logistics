namespace SerExtraCore.Accounts {
    export interface JVAdjustmentsRow {
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
        SupplierPaymentId?: number;
        SupplierId?: number;
        ConsignmentId?: number;
        VehicleId?: number;
        Slno?: number;
        OpeningCustomerId?: number;
        OpeningSupplierId?: number;
        DebitSupplierId?: number;
        CreditSupplierId?: number;
        CreditCustomerId?: number;
        CreditVehicleId?: number;
        CreditEmployeeId?: number;
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
        SupplierPaymentCode?: string;
        SupplierPaymentDate?: string;
        SupplierPaymentSupplierId?: number;
        SupplierPaymentTotalAmount?: number;
        SupplierPaymentPaymentType?: number;
        SupplierPaymentAccountId?: number;
        SupplierPaymentStatus?: number;
        SupplierPaymentStatusUser?: number;
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
        ConsignmentSupplierAmount?: number;
        ConsignmentSupplierId?: number;
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
        BankReconciliation?: boolean;
    }

    export namespace JVAdjustmentsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Remarks';
        export const localTextPrefix = 'Accounts.JVAdjustments';
        export const deletePermission = 'Accounts:JournalEntry';
        export const insertPermission = 'Accounts:JournalEntry';
        export const readPermission = 'Accounts:JournalEntry';
        export const updatePermission = 'Accounts:JournalEntry';

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
            SupplierPaymentId = "SupplierPaymentId",
            SupplierId = "SupplierId",
            ConsignmentId = "ConsignmentId",
            VehicleId = "VehicleId",
            Slno = "Slno",
            OpeningCustomerId = "OpeningCustomerId",
            OpeningSupplierId = "OpeningSupplierId",
            DebitSupplierId = "DebitSupplierId",
            CreditSupplierId = "CreditSupplierId",
            CreditCustomerId = "CreditCustomerId",
            CreditVehicleId = "CreditVehicleId",
            CreditEmployeeId = "CreditEmployeeId",
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
            SupplierPaymentCode = "SupplierPaymentCode",
            SupplierPaymentDate = "SupplierPaymentDate",
            SupplierPaymentSupplierId = "SupplierPaymentSupplierId",
            SupplierPaymentTotalAmount = "SupplierPaymentTotalAmount",
            SupplierPaymentPaymentType = "SupplierPaymentPaymentType",
            SupplierPaymentAccountId = "SupplierPaymentAccountId",
            SupplierPaymentStatus = "SupplierPaymentStatus",
            SupplierPaymentStatusUser = "SupplierPaymentStatusUser",
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
            ConsignmentEndDate = "ConsignmentEndDate",
            ConsignmentSupplierAmount = "ConsignmentSupplierAmount",
            ConsignmentSupplierId = "ConsignmentSupplierId",
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
            BankReconciliation = "BankReconciliation"
        }
    }
}

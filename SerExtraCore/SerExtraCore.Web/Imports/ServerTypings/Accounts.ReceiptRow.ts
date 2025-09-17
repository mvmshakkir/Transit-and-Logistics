namespace SerExtraCore.Accounts {
    export interface ReceiptRow {
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
        BankReconciliation?: boolean;
        Slno?: number;
        PDCPaymentDetailsId?: number;
        PDCReceiptDetailsId?: number;
        ConsignmentAdvanceConsignmentId?: number;
        MoneyInOutId?: number;
        InvoiceId?: number;
        DeliveryServiceId?: number;
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
        TsId?: number;
        FreightId?: number;
    }

    export namespace ReceiptRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Remarks';
        export const localTextPrefix = 'Accounts.Receipt';
        export const deletePermission = 'Accounts:Receipt';
        export const insertPermission = 'Accounts:Receipt';
        export const readPermission = 'Accounts:Receipt';
        export const updatePermission = 'Accounts:Receipt';

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
            BankReconciliation = "BankReconciliation",
            Slno = "Slno",
            PDCPaymentDetailsId = "PDCPaymentDetailsId",
            PDCReceiptDetailsId = "PDCReceiptDetailsId",
            ConsignmentAdvanceConsignmentId = "ConsignmentAdvanceConsignmentId",
            MoneyInOutId = "MoneyInOutId",
            InvoiceId = "InvoiceId",
            DeliveryServiceId = "DeliveryServiceId",
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
            TsId = "TsId",
            FreightId = "FreightId"
        }
    }
}

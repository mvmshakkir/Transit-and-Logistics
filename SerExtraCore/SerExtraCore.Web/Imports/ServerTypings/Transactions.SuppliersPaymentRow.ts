namespace SerExtraCore.Transactions {
    export interface SuppliersPaymentRow {
        Id?: number;
        Code?: string;
        Date?: string;
        SupplierId?: number;
        TotalAmount?: number;
        OldBalance?: number;
        PaymentType?: PymentTypes;
        AccountId?: number;
        Status?: InvoiceStatus;
        StatusUser?: number;
        DocumentNO?: string;
        Description?: string;
        Slno?: number;
        Invoices?: number[];
        InvoiceVehicleDetails?: SuppliersPaymentInvoiceVehicleDetailsRow[];
        InvoiceCharges?: SuppliersPaymentInvoiceChargesRow[];
        Payments?: Accounts.PaymentRow[];
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
        PdcPaymentDetails?: PDCPayments.PdcPaymentDetailsRow[];
        AccountType?: number;
        AccountAccountName?: string;
        AccountAccountNo?: string;
        AccountBankName?: string;
        AccountBrachName?: string;
        AccountAccountHeadId?: number;
        StatusUserUsername?: string;
        StatusUserDisplayName?: string;
        StatusUserEmail?: string;
        StatusUserSource?: string;
        StatusUserPasswordHash?: string;
        StatusUserPasswordSalt?: string;
        StatusUserLastDirectoryUpdate?: string;
        StatusUserUserImage?: string;
        StatusUserInsertDate?: string;
        StatusUserInsertUserId?: number;
        StatusUserUpdateDate?: string;
        StatusUserUpdateUserId?: number;
        StatusUserIsActive?: number;
    }

    export namespace SuppliersPaymentRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Code';
        export const localTextPrefix = 'Transactions.SuppliersPayment';
        export const deletePermission = 'Transactions:SuppliersPayment';
        export const insertPermission = 'Transactions:SuppliersPayment';
        export const readPermission = 'Transactions:SuppliersPayment';
        export const updatePermission = 'Transactions:SuppliersPayment';

        export declare const enum Fields {
            Id = "Id",
            Code = "Code",
            Date = "Date",
            SupplierId = "SupplierId",
            TotalAmount = "TotalAmount",
            OldBalance = "OldBalance",
            PaymentType = "PaymentType",
            AccountId = "AccountId",
            Status = "Status",
            StatusUser = "StatusUser",
            DocumentNO = "DocumentNO",
            Description = "Description",
            Slno = "Slno",
            Invoices = "Invoices",
            InvoiceVehicleDetails = "InvoiceVehicleDetails",
            InvoiceCharges = "InvoiceCharges",
            Payments = "Payments",
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
            PdcPaymentDetails = "PdcPaymentDetails",
            AccountType = "AccountType",
            AccountAccountName = "AccountAccountName",
            AccountAccountNo = "AccountAccountNo",
            AccountBankName = "AccountBankName",
            AccountBrachName = "AccountBrachName",
            AccountAccountHeadId = "AccountAccountHeadId",
            StatusUserUsername = "StatusUserUsername",
            StatusUserDisplayName = "StatusUserDisplayName",
            StatusUserEmail = "StatusUserEmail",
            StatusUserSource = "StatusUserSource",
            StatusUserPasswordHash = "StatusUserPasswordHash",
            StatusUserPasswordSalt = "StatusUserPasswordSalt",
            StatusUserLastDirectoryUpdate = "StatusUserLastDirectoryUpdate",
            StatusUserUserImage = "StatusUserUserImage",
            StatusUserInsertDate = "StatusUserInsertDate",
            StatusUserInsertUserId = "StatusUserInsertUserId",
            StatusUserUpdateDate = "StatusUserUpdateDate",
            StatusUserUpdateUserId = "StatusUserUpdateUserId",
            StatusUserIsActive = "StatusUserIsActive"
        }
    }
}

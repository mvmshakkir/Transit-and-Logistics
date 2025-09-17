namespace SerExtraCore.Transactions {
    export interface InvoiceCollectionRow {
        Id?: number;
        TrxDate?: string;
        CollectionNumber?: string;
        CustomerId?: number;
        TotalAmount?: number;
        PaymentType?: PymentTypes;
        AccountId?: number;
        Status?: InvoiceStatus;
        StatusUser?: number;
        Slno?: number;
        DetailList?: InvoiceCollectionDetailsRow[];
        Receipts?: Accounts.ReceiptRow[];
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

    export namespace InvoiceCollectionRow {
        export const idProperty = 'Id';
        export const nameProperty = 'CollectionNumber';
        export const localTextPrefix = 'Transactions.InvoiceCollection';
        export const deletePermission = 'Transactions:InvoiceCollection';
        export const insertPermission = 'Transactions:InvoiceCollection';
        export const readPermission = 'Transactions:InvoiceCollection';
        export const updatePermission = 'Transactions:InvoiceCollection';

        export declare const enum Fields {
            Id = "Id",
            TrxDate = "TrxDate",
            CollectionNumber = "CollectionNumber",
            CustomerId = "CustomerId",
            TotalAmount = "TotalAmount",
            PaymentType = "PaymentType",
            AccountId = "AccountId",
            Status = "Status",
            StatusUser = "StatusUser",
            Slno = "Slno",
            DetailList = "DetailList",
            Receipts = "Receipts",
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

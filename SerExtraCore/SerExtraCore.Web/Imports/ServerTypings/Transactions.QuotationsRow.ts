namespace SerExtraCore.Transactions {
    export interface QuotationsRow {
        Id?: number;
        CustomerId?: number;
        Date?: string;
        QuotNo?: string;
        ContactPerson?: string;
        Mobile?: string;
        Email?: string;
        Enquiryref?: string;
        FaxNo?: string;
        TotalAmount?: number;
        Note?: string;
        VehicleType?: string;
        TermsAndConditions?: string;
        QuotationType?: QuotationTypes;
        QuotationDetails?: QuotationDetailsRow[];
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
    }

    export namespace QuotationsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'QuotNo';
        export const localTextPrefix = 'Transactions.Quotations';
        export const deletePermission = 'Transactions:Quotations';
        export const insertPermission = 'Transactions:Quotations';
        export const readPermission = 'Transactions:Quotations';
        export const updatePermission = 'Transactions:Quotations';

        export declare const enum Fields {
            Id = "Id",
            CustomerId = "CustomerId",
            Date = "Date",
            QuotNo = "QuotNo",
            ContactPerson = "ContactPerson",
            Mobile = "Mobile",
            Email = "Email",
            Enquiryref = "Enquiryref",
            FaxNo = "FaxNo",
            TotalAmount = "TotalAmount",
            Note = "Note",
            VehicleType = "VehicleType",
            TermsAndConditions = "TermsAndConditions",
            QuotationType = "QuotationType",
            QuotationDetails = "QuotationDetails",
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
            CustomerTaxRegNo = "CustomerTaxRegNo"
        }
    }
}

namespace SerExtraCore.Transactions {
    export interface DeliveryServicesRow {
        Id?: number;
        BillNo?: string;
        TrxDate?: string;
        ConsigneeId?: number;
        ConsignorId?: number;
        ShippingAreaFrom?: number;
        ShippingAreaTo?: number;
        HandDate?: string;
        ReceivedDate?: string;
        Note?: string;
        PaymentType?: PaymentType;
        TotalAmount?: number;
        PaymentTypeA?: PymentTypes;
        AccountId?: number;
        DeliveryStatus?: DeliveryStatus;
        ReceiverDetails?: string;
        ContactNo?: string;
        IDNo?: string;
        ConsigneeCustomerCode?: string;
        ConsigneeCustomerName?: string;
        ConsigneeAddress?: string;
        ConsigneePlace?: string;
        ConsigneeTelephone?: string;
        ConsigneeEmail?: string;
        ConsigneeContactPerson?: string;
        ConsigneeMobile?: string;
        ConsigneeCreationDate?: string;
        ConsigneeDescription?: string;
        ConsigneeDueDays?: number;
        ConsigneeOpening?: number;
        ConsigneeOpeningDate?: string;
        ConsigneeTaxRegNo?: string;
        ConsignorCustomerCode?: string;
        ConsignorCustomerName?: string;
        ConsignorAddress?: string;
        ConsignorPlace?: string;
        ConsignorTelephone?: string;
        ConsignorEmail?: string;
        ConsignorContactPerson?: string;
        ConsignorMobile?: string;
        ConsignorCreationDate?: string;
        ConsignorDescription?: string;
        ConsignorDueDays?: number;
        ConsignorOpening?: number;
        ConsignorOpeningDate?: string;
        ConsignorTaxRegNo?: string;
        ShippingAreaFromAreaName?: string;
        ShippingAreaFromDescription?: string;
        ShippingAreaToAreaName?: string;
        ShippingAreaToDescription?: string;
        DeliveryServiceDetails?: DeliveryServiceDetailsRow[];
        Receipts?: Accounts.ReceiptRow[];
    }

    export namespace DeliveryServicesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'BillNo';
        export const localTextPrefix = 'Transactions.DeliveryServices';
        export const deletePermission = 'Transactions:DeliveryServices';
        export const insertPermission = 'Transactions:DeliveryServices';
        export const readPermission = 'Transactions:DeliveryServices';
        export const updatePermission = 'Transactions:DeliveryServices';

        export declare const enum Fields {
            Id = "Id",
            BillNo = "BillNo",
            TrxDate = "TrxDate",
            ConsigneeId = "ConsigneeId",
            ConsignorId = "ConsignorId",
            ShippingAreaFrom = "ShippingAreaFrom",
            ShippingAreaTo = "ShippingAreaTo",
            HandDate = "HandDate",
            ReceivedDate = "ReceivedDate",
            Note = "Note",
            PaymentType = "PaymentType",
            TotalAmount = "TotalAmount",
            PaymentTypeA = "PaymentTypeA",
            AccountId = "AccountId",
            DeliveryStatus = "DeliveryStatus",
            ReceiverDetails = "ReceiverDetails",
            ContactNo = "ContactNo",
            IDNo = "IDNo",
            ConsigneeCustomerCode = "ConsigneeCustomerCode",
            ConsigneeCustomerName = "ConsigneeCustomerName",
            ConsigneeAddress = "ConsigneeAddress",
            ConsigneePlace = "ConsigneePlace",
            ConsigneeTelephone = "ConsigneeTelephone",
            ConsigneeEmail = "ConsigneeEmail",
            ConsigneeContactPerson = "ConsigneeContactPerson",
            ConsigneeMobile = "ConsigneeMobile",
            ConsigneeCreationDate = "ConsigneeCreationDate",
            ConsigneeDescription = "ConsigneeDescription",
            ConsigneeDueDays = "ConsigneeDueDays",
            ConsigneeOpening = "ConsigneeOpening",
            ConsigneeOpeningDate = "ConsigneeOpeningDate",
            ConsigneeTaxRegNo = "ConsigneeTaxRegNo",
            ConsignorCustomerCode = "ConsignorCustomerCode",
            ConsignorCustomerName = "ConsignorCustomerName",
            ConsignorAddress = "ConsignorAddress",
            ConsignorPlace = "ConsignorPlace",
            ConsignorTelephone = "ConsignorTelephone",
            ConsignorEmail = "ConsignorEmail",
            ConsignorContactPerson = "ConsignorContactPerson",
            ConsignorMobile = "ConsignorMobile",
            ConsignorCreationDate = "ConsignorCreationDate",
            ConsignorDescription = "ConsignorDescription",
            ConsignorDueDays = "ConsignorDueDays",
            ConsignorOpening = "ConsignorOpening",
            ConsignorOpeningDate = "ConsignorOpeningDate",
            ConsignorTaxRegNo = "ConsignorTaxRegNo",
            ShippingAreaFromAreaName = "ShippingAreaFromAreaName",
            ShippingAreaFromDescription = "ShippingAreaFromDescription",
            ShippingAreaToAreaName = "ShippingAreaToAreaName",
            ShippingAreaToDescription = "ShippingAreaToDescription",
            DeliveryServiceDetails = "DeliveryServiceDetails",
            Receipts = "Receipts"
        }
    }
}

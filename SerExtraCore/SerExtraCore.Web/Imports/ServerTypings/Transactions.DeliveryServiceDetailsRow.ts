namespace SerExtraCore.Transactions {
    export interface DeliveryServiceDetailsRow {
        Id?: number;
        DeliveryServiceId?: number;
        ParcelType?: string;
        ParcelTypeOtherLang?: string;
        Quantity?: number;
        UnitPrice?: number;
        TotalAmount?: number;
        DeliveryServiceBillNo?: string;
        DeliveryServiceTrxDate?: string;
        DeliveryServiceConsigneeId?: number;
        DeliveryServiceConsignorId?: number;
        DeliveryServiceShippingAreaFrom?: number;
        DeliveryServiceShippingAreaTo?: number;
        DeliveryServiceHandDate?: string;
        DeliveryServiceReceivedDate?: string;
        DeliveryServiceNote?: string;
        DeliveryServicePaymentType?: number;
        DeliveryServiceTotalAmount?: number;
    }

    export namespace DeliveryServiceDetailsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'ParcelType';
        export const localTextPrefix = 'Transactions.DeliveryServiceDetails';
        export const deletePermission = 'Transactions:DeliveryServices';
        export const insertPermission = 'Transactions:DeliveryServices';
        export const readPermission = 'Transactions:DeliveryServices';
        export const updatePermission = 'Transactions:DeliveryServices';

        export declare const enum Fields {
            Id = "Id",
            DeliveryServiceId = "DeliveryServiceId",
            ParcelType = "ParcelType",
            ParcelTypeOtherLang = "ParcelTypeOtherLang",
            Quantity = "Quantity",
            UnitPrice = "UnitPrice",
            TotalAmount = "TotalAmount",
            DeliveryServiceBillNo = "DeliveryServiceBillNo",
            DeliveryServiceTrxDate = "DeliveryServiceTrxDate",
            DeliveryServiceConsigneeId = "DeliveryServiceConsigneeId",
            DeliveryServiceConsignorId = "DeliveryServiceConsignorId",
            DeliveryServiceShippingAreaFrom = "DeliveryServiceShippingAreaFrom",
            DeliveryServiceShippingAreaTo = "DeliveryServiceShippingAreaTo",
            DeliveryServiceHandDate = "DeliveryServiceHandDate",
            DeliveryServiceReceivedDate = "DeliveryServiceReceivedDate",
            DeliveryServiceNote = "DeliveryServiceNote",
            DeliveryServicePaymentType = "DeliveryServicePaymentType",
            DeliveryServiceTotalAmount = "DeliveryServiceTotalAmount"
        }
    }
}

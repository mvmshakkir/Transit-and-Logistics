namespace SerExtraCore.Transactions {
    export interface DeliveryPrintModel extends Serenity.ServiceResponse {
        Delivery?: DeliveryServicesRow;
        Details?: DeliveryServiceDetailsRow[];
        amountinwords?: string;
    }
}

namespace SerExtraCore.Transactions {
    export interface QuotationFormatItems extends Serenity.ServiceResponse {
        quotations?: QuotationsRow;
        configuration?: Administration.ConfigurationRow;
        Details?: QuotationDetailsRow[];
        Customer?: Master.CustomersRow;
        amountinwords?: string;
        type?: string;
    }
}

namespace SerExtraCore.Web.Modules {
    export interface InvoiceBalanceRequest extends Serenity.ServiceRequest {
        invoiceid?: number;
        onlyapproved?: boolean;
    }
}

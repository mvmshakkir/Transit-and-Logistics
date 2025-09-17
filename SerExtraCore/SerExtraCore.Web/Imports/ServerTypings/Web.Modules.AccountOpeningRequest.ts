namespace SerExtraCore.Web.Modules {
    export interface AccountOpeningRequest extends Serenity.ServiceRequest {
        AccountId?: number;
        FromDate?: string;
    }
}

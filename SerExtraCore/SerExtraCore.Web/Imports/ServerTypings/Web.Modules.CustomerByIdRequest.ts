namespace SerExtraCore.Web.Modules {
    export interface CustomerByIdRequest extends Serenity.ServiceRequest {
        CustomerId?: number;
    }
}

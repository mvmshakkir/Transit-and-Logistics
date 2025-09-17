namespace SerExtraCore.Transactions {
    export namespace InvoiceVehicleSpecificationsService {
        export const baseUrl = 'Transactions/InvoiceVehicleSpecifications';

        export declare function Create(request: Serenity.SaveRequest<InvoiceVehicleSpecificationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<InvoiceVehicleSpecificationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InvoiceVehicleSpecificationsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<InvoiceVehicleSpecificationsRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InvoiceVehicleSpecificationsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<InvoiceVehicleSpecificationsRow>>;

        export declare const enum Methods {
            Create = "Transactions/InvoiceVehicleSpecifications/Create",
            Update = "Transactions/InvoiceVehicleSpecifications/Update",
            Delete = "Transactions/InvoiceVehicleSpecifications/Delete",
            Retrieve = "Transactions/InvoiceVehicleSpecifications/Retrieve",
            List = "Transactions/InvoiceVehicleSpecifications/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>InvoiceVehicleSpecificationsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
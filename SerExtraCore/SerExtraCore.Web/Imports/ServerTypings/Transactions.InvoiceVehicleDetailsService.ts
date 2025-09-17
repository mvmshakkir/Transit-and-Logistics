namespace SerExtraCore.Transactions {
    export namespace InvoiceVehicleDetailsService {
        export const baseUrl = 'Transactions/InvoiceVehicleDetails';

        export declare function Create(request: Serenity.SaveRequest<InvoiceVehicleDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<InvoiceVehicleDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InvoiceVehicleDetailsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<InvoiceVehicleDetailsRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InvoiceVehicleDetailsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<InvoiceVehicleDetailsRow>>;

        export declare const enum Methods {
            Create = "Transactions/InvoiceVehicleDetails/Create",
            Update = "Transactions/InvoiceVehicleDetails/Update",
            Delete = "Transactions/InvoiceVehicleDetails/Delete",
            Retrieve = "Transactions/InvoiceVehicleDetails/Retrieve",
            List = "Transactions/InvoiceVehicleDetails/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>InvoiceVehicleDetailsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
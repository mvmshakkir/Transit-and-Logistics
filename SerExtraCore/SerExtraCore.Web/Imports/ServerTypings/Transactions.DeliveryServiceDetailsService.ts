namespace SerExtraCore.Transactions {
    export namespace DeliveryServiceDetailsService {
        export const baseUrl = 'Transactions/DeliveryServiceDetails';

        export declare function Create(request: Serenity.SaveRequest<DeliveryServiceDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<DeliveryServiceDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DeliveryServiceDetailsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<DeliveryServiceDetailsRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DeliveryServiceDetailsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<DeliveryServiceDetailsRow>>;

        export declare const enum Methods {
            Create = "Transactions/DeliveryServiceDetails/Create",
            Update = "Transactions/DeliveryServiceDetails/Update",
            Delete = "Transactions/DeliveryServiceDetails/Delete",
            Retrieve = "Transactions/DeliveryServiceDetails/Retrieve",
            List = "Transactions/DeliveryServiceDetails/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>DeliveryServiceDetailsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
namespace SerExtraCore.ServiceAmount {
    export namespace ServiceAmountService {
        export const baseUrl = 'ServiceAmount/ServiceAmount';

        export declare function Create(request: Serenity.SaveRequest<ServiceAmountRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<ServiceAmountRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ServiceAmountRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<ServiceAmountRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ServiceAmountRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<ServiceAmountRow>>;

        export declare const enum Methods {
            Create = "ServiceAmount/ServiceAmount/Create",
            Update = "ServiceAmount/ServiceAmount/Update",
            Delete = "ServiceAmount/ServiceAmount/Delete",
            Retrieve = "ServiceAmount/ServiceAmount/Retrieve",
            List = "ServiceAmount/ServiceAmount/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ServiceAmountService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
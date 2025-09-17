namespace SerExtraCore.Master {
    export namespace TaxCodeService {
        export const baseUrl = 'Master/TaxCode';

        export declare function Create(request: Serenity.SaveRequest<TaxCodeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<TaxCodeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TaxCodeRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<TaxCodeRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TaxCodeRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<TaxCodeRow>>;

        export declare const enum Methods {
            Create = "Master/TaxCode/Create",
            Update = "Master/TaxCode/Update",
            Delete = "Master/TaxCode/Delete",
            Retrieve = "Master/TaxCode/Retrieve",
            List = "Master/TaxCode/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TaxCodeService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
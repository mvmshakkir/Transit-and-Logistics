namespace SerExtraCore.Accounts {
    export namespace ContraService {
        export const baseUrl = 'Accounts/Contra';

        export declare function Create(request: Serenity.SaveRequest<ContraRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<ContraRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ContraRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<ContraRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ContraRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<ContraRow>>;

        export declare const enum Methods {
            Create = "Accounts/Contra/Create",
            Update = "Accounts/Contra/Update",
            Delete = "Accounts/Contra/Delete",
            Retrieve = "Accounts/Contra/Retrieve",
            List = "Accounts/Contra/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ContraService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
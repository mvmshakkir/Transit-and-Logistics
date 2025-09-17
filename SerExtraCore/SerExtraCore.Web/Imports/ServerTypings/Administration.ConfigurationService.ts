namespace SerExtraCore.Administration {
    export namespace ConfigurationService {
        export const baseUrl = 'Administration/Configuration';

        export declare function Create(request: Serenity.SaveRequest<ConfigurationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<ConfigurationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ConfigurationRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<ConfigurationRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ConfigurationRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<ConfigurationRow>>;

        export declare const enum Methods {
            Create = "Administration/Configuration/Create",
            Update = "Administration/Configuration/Update",
            Delete = "Administration/Configuration/Delete",
            Retrieve = "Administration/Configuration/Retrieve",
            List = "Administration/Configuration/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ConfigurationService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
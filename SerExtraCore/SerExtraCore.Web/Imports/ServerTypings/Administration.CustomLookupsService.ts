namespace SerExtraCore.Administration {
    export namespace CustomLookupsService {
        export const baseUrl = 'Administration/CustomLookups';

        export declare function Create(request: Serenity.SaveRequest<CustomLookupsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<CustomLookupsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomLookupsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<CustomLookupsRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomLookupsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<CustomLookupsRow>>;

        export declare const enum Methods {
            Create = "Administration/CustomLookups/Create",
            Update = "Administration/CustomLookups/Update",
            Delete = "Administration/CustomLookups/Delete",
            Retrieve = "Administration/CustomLookups/Retrieve",
            List = "Administration/CustomLookups/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>CustomLookupsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
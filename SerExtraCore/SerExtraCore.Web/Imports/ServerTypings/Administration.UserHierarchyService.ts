namespace SerExtraCore.Administration {
    export namespace UserHierarchyService {
        export const baseUrl = 'Administration/UserHierarchy';

        export declare function Create(request: Serenity.SaveRequest<UserHierarchyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<UserHierarchyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserHierarchyRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<UserHierarchyRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserHierarchyRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<UserHierarchyRow>>;

        export declare const enum Methods {
            Create = "Administration/UserHierarchy/Create",
            Update = "Administration/UserHierarchy/Update",
            Delete = "Administration/UserHierarchy/Delete",
            Retrieve = "Administration/UserHierarchy/Retrieve",
            List = "Administration/UserHierarchy/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>UserHierarchyService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
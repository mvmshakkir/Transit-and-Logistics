namespace SerExtraCore.Master {
    export namespace DesignationService {
        export const baseUrl = 'Master/Designation';

        export declare function Create(request: Serenity.SaveRequest<DesignationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<DesignationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DesignationRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<DesignationRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DesignationRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<DesignationRow>>;

        export declare const enum Methods {
            Create = "Master/Designation/Create",
            Update = "Master/Designation/Update",
            Delete = "Master/Designation/Delete",
            Retrieve = "Master/Designation/Retrieve",
            List = "Master/Designation/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>DesignationService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
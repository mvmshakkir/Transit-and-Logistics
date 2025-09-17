namespace SerExtraCore.Master {
    export namespace SpecificationsService {
        export const baseUrl = 'Master/Specifications';

        export declare function Create(request: Serenity.SaveRequest<SpecificationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<SpecificationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SpecificationsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<SpecificationsRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SpecificationsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<SpecificationsRow>>;

        export declare const enum Methods {
            Create = "Master/Specifications/Create",
            Update = "Master/Specifications/Update",
            Delete = "Master/Specifications/Delete",
            Retrieve = "Master/Specifications/Retrieve",
            List = "Master/Specifications/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>SpecificationsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
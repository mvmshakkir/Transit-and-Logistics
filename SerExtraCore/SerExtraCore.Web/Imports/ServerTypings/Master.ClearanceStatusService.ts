namespace SerExtraCore.Master {
    export namespace ClearanceStatusService {
        export const baseUrl = 'Master/ClearanceStatus';

        export declare function Create(request: Serenity.SaveRequest<ClearanceStatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<ClearanceStatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ClearanceStatusRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<ClearanceStatusRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ClearanceStatusRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<ClearanceStatusRow>>;

        export declare const enum Methods {
            Create = "Master/ClearanceStatus/Create",
            Update = "Master/ClearanceStatus/Update",
            Delete = "Master/ClearanceStatus/Delete",
            Retrieve = "Master/ClearanceStatus/Retrieve",
            List = "Master/ClearanceStatus/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ClearanceStatusService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
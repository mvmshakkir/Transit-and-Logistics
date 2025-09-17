namespace SerExtraCore.Master {
    export namespace OutsourceService {
        export const baseUrl = 'Master/Outsource';

        export declare function Create(request: Serenity.SaveRequest<OutsourceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<OutsourceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OutsourceRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<OutsourceRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OutsourceRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<OutsourceRow>>;

        export declare const enum Methods {
            Create = "Master/Outsource/Create",
            Update = "Master/Outsource/Update",
            Delete = "Master/Outsource/Delete",
            Retrieve = "Master/Outsource/Retrieve",
            List = "Master/Outsource/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>OutsourceService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
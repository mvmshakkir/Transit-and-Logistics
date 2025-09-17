namespace SerExtraCore.UOM {
    export namespace UOMService {
        export const baseUrl = 'UOM/UOM';

        export declare function Create(request: Serenity.SaveRequest<UOMRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<UOMRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UOMRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<UOMRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UOMRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<UOMRow>>;

        export declare const enum Methods {
            Create = "UOM/UOM/Create",
            Update = "UOM/UOM/Update",
            Delete = "UOM/UOM/Delete",
            Retrieve = "UOM/UOM/Retrieve",
            List = "UOM/UOM/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>UOMService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
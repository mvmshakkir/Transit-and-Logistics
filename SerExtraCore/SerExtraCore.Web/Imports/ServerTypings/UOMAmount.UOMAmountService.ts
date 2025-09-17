namespace SerExtraCore.UOMAmount {
    export namespace UOMAmountService {
        export const baseUrl = 'UOMAmount/UOMAmount';

        export declare function Create(request: Serenity.SaveRequest<UOMAmountRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<UOMAmountRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UOMAmountRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<UOMAmountRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UOMAmountRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<UOMAmountRow>>;

        export declare const enum Methods {
            Create = "UOMAmount/UOMAmount/Create",
            Update = "UOMAmount/UOMAmount/Update",
            Delete = "UOMAmount/UOMAmount/Delete",
            Retrieve = "UOMAmount/UOMAmount/Retrieve",
            List = "UOMAmount/UOMAmount/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>UOMAmountService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
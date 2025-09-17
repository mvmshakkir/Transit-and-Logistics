namespace SerExtraCore.Transactions {
    export namespace PurchaseService {
        export const baseUrl = 'Transactions/Purchase';

        export declare function Create(request: Serenity.SaveRequest<PurchaseRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<PurchaseRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PurchaseRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<PurchaseRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PurchaseRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<PurchaseRow>>;

        export declare const enum Methods {
            Create = "Transactions/Purchase/Create",
            Update = "Transactions/Purchase/Update",
            Delete = "Transactions/Purchase/Delete",
            Retrieve = "Transactions/Purchase/Retrieve",
            List = "Transactions/Purchase/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>PurchaseService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
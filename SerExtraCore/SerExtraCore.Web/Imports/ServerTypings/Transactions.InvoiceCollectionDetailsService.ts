namespace SerExtraCore.Transactions {
    export namespace InvoiceCollectionDetailsService {
        export const baseUrl = 'Transactions/InvoiceCollectionDetails';

        export declare function Create(request: Serenity.SaveRequest<InvoiceCollectionDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<InvoiceCollectionDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InvoiceCollectionDetailsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<InvoiceCollectionDetailsRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InvoiceCollectionDetailsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<InvoiceCollectionDetailsRow>>;

        export declare const enum Methods {
            Create = "Transactions/InvoiceCollectionDetails/Create",
            Update = "Transactions/InvoiceCollectionDetails/Update",
            Delete = "Transactions/InvoiceCollectionDetails/Delete",
            Retrieve = "Transactions/InvoiceCollectionDetails/Retrieve",
            List = "Transactions/InvoiceCollectionDetails/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>InvoiceCollectionDetailsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
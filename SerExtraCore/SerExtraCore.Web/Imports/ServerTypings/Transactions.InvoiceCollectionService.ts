namespace SerExtraCore.Transactions {
    export namespace InvoiceCollectionService {
        export const baseUrl = 'Transactions/InvoiceCollection';

        export declare function Create(request: Serenity.SaveRequest<InvoiceCollectionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<InvoiceCollectionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InvoiceCollectionRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<InvoiceCollectionRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InvoiceCollectionRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<InvoiceCollectionRow>>;
        export declare function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<GetNextNumberResponse>;

        export declare const enum Methods {
            Create = "Transactions/InvoiceCollection/Create",
            Update = "Transactions/InvoiceCollection/Update",
            Delete = "Transactions/InvoiceCollection/Delete",
            Retrieve = "Transactions/InvoiceCollection/Retrieve",
            List = "Transactions/InvoiceCollection/List",
            GetNextNumber = "Transactions/InvoiceCollection/GetNextNumber"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'GetNextNumber'
        ].forEach(x => {
            (<any>InvoiceCollectionService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
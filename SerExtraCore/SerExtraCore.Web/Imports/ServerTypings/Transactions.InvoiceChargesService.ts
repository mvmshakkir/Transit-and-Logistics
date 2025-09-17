namespace SerExtraCore.Transactions {
    export namespace InvoiceChargesService {
        export const baseUrl = 'Transactions/InvoiceCharges';

        export declare function Create(request: Serenity.SaveRequest<InvoiceChargesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<InvoiceChargesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InvoiceChargesRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<InvoiceChargesRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InvoiceChargesRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<InvoiceChargesRow>>;

        export declare const enum Methods {
            Create = "Transactions/InvoiceCharges/Create",
            Update = "Transactions/InvoiceCharges/Update",
            Delete = "Transactions/InvoiceCharges/Delete",
            Retrieve = "Transactions/InvoiceCharges/Retrieve",
            List = "Transactions/InvoiceCharges/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>InvoiceChargesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
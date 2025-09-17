namespace SerExtraCore.Transactions {
    export namespace SuppliersPaymentInvoicesService {
        export const baseUrl = 'Transactions/SuppliersPaymentInvoices';

        export declare function Create(request: Serenity.SaveRequest<SuppliersPaymentInvoicesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<SuppliersPaymentInvoicesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SuppliersPaymentInvoicesRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<SuppliersPaymentInvoicesRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SuppliersPaymentInvoicesRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<SuppliersPaymentInvoicesRow>>;

        export declare const enum Methods {
            Create = "Transactions/SuppliersPaymentInvoices/Create",
            Update = "Transactions/SuppliersPaymentInvoices/Update",
            Delete = "Transactions/SuppliersPaymentInvoices/Delete",
            Retrieve = "Transactions/SuppliersPaymentInvoices/Retrieve",
            List = "Transactions/SuppliersPaymentInvoices/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>SuppliersPaymentInvoicesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
namespace SerExtraCore.Transactions {
    export namespace SuppliersPaymentInvoiceChargesService {
        export const baseUrl = 'Transactions/SuppliersPaymentInvoiceCharges';

        export declare function Create(request: Serenity.SaveRequest<SuppliersPaymentInvoiceChargesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<SuppliersPaymentInvoiceChargesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SuppliersPaymentInvoiceChargesRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<SuppliersPaymentInvoiceChargesRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SuppliersPaymentInvoiceChargesRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<SuppliersPaymentInvoiceChargesRow>>;

        export declare const enum Methods {
            Create = "Transactions/SuppliersPaymentInvoiceCharges/Create",
            Update = "Transactions/SuppliersPaymentInvoiceCharges/Update",
            Delete = "Transactions/SuppliersPaymentInvoiceCharges/Delete",
            Retrieve = "Transactions/SuppliersPaymentInvoiceCharges/Retrieve",
            List = "Transactions/SuppliersPaymentInvoiceCharges/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>SuppliersPaymentInvoiceChargesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
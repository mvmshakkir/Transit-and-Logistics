namespace SerExtraCore.Transactions {
    export namespace SuppliersPaymentInvoiceVehicleDetailsService {
        export const baseUrl = 'Transactions/SuppliersPaymentInvoiceVehicleDetails';

        export declare function Create(request: Serenity.SaveRequest<SuppliersPaymentInvoiceVehicleDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<SuppliersPaymentInvoiceVehicleDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SuppliersPaymentInvoiceVehicleDetailsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<SuppliersPaymentInvoiceVehicleDetailsRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SuppliersPaymentInvoiceVehicleDetailsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<SuppliersPaymentInvoiceVehicleDetailsRow>>;

        export declare const enum Methods {
            Create = "Transactions/SuppliersPaymentInvoiceVehicleDetails/Create",
            Update = "Transactions/SuppliersPaymentInvoiceVehicleDetails/Update",
            Delete = "Transactions/SuppliersPaymentInvoiceVehicleDetails/Delete",
            Retrieve = "Transactions/SuppliersPaymentInvoiceVehicleDetails/Retrieve",
            List = "Transactions/SuppliersPaymentInvoiceVehicleDetails/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>SuppliersPaymentInvoiceVehicleDetailsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
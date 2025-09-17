namespace SerExtraCore.PDCPayments {
    export namespace PdcPaymentDetailsService {
        export const baseUrl = 'PDCPayments/PdcPaymentDetails';

        export declare function Create(request: Serenity.SaveRequest<PdcPaymentDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<PdcPaymentDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PdcPaymentDetailsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<PdcPaymentDetailsRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PdcPaymentDetailsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<PdcPaymentDetailsRow>>;

        export declare const enum Methods {
            Create = "PDCPayments/PdcPaymentDetails/Create",
            Update = "PDCPayments/PdcPaymentDetails/Update",
            Delete = "PDCPayments/PdcPaymentDetails/Delete",
            Retrieve = "PDCPayments/PdcPaymentDetails/Retrieve",
            List = "PDCPayments/PdcPaymentDetails/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>PdcPaymentDetailsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
namespace SerExtraCore.HRM {
    export namespace PayrollPaymentService {
        export const baseUrl = 'HRM/PayrollPayment';

        export declare function Create(request: Serenity.SaveRequest<PayrollPaymentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<PayrollPaymentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PayrollPaymentRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<PayrollPaymentRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PayrollPaymentRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<PayrollPaymentRow>>;

        export declare const enum Methods {
            Create = "HRM/PayrollPayment/Create",
            Update = "HRM/PayrollPayment/Update",
            Delete = "HRM/PayrollPayment/Delete",
            Retrieve = "HRM/PayrollPayment/Retrieve",
            List = "HRM/PayrollPayment/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>PayrollPaymentService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
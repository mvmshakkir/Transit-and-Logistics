namespace SerExtraCore.Transactions {
    export namespace SuppliersPaymentService {
        export const baseUrl = 'Transactions/SuppliersPayment';

        export declare function Create(request: Serenity.SaveRequest<SuppliersPaymentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<SuppliersPaymentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SuppliersPaymentRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<SuppliersPaymentRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SuppliersPaymentRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<SuppliersPaymentRow>>;
        export declare function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<GetNextNumberResponse>;

        export declare const enum Methods {
            Create = "Transactions/SuppliersPayment/Create",
            Update = "Transactions/SuppliersPayment/Update",
            Delete = "Transactions/SuppliersPayment/Delete",
            Retrieve = "Transactions/SuppliersPayment/Retrieve",
            List = "Transactions/SuppliersPayment/List",
            GetNextNumber = "Transactions/SuppliersPayment/GetNextNumber"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'GetNextNumber'
        ].forEach(x => {
            (<any>SuppliersPaymentService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
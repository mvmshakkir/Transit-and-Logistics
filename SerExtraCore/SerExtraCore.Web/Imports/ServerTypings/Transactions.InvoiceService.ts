namespace SerExtraCore.Transactions {
    export namespace InvoiceService {
        export const baseUrl = 'Transactions/Invoice';

        export declare function Create(request: Serenity.SaveRequest<InvoiceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<InvoiceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InvoiceRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<InvoiceRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InvoiceRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<InvoiceRow>>;
        export declare function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<GetNextNumberResponse>;
        export declare function LoginUser(request: Serenity.ServiceRequest, onSuccess?: (response: string) => void, opt?: Q.ServiceOptions<any>): PromiseLike<string>;

        export declare const enum Methods {
            Create = "Transactions/Invoice/Create",
            Update = "Transactions/Invoice/Update",
            Delete = "Transactions/Invoice/Delete",
            Retrieve = "Transactions/Invoice/Retrieve",
            List = "Transactions/Invoice/List",
            GetNextNumber = "Transactions/Invoice/GetNextNumber",
            LoginUser = "Transactions/Invoice/LoginUser"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'GetNextNumber', 
            'LoginUser'
        ].forEach(x => {
            (<any>InvoiceService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
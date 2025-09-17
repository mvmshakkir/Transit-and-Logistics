namespace SerExtraCore.Transactions {
    export namespace InvoiceTripDatesService {
        export const baseUrl = 'Transactions/InvoiceTripDates';

        export declare function Create(request: Serenity.SaveRequest<InvoiceTripDatesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<InvoiceTripDatesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InvoiceTripDatesRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<InvoiceTripDatesRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InvoiceTripDatesRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<InvoiceTripDatesRow>>;

        export declare const enum Methods {
            Create = "Transactions/InvoiceTripDates/Create",
            Update = "Transactions/InvoiceTripDates/Update",
            Delete = "Transactions/InvoiceTripDates/Delete",
            Retrieve = "Transactions/InvoiceTripDates/Retrieve",
            List = "Transactions/InvoiceTripDates/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>InvoiceTripDatesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
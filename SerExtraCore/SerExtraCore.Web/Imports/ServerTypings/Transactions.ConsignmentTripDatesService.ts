namespace SerExtraCore.Transactions {
    export namespace ConsignmentTripDatesService {
        export const baseUrl = 'Transactions/ConsignmentTripDates';

        export declare function Create(request: Serenity.SaveRequest<ConsignmentTripDatesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<ConsignmentTripDatesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ConsignmentTripDatesRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<ConsignmentTripDatesRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ConsignmentTripDatesRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<ConsignmentTripDatesRow>>;

        export declare const enum Methods {
            Create = "Transactions/ConsignmentTripDates/Create",
            Update = "Transactions/ConsignmentTripDates/Update",
            Delete = "Transactions/ConsignmentTripDates/Delete",
            Retrieve = "Transactions/ConsignmentTripDates/Retrieve",
            List = "Transactions/ConsignmentTripDates/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ConsignmentTripDatesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
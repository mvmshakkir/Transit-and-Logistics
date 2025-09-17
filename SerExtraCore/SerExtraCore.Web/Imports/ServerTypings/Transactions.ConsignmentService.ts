namespace SerExtraCore.Transactions {
    export namespace ConsignmentService {
        export const baseUrl = 'Transactions/Consignment';

        export declare function Create(request: Serenity.SaveRequest<ConsignmentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<ConsignmentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ConsignmentRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<ConsignmentRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ConsignmentRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<ConsignmentRow>>;
        export declare function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<GetNextNumberResponse>;

        export declare const enum Methods {
            Create = "Transactions/Consignment/Create",
            Update = "Transactions/Consignment/Update",
            Delete = "Transactions/Consignment/Delete",
            Retrieve = "Transactions/Consignment/Retrieve",
            List = "Transactions/Consignment/List",
            GetNextNumber = "Transactions/Consignment/GetNextNumber"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'GetNextNumber'
        ].forEach(x => {
            (<any>ConsignmentService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
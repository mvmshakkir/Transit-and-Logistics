namespace SerExtraCore.Transactions {
    export namespace ClearanceService {
        export const baseUrl = 'Transactions/Clearance';

        export declare function Create(request: Serenity.SaveRequest<ClearanceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<ClearanceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ClearanceRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<ClearanceRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ClearanceRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<ClearanceRow>>;

        export declare const enum Methods {
            Create = "Transactions/Clearance/Create",
            Update = "Transactions/Clearance/Update",
            Delete = "Transactions/Clearance/Delete",
            Retrieve = "Transactions/Clearance/Retrieve",
            List = "Transactions/Clearance/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ClearanceService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
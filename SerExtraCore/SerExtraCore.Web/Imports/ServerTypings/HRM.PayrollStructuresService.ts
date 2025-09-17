namespace SerExtraCore.HRM {
    export namespace PayrollStructuresService {
        export const baseUrl = 'HRM/PayrollStructures';

        export declare function Create(request: Serenity.SaveRequest<PayrollStructuresRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<PayrollStructuresRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PayrollStructuresRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<PayrollStructuresRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PayrollStructuresRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<PayrollStructuresRow>>;

        export declare const enum Methods {
            Create = "HRM/PayrollStructures/Create",
            Update = "HRM/PayrollStructures/Update",
            Delete = "HRM/PayrollStructures/Delete",
            Retrieve = "HRM/PayrollStructures/Retrieve",
            List = "HRM/PayrollStructures/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>PayrollStructuresService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
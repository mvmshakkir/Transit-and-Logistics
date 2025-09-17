namespace SerExtraCore.HRM {
    export namespace EmployeeLeavesService {
        export const baseUrl = 'HRM/EmployeeLeaves';

        export declare function Create(request: Serenity.SaveRequest<EmployeeLeavesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<EmployeeLeavesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmployeeLeavesRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<EmployeeLeavesRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmployeeLeavesRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<EmployeeLeavesRow>>;

        export declare const enum Methods {
            Create = "HRM/EmployeeLeaves/Create",
            Update = "HRM/EmployeeLeaves/Update",
            Delete = "HRM/EmployeeLeaves/Delete",
            Retrieve = "HRM/EmployeeLeaves/Retrieve",
            List = "HRM/EmployeeLeaves/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>EmployeeLeavesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
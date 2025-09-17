namespace SerExtraCore.Master {
    export namespace EmployeeTypeService {
        export const baseUrl = 'Master/EmployeeType';

        export declare function Create(request: Serenity.SaveRequest<EmployeeTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<EmployeeTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmployeeTypeRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<EmployeeTypeRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmployeeTypeRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<EmployeeTypeRow>>;

        export declare const enum Methods {
            Create = "Master/EmployeeType/Create",
            Update = "Master/EmployeeType/Update",
            Delete = "Master/EmployeeType/Delete",
            Retrieve = "Master/EmployeeType/Retrieve",
            List = "Master/EmployeeType/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>EmployeeTypeService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
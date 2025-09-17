namespace SerExtraCore.Administration {
    export namespace RolePermissionService {
        export const baseUrl = 'Administration/RolePermission';

        export declare function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<RolePermissionListResponse>;

        export declare const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }

        [
            'Update', 
            'List'
        ].forEach(x => {
            (<any>RolePermissionService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
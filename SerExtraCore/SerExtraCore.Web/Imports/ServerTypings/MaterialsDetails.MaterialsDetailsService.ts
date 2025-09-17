namespace SerExtraCore.MaterialsDetails {
    export namespace MaterialsDetailsService {
        export const baseUrl = 'MaterialsDetails/MaterialsDetails';

        export declare function Create(request: Serenity.SaveRequest<MaterialsDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<MaterialsDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MaterialsDetailsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<MaterialsDetailsRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MaterialsDetailsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<MaterialsDetailsRow>>;

        export declare const enum Methods {
            Create = "MaterialsDetails/MaterialsDetails/Create",
            Update = "MaterialsDetails/MaterialsDetails/Update",
            Delete = "MaterialsDetails/MaterialsDetails/Delete",
            Retrieve = "MaterialsDetails/MaterialsDetails/Retrieve",
            List = "MaterialsDetails/MaterialsDetails/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>MaterialsDetailsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
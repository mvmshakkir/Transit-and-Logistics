namespace SerExtraCore.Master {
    export namespace ShippingAreasService {
        export const baseUrl = 'Master/ShippingAreas';

        export declare function Create(request: Serenity.SaveRequest<ShippingAreasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<ShippingAreasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ShippingAreasRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<ShippingAreasRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ShippingAreasRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<ShippingAreasRow>>;

        export declare const enum Methods {
            Create = "Master/ShippingAreas/Create",
            Update = "Master/ShippingAreas/Update",
            Delete = "Master/ShippingAreas/Delete",
            Retrieve = "Master/ShippingAreas/Retrieve",
            List = "Master/ShippingAreas/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ShippingAreasService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
namespace SerExtraCore.VehicleFreight {
    export namespace VehicleFreightService {
        export const baseUrl = 'VehicleFreight/VehicleFreight';

        export declare function Create(request: Serenity.SaveRequest<VehicleFreightRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<VehicleFreightRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VehicleFreightRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<VehicleFreightRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VehicleFreightRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<VehicleFreightRow>>;

        export declare const enum Methods {
            Create = "VehicleFreight/VehicleFreight/Create",
            Update = "VehicleFreight/VehicleFreight/Update",
            Delete = "VehicleFreight/VehicleFreight/Delete",
            Retrieve = "VehicleFreight/VehicleFreight/Retrieve",
            List = "VehicleFreight/VehicleFreight/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>VehicleFreightService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
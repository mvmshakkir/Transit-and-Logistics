namespace SerExtraCore.Master {
    export namespace VehiclesService {
        export const baseUrl = 'Master/Vehicles';

        export declare function Create(request: Serenity.SaveRequest<VehiclesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<VehiclesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VehiclesRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<VehiclesRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VehiclesRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<VehiclesRow>>;

        export declare const enum Methods {
            Create = "Master/Vehicles/Create",
            Update = "Master/Vehicles/Update",
            Delete = "Master/Vehicles/Delete",
            Retrieve = "Master/Vehicles/Retrieve",
            List = "Master/Vehicles/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>VehiclesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
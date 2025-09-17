namespace SerExtraCore.Master {
    export namespace VehicleModelsService {
        export const baseUrl = 'Master/VehicleModels';

        export declare function Create(request: Serenity.SaveRequest<VehicleModelsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<VehicleModelsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VehicleModelsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<VehicleModelsRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VehicleModelsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<VehicleModelsRow>>;

        export declare const enum Methods {
            Create = "Master/VehicleModels/Create",
            Update = "Master/VehicleModels/Update",
            Delete = "Master/VehicleModels/Delete",
            Retrieve = "Master/VehicleModels/Retrieve",
            List = "Master/VehicleModels/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>VehicleModelsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
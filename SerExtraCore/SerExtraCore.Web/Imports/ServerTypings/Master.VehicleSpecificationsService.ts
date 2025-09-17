namespace SerExtraCore.Master {
    export namespace VehicleSpecificationsService {
        export const baseUrl = 'Master/VehicleSpecifications';

        export declare function Create(request: Serenity.SaveRequest<VehicleSpecificationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<VehicleSpecificationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VehicleSpecificationsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<VehicleSpecificationsRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VehicleSpecificationsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<VehicleSpecificationsRow>>;

        export declare const enum Methods {
            Create = "Master/VehicleSpecifications/Create",
            Update = "Master/VehicleSpecifications/Update",
            Delete = "Master/VehicleSpecifications/Delete",
            Retrieve = "Master/VehicleSpecifications/Retrieve",
            List = "Master/VehicleSpecifications/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>VehicleSpecificationsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
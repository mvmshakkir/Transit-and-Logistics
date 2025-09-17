namespace SerExtraCore.Transactions {
    export namespace ConsignmentVehicleSpecificationsService {
        export const baseUrl = 'Transactions/ConsignmentVehicleSpecifications';

        export declare function Create(request: Serenity.SaveRequest<ConsignmentVehicleSpecificationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<ConsignmentVehicleSpecificationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ConsignmentVehicleSpecificationsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<ConsignmentVehicleSpecificationsRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ConsignmentVehicleSpecificationsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<ConsignmentVehicleSpecificationsRow>>;

        export declare const enum Methods {
            Create = "Transactions/ConsignmentVehicleSpecifications/Create",
            Update = "Transactions/ConsignmentVehicleSpecifications/Update",
            Delete = "Transactions/ConsignmentVehicleSpecifications/Delete",
            Retrieve = "Transactions/ConsignmentVehicleSpecifications/Retrieve",
            List = "Transactions/ConsignmentVehicleSpecifications/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ConsignmentVehicleSpecificationsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
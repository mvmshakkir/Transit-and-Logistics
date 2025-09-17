namespace SerExtraCore.Transactions {
    export namespace ConsignmentVehicleDetailsService {
        export const baseUrl = 'Transactions/ConsignmentVehicleDetails';

        export declare function Create(request: Serenity.SaveRequest<ConsignmentVehicleDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<ConsignmentVehicleDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ConsignmentVehicleDetailsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<ConsignmentVehicleDetailsRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ConsignmentVehicleDetailsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<ConsignmentVehicleDetailsRow>>;

        export declare const enum Methods {
            Create = "Transactions/ConsignmentVehicleDetails/Create",
            Update = "Transactions/ConsignmentVehicleDetails/Update",
            Delete = "Transactions/ConsignmentVehicleDetails/Delete",
            Retrieve = "Transactions/ConsignmentVehicleDetails/Retrieve",
            List = "Transactions/ConsignmentVehicleDetails/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ConsignmentVehicleDetailsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
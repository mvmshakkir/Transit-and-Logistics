namespace SerExtraCore.Transactions {
    export namespace DeliveryServicesService {
        export const baseUrl = 'Transactions/DeliveryServices';

        export declare function Create(request: Serenity.SaveRequest<DeliveryServicesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<DeliveryServicesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DeliveryServicesRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<DeliveryServicesRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DeliveryServicesRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<DeliveryServicesRow>>;
        export declare function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<GetNextNumberResponse>;

        export declare const enum Methods {
            Create = "Transactions/DeliveryServices/Create",
            Update = "Transactions/DeliveryServices/Update",
            Delete = "Transactions/DeliveryServices/Delete",
            Retrieve = "Transactions/DeliveryServices/Retrieve",
            List = "Transactions/DeliveryServices/List",
            GetNextNumber = "Transactions/DeliveryServices/GetNextNumber"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'GetNextNumber'
        ].forEach(x => {
            (<any>DeliveryServicesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
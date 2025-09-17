namespace SerExtraCore.FuelDetails {
    export namespace FuelDetailsService {
        export const baseUrl = 'FuelDetails/FuelDetails';

        export declare function Create(request: Serenity.SaveRequest<FuelDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<FuelDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FuelDetailsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<FuelDetailsRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FuelDetailsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<FuelDetailsRow>>;

        export declare const enum Methods {
            Create = "FuelDetails/FuelDetails/Create",
            Update = "FuelDetails/FuelDetails/Update",
            Delete = "FuelDetails/FuelDetails/Delete",
            Retrieve = "FuelDetails/FuelDetails/Retrieve",
            List = "FuelDetails/FuelDetails/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>FuelDetailsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
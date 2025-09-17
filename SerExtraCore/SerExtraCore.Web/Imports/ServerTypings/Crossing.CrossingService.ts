namespace SerExtraCore.Crossing {
    export namespace CrossingService {
        export const baseUrl = 'Crossing/Crossing';

        export declare function Create(request: Serenity.SaveRequest<CrossingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<CrossingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CrossingRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<CrossingRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CrossingRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<CrossingRow>>;

        export declare const enum Methods {
            Create = "Crossing/Crossing/Create",
            Update = "Crossing/Crossing/Update",
            Delete = "Crossing/Crossing/Delete",
            Retrieve = "Crossing/Crossing/Retrieve",
            List = "Crossing/Crossing/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>CrossingService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
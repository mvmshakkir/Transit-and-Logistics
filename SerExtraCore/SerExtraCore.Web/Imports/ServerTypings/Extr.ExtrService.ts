namespace SerExtraCore.Extr {
    export namespace ExtrService {
        export const baseUrl = 'Extr/Extr';

        export declare function Create(request: Serenity.SaveRequest<ExtrRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<ExtrRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ExtrRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<ExtrRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ExtrRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<ExtrRow>>;

        export declare const enum Methods {
            Create = "Extr/Extr/Create",
            Update = "Extr/Extr/Update",
            Delete = "Extr/Extr/Delete",
            Retrieve = "Extr/Extr/Retrieve",
            List = "Extr/Extr/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ExtrService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
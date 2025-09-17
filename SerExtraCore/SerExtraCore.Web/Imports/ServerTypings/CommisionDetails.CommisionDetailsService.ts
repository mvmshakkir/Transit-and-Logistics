namespace SerExtraCore.CommisionDetails {
    export namespace CommisionDetailsService {
        export const baseUrl = 'CommisionDetails/CommisionDetails';

        export declare function Create(request: Serenity.SaveRequest<CommisionDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<CommisionDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CommisionDetailsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<CommisionDetailsRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CommisionDetailsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<CommisionDetailsRow>>;

        export declare const enum Methods {
            Create = "CommisionDetails/CommisionDetails/Create",
            Update = "CommisionDetails/CommisionDetails/Update",
            Delete = "CommisionDetails/CommisionDetails/Delete",
            Retrieve = "CommisionDetails/CommisionDetails/Retrieve",
            List = "CommisionDetails/CommisionDetails/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>CommisionDetailsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
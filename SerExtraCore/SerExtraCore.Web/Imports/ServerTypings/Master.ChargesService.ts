namespace SerExtraCore.Master {
    export namespace ChargesService {
        export const baseUrl = 'Master/Charges';

        export declare function Create(request: Serenity.SaveRequest<ChargesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<ChargesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ChargesRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<ChargesRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ChargesRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<ChargesRow>>;

        export declare const enum Methods {
            Create = "Master/Charges/Create",
            Update = "Master/Charges/Update",
            Delete = "Master/Charges/Delete",
            Retrieve = "Master/Charges/Retrieve",
            List = "Master/Charges/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ChargesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
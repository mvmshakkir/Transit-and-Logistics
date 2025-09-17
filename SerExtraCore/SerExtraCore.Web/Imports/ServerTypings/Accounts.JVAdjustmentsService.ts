namespace SerExtraCore.Accounts {
    export namespace JVAdjustmentsService {
        export const baseUrl = 'Accounts/JVAdjustments';

        export declare function Create(request: Serenity.SaveRequest<JVAdjustmentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<JVAdjustmentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<JVAdjustmentsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<JVAdjustmentsRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<JVAdjustmentsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<JVAdjustmentsRow>>;

        export declare const enum Methods {
            Create = "Accounts/JVAdjustments/Create",
            Update = "Accounts/JVAdjustments/Update",
            Delete = "Accounts/JVAdjustments/Delete",
            Retrieve = "Accounts/JVAdjustments/Retrieve",
            List = "Accounts/JVAdjustments/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>JVAdjustmentsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
namespace SerExtraCore.Accounts {
    export namespace MoneyInService {
        export const baseUrl = 'Accounts/MoneyIn';

        export declare function Create(request: Serenity.SaveRequest<MoneyInRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<MoneyInRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MoneyInRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<MoneyInRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MoneyInRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<MoneyInRow>>;

        export declare const enum Methods {
            Create = "Accounts/MoneyIn/Create",
            Update = "Accounts/MoneyIn/Update",
            Delete = "Accounts/MoneyIn/Delete",
            Retrieve = "Accounts/MoneyIn/Retrieve",
            List = "Accounts/MoneyIn/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>MoneyInService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
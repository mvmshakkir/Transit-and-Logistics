namespace SerExtraCore.Accounts {
    export namespace MoneyOutService {
        export const baseUrl = 'Accounts/MoneyOut';

        export declare function Create(request: Serenity.SaveRequest<MoneyOutRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<MoneyOutRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MoneyOutRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<MoneyOutRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MoneyOutRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<MoneyOutRow>>;

        export declare const enum Methods {
            Create = "Accounts/MoneyOut/Create",
            Update = "Accounts/MoneyOut/Update",
            Delete = "Accounts/MoneyOut/Delete",
            Retrieve = "Accounts/MoneyOut/Retrieve",
            List = "Accounts/MoneyOut/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>MoneyOutService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
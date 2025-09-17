namespace SerExtraCore.Accounts {
    export namespace AccountHeadsService {
        export const baseUrl = 'Accounts/AccountHeads';

        export declare function Create(request: Serenity.SaveRequest<AccountHeadsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<AccountHeadsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AccountHeadsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<AccountHeadsRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AccountHeadsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<AccountHeadsRow>>;
        export declare function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<GetNextNumberResponse>;

        export declare const enum Methods {
            Create = "Accounts/AccountHeads/Create",
            Update = "Accounts/AccountHeads/Update",
            Delete = "Accounts/AccountHeads/Delete",
            Retrieve = "Accounts/AccountHeads/Retrieve",
            List = "Accounts/AccountHeads/List",
            GetNextNumber = "Accounts/AccountHeads/GetNextNumber"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'GetNextNumber'
        ].forEach(x => {
            (<any>AccountHeadsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
namespace SerExtraCore.Accounts {
    export namespace BankReconciliationService {
        export const baseUrl = 'Accounts/BankReconciliation';

        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BankReconciliationRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<BankReconciliationRow>>;
        export declare function UpdateStatus(request: Web.Modules.UpdateBankStatus, onSuccess?: (response: boolean) => void, opt?: Q.ServiceOptions<any>): PromiseLike<boolean>;
        export declare function AccountOpening(request: Web.Modules.AccountOpeningRequest, onSuccess?: (response: number) => void, opt?: Q.ServiceOptions<any>): PromiseLike<number>;

        export declare const enum Methods {
            List = "Accounts/BankReconciliation/List",
            UpdateStatus = "Accounts/BankReconciliation/UpdateStatus",
            AccountOpening = "Accounts/BankReconciliation/AccountOpening"
        }

        [
            'List', 
            'UpdateStatus', 
            'AccountOpening'
        ].forEach(x => {
            (<any>BankReconciliationService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
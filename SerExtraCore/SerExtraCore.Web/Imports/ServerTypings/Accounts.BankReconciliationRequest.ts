namespace SerExtraCore.Accounts {
    export interface BankReconciliationRequest extends Serenity.ListRequest {
        StartDate?: string;
        EndDate?: string;
        AccountId?: number;
    }
}

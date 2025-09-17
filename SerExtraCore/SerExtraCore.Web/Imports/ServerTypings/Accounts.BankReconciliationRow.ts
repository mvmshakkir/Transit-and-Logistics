namespace SerExtraCore.Accounts {
    export interface BankReconciliationRow {
        Id?: number;
        TrxDate?: string;
        VNo?: number;
        AccountName?: string;
        AccountId?: number;
        BankReconciliation?: boolean;
        Remarks?: string;
        Credit?: number;
        Debit?: number;
    }

    export namespace BankReconciliationRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Remarks';
        export const localTextPrefix = 'Accounts.BankReconciliation';
        export const deletePermission = 'Accounts:Receipt';
        export const insertPermission = 'Accounts:Receipt';
        export const readPermission = 'Accounts:Receipt';
        export const updatePermission = 'Accounts:Receipt';

        export declare const enum Fields {
            Id = "Id",
            TrxDate = "TrxDate",
            VNo = "VNo",
            AccountName = "AccountName",
            AccountId = "AccountId",
            BankReconciliation = "BankReconciliation",
            Remarks = "Remarks",
            Credit = "Credit",
            Debit = "Debit"
        }
    }
}

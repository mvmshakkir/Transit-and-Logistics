namespace SerExtraCore.Accounts {
    export interface AccountsRow {
        Id?: number;
        Type?: AccountTypes;
        AccountName?: string;
        AccountNo?: string;
        BankName?: string;
        BrachName?: string;
        AccountHeadId?: number;
        Slno?: number;
        AccountHeadCode?: string;
        AccountHeadDescription?: string;
        AccountHeadParentHeadId?: number;
        AccountHeadLedgerType?: number;
    }

    export namespace AccountsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'AccountName';
        export const localTextPrefix = 'Accounts.Accounts';
        export const lookupKey = 'Accounts.Accounts';

        export function getLookup(): Q.Lookup<AccountsRow> {
            return Q.getLookup<AccountsRow>('Accounts.Accounts');
        }
        export const deletePermission = 'Accounts:Accounts';
        export const insertPermission = 'Accounts:Accounts';
        export const readPermission = 'Accounts:Accounts';
        export const updatePermission = 'Accounts:Accounts';

        export declare const enum Fields {
            Id = "Id",
            Type = "Type",
            AccountName = "AccountName",
            AccountNo = "AccountNo",
            BankName = "BankName",
            BrachName = "BrachName",
            AccountHeadId = "AccountHeadId",
            Slno = "Slno",
            AccountHeadCode = "AccountHeadCode",
            AccountHeadDescription = "AccountHeadDescription",
            AccountHeadParentHeadId = "AccountHeadParentHeadId",
            AccountHeadLedgerType = "AccountHeadLedgerType"
        }
    }
}

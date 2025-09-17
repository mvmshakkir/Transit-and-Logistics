namespace SerExtraCore.Accounts {
    export interface AccountHeadsRow {
        Id?: number;
        Code?: string;
        Description?: string;
        ParentHeadId?: number;
        LedgerType?: LedgerTypes;
        Slno?: number;
        ParentHeadCode?: string;
        ParentHeadDescription?: string;
        ParentHeadParentHeadId?: number;
        ParentHeadLedgerType?: number;
    }

    export namespace AccountHeadsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'Accounts.AccountHeads';
        export const lookupKey = 'Accounts.AccountHeads';

        export function getLookup(): Q.Lookup<AccountHeadsRow> {
            return Q.getLookup<AccountHeadsRow>('Accounts.AccountHeads');
        }
        export const deletePermission = 'Accounts:AccountHeads';
        export const insertPermission = 'Accounts:AccountHeads';
        export const readPermission = 'Accounts:AccountHeads';
        export const updatePermission = 'Accounts:AccountHeads';

        export declare const enum Fields {
            Id = "Id",
            Code = "Code",
            Description = "Description",
            ParentHeadId = "ParentHeadId",
            LedgerType = "LedgerType",
            Slno = "Slno",
            ParentHeadCode = "ParentHeadCode",
            ParentHeadDescription = "ParentHeadDescription",
            ParentHeadParentHeadId = "ParentHeadParentHeadId",
            ParentHeadLedgerType = "ParentHeadLedgerType"
        }
    }
}

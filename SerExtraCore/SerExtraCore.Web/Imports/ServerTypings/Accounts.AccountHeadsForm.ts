namespace SerExtraCore.Accounts {
    export interface AccountHeadsForm {
        Code: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        ParentHeadId: Serenity.LookupEditor;
        LedgerType: Serenity.EnumEditor;
    }

    export class AccountHeadsForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Accounts.AccountHeads';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AccountHeadsForm.init)  {
                AccountHeadsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.EnumEditor;

                Q.initFormType(AccountHeadsForm, [
                    'Code', w0,
                    'Description', w0,
                    'ParentHeadId', w1,
                    'LedgerType', w2
                ]);
            }
        }
    }
}
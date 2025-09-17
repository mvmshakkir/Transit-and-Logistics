namespace SerExtraCore.Accounts {
    export interface AccountsForm {
        Type: Serenity.EnumEditor;
        AccountName: Serenity.StringEditor;
        AccountNo: Serenity.StringEditor;
        BankName: Serenity.StringEditor;
        BrachName: Serenity.StringEditor;
        AccountHeadId: Serenity.LookupEditor;
    }

    export class AccountsForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Accounts.Accounts';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AccountsForm.init)  {
                AccountsForm.init = true;

                var s = Serenity;
                var w0 = s.EnumEditor;
                var w1 = s.StringEditor;
                var w2 = s.LookupEditor;

                Q.initFormType(AccountsForm, [
                    'Type', w0,
                    'AccountName', w1,
                    'AccountNo', w1,
                    'BankName', w1,
                    'BrachName', w1,
                    'AccountHeadId', w2
                ]);
            }
        }
    }
}
namespace SerExtraCore.Accounts {
    export interface ContraForm {
        TrxDate: Serenity.DateEditor;
        VNo: Serenity.IntegerEditor;
        DebitAccountId: Serenity.LookupEditor;
        Amount: Serenity.DecimalEditor;
        CreditAccountId: Serenity.LookupEditor;
        Remarks: Serenity.TextAreaEditor;
    }

    export class ContraForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Accounts.Contra';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ContraForm.init)  {
                ContraForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.LookupEditor;
                var w3 = s.DecimalEditor;
                var w4 = s.TextAreaEditor;

                Q.initFormType(ContraForm, [
                    'TrxDate', w0,
                    'VNo', w1,
                    'DebitAccountId', w2,
                    'Amount', w3,
                    'CreditAccountId', w2,
                    'Remarks', w4
                ]);
            }
        }
    }
}
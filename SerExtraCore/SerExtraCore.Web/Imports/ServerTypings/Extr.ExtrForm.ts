namespace SerExtraCore.Extr {
    export interface ExtrForm {
        Settlementid: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        Amount: Serenity.DecimalEditor;
    }

    export class ExtrForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Extr.Extr';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ExtrForm.init)  {
                ExtrForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(ExtrForm, [
                    'Settlementid', w0,
                    'Name', w1,
                    'Amount', w2
                ]);
            }
        }
    }
}
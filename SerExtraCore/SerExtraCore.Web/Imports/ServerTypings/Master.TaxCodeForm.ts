namespace SerExtraCore.Master {
    export interface TaxCodeForm {
        Name: Serenity.StringEditor;
        Rate: Serenity.DecimalEditor;
        Description: Serenity.TextAreaEditor;
    }

    export class TaxCodeForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Master.TaxCode';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TaxCodeForm.init)  {
                TaxCodeForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.TextAreaEditor;

                Q.initFormType(TaxCodeForm, [
                    'Name', w0,
                    'Rate', w1,
                    'Description', w2
                ]);
            }
        }
    }
}
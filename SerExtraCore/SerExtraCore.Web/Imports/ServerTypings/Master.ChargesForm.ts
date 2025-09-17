namespace SerExtraCore.Master {
    export interface ChargesForm {
        ChargeName: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        ChartOrder: Serenity.IntegerEditor;
        TaxCodeId: Serenity.LookupEditor;
    }

    export class ChargesForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Master.Charges';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ChargesForm.init)  {
                ChargesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.LookupEditor;

                Q.initFormType(ChargesForm, [
                    'ChargeName', w0,
                    'Description', w1,
                    'ChartOrder', w2,
                    'TaxCodeId', w3
                ]);
            }
        }
    }
}
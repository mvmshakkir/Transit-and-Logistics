namespace SerExtraCore.Crossing {
    export interface CrossingForm {
        Settlementid: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        Amount: Serenity.DecimalEditor;
    }

    export class CrossingForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Crossing.Crossing';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CrossingForm.init)  {
                CrossingForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(CrossingForm, [
                    'Settlementid', w0,
                    'Name', w1,
                    'Amount', w2
                ]);
            }
        }
    }
}
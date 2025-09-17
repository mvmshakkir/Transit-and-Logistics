namespace SerExtraCore.CommissionPercentage {
    export interface CommissionPercentageForm {
        Percentage: Serenity.DecimalEditor;
    }

    export class CommissionPercentageForm extends Serenity.PrefixedContext {
        static readonly formKey = 'CommissionPercentage.CommissionPercentage';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CommissionPercentageForm.init)  {
                CommissionPercentageForm.init = true;

                var s = Serenity;
                var w0 = s.DecimalEditor;

                Q.initFormType(CommissionPercentageForm, [
                    'Percentage', w0
                ]);
            }
        }
    }
}
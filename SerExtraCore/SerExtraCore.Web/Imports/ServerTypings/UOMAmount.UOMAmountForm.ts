namespace SerExtraCore.UOMAmount {
    export interface UOMAmountForm {
        UomId: Serenity.LookupEditor;
        Rate: Serenity.DecimalEditor;
    }

    export class UOMAmountForm extends Serenity.PrefixedContext {
        static readonly formKey = 'UOMAmount.UOMAmount';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!UOMAmountForm.init)  {
                UOMAmountForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(UOMAmountForm, [
                    'UomId', w0,
                    'Rate', w1
                ]);
            }
        }
    }
}
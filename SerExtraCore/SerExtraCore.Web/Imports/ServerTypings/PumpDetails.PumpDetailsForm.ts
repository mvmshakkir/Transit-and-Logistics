namespace SerExtraCore.PumpDetails {
    export interface PumpDetailsForm {
        PumpName: Serenity.StringEditor;
        PumpPlace: Serenity.StringEditor;
        Address: Serenity.StringEditor;
    }

    export class PumpDetailsForm extends Serenity.PrefixedContext {
        static readonly formKey = 'PumpDetails.PumpDetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PumpDetailsForm.init)  {
                PumpDetailsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(PumpDetailsForm, [
                    'PumpName', w0,
                    'PumpPlace', w0,
                    'Address', w0
                ]);
            }
        }
    }
}
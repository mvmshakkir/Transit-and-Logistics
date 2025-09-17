namespace SerExtraCore.CommisionDetails {
    export interface CommisionDetailsForm {
        DriverId: Serenity.LookupEditor;
        PercentageId: Serenity.LookupEditor;
        MobileNumber: Serenity.StringEditor;
    }

    export class CommisionDetailsForm extends Serenity.PrefixedContext {
        static readonly formKey = 'CommisionDetails.CommisionDetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CommisionDetailsForm.init)  {
                CommisionDetailsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;

                Q.initFormType(CommisionDetailsForm, [
                    'DriverId', w0,
                    'PercentageId', w0,
                    'MobileNumber', w1
                ]);
            }
        }
    }
}
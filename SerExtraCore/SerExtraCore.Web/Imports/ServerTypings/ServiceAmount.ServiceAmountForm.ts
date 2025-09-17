namespace SerExtraCore.ServiceAmount {
    export interface ServiceAmountForm {
        ServiceId: Serenity.LookupEditor;
        Amount: Serenity.DecimalEditor;
        Photo: Serenity.ImageUploadEditor;
    }

    export class ServiceAmountForm extends Serenity.PrefixedContext {
        static readonly formKey = 'ServiceAmount.ServiceAmount';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ServiceAmountForm.init)  {
                ServiceAmountForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.ImageUploadEditor;

                Q.initFormType(ServiceAmountForm, [
                    'ServiceId', w0,
                    'Amount', w1,
                    'Photo', w2
                ]);
            }
        }
    }
}
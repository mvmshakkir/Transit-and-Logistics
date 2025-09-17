namespace SerExtraCore.Services {
    export interface ServicesForm {
        ServiceName: Serenity.StringEditor;
    }

    export class ServicesForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Services.Services';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ServicesForm.init)  {
                ServicesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(ServicesForm, [
                    'ServiceName', w0
                ]);
            }
        }
    }
}
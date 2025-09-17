namespace SerExtraCore.Master {
    export interface SpecificationsForm {
        Specifications: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
    }

    export class SpecificationsForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Master.Specifications';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SpecificationsForm.init)  {
                SpecificationsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(SpecificationsForm, [
                    'Specifications', w0,
                    'Description', w1
                ]);
            }
        }
    }
}
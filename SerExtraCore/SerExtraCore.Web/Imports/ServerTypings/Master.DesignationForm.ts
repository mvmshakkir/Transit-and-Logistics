namespace SerExtraCore.Master {
    export interface DesignationForm {
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
    }

    export class DesignationForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Master.Designation';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DesignationForm.init)  {
                DesignationForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(DesignationForm, [
                    'Name', w0,
                    'Description', w1
                ]);
            }
        }
    }
}
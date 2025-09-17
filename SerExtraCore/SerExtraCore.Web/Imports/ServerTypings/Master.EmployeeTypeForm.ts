namespace SerExtraCore.Master {
    export interface EmployeeTypeForm {
        Type: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
    }

    export class EmployeeTypeForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Master.EmployeeType';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EmployeeTypeForm.init)  {
                EmployeeTypeForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(EmployeeTypeForm, [
                    'Type', w0,
                    'Description', w1
                ]);
            }
        }
    }
}
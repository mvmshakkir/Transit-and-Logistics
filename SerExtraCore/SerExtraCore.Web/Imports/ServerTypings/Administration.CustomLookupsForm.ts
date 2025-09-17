namespace SerExtraCore.Administration {
    export interface CustomLookupsForm {
        LookupName: Serenity.StringEditor;
        SqlQuery: Serenity.TextAreaEditor;
    }

    export class CustomLookupsForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Administration.CustomLookups';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CustomLookupsForm.init)  {
                CustomLookupsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(CustomLookupsForm, [
                    'LookupName', w0,
                    'SqlQuery', w1
                ]);
            }
        }
    }
}
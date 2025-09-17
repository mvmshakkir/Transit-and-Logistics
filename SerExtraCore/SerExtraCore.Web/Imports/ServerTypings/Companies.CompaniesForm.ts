namespace SerExtraCore.Companies {
    export interface CompaniesForm {
        Name: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        StateId: Serenity.LookupEditor;
    }

    export class CompaniesForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Companies.Companies';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CompaniesForm.init)  {
                CompaniesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;

                Q.initFormType(CompaniesForm, [
                    'Name', w0,
                    'Address', w0,
                    'StateId', w1
                ]);
            }
        }
    }
}
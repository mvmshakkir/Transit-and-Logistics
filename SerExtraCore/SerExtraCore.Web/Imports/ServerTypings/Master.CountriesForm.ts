namespace SerExtraCore.Master {
    export interface CountriesForm {
        CountryCode: Serenity.StringEditor;
        CountryName: Serenity.StringEditor;
    }

    export class CountriesForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Master.Countries';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CountriesForm.init)  {
                CountriesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(CountriesForm, [
                    'CountryCode', w0,
                    'CountryName', w0
                ]);
            }
        }
    }
}
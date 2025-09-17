namespace SerExtraCore.States {
    export interface StatesForm {
        Name: Serenity.StringEditor;
        Code: Serenity.StringEditor;
        CountryId: Serenity.LookupEditor;
    }

    export class StatesForm extends Serenity.PrefixedContext {
        static readonly formKey = 'States.States';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!StatesForm.init)  {
                StatesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;

                Q.initFormType(StatesForm, [
                    'Name', w0,
                    'Code', w0,
                    'CountryId', w1
                ]);
            }
        }
    }
}
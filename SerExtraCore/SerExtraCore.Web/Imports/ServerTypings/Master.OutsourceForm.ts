namespace SerExtraCore.Master {
    export interface OutsourceForm {
        Name: Serenity.IntegerEditor;
        Description: Serenity.TextAreaEditor;
    }

    export class OutsourceForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Master.Outsource';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OutsourceForm.init)  {
                OutsourceForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(OutsourceForm, [
                    'Name', w0,
                    'Description', w1
                ]);
            }
        }
    }
}
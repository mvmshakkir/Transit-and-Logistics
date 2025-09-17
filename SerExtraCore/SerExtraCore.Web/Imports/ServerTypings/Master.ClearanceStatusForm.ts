namespace SerExtraCore.Master {
    export interface ClearanceStatusForm {
        Status: Serenity.StringEditor;
        ChartOrder: Serenity.IntegerEditor;
    }

    export class ClearanceStatusForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Master.ClearanceStatus';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ClearanceStatusForm.init)  {
                ClearanceStatusForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(ClearanceStatusForm, [
                    'Status', w0,
                    'ChartOrder', w1
                ]);
            }
        }
    }
}
namespace SerExtraCore.UOM {
    export interface UOMForm {
        Unit: Serenity.StringEditor;
    }

    export class UOMForm extends Serenity.PrefixedContext {
        static readonly formKey = 'UOM.UOM';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!UOMForm.init)  {
                UOMForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(UOMForm, [
                    'Unit', w0
                ]);
            }
        }
    }
}
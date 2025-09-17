namespace SerExtraCore.Master {
    export interface ShippingAreasForm {
        AreaName: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
    }

    export class ShippingAreasForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Master.ShippingAreas';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ShippingAreasForm.init)  {
                ShippingAreasForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(ShippingAreasForm, [
                    'AreaName', w0,
                    'Description', w1
                ]);
            }
        }
    }
}
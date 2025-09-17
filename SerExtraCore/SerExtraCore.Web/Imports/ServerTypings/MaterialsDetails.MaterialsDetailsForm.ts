namespace SerExtraCore.MaterialsDetails {
    export interface MaterialsDetailsForm {
        Materials: Serenity.StringEditor;
        Units: UOMAmount.UOMAmountEditor;
    }

    export class MaterialsDetailsForm extends Serenity.PrefixedContext {
        static readonly formKey = 'MaterialsDetails.MaterialsDetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MaterialsDetailsForm.init)  {
                MaterialsDetailsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = UOMAmount.UOMAmountEditor;

                Q.initFormType(MaterialsDetailsForm, [
                    'Materials', w0,
                    'Units', w1
                ]);
            }
        }
    }
}
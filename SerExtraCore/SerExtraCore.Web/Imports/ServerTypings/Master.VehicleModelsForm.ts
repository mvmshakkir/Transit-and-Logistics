namespace SerExtraCore.Master {
    export interface VehicleModelsForm {
        ModelName: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
    }

    export class VehicleModelsForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Master.VehicleModels';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VehicleModelsForm.init)  {
                VehicleModelsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(VehicleModelsForm, [
                    'ModelName', w0,
                    'Description', w1
                ]);
            }
        }
    }
}
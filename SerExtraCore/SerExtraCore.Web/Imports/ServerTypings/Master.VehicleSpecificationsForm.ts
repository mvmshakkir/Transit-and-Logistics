namespace SerExtraCore.Master {
    export interface VehicleSpecificationsForm {
        VehicleId: Serenity.IntegerEditor;
        SpecificationId: Serenity.IntegerEditor;
    }

    export class VehicleSpecificationsForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Master.VehicleSpecifications';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VehicleSpecificationsForm.init)  {
                VehicleSpecificationsForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;

                Q.initFormType(VehicleSpecificationsForm, [
                    'VehicleId', w0,
                    'SpecificationId', w0
                ]);
            }
        }
    }
}
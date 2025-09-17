namespace SerExtraCore.Master {
    export interface VehiclesForm {
        TypeOfVehicle: Serenity.EnumEditor;
        SupplierId: Serenity.LookupEditor;
        OwnerId: Serenity.LookupEditor;
        VehicleNumber: Serenity.StringEditor;
        HSN: Serenity.StringEditor;
        PrimeMover: Serenity.StringEditor;
        VehicleModel: Serenity.LookupEditor;
        Description: Serenity.TextAreaEditor;
        VehicleSpecifications: Serenity.LookupEditor;
        RegistrationDate: Serenity.DateEditor;
        ExpiryDate: Serenity.DateEditor;
        Driver: Serenity.LookupEditor;
        PdoApproved: Serenity.BooleanEditor;
    }

    export class VehiclesForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Master.Vehicles';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VehiclesForm.init)  {
                VehiclesForm.init = true;

                var s = Serenity;
                var w0 = s.EnumEditor;
                var w1 = s.LookupEditor;
                var w2 = s.StringEditor;
                var w3 = s.TextAreaEditor;
                var w4 = s.DateEditor;
                var w5 = s.BooleanEditor;

                Q.initFormType(VehiclesForm, [
                    'TypeOfVehicle', w0,
                    'SupplierId', w1,
                    'OwnerId', w1,
                    'VehicleNumber', w2,
                    'HSN', w2,
                    'PrimeMover', w2,
                    'VehicleModel', w1,
                    'Description', w3,
                    'VehicleSpecifications', w1,
                    'RegistrationDate', w4,
                    'ExpiryDate', w4,
                    'Driver', w1,
                    'PdoApproved', w5
                ]);
            }
        }
    }
}
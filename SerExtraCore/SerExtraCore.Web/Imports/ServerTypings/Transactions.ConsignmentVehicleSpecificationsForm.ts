namespace SerExtraCore.Transactions {
    export interface ConsignmentVehicleSpecificationsForm {
        ConsignmentVehicleDetailId: Serenity.IntegerEditor;
        SpecificationId: Serenity.IntegerEditor;
    }

    export class ConsignmentVehicleSpecificationsForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Transactions.ConsignmentVehicleSpecifications';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ConsignmentVehicleSpecificationsForm.init)  {
                ConsignmentVehicleSpecificationsForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;

                Q.initFormType(ConsignmentVehicleSpecificationsForm, [
                    'ConsignmentVehicleDetailId', w0,
                    'SpecificationId', w0
                ]);
            }
        }
    }
}
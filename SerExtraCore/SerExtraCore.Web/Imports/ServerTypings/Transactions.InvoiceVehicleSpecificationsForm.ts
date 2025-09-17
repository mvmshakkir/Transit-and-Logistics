namespace SerExtraCore.Transactions {
    export interface InvoiceVehicleSpecificationsForm {
        InvoiceVehicleDetailId: Serenity.IntegerEditor;
        SpecificationId: Serenity.IntegerEditor;
    }

    export class InvoiceVehicleSpecificationsForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Transactions.InvoiceVehicleSpecifications';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!InvoiceVehicleSpecificationsForm.init)  {
                InvoiceVehicleSpecificationsForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;

                Q.initFormType(InvoiceVehicleSpecificationsForm, [
                    'InvoiceVehicleDetailId', w0,
                    'SpecificationId', w0
                ]);
            }
        }
    }
}
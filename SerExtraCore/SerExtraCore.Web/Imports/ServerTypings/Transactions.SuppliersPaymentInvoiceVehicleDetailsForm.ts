namespace SerExtraCore.Transactions {
    export interface SuppliersPaymentInvoiceVehicleDetailsForm {
        InvoiceVehicleDetailId: Serenity.LookupEditor;
        Amount: Serenity.DecimalEditor;
    }

    export class SuppliersPaymentInvoiceVehicleDetailsForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Transactions.SuppliersPaymentInvoiceVehicleDetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SuppliersPaymentInvoiceVehicleDetailsForm.init)  {
                SuppliersPaymentInvoiceVehicleDetailsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(SuppliersPaymentInvoiceVehicleDetailsForm, [
                    'InvoiceVehicleDetailId', w0,
                    'Amount', w1
                ]);
            }
        }
    }
}
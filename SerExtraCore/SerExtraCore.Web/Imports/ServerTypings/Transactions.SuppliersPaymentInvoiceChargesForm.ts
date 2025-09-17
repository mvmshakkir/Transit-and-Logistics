namespace SerExtraCore.Transactions {
    export interface SuppliersPaymentInvoiceChargesForm {
        InvoiceChargesId: Serenity.LookupEditor;
        Amount: Serenity.DecimalEditor;
    }

    export class SuppliersPaymentInvoiceChargesForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Transactions.SuppliersPaymentInvoiceCharges';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SuppliersPaymentInvoiceChargesForm.init)  {
                SuppliersPaymentInvoiceChargesForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(SuppliersPaymentInvoiceChargesForm, [
                    'InvoiceChargesId', w0,
                    'Amount', w1
                ]);
            }
        }
    }
}
namespace SerExtraCore.Transactions {
    export interface SuppliersPaymentInvoicesForm {
        SuppliersPaymentId: Serenity.IntegerEditor;
        InvoiceId: Serenity.IntegerEditor;
    }

    export class SuppliersPaymentInvoicesForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Transactions.SuppliersPaymentInvoices';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SuppliersPaymentInvoicesForm.init)  {
                SuppliersPaymentInvoicesForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;

                Q.initFormType(SuppliersPaymentInvoicesForm, [
                    'SuppliersPaymentId', w0,
                    'InvoiceId', w0
                ]);
            }
        }
    }
}
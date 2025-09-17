namespace SerExtraCore.Transactions {
    export interface InvoiceCollectionDetailsForm {
        InvoiceId: CustomerInvoiceLookupEditor;
        Amount: Serenity.DecimalEditor;
    }

    export class InvoiceCollectionDetailsForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Transactions.InvoiceCollectionDetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!InvoiceCollectionDetailsForm.init)  {
                InvoiceCollectionDetailsForm.init = true;

                var s = Serenity;
                var w0 = CustomerInvoiceLookupEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(InvoiceCollectionDetailsForm, [
                    'InvoiceId', w0,
                    'Amount', w1
                ]);
            }
        }
    }
}
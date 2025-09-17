namespace SerExtraCore.Transactions {
    export interface InvoiceDueDetailsForm {
        DueDays: Serenity.IntegerEditor;
        DueDate: Serenity.DateEditor;
        Amount: Serenity.DecimalEditor;
    }

    export class InvoiceDueDetailsForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Transactions.InvoiceDueDetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!InvoiceDueDetailsForm.init)  {
                InvoiceDueDetailsForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DateEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(InvoiceDueDetailsForm, [
                    'DueDays', w0,
                    'DueDate', w1,
                    'Amount', w2
                ]);
            }
        }
    }
}
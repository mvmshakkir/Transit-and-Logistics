namespace SerExtraCore.Transactions {
    export interface InvoiceTripDatesForm {
        StartDate: Serenity.DateTimeEditor;
        EndDate: Serenity.DateTimeEditor;
    }

    export class InvoiceTripDatesForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Transactions.InvoiceTripDates';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!InvoiceTripDatesForm.init)  {
                InvoiceTripDatesForm.init = true;

                var s = Serenity;
                var w0 = s.DateTimeEditor;

                Q.initFormType(InvoiceTripDatesForm, [
                    'StartDate', w0,
                    'EndDate', w0
                ]);
            }
        }
    }
}
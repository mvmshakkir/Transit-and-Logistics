namespace SerExtraCore.Transactions {
    export interface ConsignmentTripDatesForm {
        StartDate: Serenity.DateTimeEditor;
        EndDate: Serenity.DateTimeEditor;
    }

    export class ConsignmentTripDatesForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Transactions.ConsignmentTripDates';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ConsignmentTripDatesForm.init)  {
                ConsignmentTripDatesForm.init = true;

                var s = Serenity;
                var w0 = s.DateTimeEditor;

                Q.initFormType(ConsignmentTripDatesForm, [
                    'StartDate', w0,
                    'EndDate', w0
                ]);
            }
        }
    }
}
namespace SerExtraCore.Expenses {
    export interface ExpensesForm {
        VehicleId: Serenity.LookupEditor;
        Startdate: Serenity.DateEditor;
        Enddate: Serenity.DateEditor;
        Expense: Serenity.IntegerEditor;
        Profit: Serenity.DecimalEditor;
    }

    export class ExpensesForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Expenses.Expenses';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ExpensesForm.init)  {
                ExpensesForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DateEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(ExpensesForm, [
                    'VehicleId', w0,
                    'Startdate', w1,
                    'Enddate', w1,
                    'Expense', w2,
                    'Profit', w3
                ]);
            }
        }
    }
}
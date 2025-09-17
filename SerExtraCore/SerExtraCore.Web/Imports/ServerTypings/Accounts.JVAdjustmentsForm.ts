namespace SerExtraCore.Accounts {
    export interface JVAdjustmentsForm {
        TrxDate: Serenity.DateEditor;
        VNo: Serenity.IntegerEditor;
        CustomerId: Serenity.LookupEditor;
        EmployeeId: Serenity.LookupEditor;
        VehicleId: Serenity.LookupEditor;
        DebitSupplierId: Serenity.LookupEditor;
        DebitAccountHeadId: Serenity.LookupEditor;
        DebitAccountId: Serenity.LookupEditor;
        CreditCustomerId: Serenity.LookupEditor;
        CreditEmployeeId: Serenity.LookupEditor;
        CreditVehicleId: Serenity.LookupEditor;
        CreditSupplierId: Serenity.LookupEditor;
        CreditAccountHeadId: Serenity.LookupEditor;
        CreditAccountId: Serenity.LookupEditor;
        Amount: Serenity.DecimalEditor;
        Remarks: Serenity.TextAreaEditor;
    }

    export class JVAdjustmentsForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Accounts.JVAdjustments';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!JVAdjustmentsForm.init)  {
                JVAdjustmentsForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.LookupEditor;
                var w3 = s.DecimalEditor;
                var w4 = s.TextAreaEditor;

                Q.initFormType(JVAdjustmentsForm, [
                    'TrxDate', w0,
                    'VNo', w1,
                    'CustomerId', w2,
                    'EmployeeId', w2,
                    'VehicleId', w2,
                    'DebitSupplierId', w2,
                    'DebitAccountHeadId', w2,
                    'DebitAccountId', w2,
                    'CreditCustomerId', w2,
                    'CreditEmployeeId', w2,
                    'CreditVehicleId', w2,
                    'CreditSupplierId', w2,
                    'CreditAccountHeadId', w2,
                    'CreditAccountId', w2,
                    'Amount', w3,
                    'Remarks', w4
                ]);
            }
        }
    }
}
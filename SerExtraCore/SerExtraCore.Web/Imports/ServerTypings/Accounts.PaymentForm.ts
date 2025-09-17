namespace SerExtraCore.Accounts {
    export interface PaymentForm {
        TrxDate: Serenity.DateEditor;
        FuelTsId: Serenity.IntegerEditor;
        VNo: Serenity.IntegerEditor;
        CustomerId: Serenity.LookupEditor;
        EmployeeId: Serenity.LookupEditor;
        SupplierId: Serenity.LookupEditor;
        VehicleId: Serenity.LookupEditor;
        ConsignmentId: Serenity.LookupEditor;
        DebitAccountHeadId: Serenity.LookupEditor;
        Amount: Serenity.DecimalEditor;
        PaymentMethod: Serenity.EnumEditor;
        CreditAccountId: Serenity.LookupEditor;
        Remarks: Serenity.TextAreaEditor;
    }

    export class PaymentForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Accounts.Payment';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PaymentForm.init)  {
                PaymentForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.LookupEditor;
                var w3 = s.DecimalEditor;
                var w4 = s.EnumEditor;
                var w5 = s.TextAreaEditor;

                Q.initFormType(PaymentForm, [
                    'TrxDate', w0,
                    'FuelTsId', w1,
                    'VNo', w1,
                    'CustomerId', w2,
                    'EmployeeId', w2,
                    'SupplierId', w2,
                    'VehicleId', w2,
                    'ConsignmentId', w2,
                    'DebitAccountHeadId', w2,
                    'Amount', w3,
                    'PaymentMethod', w4,
                    'CreditAccountId', w2,
                    'Remarks', w5
                ]);
            }
        }
    }
}
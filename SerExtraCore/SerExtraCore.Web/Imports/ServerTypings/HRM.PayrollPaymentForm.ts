namespace SerExtraCore.HRM {
    export interface PayrollPaymentForm {
        TrxDate: Serenity.DateEditor;
        EmployeeId: Serenity.LookupEditor;
        BasicPay: Serenity.DecimalEditor;
        Allowance: Serenity.DecimalEditor;
        OverTime: Serenity.DecimalEditor;
        Other: Serenity.DecimalEditor;
        Total: Serenity.DecimalEditor;
        Remarks: Serenity.TextAreaEditor;
        PaymentType: Serenity.EnumEditor;
        AccountId: Serenity.LookupEditor;
    }

    export class PayrollPaymentForm extends Serenity.PrefixedContext {
        static readonly formKey = 'HRM.PayrollPayment';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PayrollPaymentForm.init)  {
                PayrollPaymentForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.TextAreaEditor;
                var w4 = s.EnumEditor;

                Q.initFormType(PayrollPaymentForm, [
                    'TrxDate', w0,
                    'EmployeeId', w1,
                    'BasicPay', w2,
                    'Allowance', w2,
                    'OverTime', w2,
                    'Other', w2,
                    'Total', w2,
                    'Remarks', w3,
                    'PaymentType', w4,
                    'AccountId', w1
                ]);
            }
        }
    }
}
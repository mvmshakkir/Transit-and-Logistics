namespace SerExtraCore.HRM {
    export interface PayrollStructuresForm {
        StructureName: Serenity.StringEditor;
        FromDate: Serenity.DateEditor;
        ToDate: Serenity.DateEditor;
        Remarks: Serenity.TextAreaEditor;
        PayrollPayment: PayrollPaymentEditor;
    }

    export class PayrollStructuresForm extends Serenity.PrefixedContext {
        static readonly formKey = 'HRM.PayrollStructures';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PayrollStructuresForm.init)  {
                PayrollStructuresForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.TextAreaEditor;
                var w3 = PayrollPaymentEditor;

                Q.initFormType(PayrollStructuresForm, [
                    'StructureName', w0,
                    'FromDate', w1,
                    'ToDate', w1,
                    'Remarks', w2,
                    'PayrollPayment', w3
                ]);
            }
        }
    }
}
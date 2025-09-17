namespace SerExtraCore.Accounts {
    export interface ReceiptForm {
        TrxDate: Serenity.DateEditor;
        VNo: Serenity.IntegerEditor;
        CustomerId: Serenity.LookupEditor;
        EmployeeId: Serenity.LookupEditor;
        CreditAccountHeadId: Serenity.LookupEditor;
        Amount: Serenity.DecimalEditor;
        PaymentMethod: Serenity.EnumEditor;
        DebitAccountId: Serenity.LookupEditor;
        Remarks: Serenity.TextAreaEditor;
    }

    export class ReceiptForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Accounts.Receipt';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ReceiptForm.init)  {
                ReceiptForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.LookupEditor;
                var w3 = s.DecimalEditor;
                var w4 = s.EnumEditor;
                var w5 = s.TextAreaEditor;

                Q.initFormType(ReceiptForm, [
                    'TrxDate', w0,
                    'VNo', w1,
                    'CustomerId', w2,
                    'EmployeeId', w2,
                    'CreditAccountHeadId', w2,
                    'Amount', w3,
                    'PaymentMethod', w4,
                    'DebitAccountId', w2,
                    'Remarks', w5
                ]);
            }
        }
    }
}
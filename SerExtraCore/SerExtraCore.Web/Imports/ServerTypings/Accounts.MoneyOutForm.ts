namespace SerExtraCore.Accounts {
    export interface MoneyOutForm {
        TrxDate: Serenity.DateEditor;
        TsId: Serenity.LookupEditor;
        VNo: Serenity.StringEditor;
        AccountHeadId: Serenity.LookupEditor;
        CustomerId: Serenity.LookupEditor;
        EmployeeId: Serenity.LookupEditor;
        SupplierId: Serenity.LookupEditor;
        VehicleId: Serenity.LookupEditor;
        ConsignmentId: Serenity.LookupEditor;
        Amount: Serenity.DecimalEditor;
        TaxPer: Serenity.DecimalEditor;
        TaxAmount: Serenity.DecimalEditor;
        TotalAmount: Serenity.DecimalEditor;
        PaymentMethod: Serenity.EnumEditor;
        AccountId: Serenity.LookupEditor;
        Remarks: Serenity.TextAreaEditor;
        Payments: Transactions.ReceiptEditor;
    }

    export class MoneyOutForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Accounts.MoneyOut';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MoneyOutForm.init)  {
                MoneyOutForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.LookupEditor;
                var w2 = s.StringEditor;
                var w3 = s.DecimalEditor;
                var w4 = s.EnumEditor;
                var w5 = s.TextAreaEditor;
                var w6 = Transactions.ReceiptEditor;

                Q.initFormType(MoneyOutForm, [
                    'TrxDate', w0,
                    'TsId', w1,
                    'VNo', w2,
                    'AccountHeadId', w1,
                    'CustomerId', w1,
                    'EmployeeId', w1,
                    'SupplierId', w1,
                    'VehicleId', w1,
                    'ConsignmentId', w1,
                    'Amount', w3,
                    'TaxPer', w3,
                    'TaxAmount', w3,
                    'TotalAmount', w3,
                    'PaymentMethod', w4,
                    'AccountId', w1,
                    'Remarks', w5,
                    'Payments', w6
                ]);
            }
        }
    }
}
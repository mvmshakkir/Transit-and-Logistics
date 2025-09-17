namespace SerExtraCore.Transactions {
    export interface InvoiceChargesForm {
        ChargeId: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        Description: Serenity.TextAreaEditor;
        Amount: Serenity.DecimalEditor;
        Qty: Serenity.DecimalEditor;
        Total: Serenity.DecimalEditor;
        DisAmount: Serenity.DecimalEditor;
        TaxableAmount: Serenity.DecimalEditor;
        TaxPer: Serenity.DecimalEditor;
        TaxAmount: Serenity.DecimalEditor;
        TotalAmount: Serenity.DecimalEditor;
        CurrencyId: Serenity.LookupEditor;
        ExchangeRate: Serenity.DecimalEditor;
        TotalAmountInLocalCurrency: Serenity.DecimalEditor;
        SupplierAmount: Serenity.DecimalEditor;
        SupplierId: Serenity.LookupEditor;
        SupplierAdvanceAmount: Serenity.DecimalEditor;
        PaymentType: Serenity.EnumEditor;
        AccountId: Serenity.LookupEditor;
        SupplierPaymentStatus: Serenity.EnumEditor;
    }

    export class InvoiceChargesForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Transactions.InvoiceCharges';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!InvoiceChargesForm.init)  {
                InvoiceChargesForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DateEditor;
                var w2 = s.TextAreaEditor;
                var w3 = s.DecimalEditor;
                var w4 = s.EnumEditor;

                Q.initFormType(InvoiceChargesForm, [
                    'ChargeId', w0,
                    'Date', w1,
                    'Description', w2,
                    'Amount', w3,
                    'Qty', w3,
                    'Total', w3,
                    'DisAmount', w3,
                    'TaxableAmount', w3,
                    'TaxPer', w3,
                    'TaxAmount', w3,
                    'TotalAmount', w3,
                    'CurrencyId', w0,
                    'ExchangeRate', w3,
                    'TotalAmountInLocalCurrency', w3,
                    'SupplierAmount', w3,
                    'SupplierId', w0,
                    'SupplierAdvanceAmount', w3,
                    'PaymentType', w4,
                    'AccountId', w0,
                    'SupplierPaymentStatus', w4
                ]);
            }
        }
    }
}
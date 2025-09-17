namespace SerExtraCore.Transactions {
    export interface QuotationDetailsForm {
        ChargeId: Serenity.LookupEditor;
        Description: Serenity.TextAreaEditor;
        Unit: Serenity.StringEditor;
        Quantity: Serenity.DecimalEditor;
        Rate: Serenity.DecimalEditor;
        TaxableAmount: Serenity.DecimalEditor;
        TaxPer: Serenity.DecimalEditor;
        TaxAmount: Serenity.DecimalEditor;
        TotalAmount: Serenity.DecimalEditor;
        CurrencyId: Serenity.LookupEditor;
        ExchangeRate: Serenity.DecimalEditor;
        TotalAmountInLocalCurrency: Serenity.DecimalEditor;
    }

    export class QuotationDetailsForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Transactions.QuotationDetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!QuotationDetailsForm.init)  {
                QuotationDetailsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.StringEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(QuotationDetailsForm, [
                    'ChargeId', w0,
                    'Description', w1,
                    'Unit', w2,
                    'Quantity', w3,
                    'Rate', w3,
                    'TaxableAmount', w3,
                    'TaxPer', w3,
                    'TaxAmount', w3,
                    'TotalAmount', w3,
                    'CurrencyId', w0,
                    'ExchangeRate', w3,
                    'TotalAmountInLocalCurrency', w3
                ]);
            }
        }
    }
}
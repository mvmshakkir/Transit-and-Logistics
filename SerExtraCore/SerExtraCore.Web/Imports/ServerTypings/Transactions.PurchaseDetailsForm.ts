namespace SerExtraCore.Transactions {
    export interface PurchaseDetailsForm {
        ProductId: Serenity.LookupEditor;
        UnitPrice: Serenity.DecimalEditor;
        Quantity: Serenity.DecimalEditor;
        TotalAmount: Serenity.DecimalEditor;
        DisPer: Serenity.DecimalEditor;
        DisAmount: Serenity.DecimalEditor;
        TaxableAmount: Serenity.DecimalEditor;
        TaxPer: Serenity.DecimalEditor;
        TaxAmount: Serenity.DecimalEditor;
        LineTotal: Serenity.DecimalEditor;
    }

    export class PurchaseDetailsForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Transactions.PurchaseDetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PurchaseDetailsForm.init)  {
                PurchaseDetailsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(PurchaseDetailsForm, [
                    'ProductId', w0,
                    'UnitPrice', w1,
                    'Quantity', w1,
                    'TotalAmount', w1,
                    'DisPer', w1,
                    'DisAmount', w1,
                    'TaxableAmount', w1,
                    'TaxPer', w1,
                    'TaxAmount', w1,
                    'LineTotal', w1
                ]);
            }
        }
    }
}
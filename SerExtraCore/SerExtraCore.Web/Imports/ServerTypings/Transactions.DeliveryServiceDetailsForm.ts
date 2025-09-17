namespace SerExtraCore.Transactions {
    export interface DeliveryServiceDetailsForm {
        ParcelType: Serenity.StringEditor;
        ParcelTypeOtherLang: Serenity.StringEditor;
        Quantity: Serenity.DecimalEditor;
        UnitPrice: Serenity.DecimalEditor;
        TotalAmount: Serenity.DecimalEditor;
    }

    export class DeliveryServiceDetailsForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Transactions.DeliveryServiceDetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DeliveryServiceDetailsForm.init)  {
                DeliveryServiceDetailsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(DeliveryServiceDetailsForm, [
                    'ParcelType', w0,
                    'ParcelTypeOtherLang', w0,
                    'Quantity', w1,
                    'UnitPrice', w1,
                    'TotalAmount', w1
                ]);
            }
        }
    }
}
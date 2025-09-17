namespace SerExtraCore.Master {
    export interface CurrenciesForm {
        CurrencyCode: Serenity.StringEditor;
        CurrencyName: Serenity.StringEditor;
        ExchangeRate: Serenity.DecimalEditor;
        CurrencyUnit: Serenity.StringEditor;
        SubCurrencyUnit: Serenity.StringEditor;
    }

    export class CurrenciesForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Master.Currencies';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CurrenciesForm.init)  {
                CurrenciesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(CurrenciesForm, [
                    'CurrencyCode', w0,
                    'CurrencyName', w0,
                    'ExchangeRate', w1,
                    'CurrencyUnit', w0,
                    'SubCurrencyUnit', w0
                ]);
            }
        }
    }
}
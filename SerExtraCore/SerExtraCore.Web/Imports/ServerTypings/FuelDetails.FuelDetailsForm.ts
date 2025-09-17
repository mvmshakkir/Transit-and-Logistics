namespace SerExtraCore.FuelDetails {
    export interface FuelDetailsForm {
        Supplierid: Serenity.LookupEditor;
        TsId: Serenity.IntegerEditor;
        PumpId: Serenity.IntegerEditor;
        AmountType: Serenity.EnumEditor;
        Date: Serenity.DateEditor;
        Qty: Serenity.DecimalEditor;
        LiterRate: Serenity.DecimalEditor;
        TotalAmt: Serenity.DecimalEditor;
        PaymentMethod: Serenity.EnumEditor;
        DebitAccountId: Serenity.LookupEditor;
        Photo: Serenity.ImageUploadEditor;
    }

    export class FuelDetailsForm extends Serenity.PrefixedContext {
        static readonly formKey = 'FuelDetails.FuelDetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!FuelDetailsForm.init)  {
                FuelDetailsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.EnumEditor;
                var w3 = s.DateEditor;
                var w4 = s.DecimalEditor;
                var w5 = s.ImageUploadEditor;

                Q.initFormType(FuelDetailsForm, [
                    'Supplierid', w0,
                    'TsId', w1,
                    'PumpId', w1,
                    'AmountType', w2,
                    'Date', w3,
                    'Qty', w4,
                    'LiterRate', w4,
                    'TotalAmt', w4,
                    'PaymentMethod', w2,
                    'DebitAccountId', w0,
                    'Photo', w5
                ]);
            }
        }
    }
}
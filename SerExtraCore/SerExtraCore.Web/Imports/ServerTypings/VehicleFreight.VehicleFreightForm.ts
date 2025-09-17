namespace SerExtraCore.VehicleFreight {
    export interface VehicleFreightForm {
        Id: Serenity.IntegerEditor;
        TripDate: Serenity.DateEditor;
        MaterialId: Serenity.LookupEditor;
        UnitId: Serenity.LookupEditor;
        FromPlace: Serenity.LookupEditor;
        ToPlace: Serenity.LookupEditor;
        partys: Serenity.LookupEditor;
        CashCredit: Serenity.EnumEditor;
        PerTonRate: Serenity.DecimalEditor;
        TotalFreight: Serenity.DecimalEditor;
        UnitPrice: Serenity.DecimalEditor;
        LoadingExpense: Serenity.DecimalEditor;
        UnloadingExpense: Serenity.DecimalEditor;
        TotalCommission: Serenity.DecimalEditor;
        PaymentMethod: Serenity.EnumEditor;
        DebitAccountId: Serenity.LookupEditor;
    }

    export class VehicleFreightForm extends Serenity.PrefixedContext {
        static readonly formKey = 'VehicleFreight.VehicleFreight';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VehicleFreightForm.init)  {
                VehicleFreightForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DateEditor;
                var w2 = s.LookupEditor;
                var w3 = s.EnumEditor;
                var w4 = s.DecimalEditor;

                Q.initFormType(VehicleFreightForm, [
                    'Id', w0,
                    'TripDate', w1,
                    'MaterialId', w2,
                    'UnitId', w2,
                    'FromPlace', w2,
                    'ToPlace', w2,
                    'partys', w2,
                    'CashCredit', w3,
                    'PerTonRate', w4,
                    'TotalFreight', w4,
                    'UnitPrice', w4,
                    'LoadingExpense', w4,
                    'UnloadingExpense', w4,
                    'TotalCommission', w4,
                    'PaymentMethod', w3,
                    'DebitAccountId', w2
                ]);
            }
        }
    }
}
namespace SerExtraCore.SettlementDetails {
    export interface SettlementDetailsForm {
        TsNo: Serenity.LookupEditor;
        MoneyInOutTsNo: Serenity.IntegerEditor;
        TripAdvance: Serenity.IntegerEditor;
        TripBalance: Serenity.IntegerEditor;
        TSNumber: Serenity.StringEditor;
        TollTag: Serenity.IntegerEditor;
        FualAmount: Serenity.DecimalEditor;
        Advance: Serenity.DecimalEditor;
        TripBalancee: Serenity.DecimalEditor;
        toll: Serenity.DecimalEditor;
        extraexpense: Extr.ExtrEditor;
        Crossing: Crossing.CrossingEditor;
    }

    export class SettlementDetailsForm extends Serenity.PrefixedContext {
        static readonly formKey = 'SettlementDetails.SettlementDetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SettlementDetailsForm.init)  {
                SettlementDetailsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.StringEditor;
                var w3 = s.DecimalEditor;
                var w4 = Extr.ExtrEditor;
                var w5 = Crossing.CrossingEditor;

                Q.initFormType(SettlementDetailsForm, [
                    'TsNo', w0,
                    'MoneyInOutTsNo', w1,
                    'TripAdvance', w1,
                    'TripBalance', w1,
                    'TSNumber', w2,
                    'TollTag', w1,
                    'FualAmount', w3,
                    'Advance', w3,
                    'TripBalancee', w3,
                    'toll', w3,
                    'extraexpense', w4,
                    'Crossing', w5
                ]);
            }
        }
    }
}
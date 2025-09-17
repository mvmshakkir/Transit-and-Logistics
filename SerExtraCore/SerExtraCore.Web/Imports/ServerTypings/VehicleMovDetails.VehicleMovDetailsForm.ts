namespace SerExtraCore.VehicleMovDetails {
    export interface VehicleMovDetailsForm {
        TsNo: Serenity.StringEditor;
        VehicleId: Serenity.LookupEditor;
        Advance: Serenity.DecimalEditor;
        StartKm: Serenity.DecimalEditor;
        EndKm: Serenity.DecimalEditor;
        TotalKm: Serenity.DecimalEditor;
        TotalLiter: Serenity.DecimalEditor;
        Mileage: Serenity.DecimalEditor;
        Startdate: Serenity.DateEditor;
        Enddate: Serenity.DateEditor;
        Totaldays: Serenity.IntegerEditor;
        Remarks: Serenity.TextAreaEditor;
        CommisionDetails: CommisionDetails.CommisionDetailsEditor;
        Rto: Serenity.DecimalEditor;
        Pc: Serenity.DecimalEditor;
        Toll: Serenity.DecimalEditor;
        ExtraBill: Serenity.DecimalEditor;
        TotalFuelAmount: Serenity.DecimalEditor;
        TotalDriverCommission: Serenity.DecimalEditor;
        DrivertwoBata: Serenity.DecimalEditor;
        TotalCommison: Serenity.DecimalEditor;
        TotalLoadingExpense: Serenity.DecimalEditor;
        TotalUnloadExpense: Serenity.DecimalEditor;
        TotalOtherExpense: Serenity.DecimalEditor;
        TotalFright: Serenity.DecimalEditor;
        TotalExpense: Serenity.DecimalEditor;
        Profit: Serenity.DecimalEditor;
        VehicleFreight: VehicleFreight.VehicleFreightEditor;
        FuelDetails: FuelDetails.FuelDetailsEditor;
        ServiceAmount: ServiceAmount.ServiceAmountEditor;
    }

    export class VehicleMovDetailsForm extends Serenity.PrefixedContext {
        static readonly formKey = 'VehicleMovDetails.VehicleMovDetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VehicleMovDetailsForm.init)  {
                VehicleMovDetailsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.DateEditor;
                var w4 = s.IntegerEditor;
                var w5 = s.TextAreaEditor;
                var w6 = CommisionDetails.CommisionDetailsEditor;
                var w7 = VehicleFreight.VehicleFreightEditor;
                var w8 = FuelDetails.FuelDetailsEditor;
                var w9 = ServiceAmount.ServiceAmountEditor;

                Q.initFormType(VehicleMovDetailsForm, [
                    'TsNo', w0,
                    'VehicleId', w1,
                    'Advance', w2,
                    'StartKm', w2,
                    'EndKm', w2,
                    'TotalKm', w2,
                    'TotalLiter', w2,
                    'Mileage', w2,
                    'Startdate', w3,
                    'Enddate', w3,
                    'Totaldays', w4,
                    'Remarks', w5,
                    'CommisionDetails', w6,
                    'Rto', w2,
                    'Pc', w2,
                    'Toll', w2,
                    'ExtraBill', w2,
                    'TotalFuelAmount', w2,
                    'TotalDriverCommission', w2,
                    'DrivertwoBata', w2,
                    'TotalCommison', w2,
                    'TotalLoadingExpense', w2,
                    'TotalUnloadExpense', w2,
                    'TotalOtherExpense', w2,
                    'TotalFright', w2,
                    'TotalExpense', w2,
                    'Profit', w2,
                    'VehicleFreight', w7,
                    'FuelDetails', w8,
                    'ServiceAmount', w9
                ]);
            }
        }
    }
}
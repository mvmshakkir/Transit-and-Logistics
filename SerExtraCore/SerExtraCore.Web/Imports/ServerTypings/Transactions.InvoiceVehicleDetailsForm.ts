namespace SerExtraCore.Transactions {
    export interface InvoiceVehicleDetailsForm {
        TypeOfVehicle: Serenity.EnumEditor;
        VehicleId: Serenity.LookupEditor;
        Type: Serenity.StringEditor;
        VehicleNumber: Serenity.StringEditor;
        VehicleSpecifications: Serenity.LookupEditor;
        Driver: Serenity.LookupEditor;
        DriverName: Serenity.StringEditor;
        Number: Serenity.StringEditor;
        ResidentID: Serenity.StringEditor;
        CountryId: Serenity.LookupEditor;
        ShippingAreaFrom: Serenity.LookupEditor;
        ShippingAreaTo: Serenity.LookupEditor;
        StartDate: Serenity.DateTimeEditor;
        EndDate: Serenity.DateTimeEditor;
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
        VehicleCharges: InvoiceChargeEditor;
        SupplierAmount: Serenity.DecimalEditor;
        SupplierId: Serenity.LookupEditor;
        SupplierAdvanceAmount: Serenity.DecimalEditor;
        PaymentType: Serenity.EnumEditor;
        AccountId: Serenity.LookupEditor;
        SupplierPaymentStatus: Serenity.EnumEditor;
    }

    export class InvoiceVehicleDetailsForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Transactions.InvoiceVehicleDetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!InvoiceVehicleDetailsForm.init)  {
                InvoiceVehicleDetailsForm.init = true;

                var s = Serenity;
                var w0 = s.EnumEditor;
                var w1 = s.LookupEditor;
                var w2 = s.StringEditor;
                var w3 = s.DateTimeEditor;
                var w4 = s.DateEditor;
                var w5 = s.TextAreaEditor;
                var w6 = s.DecimalEditor;
                var w7 = InvoiceChargeEditor;

                Q.initFormType(InvoiceVehicleDetailsForm, [
                    'TypeOfVehicle', w0,
                    'VehicleId', w1,
                    'Type', w2,
                    'VehicleNumber', w2,
                    'VehicleSpecifications', w1,
                    'Driver', w1,
                    'DriverName', w2,
                    'Number', w2,
                    'ResidentID', w2,
                    'CountryId', w1,
                    'ShippingAreaFrom', w1,
                    'ShippingAreaTo', w1,
                    'StartDate', w3,
                    'EndDate', w3,
                    'ChargeId', w1,
                    'Date', w4,
                    'Description', w5,
                    'Amount', w6,
                    'Qty', w6,
                    'Total', w6,
                    'DisAmount', w6,
                    'TaxableAmount', w6,
                    'TaxPer', w6,
                    'TaxAmount', w6,
                    'TotalAmount', w6,
                    'CurrencyId', w1,
                    'ExchangeRate', w6,
                    'TotalAmountInLocalCurrency', w6,
                    'VehicleCharges', w7,
                    'SupplierAmount', w6,
                    'SupplierId', w1,
                    'SupplierAdvanceAmount', w6,
                    'PaymentType', w0,
                    'AccountId', w1,
                    'SupplierPaymentStatus', w0
                ]);
            }
        }
    }
}
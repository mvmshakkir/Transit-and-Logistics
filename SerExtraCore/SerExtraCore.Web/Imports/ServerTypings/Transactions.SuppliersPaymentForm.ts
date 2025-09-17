namespace SerExtraCore.Transactions {
    export interface SuppliersPaymentForm {
        Code: Serenity.StringEditor;
        Date: Serenity.DateEditor;
        SupplierId: Serenity.LookupEditor;
        OldBalance: Serenity.DecimalEditor;
        InvoiceVehicleDetails: SupplierPaymentInvoiceVehicleDetailsEditor;
        InvoiceCharges: SupplierPaymentInvoiceChargesEditor;
        TotalAmount: Serenity.DecimalEditor;
        PaymentType: Serenity.EnumEditor;
        AccountId: Serenity.LookupEditor;
        PdcPaymentDetails: PDCPayments.PdcPaymentDetailsEditor;
        DocumentNO: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        Status: Serenity.EnumEditor;
        StatusUser: Serenity.LookupEditor;
        Payments: ReceiptEditor;
    }

    export class SuppliersPaymentForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Transactions.SuppliersPayment';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SuppliersPaymentForm.init)  {
                SuppliersPaymentForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.LookupEditor;
                var w3 = s.DecimalEditor;
                var w4 = SupplierPaymentInvoiceVehicleDetailsEditor;
                var w5 = SupplierPaymentInvoiceChargesEditor;
                var w6 = s.EnumEditor;
                var w7 = PDCPayments.PdcPaymentDetailsEditor;
                var w8 = s.TextAreaEditor;
                var w9 = ReceiptEditor;

                Q.initFormType(SuppliersPaymentForm, [
                    'Code', w0,
                    'Date', w1,
                    'SupplierId', w2,
                    'OldBalance', w3,
                    'InvoiceVehicleDetails', w4,
                    'InvoiceCharges', w5,
                    'TotalAmount', w3,
                    'PaymentType', w6,
                    'AccountId', w2,
                    'PdcPaymentDetails', w7,
                    'DocumentNO', w0,
                    'Description', w8,
                    'Status', w6,
                    'StatusUser', w2,
                    'Payments', w9
                ]);
            }
        }
    }
}
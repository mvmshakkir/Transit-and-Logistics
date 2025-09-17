namespace SerExtraCore.Transactions {
    export interface PurchaseForm {
        TrxDate: Serenity.DateEditor;
        SupplierId: Serenity.LookupEditor;
        PaymentMode: Serenity.EnumEditor;
        RefNo: Serenity.StringEditor;
        PurchaseDetails: PurchaseDetailsEditor;
        TotalAmount: Serenity.DecimalEditor;
        PaidAmount: Serenity.DecimalEditor;
        PaymentType: Serenity.EnumEditor;
        AccountId: Serenity.LookupEditor;
        PdcPaymentDetails: PDCPayments.PdcPaymentDetailsEditor;
        Payment: ReceiptEditor;
    }

    export class PurchaseForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Transactions.Purchase';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PurchaseForm.init)  {
                PurchaseForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.LookupEditor;
                var w2 = s.EnumEditor;
                var w3 = s.StringEditor;
                var w4 = PurchaseDetailsEditor;
                var w5 = s.DecimalEditor;
                var w6 = PDCPayments.PdcPaymentDetailsEditor;
                var w7 = ReceiptEditor;

                Q.initFormType(PurchaseForm, [
                    'TrxDate', w0,
                    'SupplierId', w1,
                    'PaymentMode', w2,
                    'RefNo', w3,
                    'PurchaseDetails', w4,
                    'TotalAmount', w5,
                    'PaidAmount', w5,
                    'PaymentType', w2,
                    'AccountId', w1,
                    'PdcPaymentDetails', w6,
                    'Payment', w7
                ]);
            }
        }
    }
}
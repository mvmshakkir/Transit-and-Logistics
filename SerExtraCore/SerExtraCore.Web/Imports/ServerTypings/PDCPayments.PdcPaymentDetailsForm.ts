namespace SerExtraCore.PDCPayments {
    export interface PdcPaymentDetailsForm {
        Date: Serenity.DateEditor;
        ChequeNo: Serenity.StringEditor;
        Amount: Serenity.DecimalEditor;
        ChequeType: Serenity.EnumEditor;
        ChequeStatus: Serenity.EnumEditor;
        StatusDate: Serenity.DateEditor;
        PaymentType: Serenity.EnumEditor;
        AccountId: Serenity.LookupEditor;
    }

    export class PdcPaymentDetailsForm extends Serenity.PrefixedContext {
        static readonly formKey = 'PDCPayments.PdcPaymentDetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PdcPaymentDetailsForm.init)  {
                PdcPaymentDetailsForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.StringEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.EnumEditor;
                var w4 = s.LookupEditor;

                Q.initFormType(PdcPaymentDetailsForm, [
                    'Date', w0,
                    'ChequeNo', w1,
                    'Amount', w2,
                    'ChequeType', w3,
                    'ChequeStatus', w3,
                    'StatusDate', w0,
                    'PaymentType', w3,
                    'AccountId', w4
                ]);
            }
        }
    }
}
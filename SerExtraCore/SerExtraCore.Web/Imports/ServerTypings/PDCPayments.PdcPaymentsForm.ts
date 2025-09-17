namespace SerExtraCore.PDCPayments {
    export interface PdcPaymentsForm {
        PdcNumber: Serenity.StringEditor;
        TrxDate: Serenity.DateEditor;
        Company: Serenity.StringEditor;
        ChequeType: Serenity.EnumEditor;
        StartDate: Serenity.DateEditor;
        Installments: Serenity.IntegerEditor;
        EndDate: Serenity.DateEditor;
        InstallmentAmount: Serenity.DecimalEditor;
        SupplierId: Serenity.LookupEditor;
        PdcPaymentDetails: PdcPaymentDetailsEditor;
        Notes: Serenity.TextAreaEditor;
    }

    export class PdcPaymentsForm extends Serenity.PrefixedContext {
        static readonly formKey = 'PDCPayments.PdcPayments';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PdcPaymentsForm.init)  {
                PdcPaymentsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.EnumEditor;
                var w3 = s.IntegerEditor;
                var w4 = s.DecimalEditor;
                var w5 = s.LookupEditor;
                var w6 = PdcPaymentDetailsEditor;
                var w7 = s.TextAreaEditor;

                Q.initFormType(PdcPaymentsForm, [
                    'PdcNumber', w0,
                    'TrxDate', w1,
                    'Company', w0,
                    'ChequeType', w2,
                    'StartDate', w1,
                    'Installments', w3,
                    'EndDate', w1,
                    'InstallmentAmount', w4,
                    'SupplierId', w5,
                    'PdcPaymentDetails', w6,
                    'Notes', w7
                ]);
            }
        }
    }
}
namespace SerExtraCore.Transactions {
    export interface InvoiceCollectionForm {
        TrxDate: Serenity.DateEditor;
        CollectionNumber: Serenity.StringEditor;
        CustomerId: Serenity.LookupEditor;
        DetailList: InvoiceCollectonDetailsEditor;
        TotalAmount: Serenity.DecimalEditor;
        PaymentType: Serenity.EnumEditor;
        AccountId: Serenity.LookupEditor;
        PdcPaymentDetails: PDCPayments.PdcPaymentDetailsEditor;
        Status: Serenity.EnumEditor;
        StatusUser: Serenity.LookupEditor;
        Receipts: ReceiptEditor;
    }

    export class InvoiceCollectionForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Transactions.InvoiceCollection';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!InvoiceCollectionForm.init)  {
                InvoiceCollectionForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.StringEditor;
                var w2 = s.LookupEditor;
                var w3 = InvoiceCollectonDetailsEditor;
                var w4 = s.DecimalEditor;
                var w5 = s.EnumEditor;
                var w6 = PDCPayments.PdcPaymentDetailsEditor;
                var w7 = ReceiptEditor;

                Q.initFormType(InvoiceCollectionForm, [
                    'TrxDate', w0,
                    'CollectionNumber', w1,
                    'CustomerId', w2,
                    'DetailList', w3,
                    'TotalAmount', w4,
                    'PaymentType', w5,
                    'AccountId', w2,
                    'PdcPaymentDetails', w6,
                    'Status', w5,
                    'StatusUser', w2,
                    'Receipts', w7
                ]);
            }
        }
    }
}
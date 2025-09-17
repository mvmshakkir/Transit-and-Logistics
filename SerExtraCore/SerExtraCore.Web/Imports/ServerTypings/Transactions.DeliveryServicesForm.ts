namespace SerExtraCore.Transactions {
    export interface DeliveryServicesForm {
        BillNo: Serenity.StringEditor;
        TrxDate: Serenity.DateEditor;
        PaymentType: Serenity.EnumEditor;
        ConsigneeId: Serenity.LookupEditor;
        ConsignorId: Serenity.LookupEditor;
        ShippingAreaFrom: Serenity.LookupEditor;
        ShippingAreaTo: Serenity.LookupEditor;
        HandDate: Serenity.DateEditor;
        ReceivedDate: Serenity.DateEditor;
        DeliveryServiceDetails: DeliveryServiceDetailsEditor;
        TotalAmount: Serenity.DecimalEditor;
        ReceiverDetails: Serenity.TextAreaEditor;
        IDNo: Serenity.StringEditor;
        ContactNo: Serenity.StringEditor;
        PaymentTypeA: Serenity.EnumEditor;
        AccountId: Serenity.LookupEditor;
        DeliveryStatus: Serenity.EnumEditor;
        Note: Serenity.TextAreaEditor;
        Receipts: ReceiptEditor;
    }

    export class DeliveryServicesForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Transactions.DeliveryServices';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DeliveryServicesForm.init)  {
                DeliveryServicesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.EnumEditor;
                var w3 = s.LookupEditor;
                var w4 = DeliveryServiceDetailsEditor;
                var w5 = s.DecimalEditor;
                var w6 = s.TextAreaEditor;
                var w7 = ReceiptEditor;

                Q.initFormType(DeliveryServicesForm, [
                    'BillNo', w0,
                    'TrxDate', w1,
                    'PaymentType', w2,
                    'ConsigneeId', w3,
                    'ConsignorId', w3,
                    'ShippingAreaFrom', w3,
                    'ShippingAreaTo', w3,
                    'HandDate', w1,
                    'ReceivedDate', w1,
                    'DeliveryServiceDetails', w4,
                    'TotalAmount', w5,
                    'ReceiverDetails', w6,
                    'IDNo', w0,
                    'ContactNo', w0,
                    'PaymentTypeA', w2,
                    'AccountId', w3,
                    'DeliveryStatus', w2,
                    'Note', w6,
                    'Receipts', w7
                ]);
            }
        }
    }
}
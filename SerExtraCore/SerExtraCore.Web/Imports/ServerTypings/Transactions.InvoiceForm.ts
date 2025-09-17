namespace SerExtraCore.Transactions {
    export interface InvoiceForm {
        InvoiceDate: Serenity.DateEditor;
        InvoiceNo: Serenity.StringEditor;
        ConsignmentId: Serenity.LookupEditor;
        ConsignmentDate: Serenity.DateEditor;
        EndDate: Serenity.DateTimeEditor;
        WayBillNo: Serenity.StringEditor;
        JobNo: Serenity.StringEditor;
        ClientJobNo: Serenity.StringEditor;
        Payment: Serenity.EnumEditor;
        PaymentMode: Serenity.EnumEditor;
        ClearanceId: Serenity.LookupEditor;
        ShipperId: Serenity.LookupEditor;
        ConsigneeId: Serenity.LookupEditor;
        Billing: Serenity.LookupEditor;
        InvoiceVehicleDetails: InvoiceVehicleDetailsEditor;
        ChargeDetailList: InvoiceChargeEditor;
        Sgst: Serenity.DecimalEditor;
        SgstAmt: Serenity.DecimalEditor;
        Cgst: Serenity.DecimalEditor;
        CgstAmt: Serenity.DecimalEditor;
        Igst: Serenity.DecimalEditor;
        IgstAmt: Serenity.DecimalEditor;
        TotalAmount: Serenity.DecimalEditor;
        AdvanceAmount: Serenity.DecimalEditor;
        BalanceAmount: Serenity.DecimalEditor;
        InvoiceDues: InvoiceDueDetailsEditor;
        Status: Serenity.EnumEditor;
        StatusUser: Serenity.LookupEditor;
        PaymentStatus: Serenity.EnumEditor;
        Remarks: Serenity.TextAreaEditor;
        Receipts: ReceiptEditor;
    }

    export class InvoiceForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Transactions.Invoice';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!InvoiceForm.init)  {
                InvoiceForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.StringEditor;
                var w2 = s.LookupEditor;
                var w3 = s.DateTimeEditor;
                var w4 = s.EnumEditor;
                var w5 = InvoiceVehicleDetailsEditor;
                var w6 = InvoiceChargeEditor;
                var w7 = s.DecimalEditor;
                var w8 = InvoiceDueDetailsEditor;
                var w9 = s.TextAreaEditor;
                var w10 = ReceiptEditor;

                Q.initFormType(InvoiceForm, [
                    'InvoiceDate', w0,
                    'InvoiceNo', w1,
                    'ConsignmentId', w2,
                    'ConsignmentDate', w0,
                    'EndDate', w3,
                    'WayBillNo', w1,
                    'JobNo', w1,
                    'ClientJobNo', w1,
                    'Payment', w4,
                    'PaymentMode', w4,
                    'ClearanceId', w2,
                    'ShipperId', w2,
                    'ConsigneeId', w2,
                    'Billing', w2,
                    'InvoiceVehicleDetails', w5,
                    'ChargeDetailList', w6,
                    'Sgst', w7,
                    'SgstAmt', w7,
                    'Cgst', w7,
                    'CgstAmt', w7,
                    'Igst', w7,
                    'IgstAmt', w7,
                    'TotalAmount', w7,
                    'AdvanceAmount', w7,
                    'BalanceAmount', w7,
                    'InvoiceDues', w8,
                    'Status', w4,
                    'StatusUser', w2,
                    'PaymentStatus', w4,
                    'Remarks', w9,
                    'Receipts', w10
                ]);
            }
        }
    }
}
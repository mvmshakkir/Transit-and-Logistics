namespace SerExtraCore.Transactions {
    export interface ConsignmentForm {
        Date: Serenity.DateEditor;
        EndDate: Serenity.DateEditor;
        JobNo: Serenity.StringEditor;
        LoadedDate: Serenity.DateEditor;
        WayBillNo: Serenity.StringEditor;
        ClientJobNo: Serenity.StringEditor;
        Payment: Serenity.EnumEditor;
        PaymentMode: Serenity.EnumEditor;
        ClearanceId: Serenity.LookupEditor;
        ShipperId: Serenity.LookupEditor;
        ConsigneeId: Serenity.LookupEditor;
        Billing: Serenity.LookupEditor;
        ConsignmentVehicleDetails: ConsignmentVehicleDetailsEditor;
        ChargeDetailList: ConsignmentChargeEditor;
        TotalAmount: Serenity.DecimalEditor;
        AdvancePaymentType: Serenity.EnumEditor;
        AdvanceAccountId: Serenity.LookupEditor;
        Sgst: Serenity.DecimalEditor;
        SgstAmt: Serenity.DecimalEditor;
        Cgst: Serenity.DecimalEditor;
        CgstAmt: Serenity.DecimalEditor;
        Igst: Serenity.DecimalEditor;
        IgstAmt: Serenity.DecimalEditor;
        TotalTaxAmount: Serenity.DecimalEditor;
        TotalFreightAmount: Serenity.DecimalEditor;
        TaxPaidBy: Serenity.EnumEditor;
        AdvanceAmount: Serenity.DecimalEditor;
        Extracharge: Serenity.DecimalEditor;
        BalanceAmount: Serenity.DecimalEditor;
        PdcPaymentDetails: PDCPayments.PdcPaymentDetailsEditor;
        Status: Serenity.EnumEditor;
        Expenses: Accounts.ConsignmentExpenseEditor;
        AdvanceReceipt: ReceiptEditor;
    }

    export class ConsignmentForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Transactions.Consignment';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ConsignmentForm.init)  {
                ConsignmentForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.StringEditor;
                var w2 = s.EnumEditor;
                var w3 = s.LookupEditor;
                var w4 = ConsignmentVehicleDetailsEditor;
                var w5 = ConsignmentChargeEditor;
                var w6 = s.DecimalEditor;
                var w7 = PDCPayments.PdcPaymentDetailsEditor;
                var w8 = Accounts.ConsignmentExpenseEditor;
                var w9 = ReceiptEditor;

                Q.initFormType(ConsignmentForm, [
                    'Date', w0,
                    'EndDate', w0,
                    'JobNo', w1,
                    'LoadedDate', w0,
                    'WayBillNo', w1,
                    'ClientJobNo', w1,
                    'Payment', w2,
                    'PaymentMode', w2,
                    'ClearanceId', w3,
                    'ShipperId', w3,
                    'ConsigneeId', w3,
                    'Billing', w3,
                    'ConsignmentVehicleDetails', w4,
                    'ChargeDetailList', w5,
                    'TotalAmount', w6,
                    'AdvancePaymentType', w2,
                    'AdvanceAccountId', w3,
                    'Sgst', w6,
                    'SgstAmt', w6,
                    'Cgst', w6,
                    'CgstAmt', w6,
                    'Igst', w6,
                    'IgstAmt', w6,
                    'TotalTaxAmount', w6,
                    'TotalFreightAmount', w6,
                    'TaxPaidBy', w2,
                    'AdvanceAmount', w6,
                    'Extracharge', w6,
                    'BalanceAmount', w6,
                    'PdcPaymentDetails', w7,
                    'Status', w2,
                    'Expenses', w8,
                    'AdvanceReceipt', w9
                ]);
            }
        }
    }
}
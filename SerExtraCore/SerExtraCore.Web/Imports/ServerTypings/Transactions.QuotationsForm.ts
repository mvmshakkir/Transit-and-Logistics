namespace SerExtraCore.Transactions {
    export interface QuotationsForm {
        QuotNo: Serenity.StringEditor;
        CustomerId: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        FaxNo: Serenity.StringEditor;
        ContactPerson: Serenity.StringEditor;
        Mobile: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        Enquiryref: Serenity.StringEditor;
        VehicleType: Serenity.StringEditor;
        QuotationDetails: QuotationDetailsEditor;
        TotalAmount: Serenity.DecimalEditor;
        Note: Serenity.TextAreaEditor;
        QuotationType: Serenity.EnumEditor;
        TermsAndConditions: Serenity.HtmlContentEditor;
    }

    export class QuotationsForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Transactions.Quotations';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!QuotationsForm.init)  {
                QuotationsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DateEditor;
                var w3 = QuotationDetailsEditor;
                var w4 = s.DecimalEditor;
                var w5 = s.TextAreaEditor;
                var w6 = s.EnumEditor;
                var w7 = s.HtmlContentEditor;

                Q.initFormType(QuotationsForm, [
                    'QuotNo', w0,
                    'CustomerId', w1,
                    'Date', w2,
                    'FaxNo', w0,
                    'ContactPerson', w0,
                    'Mobile', w0,
                    'Email', w0,
                    'Enquiryref', w0,
                    'VehicleType', w0,
                    'QuotationDetails', w3,
                    'TotalAmount', w4,
                    'Note', w5,
                    'QuotationType', w6,
                    'TermsAndConditions', w7
                ]);
            }
        }
    }
}
namespace SerExtraCore.Master {
    export interface CustomersForm {
        CustomerCode: Serenity.StringEditor;
        CustomerName: Serenity.StringEditor;
        Address: Serenity.TextAreaEditor;
        Place: Serenity.StringEditor;
        StateId: Serenity.LookupEditor;
        TaxRegNo: Serenity.StringEditor;
        Telephone: Serenity.StringEditor;
        Email: Serenity.EmailAddressEditor;
        ContactPerson: Serenity.StringEditor;
        Mobile: Serenity.StringEditor;
        DueDays: Serenity.IntegerEditor;
        CreationDate: Serenity.DateEditor;
        Description: Serenity.TextAreaEditor;
        OpeningDate: Serenity.DateEditor;
        Opening: Serenity.DecimalEditor;
        jVAdjustmentsRow: Accounts.JVAdjustmentsEditor;
    }

    export class CustomersForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Master.Customers';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CustomersForm.init)  {
                CustomersForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.LookupEditor;
                var w3 = s.EmailAddressEditor;
                var w4 = s.IntegerEditor;
                var w5 = s.DateEditor;
                var w6 = s.DecimalEditor;
                var w7 = Accounts.JVAdjustmentsEditor;

                Q.initFormType(CustomersForm, [
                    'CustomerCode', w0,
                    'CustomerName', w0,
                    'Address', w1,
                    'Place', w0,
                    'StateId', w2,
                    'TaxRegNo', w0,
                    'Telephone', w0,
                    'Email', w3,
                    'ContactPerson', w0,
                    'Mobile', w0,
                    'DueDays', w4,
                    'CreationDate', w5,
                    'Description', w1,
                    'OpeningDate', w5,
                    'Opening', w6,
                    'jVAdjustmentsRow', w7
                ]);
            }
        }
    }
}
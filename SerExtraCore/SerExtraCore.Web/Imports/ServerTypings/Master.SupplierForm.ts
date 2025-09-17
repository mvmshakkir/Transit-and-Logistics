namespace SerExtraCore.Master {
    export interface SupplierForm {
        SupplierCode: Serenity.StringEditor;
        SupplierName: Serenity.StringEditor;
        Address: Serenity.TextAreaEditor;
        Place: Serenity.StringEditor;
        TaxRegNo: Serenity.StringEditor;
        Telephone: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ContactPerson: Serenity.StringEditor;
        Mobile: Serenity.StringEditor;
        CreationDate: Serenity.DateEditor;
        Description: Serenity.TextAreaEditor;
        OpeningDate: Serenity.DateEditor;
        Opening: Serenity.DecimalEditor;
        jVAdjustmentsRow: Accounts.JVAdjustmentsEditor;
    }

    export class SupplierForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Master.Supplier';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SupplierForm.init)  {
                SupplierForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.EmailEditor;
                var w3 = s.DateEditor;
                var w4 = s.DecimalEditor;
                var w5 = Accounts.JVAdjustmentsEditor;

                Q.initFormType(SupplierForm, [
                    'SupplierCode', w0,
                    'SupplierName', w0,
                    'Address', w1,
                    'Place', w0,
                    'TaxRegNo', w0,
                    'Telephone', w0,
                    'Email', w2,
                    'ContactPerson', w0,
                    'Mobile', w0,
                    'CreationDate', w3,
                    'Description', w1,
                    'OpeningDate', w3,
                    'Opening', w4,
                    'jVAdjustmentsRow', w5
                ]);
            }
        }
    }
}
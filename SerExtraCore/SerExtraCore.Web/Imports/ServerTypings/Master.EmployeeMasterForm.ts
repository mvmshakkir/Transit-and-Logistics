namespace SerExtraCore.Master {
    export interface EmployeeMasterForm {
        EmployeeCode: Serenity.StringEditor;
        EmployeeName: Serenity.StringEditor;
        Address: Serenity.TextAreaEditor;
        CountryId: Serenity.LookupEditor;
        MobileNumber: Serenity.StringEditor;
        EmployeeTypeId: Serenity.LookupEditor;
        DesignationId: Serenity.LookupEditor;
        EmployeeStatus: Serenity.EnumEditor;
        ResidentId: Serenity.StringEditor;
        RidExpiryDate: Serenity.DateEditor;
        PassportNumber: Serenity.StringEditor;
        PassportExpiryDate: Serenity.DateEditor;
        BasicSalary: Serenity.DecimalEditor;
        Allowance: Serenity.DecimalEditor;
    }

    export class EmployeeMasterForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Master.EmployeeMaster';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EmployeeMasterForm.init)  {
                EmployeeMasterForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.LookupEditor;
                var w3 = s.EnumEditor;
                var w4 = s.DateEditor;
                var w5 = s.DecimalEditor;

                Q.initFormType(EmployeeMasterForm, [
                    'EmployeeCode', w0,
                    'EmployeeName', w0,
                    'Address', w1,
                    'CountryId', w2,
                    'MobileNumber', w0,
                    'EmployeeTypeId', w2,
                    'DesignationId', w2,
                    'EmployeeStatus', w3,
                    'ResidentId', w0,
                    'RidExpiryDate', w4,
                    'PassportNumber', w0,
                    'PassportExpiryDate', w4,
                    'BasicSalary', w5,
                    'Allowance', w5
                ]);
            }
        }
    }
}
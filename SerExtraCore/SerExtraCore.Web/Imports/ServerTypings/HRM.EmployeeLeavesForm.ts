namespace SerExtraCore.HRM {
    export interface EmployeeLeavesForm {
        EmployeeId: Serenity.LookupEditor;
        FromDate: Serenity.DateEditor;
        ToDate: Serenity.DateEditor;
        Days: Serenity.IntegerEditor;
        Remarks: Serenity.TextAreaEditor;
        Attachments: Serenity.MultipleImageUploadEditor;
    }

    export class EmployeeLeavesForm extends Serenity.PrefixedContext {
        static readonly formKey = 'HRM.EmployeeLeaves';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EmployeeLeavesForm.init)  {
                EmployeeLeavesForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DateEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.TextAreaEditor;
                var w4 = s.MultipleImageUploadEditor;

                Q.initFormType(EmployeeLeavesForm, [
                    'EmployeeId', w0,
                    'FromDate', w1,
                    'ToDate', w1,
                    'Days', w2,
                    'Remarks', w3,
                    'Attachments', w4
                ]);
            }
        }
    }
}
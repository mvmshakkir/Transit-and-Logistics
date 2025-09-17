namespace SerExtraCore.Reports {
    export interface ReportParametersForm {
        ParameterName: Serenity.StringEditor;
        DataType: Serenity.EnumEditor;
        EditorType: Serenity.EnumEditor;
        LookupType: Serenity.EnumEditor;
        LookupName: Serenity.StringEditor;
        CustomLookupId: Serenity.LookupEditor;
        DefaultValue: Serenity.StringEditor;
        IsRequired: Serenity.BooleanEditor;
    }

    export class ReportParametersForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Reports.ReportParameters';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ReportParametersForm.init)  {
                ReportParametersForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.EnumEditor;
                var w2 = s.LookupEditor;
                var w3 = s.BooleanEditor;

                Q.initFormType(ReportParametersForm, [
                    'ParameterName', w0,
                    'DataType', w1,
                    'EditorType', w1,
                    'LookupType', w1,
                    'LookupName', w0,
                    'CustomLookupId', w2,
                    'DefaultValue', w0,
                    'IsRequired', w3
                ]);
            }
        }
    }
}
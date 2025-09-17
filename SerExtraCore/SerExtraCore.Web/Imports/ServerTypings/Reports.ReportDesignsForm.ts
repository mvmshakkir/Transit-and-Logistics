namespace SerExtraCore.Reports {
    export interface ReportDesignsForm {
        Name: Serenity.StringEditor;
        Category: Serenity.StringEditor;
        PermissionKey: Serenity.StringEditor;
        Design: Serenity.TextAreaEditor;
        ReportParameters: ReportParametersEditor;
        ReportDataSets: ReportDataSetsEditor;
    }

    export class ReportDesignsForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Reports.ReportDesigns';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ReportDesignsForm.init)  {
                ReportDesignsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = ReportParametersEditor;
                var w3 = ReportDataSetsEditor;

                Q.initFormType(ReportDesignsForm, [
                    'Name', w0,
                    'Category', w0,
                    'PermissionKey', w0,
                    'Design', w1,
                    'ReportParameters', w2,
                    'ReportDataSets', w3
                ]);
            }
        }
    }
}
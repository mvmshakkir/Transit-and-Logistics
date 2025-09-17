namespace SerExtraCore.Reports {
    export interface ReportDataSetsForm {
        DataSetName: Serenity.StringEditor;
        SqlQuery: Serenity.TextAreaEditor;
    }

    export class ReportDataSetsForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Reports.ReportDataSets';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ReportDataSetsForm.init)  {
                ReportDataSetsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(ReportDataSetsForm, [
                    'DataSetName', w0,
                    'SqlQuery', w1
                ]);
            }
        }
    }
}
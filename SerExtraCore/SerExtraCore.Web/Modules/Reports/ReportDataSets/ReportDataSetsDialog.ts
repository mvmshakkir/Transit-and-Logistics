
namespace SerExtraCore.Reports {

    @Serenity.Decorators.registerClass()
    export class ReportDataSetsDialog extends Common.GridEditorDialog<ReportDataSetsRow> {
        protected getFormKey() { return ReportDataSetsForm.formKey; }
        protected getLocalTextPrefix() { return ReportDataSetsRow.localTextPrefix; }
      

        protected form : ReportDataSetsForm;

    }
}
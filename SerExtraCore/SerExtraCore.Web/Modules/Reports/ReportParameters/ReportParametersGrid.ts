
namespace SerExtraCore.Reports {

    @Serenity.Decorators.registerClass()
    export class ReportParametersGrid extends Serenity.EntityGrid<ReportParametersRow, any> {
        protected getColumnsKey() { return 'Reports.ReportParameters'; }
        protected getDialogType() { return ReportParametersDialog; }
        protected getIdProperty() { return ReportParametersRow.idProperty; }
        protected getInsertPermission() { return ReportParametersRow.insertPermission; }
        protected getLocalTextPrefix() { return ReportParametersRow.localTextPrefix; }
        protected getService() { return ReportParametersService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}

namespace SerExtraCore.Reports {

    @Serenity.Decorators.registerClass()
    export class ReportDataSetsGrid extends Serenity.EntityGrid<ReportDataSetsRow, any> {
        protected getColumnsKey() { return 'Reports.ReportDataSets'; }
        protected getDialogType() { return ReportDataSetsDialog; }
        protected getIdProperty() { return ReportDataSetsRow.idProperty; }
        protected getInsertPermission() { return ReportDataSetsRow.insertPermission; }
        protected getLocalTextPrefix() { return ReportDataSetsRow.localTextPrefix; }
        protected getService() { return ReportDataSetsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
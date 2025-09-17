
namespace SerExtraCore.Reports {

    @Serenity.Decorators.registerClass()
    export class ReportDesignsGrid extends Serenity.EntityGrid<ReportDesignsRow, any> {
        protected getColumnsKey() { return 'Reports.ReportDesigns'; }
        protected getDialogType() { return ReportDesignsDialog; }
        protected getIdProperty() { return ReportDesignsRow.idProperty; }
        protected getInsertPermission() { return ReportDesignsRow.insertPermission; }
        protected getLocalTextPrefix() { return ReportDesignsRow.localTextPrefix; }
        protected getService() { return ReportDesignsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
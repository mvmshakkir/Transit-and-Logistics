
namespace SerExtraCore.CommisionDetails {

    @Serenity.Decorators.registerClass()
    export class CommisionDetailsGrid extends Serenity.EntityGrid<CommisionDetailsRow, any> {
        protected getColumnsKey() { return 'CommisionDetails.CommisionDetails'; }
        protected getDialogType() { return CommisionDetailsDialog; }
        protected getIdProperty() { return CommisionDetailsRow.idProperty; }
        protected getInsertPermission() { return CommisionDetailsRow.insertPermission; }
        protected getLocalTextPrefix() { return CommisionDetailsRow.localTextPrefix; }
        protected getService() { return CommisionDetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
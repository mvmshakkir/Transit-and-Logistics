
namespace SerExtraCore.Master {

    @Serenity.Decorators.registerClass()
    export class ClearanceStatusGrid extends Serenity.EntityGrid<ClearanceStatusRow, any> {
        protected getColumnsKey() { return 'Master.ClearanceStatus'; }
        protected getDialogType() { return ClearanceStatusDialog; }
        protected getIdProperty() { return ClearanceStatusRow.idProperty; }
        protected getInsertPermission() { return ClearanceStatusRow.insertPermission; }
        protected getLocalTextPrefix() { return ClearanceStatusRow.localTextPrefix; }
        protected getService() { return ClearanceStatusService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
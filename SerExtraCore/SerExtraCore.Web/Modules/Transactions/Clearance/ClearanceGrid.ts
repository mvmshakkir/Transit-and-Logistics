
namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class ClearanceGrid extends Serenity.EntityGrid<ClearanceRow, any> {
        protected getColumnsKey() { return 'Transactions.Clearance'; }
        protected getDialogType() { return ClearanceDialog; }
        protected getIdProperty() { return ClearanceRow.idProperty; }
        protected getInsertPermission() { return ClearanceRow.insertPermission; }
        protected getLocalTextPrefix() { return ClearanceRow.localTextPrefix; }
        protected getService() { return ClearanceService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }


    }
}
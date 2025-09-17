
namespace SerExtraCore.Crossing {

    @Serenity.Decorators.registerClass()
    export class CrossingGrid extends Serenity.EntityGrid<CrossingRow, any> {
        protected getColumnsKey() { return 'Crossing.Crossing'; }
        protected getDialogType() { return CrossingDialog; }
        protected getIdProperty() { return CrossingRow.idProperty; }
        protected getInsertPermission() { return CrossingRow.insertPermission; }
        protected getLocalTextPrefix() { return CrossingRow.localTextPrefix; }
        protected getService() { return CrossingService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
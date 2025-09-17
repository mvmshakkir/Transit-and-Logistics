
namespace SerExtraCore.UOM {

    @Serenity.Decorators.registerClass()
    export class UOMGrid extends Serenity.EntityGrid<UOMRow, any> {
        protected getColumnsKey() { return 'UOM.UOM'; }
        protected getDialogType() { return UOMDialog; }
        protected getIdProperty() { return UOMRow.idProperty; }
        protected getInsertPermission() { return UOMRow.insertPermission; }
        protected getLocalTextPrefix() { return UOMRow.localTextPrefix; }
        protected getService() { return UOMService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
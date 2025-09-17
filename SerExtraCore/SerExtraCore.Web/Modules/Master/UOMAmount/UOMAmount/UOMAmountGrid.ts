
namespace SerExtraCore.UOMAmount {

    @Serenity.Decorators.registerClass()
    export class UOMAmountGrid extends Serenity.EntityGrid<UOMAmountRow, any> {
        protected getColumnsKey() { return 'UOMAmount.UOMAmount'; }
        protected getDialogType() { return UOMAmountDialog; }
        protected getIdProperty() { return UOMAmountRow.idProperty; }
        protected getInsertPermission() { return UOMAmountRow.insertPermission; }
        protected getLocalTextPrefix() { return UOMAmountRow.localTextPrefix; }
        protected getService() { return UOMAmountService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
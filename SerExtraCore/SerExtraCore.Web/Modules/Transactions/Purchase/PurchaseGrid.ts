
namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    export class PurchaseGrid extends Serenity.EntityGrid<PurchaseRow, any> {
        protected getColumnsKey() { return 'Transactions.Purchase'; }
        protected getDialogType() { return PurchaseDialog; }
        protected getIdProperty() { return PurchaseRow.idProperty; }
        protected getInsertPermission() { return PurchaseRow.insertPermission; }
        protected getLocalTextPrefix() { return PurchaseRow.localTextPrefix; }
        protected getService() { return PurchaseService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}

namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    export class PurchaseDetailsGrid extends Serenity.EntityGrid<PurchaseDetailsRow, any> {
        protected getColumnsKey() { return 'Transactions.PurchaseDetails'; }
        protected getDialogType() { return PurchaseDetailsDialog; }
        protected getIdProperty() { return PurchaseDetailsRow.idProperty; }
        protected getInsertPermission() { return PurchaseDetailsRow.insertPermission; }
        protected getLocalTextPrefix() { return PurchaseDetailsRow.localTextPrefix; }
        protected getService() { return PurchaseDetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
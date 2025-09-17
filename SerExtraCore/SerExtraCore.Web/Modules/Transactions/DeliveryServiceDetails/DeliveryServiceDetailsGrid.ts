
namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    export class DeliveryServiceDetailsGrid extends Serenity.EntityGrid<DeliveryServiceDetailsRow, any> {
        protected getColumnsKey() { return 'Transactions.DeliveryServiceDetails'; }
        protected getDialogType() { return DeliveryServiceDetailsDialog; }
        protected getIdProperty() { return DeliveryServiceDetailsRow.idProperty; }
        protected getInsertPermission() { return DeliveryServiceDetailsRow.insertPermission; }
        protected getLocalTextPrefix() { return DeliveryServiceDetailsRow.localTextPrefix; }
        protected getService() { return DeliveryServiceDetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
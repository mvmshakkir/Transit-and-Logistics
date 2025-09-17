
namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    export class DeliveryServicesGrid extends Serenity.EntityGrid<DeliveryServicesRow, any> {
        protected getColumnsKey() { return 'Transactions.DeliveryServices'; }
        protected getDialogType() { return DeliveryServicesDialog; }
        protected getIdProperty() { return DeliveryServicesRow.idProperty; }
        protected getInsertPermission() { return DeliveryServicesRow.insertPermission; }
        protected getLocalTextPrefix() { return DeliveryServicesRow.localTextPrefix; }
        protected getService() { return DeliveryServicesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
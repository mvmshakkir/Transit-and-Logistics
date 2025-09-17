
namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    export class InvoiceVehicleSpecificationsGrid extends Serenity.EntityGrid<InvoiceVehicleSpecificationsRow, any> {
        protected getColumnsKey() { return 'Transactions.InvoiceVehicleSpecifications'; }
        protected getDialogType() { return InvoiceVehicleSpecificationsDialog; }
        protected getIdProperty() { return InvoiceVehicleSpecificationsRow.idProperty; }
        protected getInsertPermission() { return InvoiceVehicleSpecificationsRow.insertPermission; }
        protected getLocalTextPrefix() { return InvoiceVehicleSpecificationsRow.localTextPrefix; }
        protected getService() { return InvoiceVehicleSpecificationsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
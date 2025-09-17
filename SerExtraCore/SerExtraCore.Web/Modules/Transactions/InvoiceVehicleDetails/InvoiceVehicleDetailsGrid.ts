
namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    export class InvoiceVehicleDetailsGrid extends Serenity.EntityGrid<InvoiceVehicleDetailsRow, any> {
        protected getColumnsKey() { return 'Transactions.InvoiceVehicleDetails'; }
        protected getDialogType() { return InvoiceVehicleDetailsDialog; }
        protected getIdProperty() { return InvoiceVehicleDetailsRow.idProperty; }
        protected getInsertPermission() { return InvoiceVehicleDetailsRow.insertPermission; }
        protected getLocalTextPrefix() { return InvoiceVehicleDetailsRow.localTextPrefix; }
        protected getService() { return InvoiceVehicleDetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
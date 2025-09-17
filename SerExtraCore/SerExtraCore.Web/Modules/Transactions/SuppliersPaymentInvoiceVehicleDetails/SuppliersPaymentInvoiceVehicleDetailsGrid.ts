
namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    export class SuppliersPaymentInvoiceVehicleDetailsGrid extends Serenity.EntityGrid<SuppliersPaymentInvoiceVehicleDetailsRow, any> {
        protected getColumnsKey() { return 'Transactions.SuppliersPaymentInvoiceVehicleDetails'; }
        protected getDialogType() { return SuppliersPaymentInvoiceVehicleDetailsDialog; }
        protected getIdProperty() { return SuppliersPaymentInvoiceVehicleDetailsRow.idProperty; }
        protected getInsertPermission() { return SuppliersPaymentInvoiceVehicleDetailsRow.insertPermission; }
        protected getLocalTextPrefix() { return SuppliersPaymentInvoiceVehicleDetailsRow.localTextPrefix; }
        protected getService() { return SuppliersPaymentInvoiceVehicleDetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
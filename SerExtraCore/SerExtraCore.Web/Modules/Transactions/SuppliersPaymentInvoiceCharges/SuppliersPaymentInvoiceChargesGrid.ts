
namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    export class SuppliersPaymentInvoiceChargesGrid extends Serenity.EntityGrid<SuppliersPaymentInvoiceChargesRow, any> {
        protected getColumnsKey() { return 'Transactions.SuppliersPaymentInvoiceCharges'; }
        protected getDialogType() { return SuppliersPaymentInvoiceChargesDialog; }
        protected getIdProperty() { return SuppliersPaymentInvoiceChargesRow.idProperty; }
        protected getInsertPermission() { return SuppliersPaymentInvoiceChargesRow.insertPermission; }
        protected getLocalTextPrefix() { return SuppliersPaymentInvoiceChargesRow.localTextPrefix; }
        protected getService() { return SuppliersPaymentInvoiceChargesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}

namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    export class SuppliersPaymentInvoicesGrid extends Serenity.EntityGrid<SuppliersPaymentInvoicesRow, any> {
        protected getColumnsKey() { return 'Transactions.SuppliersPaymentInvoices'; }
        protected getDialogType() { return SuppliersPaymentInvoicesDialog; }
        protected getIdProperty() { return SuppliersPaymentInvoicesRow.idProperty; }
        protected getInsertPermission() { return SuppliersPaymentInvoicesRow.insertPermission; }
        protected getLocalTextPrefix() { return SuppliersPaymentInvoicesRow.localTextPrefix; }
        protected getService() { return SuppliersPaymentInvoicesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
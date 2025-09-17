
namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    export class InvoiceDueDetailsGrid extends Serenity.EntityGrid<InvoiceDueDetailsRow, any> {
        protected getColumnsKey() { return 'Transactions.InvoiceDueDetails'; }
        protected getDialogType() { return InvoiceDueDetailsDialog; }
        protected getIdProperty() { return InvoiceDueDetailsRow.idProperty; }
        protected getInsertPermission() { return InvoiceDueDetailsRow.insertPermission; }
        protected getLocalTextPrefix() { return InvoiceDueDetailsRow.localTextPrefix; }
        protected getService() { return InvoiceDueDetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
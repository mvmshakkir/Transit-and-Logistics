
namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    export class InvoiceCollectionDetailsGrid extends Serenity.EntityGrid<InvoiceCollectionDetailsRow, any> {
        protected getColumnsKey() { return 'Transactions.InvoiceCollectionDetails'; }
        protected getDialogType() { return InvoiceCollectionDetailsDialog; }
        protected getIdProperty() { return InvoiceCollectionDetailsRow.idProperty; }
        protected getInsertPermission() { return InvoiceCollectionDetailsRow.insertPermission; }
        protected getLocalTextPrefix() { return InvoiceCollectionDetailsRow.localTextPrefix; }
        protected getService() { return InvoiceCollectionDetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
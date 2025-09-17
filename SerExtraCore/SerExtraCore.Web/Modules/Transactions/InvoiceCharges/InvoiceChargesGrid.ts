
namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    export class InvoiceChargesGrid extends Serenity.EntityGrid<InvoiceChargesRow, any> {
        protected getColumnsKey() { return 'Transactions.InvoiceCharges'; }
        protected getDialogType() { return InvoiceChargesDialog; }
        protected getIdProperty() { return InvoiceChargesRow.idProperty; }
        protected getInsertPermission() { return InvoiceChargesRow.insertPermission; }
        protected getLocalTextPrefix() { return InvoiceChargesRow.localTextPrefix; }
        protected getService() { return InvoiceChargesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
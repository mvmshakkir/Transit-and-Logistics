
namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    export class QuotationsGrid extends Serenity.EntityGrid<QuotationsRow, any> {
        protected getColumnsKey() { return 'Transactions.Quotations'; }
        protected getDialogType() { return QuotationsDialog; }
        protected getIdProperty() { return QuotationsRow.idProperty; }
        protected getInsertPermission() { return QuotationsRow.insertPermission; }
        protected getLocalTextPrefix() { return QuotationsRow.localTextPrefix; }
        protected getService() { return QuotationsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
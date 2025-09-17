
namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    export class InvoiceTripDatesGrid extends Serenity.EntityGrid<InvoiceTripDatesRow, any> {
        protected getColumnsKey() { return 'Transactions.InvoiceTripDates'; }
        protected getDialogType() { return InvoiceTripDatesDialog; }
        protected getIdProperty() { return InvoiceTripDatesRow.idProperty; }
        protected getInsertPermission() { return InvoiceTripDatesRow.insertPermission; }
        protected getLocalTextPrefix() { return InvoiceTripDatesRow.localTextPrefix; }
        protected getService() { return InvoiceTripDatesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
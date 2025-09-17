
namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    export class ConsignmentTripDatesGrid extends Serenity.EntityGrid<ConsignmentTripDatesRow, any> {
        protected getColumnsKey() { return 'Transactions.ConsignmentTripDates'; }
        protected getDialogType() { return ConsignmentTripDatesDialog; }
        protected getIdProperty() { return ConsignmentTripDatesRow.idProperty; }
        protected getInsertPermission() { return ConsignmentTripDatesRow.insertPermission; }
        protected getLocalTextPrefix() { return ConsignmentTripDatesRow.localTextPrefix; }
        protected getService() { return ConsignmentTripDatesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
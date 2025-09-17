
namespace SerExtraCore.FuelDetails {

    @Serenity.Decorators.registerClass()
    export class FuelDetailsGrid extends Serenity.EntityGrid<FuelDetailsRow, any> {
        protected getColumnsKey() { return 'FuelDetails.FuelDetails'; }
        protected getDialogType() { return FuelDetailsDialog; }
        protected getIdProperty() { return FuelDetailsRow.idProperty; }
        protected getInsertPermission() { return FuelDetailsRow.insertPermission; }
        protected getLocalTextPrefix() { return FuelDetailsRow.localTextPrefix; }
        protected getService() { return FuelDetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
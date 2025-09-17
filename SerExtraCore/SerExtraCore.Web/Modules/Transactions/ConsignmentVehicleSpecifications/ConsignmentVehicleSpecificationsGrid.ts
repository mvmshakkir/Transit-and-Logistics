
namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    export class ConsignmentVehicleSpecificationsGrid extends Serenity.EntityGrid<ConsignmentVehicleSpecificationsRow, any> {
        protected getColumnsKey() { return 'Transactions.ConsignmentVehicleSpecifications'; }
        protected getDialogType() { return ConsignmentVehicleSpecificationsDialog; }
        protected getIdProperty() { return ConsignmentVehicleSpecificationsRow.idProperty; }
        protected getInsertPermission() { return ConsignmentVehicleSpecificationsRow.insertPermission; }
        protected getLocalTextPrefix() { return ConsignmentVehicleSpecificationsRow.localTextPrefix; }
        protected getService() { return ConsignmentVehicleSpecificationsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}

namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    export class ConsignmentVehicleSpecificationsDialog extends Serenity.EntityDialog<ConsignmentVehicleSpecificationsRow, any> {
        protected getFormKey() { return ConsignmentVehicleSpecificationsForm.formKey; }
        protected getIdProperty() { return ConsignmentVehicleSpecificationsRow.idProperty; }
        protected getLocalTextPrefix() { return ConsignmentVehicleSpecificationsRow.localTextPrefix; }
        protected getService() { return ConsignmentVehicleSpecificationsService.baseUrl; }
        protected getDeletePermission() { return ConsignmentVehicleSpecificationsRow.deletePermission; }
        protected getInsertPermission() { return ConsignmentVehicleSpecificationsRow.insertPermission; }
        protected getUpdatePermission() { return ConsignmentVehicleSpecificationsRow.updatePermission; }

        protected form = new ConsignmentVehicleSpecificationsForm(this.idPrefix);

    }
}
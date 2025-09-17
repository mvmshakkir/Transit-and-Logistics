
namespace SerExtraCore.Master {

    @Serenity.Decorators.registerClass()
    export class VehicleSpecificationsDialog extends Serenity.EntityDialog<VehicleSpecificationsRow, any> {
        protected getFormKey() { return VehicleSpecificationsForm.formKey; }
        protected getIdProperty() { return VehicleSpecificationsRow.idProperty; }
        protected getLocalTextPrefix() { return VehicleSpecificationsRow.localTextPrefix; }
        protected getService() { return VehicleSpecificationsService.baseUrl; }
        protected getDeletePermission() { return VehicleSpecificationsRow.deletePermission; }
        protected getInsertPermission() { return VehicleSpecificationsRow.insertPermission; }
        protected getUpdatePermission() { return VehicleSpecificationsRow.updatePermission; }

        protected form = new VehicleSpecificationsForm(this.idPrefix);

    }
}
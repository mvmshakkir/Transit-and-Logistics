
namespace SerExtraCore.Master {

    @Serenity.Decorators.registerClass()
    export class VehicleModelsDialog extends Serenity.EntityDialog<VehicleModelsRow, any> {
        protected getFormKey() { return VehicleModelsForm.formKey; }
        protected getIdProperty() { return VehicleModelsRow.idProperty; }
        protected getLocalTextPrefix() { return VehicleModelsRow.localTextPrefix; }
        protected getNameProperty() { return VehicleModelsRow.nameProperty; }
        protected getService() { return VehicleModelsService.baseUrl; }
        protected getDeletePermission() { return VehicleModelsRow.deletePermission; }
        protected getInsertPermission() { return VehicleModelsRow.insertPermission; }
        protected getUpdatePermission() { return VehicleModelsRow.updatePermission; }

        protected form = new VehicleModelsForm(this.idPrefix);

    }
}
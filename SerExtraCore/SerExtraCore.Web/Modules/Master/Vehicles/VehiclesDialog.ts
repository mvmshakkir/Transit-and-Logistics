
namespace SerExtraCore.Master {

    @Serenity.Decorators.registerClass()
    export class VehiclesDialog extends Serenity.EntityDialog<VehiclesRow, any> {
        protected getFormKey() { return VehiclesForm.formKey; }
        protected getIdProperty() { return VehiclesRow.idProperty; }
        protected getLocalTextPrefix() { return VehiclesRow.localTextPrefix; }
        protected getNameProperty() { return VehiclesRow.nameProperty; }
        protected getService() { return VehiclesService.baseUrl; }
        protected getDeletePermission() { return VehiclesRow.deletePermission; }
        protected getInsertPermission() { return VehiclesRow.insertPermission; }
        protected getUpdatePermission() { return VehiclesRow.updatePermission; }

        protected form = new VehiclesForm(this.idPrefix);
        constructor() {
            super();

            this.form = new VehiclesForm(this.idPrefix);

           
        }
    }
}
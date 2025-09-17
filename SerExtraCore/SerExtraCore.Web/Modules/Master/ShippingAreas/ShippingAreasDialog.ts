
namespace SerExtraCore.Master {

    @Serenity.Decorators.registerClass()
    export class ShippingAreasDialog extends Serenity.EntityDialog<ShippingAreasRow, any> {
        protected getFormKey() { return ShippingAreasForm.formKey; }
        protected getIdProperty() { return ShippingAreasRow.idProperty; }
        protected getLocalTextPrefix() { return ShippingAreasRow.localTextPrefix; }
        protected getNameProperty() { return ShippingAreasRow.nameProperty; }
        protected getService() { return ShippingAreasService.baseUrl; }
        protected getDeletePermission() { return ShippingAreasRow.deletePermission; }
        protected getInsertPermission() { return ShippingAreasRow.insertPermission; }
        protected getUpdatePermission() { return ShippingAreasRow.updatePermission; }

        protected form = new ShippingAreasForm(this.idPrefix);

    }
}
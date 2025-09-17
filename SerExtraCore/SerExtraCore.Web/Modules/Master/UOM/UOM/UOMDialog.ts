
namespace SerExtraCore.UOM {

    @Serenity.Decorators.registerClass()
    export class UOMDialog extends Serenity.EntityDialog<UOMRow, any> {
        protected getFormKey() { return UOMForm.formKey; }
        protected getIdProperty() { return UOMRow.idProperty; }
        protected getLocalTextPrefix() { return UOMRow.localTextPrefix; }
        protected getNameProperty() { return UOMRow.nameProperty; }
        protected getService() { return UOMService.baseUrl; }
        protected getDeletePermission() { return UOMRow.deletePermission; }
        protected getInsertPermission() { return UOMRow.insertPermission; }
        protected getUpdatePermission() { return UOMRow.updatePermission; }

        protected form = new UOMForm(this.idPrefix);

    }
}

namespace SerExtraCore.Master {

    @Serenity.Decorators.registerClass()
    export class PortsDialog extends Serenity.EntityDialog<PortsRow, any> {
        protected getFormKey() { return PortsForm.formKey; }
        protected getIdProperty() { return PortsRow.idProperty; }
        protected getLocalTextPrefix() { return PortsRow.localTextPrefix; }
        protected getNameProperty() { return PortsRow.nameProperty; }
        protected getService() { return PortsService.baseUrl; }
        protected getDeletePermission() { return PortsRow.deletePermission; }
        protected getInsertPermission() { return PortsRow.insertPermission; }
        protected getUpdatePermission() { return PortsRow.updatePermission; }

        protected form = new PortsForm(this.idPrefix);

        protected afterLoadEntity() {
            super.afterLoadEntity();
            this.form.CountryId.onInitNewEntity = entity => {
                entity.CountryCode = this.form.CountryId.text;
            }
        }


    }
}
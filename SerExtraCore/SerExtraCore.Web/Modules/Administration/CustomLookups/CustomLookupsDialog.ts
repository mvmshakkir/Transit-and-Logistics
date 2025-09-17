
namespace SerExtraCore.Administration {

    @Serenity.Decorators.registerClass()
    export class CustomLookupsDialog extends Serenity.EntityDialog<CustomLookupsRow, any> {
        protected getFormKey() { return CustomLookupsForm.formKey; }
        protected getIdProperty() { return CustomLookupsRow.idProperty; }
        protected getLocalTextPrefix() { return CustomLookupsRow.localTextPrefix; }
        protected getNameProperty() { return CustomLookupsRow.nameProperty; }
        protected getService() { return CustomLookupsService.baseUrl; }
        protected getDeletePermission() { return CustomLookupsRow.deletePermission; }
        protected getInsertPermission() { return CustomLookupsRow.insertPermission; }
        protected getUpdatePermission() { return CustomLookupsRow.updatePermission; }

        protected form = new CustomLookupsForm(this.idPrefix);

    }
}

namespace SerExtraCore.Master {

    @Serenity.Decorators.registerClass()
    export class SpecificationsDialog extends Serenity.EntityDialog<SpecificationsRow, any> {
        protected getFormKey() { return SpecificationsForm.formKey; }
        protected getIdProperty() { return SpecificationsRow.idProperty; }
        protected getLocalTextPrefix() { return SpecificationsRow.localTextPrefix; }
        protected getNameProperty() { return SpecificationsRow.nameProperty; }
        protected getService() { return SpecificationsService.baseUrl; }
        protected getDeletePermission() { return SpecificationsRow.deletePermission; }
        protected getInsertPermission() { return SpecificationsRow.insertPermission; }
        protected getUpdatePermission() { return SpecificationsRow.updatePermission; }

        protected form = new SpecificationsForm(this.idPrefix);

    }
}

namespace SerExtraCore.MaterialsDetails {

    @Serenity.Decorators.registerClass()
    export class MaterialsDetailsDialog extends Serenity.EntityDialog<MaterialsDetailsRow, any> {
        protected getFormKey() { return MaterialsDetailsForm.formKey; }
        protected getIdProperty() { return MaterialsDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return MaterialsDetailsRow.localTextPrefix; }
        protected getNameProperty() { return MaterialsDetailsRow.nameProperty; }
        protected getService() { return MaterialsDetailsService.baseUrl; }
        protected getDeletePermission() { return MaterialsDetailsRow.deletePermission; }
        protected getInsertPermission() { return MaterialsDetailsRow.insertPermission; }
        protected getUpdatePermission() { return MaterialsDetailsRow.updatePermission; }

        protected form = new MaterialsDetailsForm(this.idPrefix);

    }
}
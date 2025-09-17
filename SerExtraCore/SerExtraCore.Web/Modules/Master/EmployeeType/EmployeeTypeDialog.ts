
namespace SerExtraCore.Master {

    @Serenity.Decorators.registerClass()
    export class EmployeeTypeDialog extends Serenity.EntityDialog<EmployeeTypeRow, any> {
        protected getFormKey() { return EmployeeTypeForm.formKey; }
        protected getIdProperty() { return EmployeeTypeRow.idProperty; }
        protected getLocalTextPrefix() { return EmployeeTypeRow.localTextPrefix; }
        protected getNameProperty() { return EmployeeTypeRow.nameProperty; }
        protected getService() { return EmployeeTypeService.baseUrl; }
        protected getDeletePermission() { return EmployeeTypeRow.deletePermission; }
        protected getInsertPermission() { return EmployeeTypeRow.insertPermission; }
        protected getUpdatePermission() { return EmployeeTypeRow.updatePermission; }

        protected form = new EmployeeTypeForm(this.idPrefix);

    }
}
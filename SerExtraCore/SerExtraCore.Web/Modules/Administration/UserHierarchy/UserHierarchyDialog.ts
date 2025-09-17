
namespace SerExtraCore.Administration {

    @Serenity.Decorators.registerClass()
    export class UserHierarchyDialog extends Serenity.EntityDialog<UserHierarchyRow, any> {
        protected getFormKey() { return UserHierarchyForm.formKey; }
        protected getIdProperty() { return UserHierarchyRow.idProperty; }
        protected getLocalTextPrefix() { return UserHierarchyRow.localTextPrefix; }
        protected getNameProperty() { return UserHierarchyRow.nameProperty; }
        protected getService() { return UserHierarchyService.baseUrl; }
        protected getDeletePermission() { return UserHierarchyRow.deletePermission; }
        protected getInsertPermission() { return UserHierarchyRow.insertPermission; }
        protected getUpdatePermission() { return UserHierarchyRow.updatePermission; }

        protected form = new UserHierarchyForm(this.idPrefix);

    }
}
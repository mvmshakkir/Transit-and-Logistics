
namespace SerExtraCore.Administration {

    @Serenity.Decorators.registerClass()
    export class UserHierarchyGrid extends Serenity.EntityGrid<UserHierarchyRow, any> {
        protected getColumnsKey() { return 'Administration.UserHierarchy'; }
        protected getDialogType() { return UserHierarchyDialog; }
        protected getIdProperty() { return UserHierarchyRow.idProperty; }
        protected getInsertPermission() { return UserHierarchyRow.insertPermission; }
        protected getLocalTextPrefix() { return UserHierarchyRow.localTextPrefix; }
        protected getService() { return UserHierarchyService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}

namespace SerExtraCore.Administration {

    @Serenity.Decorators.registerClass()
    export class CustomLookupsGrid extends Serenity.EntityGrid<CustomLookupsRow, any> {
        protected getColumnsKey() { return 'Administration.CustomLookups'; }
        protected getDialogType() { return CustomLookupsDialog; }
        protected getIdProperty() { return CustomLookupsRow.idProperty; }
        protected getInsertPermission() { return CustomLookupsRow.insertPermission; }
        protected getLocalTextPrefix() { return CustomLookupsRow.localTextPrefix; }
        protected getService() { return CustomLookupsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
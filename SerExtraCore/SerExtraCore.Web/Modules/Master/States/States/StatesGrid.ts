
namespace SerExtraCore.States {

    @Serenity.Decorators.registerClass()
    export class StatesGrid extends Serenity.EntityGrid<StatesRow, any> {
        protected getColumnsKey() { return 'States.States'; }
        protected getDialogType() { return StatesDialog; }
        protected getIdProperty() { return StatesRow.idProperty; }
        protected getInsertPermission() { return StatesRow.insertPermission; }
        protected getLocalTextPrefix() { return StatesRow.localTextPrefix; }
        protected getService() { return StatesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
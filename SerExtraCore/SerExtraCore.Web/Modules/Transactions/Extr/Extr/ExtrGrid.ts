
namespace SerExtraCore.Extr {

    @Serenity.Decorators.registerClass()
    export class ExtrGrid extends Serenity.EntityGrid<ExtrRow, any> {
        protected getColumnsKey() { return 'Extr.Extr'; }
        protected getDialogType() { return ExtrDialog; }
        protected getIdProperty() { return ExtrRow.idProperty; }
        protected getInsertPermission() { return ExtrRow.insertPermission; }
        protected getLocalTextPrefix() { return ExtrRow.localTextPrefix; }
        protected getService() { return ExtrService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
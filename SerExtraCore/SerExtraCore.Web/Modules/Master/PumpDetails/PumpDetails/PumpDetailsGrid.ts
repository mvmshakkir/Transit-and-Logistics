
namespace SerExtraCore.PumpDetails {

    @Serenity.Decorators.registerClass()
    export class PumpDetailsGrid extends Serenity.EntityGrid<PumpDetailsRow, any> {
        protected getColumnsKey() { return 'PumpDetails.PumpDetails'; }
        protected getDialogType() { return PumpDetailsDialog; }
        protected getIdProperty() { return PumpDetailsRow.idProperty; }
        protected getInsertPermission() { return PumpDetailsRow.insertPermission; }
        protected getLocalTextPrefix() { return PumpDetailsRow.localTextPrefix; }
        protected getService() { return PumpDetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
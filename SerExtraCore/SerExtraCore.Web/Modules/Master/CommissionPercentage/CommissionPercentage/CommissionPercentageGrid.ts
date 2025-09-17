
namespace SerExtraCore.CommissionPercentage {

    @Serenity.Decorators.registerClass()
    export class CommissionPercentageGrid extends Serenity.EntityGrid<CommissionPercentageRow, any> {
        protected getColumnsKey() { return 'CommissionPercentage.CommissionPercentage'; }
        protected getDialogType() { return CommissionPercentageDialog; }
        protected getIdProperty() { return CommissionPercentageRow.idProperty; }
        protected getInsertPermission() { return CommissionPercentageRow.insertPermission; }
        protected getLocalTextPrefix() { return CommissionPercentageRow.localTextPrefix; }
        protected getService() { return CommissionPercentageService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
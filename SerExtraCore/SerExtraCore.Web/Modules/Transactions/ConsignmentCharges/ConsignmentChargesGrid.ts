
namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    export class ConsignmentChargesGrid extends Serenity.EntityGrid<ConsignmentChargesRow, any> {
        protected getColumnsKey() { return 'Transactions.ConsignmentCharges'; }
        protected getDialogType() { return ConsignmentChargesDialog; }
        protected getIdProperty() { return ConsignmentChargesRow.idProperty; }
        protected getInsertPermission() { return ConsignmentChargesRow.insertPermission; }
        protected getLocalTextPrefix() { return ConsignmentChargesRow.localTextPrefix; }
        protected getService() { return ConsignmentChargesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
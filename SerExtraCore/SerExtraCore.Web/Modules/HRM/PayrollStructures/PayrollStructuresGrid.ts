
namespace SerExtraCore.HRM {

    @Serenity.Decorators.registerClass()
    export class PayrollStructuresGrid extends Serenity.EntityGrid<PayrollStructuresRow, any> {
        protected getColumnsKey() { return 'HRM.PayrollStructures'; }
        protected getDialogType() { return PayrollStructuresDialog; }
        protected getIdProperty() { return PayrollStructuresRow.idProperty; }
        protected getInsertPermission() { return PayrollStructuresRow.insertPermission; }
        protected getLocalTextPrefix() { return PayrollStructuresRow.localTextPrefix; }
        protected getService() { return PayrollStructuresService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
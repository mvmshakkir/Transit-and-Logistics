
namespace SerExtraCore.HRM {

    @Serenity.Decorators.registerClass()
    export class PayrollPaymentGrid extends Serenity.EntityGrid<PayrollPaymentRow, any> {
        protected getColumnsKey() { return 'HRM.PayrollPayment'; }
        protected getDialogType() { return PayrollPaymentDialog; }
        protected getIdProperty() { return PayrollPaymentRow.idProperty; }
        protected getInsertPermission() { return PayrollPaymentRow.insertPermission; }
        protected getLocalTextPrefix() { return PayrollPaymentRow.localTextPrefix; }
        protected getService() { return PayrollPaymentService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
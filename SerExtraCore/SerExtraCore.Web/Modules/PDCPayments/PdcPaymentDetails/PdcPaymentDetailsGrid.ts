
namespace SerExtraCore.PDCPayments {

    @Serenity.Decorators.registerClass()
    export class PdcPaymentDetailsGrid extends Serenity.EntityGrid<PdcPaymentDetailsRow, any> {
        protected getColumnsKey() { return 'PDCPayments.PdcPaymentDetails'; }
        protected getDialogType() { return PdcPaymentDetailsDialog; }
        protected getIdProperty() { return PdcPaymentDetailsRow.idProperty; }
        protected getInsertPermission() { return PdcPaymentDetailsRow.insertPermission; }
        protected getLocalTextPrefix() { return PdcPaymentDetailsRow.localTextPrefix; }
        protected getService() { return PdcPaymentDetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
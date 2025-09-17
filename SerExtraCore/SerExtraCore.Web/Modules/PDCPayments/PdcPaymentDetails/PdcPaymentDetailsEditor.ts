/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace SerExtraCore.PDCPayments {

    @Serenity.Decorators.registerClass()
    export class PdcPaymentDetailsEditor extends Common.GridEditorBase<PdcPaymentDetailsRow> {
        protected getColumnsKey() { return "PDCPayments.PdcPaymentDetails"; }
        protected getDialogType() { return PdcPaymentDetailsDialog; }
        protected getLocalTextPrefix() { return PdcPaymentDetailsRow.localTextPrefix; }
        public type: number;

        constructor(container: JQuery) {
            super(container);
        }

        validateEntity(row, id) {
            //row.ProductID = Q.toId(row.ProductID);

            //var sameProduct = Q.tryFirst(this.view.getItems(), x => x.ProductID === row.ProductID);
            //if (sameProduct && this.id(sameProduct) !== id) {
            //    Q.alert('This product is already in order details!');
            //    return false;
            //}

            //row.ChargeChargeName = Master.ChargesRow.getLookup().itemById[row.ChargeId].ChargeName;
            //row.CurrencyCurrencyCode = Master.CurrenciesRow.getLookup().itemById[row.CurrencyId].CurrencyCode;
            //row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
            return true;
        }
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>) {
            super.initEntityDialog(itemType, dialog);

            // passing category ID from grid editor to detail dialog
            (dialog as PdcPaymentDetailsDialog).type = this.type;
        }

    }
}
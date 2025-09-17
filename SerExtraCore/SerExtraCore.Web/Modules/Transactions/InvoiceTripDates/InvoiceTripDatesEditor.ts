/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    export class InvoiceTripDatesEditor extends Common.GridEditorBase<InvoiceTripDatesRow> {
        protected getColumnsKey() { return "Transactions.InvoiceTripDates"; }
        protected getDialogType() { return InvoiceTripDatesDialog; }
        protected getLocalTextPrefix() { return InvoiceTripDatesRow.localTextPrefix; }

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
    }
}
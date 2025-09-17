/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    export class InvoiceChargeEditor extends Common.GridEditorBase<InvoiceChargesRow> {
        protected getColumnsKey() { return "Transactions.InvoiceCharges"; }
        protected getDialogType() { return InvoiceChargesDialog; }
        protected getLocalTextPrefix() { return InvoiceChargesRow.localTextPrefix; }

        public hidesupppieradvance: boolean; 
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

            row.ChargeChargeName = Master.ChargesRow.getLookup().itemById[row.ChargeId].ChargeName;
            row.CurrencyCurrencyCode = Master.CurrenciesRow.getLookup().itemById[row.CurrencyId].CurrencyCode;
            //row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
            return true;
        }
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>) {
            super.initEntityDialog(itemType, dialog);

            // passing codeComite from grid editor to detail dialog
            (dialog as InvoiceChargesDialog).hidesupppieradvance = this.hidesupppieradvance;
        }
    }
}
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    export class InvoiceCollectonDetailsEditor extends Common.GridEditorBase<InvoiceCollectionDetailsRow> {
        protected getColumnsKey() { return "Transactions.InvoiceCollectionDetails"; }
        protected getDialogType() { return InvoiceCollectionDetailsDialog; }
        protected getLocalTextPrefix() { return InvoiceCollectionDetailsRow.localTextPrefix; }
        public customerid: number;
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

            row.InvoiceInvoiceNo = Transactions.InvoiceRow.getLookup().itemById[row.InvoiceId].InvoiceNo;
            //row.CurrencyCurrencyCode = Master.CurrenciesRow.getLookup().itemById[row.CurrencyId].CurrencyCode;
            //row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
            return true;
        }
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>) {
            super.initEntityDialog(itemType, dialog);

            // passing codeComite from grid editor to detail dialog
            (dialog as InvoiceCollectionDetailsDialog).customerid = this.customerid;
        }
    }
}
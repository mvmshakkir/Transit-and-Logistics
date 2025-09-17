/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    export class PurchaseDetailsEditor extends Common.GridEditorBase<PurchaseDetailsRow> {
        protected getColumnsKey() { return "Transactions.PurchaseDetails"; }
        protected getDialogType() { return PurchaseDetailsDialog; }
        protected getLocalTextPrefix() { return PurchaseDetailsRow.localTextPrefix; }

       
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

            var k = Master.ProductsRow.getLookup().itemById[row.ProductId];
            row.ProductProductCode = k.ProductCode;
            row.ProductProductName = k.ProductName;
           
            //row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
            return true;
        }
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>) {
            super.initEntityDialog(itemType, dialog);

            // passing codeComite from grid editor to detail dialog
            //(dialog as InvoiceChargesDialog).hidesupppieradvance = this.hidesupppieradvance;
        }
    }
}
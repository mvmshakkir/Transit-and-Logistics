/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    export class DeliveryServiceDetailsEditor extends Common.GridEditorBase<DeliveryServiceDetailsRow> {
        protected getColumnsKey() { return "Transactions.DeliveryServiceDetails"; }
        protected getDialogType() { return DeliveryServiceDetailsDialog; }
        protected getLocalTextPrefix() { return DeliveryServiceDetailsRow.localTextPrefix; }

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

           
           
            
            //row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
            return true;
        }
    }
}
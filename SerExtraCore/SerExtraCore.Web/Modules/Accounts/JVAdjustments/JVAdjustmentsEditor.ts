/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace SerExtraCore.Accounts {

    @Serenity.Decorators.registerClass()
    export class JVAdjustmentsEditor extends Common.GridEditorBase<JVAdjustmentsRow> {
        protected getColumnsKey() { return "Accounts.JVAdjustments"; }
        protected getDialogType() { return JVAdjustmentsDialog; }
        protected getLocalTextPrefix() { return JVAdjustmentsRow.localTextPrefix; }

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
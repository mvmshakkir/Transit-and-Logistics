
//namespace SerExtraCore.Crossing {

//    @Serenity.Decorators.registerClass()
//    export class CrossingDialog extends Serenity.EntityDialog<CrossingRow, any> {
//        protected getFormKey() { return CrossingForm.formKey; }
//        protected getIdProperty() { return CrossingRow.idProperty; }
//        protected getLocalTextPrefix() { return CrossingRow.localTextPrefix; }
//        protected getNameProperty() { return CrossingRow.nameProperty; }
//        protected getService() { return CrossingService.baseUrl; }
//        protected getDeletePermission() { return CrossingRow.deletePermission; }
//        protected getInsertPermission() { return CrossingRow.insertPermission; }
//        protected getUpdatePermission() { return CrossingRow.updatePermission; }

//        protected form = new CrossingForm(this.idPrefix);

//    }
//}
namespace SerExtraCore.Crossing {

    @Serenity.Decorators.registerClass()
    export class CrossingDialog extends Common.GridEditorDialog<CrossingRow> {
        protected getFormKey() { return CrossingForm.formKey; }
        protected getLocalTextPrefix() { return CrossingRow.localTextPrefix; }

        protected form = new CrossingForm(this.idPrefix);

        constructor() {
            super();

            this.form = new CrossingForm(this.idPrefix);

            //    // Subscribe to changes in Qty and LiterRate
            //    this.form.Qty.change(e => {
            //        this.updateTotalAmt();
            //    });

            //    this.form.LiterRate.change(e => {
            //        this.updateTotalAmt();
            //    });
            //}

            //private updateTotalAmt() {
            //    const qty = this.form.Qty.value;
            //    const literRate = this.form.LiterRate.value;

            //    // Check if both Qty and LiterRate have values
            //    if (qty !== null && literRate !== null) {
            //        this.form.TotalAmt.value = qty * literRate;
            //    }
            //}
        }
    }
}
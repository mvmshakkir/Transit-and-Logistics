namespace SerExtraCore.Extr {

    @Serenity.Decorators.registerClass()
    export class ExtrDialog extends Common.GridEditorDialog<ExtrRow> {
        protected getFormKey() { return ExtrForm.formKey; }
        protected getLocalTextPrefix() { return ExtrRow.localTextPrefix; }

        protected form = new ExtrForm(this.idPrefix);

        constructor() {
            super();

            this.form = new ExtrForm(this.idPrefix);

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
namespace SerExtraCore.FuelDetails {

    @Serenity.Decorators.registerClass()
   // @Serenity.Decorators.panel()
    export class FuelDetailsDialog extends Common.GridEditorDialog<FuelDetailsRow> {
        protected getFormKey() { return FuelDetailsForm.formKey; }
        protected getLocalTextPrefix() { return FuelDetailsRow.localTextPrefix; }

        protected form = new FuelDetailsForm(this.idPrefix);

        constructor() {
            super();

            this.form = new FuelDetailsForm(this.idPrefix);

            // Subscribe to changes in Qty and LiterRate
            this.form.Qty.change(e => {
                this.updateTotalAmt();
                this.updatepayment();
            });

            this.form.LiterRate.change(e => {
                this.updateTotalAmt();
            });
        }
        protected afterLoadEntity() {
            super.afterLoadEntity();
            


        }
        private updatepayment() {
            const a = this.form.TsId.value;
        }

      

        private updateTotalAmt() {
            const qty = this.form.Qty.value;
            const literRate = this.form.LiterRate.value;
            
            // Check if both Qty and LiterRate have values
            if (qty !== null && literRate !== null) {
                this.form.TotalAmt.value = qty * literRate;
            }

            
        }
        
    }
}

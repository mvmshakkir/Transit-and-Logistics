
namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    export class PurchaseDetailsDialog extends Common.GridEditorDialog<PurchaseDetailsRow> {
        protected getFormKey() { return PurchaseDetailsForm.formKey; }
       // protected getIdProperty() { return PurchaseDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return PurchaseDetailsRow.localTextPrefix; }
        //protected getService() { return PurchaseDetailsService.baseUrl; }
        //protected getDeletePermission() { return PurchaseDetailsRow.deletePermission; }
        //protected getInsertPermission() { return PurchaseDetailsRow.insertPermission; }
        //protected getUpdatePermission() { return PurchaseDetailsRow.updatePermission; }

        protected form: PurchaseDetailsForm;
        constructor() {
            super();
            this.form = new PurchaseDetailsForm(this.idPrefix);
        }
        protected afterLoadEntity() {
            super.afterLoadEntity();

            this.form.ProductId.changeSelect2(e => {
                var productID = Q.toId(this.form.ProductId.value);
                if (productID != null) {
                    var x = Master.ProductsRow.getLookup().itemById[productID];
                    this.form.UnitPrice.value = x.UnitPrice;

                    this.CalculateTotal();
                }
            });


            this.form.UnitPrice.change(e => {
                this.CalculateTotal();
            });
            this.form.Quantity.change(e => {
                this.CalculateTotal();
            });
            this.form.DisPer.change(e => {
                this.CalculateTotal();
            });
            this.form.TaxPer.change(e => {
                this.CalculateTotal();
            });
        }
        private CalculateTotal() {
            var amount = this.form.UnitPrice.value * this.form.Quantity.value;

            var disper = 0;
            if (this.form.DisPer.value != null) {
                disper = this.form.DisPer.value;
            }
            var disamount = (amount * disper) / 100;

            var taxableamount = amount - disamount;

            var taxper = 0;
            if (this.form.TaxPer.value != null) {
                taxper = this.form.TaxPer.value;
            }
            
            var taxamount = (taxableamount * taxper) / 100;

            var linetotal = taxableamount + taxamount;

            this.form.TotalAmount.value = amount;
            this.form.DisAmount.value = disamount;
            this.form.TaxableAmount.value = taxableamount;
            this.form.TaxAmount.value = taxamount;

            this.form.LineTotal.value = linetotal;



          
        }
    }
}
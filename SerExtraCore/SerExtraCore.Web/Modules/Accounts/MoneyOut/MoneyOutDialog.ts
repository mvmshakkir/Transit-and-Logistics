
namespace SerExtraCore.Accounts {

    @Serenity.Decorators.registerClass()
    export class MoneyOutDialog extends Serenity.EntityDialog<MoneyOutRow, any> {
        protected getFormKey() { return MoneyOutForm.formKey; }
        protected getIdProperty() { return MoneyOutRow.idProperty; }
        protected getLocalTextPrefix() { return MoneyOutRow.localTextPrefix; }
        protected getNameProperty() { return MoneyOutRow.nameProperty; }
        protected getService() { return MoneyOutService.baseUrl; }
        protected getDeletePermission() { return MoneyOutRow.deletePermission; }
        protected getInsertPermission() { return MoneyOutRow.insertPermission; }
        protected getUpdatePermission() { return MoneyOutRow.updatePermission; }
    


   protected form = new MoneyOutForm(this.idPrefix); 

        constructor() {
            super();

            this.form = new MoneyOutForm(this.idPrefix);


        }
        private getNextNumber() {


            Accounts.CommonService.GetVoucherNo({
                vouchertype: 2
            }, response => {
                this.form.VNo.value = response.voucherno.toString();


            });
        }
        protected afterLoadEntity() {
            super.afterLoadEntity();
            if (this.isNew())
                this.getNextNumber();
            this.form.Amount.change(e => {
                this.CalculateTotal();
            });
            this.form.TaxPer.change(e => {
                this.CalculateTotal();
            });
            this.form.TaxAmount.change(e => {

                var taxmount = 0;
                var amount = 0;
                if (this.form.TaxAmount.value != null) {
                    taxmount = this.form.TaxAmount.value;
                }
                if (this.form.Amount.value != null) {
                    amount = this.form.Amount.value;
                }
                if (amount > 0) {

                    var taxper = taxmount * 100 / (amount);
                    this.form.TaxPer.value = taxper;
                }
                else {
                    this.form.TaxPer.value = null;
                }

                this.CalculateTotal();
            });
           
        }
       
        private CalculateTotal() {

            var taxable = this.form.Amount.value;
            var taxper = 0;
            if (this.form.TaxPer.value != null) {
                taxper = this.form.TaxPer.value;
            }
            var taxamount = (taxable * taxper) / 100;
            var totalamount = taxable + taxamount;
            this.form.TotalAmount.value = totalamount;
            this.form.TaxAmount.value = taxamount;
        }
    }
}

namespace SerExtraCore.Accounts {

    @Serenity.Decorators.registerClass()
    export class MoneyInDialog extends Serenity.EntityDialog<MoneyInRow, any> {
        protected getFormKey() { return MoneyInForm.formKey; }
        protected getIdProperty() { return MoneyInRow.idProperty; }
        protected getLocalTextPrefix() { return MoneyInRow.localTextPrefix; }
        protected getNameProperty() { return MoneyInRow.nameProperty; }
        protected getService() { return MoneyInService.baseUrl; }
        protected getDeletePermission() { return MoneyInRow.deletePermission; }
        protected getInsertPermission() { return MoneyInRow.insertPermission; }
        protected getUpdatePermission() { return MoneyInRow.updatePermission; }

        protected form = new MoneyInForm(this.idPrefix);
        constructor() {
            super();

            this.form = new MoneyInForm(this.idPrefix);


        }
        private getNextNumber() {


            Accounts.CommonService.GetVoucherNo({
                vouchertype: 1
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

                    var taxper = taxmount*100 / (amount);
                    this.form.TaxPer.value = taxper;
                }
                else {
                    this.form.TaxPer.value = null;
                }

                this.CalculateTotal();
            });
            //this.form.PaymentMethod.changeSelect2(e => {
            //    this.setvisible();
            //});
            //this.setvisible();
        }
        //private setvisible() {
        //    var productID = Q.toId(this.form.PaymentMethod.value);
        //    if (productID != null) {

        //        if (productID == 3) {
        //            this.form.AccountId.element.toggleClass("required", false);
        //            this.element.find(".AccountId").hide();
        //            this.element.find(".PdcPaymentDetails").show();
        //        }
        //        else {
        //            this.form.AccountId.element.toggleClass("required", true);
        //            this.element.find(".AccountId").show();
        //            this.element.find(".PdcPaymentDetails").hide();
        //        }

        //    }
        //    else {
        //        this.element.find(".AccountId").hide();
        //        this.element.find(".PdcPaymentDetails").hide();
        //    }
        //}
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
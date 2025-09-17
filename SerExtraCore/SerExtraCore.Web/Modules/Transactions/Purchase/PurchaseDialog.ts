
namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    export class PurchaseDialog extends Serenity.EntityDialog<PurchaseRow, any> {
        protected getFormKey() { return PurchaseForm.formKey; }
        protected getIdProperty() { return PurchaseRow.idProperty; }
        protected getLocalTextPrefix() { return PurchaseRow.localTextPrefix; }
        protected getNameProperty() { return PurchaseRow.nameProperty; }
        protected getService() { return PurchaseService.baseUrl; }
        protected getDeletePermission() { return PurchaseRow.deletePermission; }
        protected getInsertPermission() { return PurchaseRow.insertPermission; }
        protected getUpdatePermission() { return PurchaseRow.updatePermission; }

        protected form = new PurchaseForm(this.idPrefix);
     
        constructor() {
            super();
            this.form = new PurchaseForm(this.idPrefix);
        }
        protected afterLoadEntity() {
            super.afterLoadEntity();


            (this.form.PurchaseDetails.view as any).onDataChanged.subscribe(() => {
                var total = 0;
                for (var k of this.form.PurchaseDetails.getItems()) {

                    total += k.LineTotal || 0;


                }

                this.form.TotalAmount.value = total;
                this.setpaidamount();
            });
            (this.form.PurchaseDetails.view as any).onRowCountChanged.subscribe(() => {
                var total = 0;
                for (var k of this.form.PurchaseDetails.getItems()) {

                    total += k.LineTotal || 0;


                }

                this.form.TotalAmount.value = total;
                this.setpaidamount();
            });
            this.form.PaymentType.changeSelect2(e => {
                this.setvisible();
            });

            this.form.PaymentMode.changeSelect2(e => {
                this.setpaidamount();
            });
            this.form.PaidAmount.changeSelect2(e => {
                this.setpaidamount();
            });
            this.setpaidamount();
            this.setpaymentmode();
            this.setvisible();

        }
        private setpaidamount() {
            var productID = Q.toId(this.form.PaymentMode.value);
            if (productID == 1) {
                this.form.PaidAmount.value = this.form.TotalAmount.value;
                Serenity.EditorUtils.setReadonly(this.form.PaidAmount.element, true);
            }
            else {
                Serenity.EditorUtils.setReadonly(this.form.PaidAmount.element, false);
            }
            this.setpaymentmode();
        }
        private setpaymentmode() {
            var productID = this.form.PaidAmount.value;
            if (productID == null) {
                productID = 0;
            }
            if (productID > 0) {
                this.form.PaymentType.element.toggleClass("required", true);
            } else {
                this.form.PaymentType.element.toggleClass("required", false);
            }
            this.setvisible();
        }
        private setvisible() {
            var productID = Q.toId(this.form.PaymentType.value);
            if (productID != null) {

                if (productID == 3) {
                    this.form.AccountId.element.toggleClass("required", false);
                    this.element.find(".AccountId").hide();
                    this.element.find(".PdcPaymentDetails").show();
                }
                else {
                    this.form.AccountId.element.toggleClass("required", true);
                    this.element.find(".AccountId").show();
                    this.element.find(".PdcPaymentDetails").hide();
                }

            }
            else {
                this.element.find(".AccountId").hide();
                this.element.find(".PdcPaymentDetails").hide();
            }
        }
    }
}
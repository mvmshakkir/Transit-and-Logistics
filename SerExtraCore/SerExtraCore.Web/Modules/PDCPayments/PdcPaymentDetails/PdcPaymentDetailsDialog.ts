
namespace SerExtraCore.PDCPayments {

    @Serenity.Decorators.registerClass()
    export class PdcPaymentDetailsDialog extends Common.GridEditorDialog<PdcPaymentDetailsRow> {
        protected getFormKey() { return PdcPaymentDetailsForm.formKey; }
       // protected getIdProperty() { return PdcPaymentDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return PdcPaymentDetailsRow.localTextPrefix; }
        //protected getNameProperty() { return PdcPaymentDetailsRow.nameProperty; }
        //protected getService() { return PdcPaymentDetailsService.baseUrl; }
        //protected getDeletePermission() { return PdcPaymentDetailsRow.deletePermission; }
        //protected getInsertPermission() { return PdcPaymentDetailsRow.insertPermission; }
        //protected getUpdatePermission() { return PdcPaymentDetailsRow.updatePermission; }

        protected form: PdcPaymentDetailsForm;
        constructor() {
            super();

            this.form = new PdcPaymentDetailsForm(this.idPrefix);


        }
        protected afterLoadEntity() {

            super.afterLoadEntity();
            this.accountreq();
            this.form.ChequeStatus.changeSelect2(e => {

                this.accountreq();

            });
            if (this.type > 0) {
                this.form.ChequeType.value = this.type.toString();
                this.form.ChequeType.readOnly = true;
            }
        }
        private accountreq() {
            var Payment = Q.toId(this.form.ChequeStatus.value);
            if (Payment != null) {
                if (Payment == 1) {
                    this.form.StatusDate.element.toggleClass("required", false);
                }
                else {
                    this.form.StatusDate.element.toggleClass("required", true);
                }
                if (Payment == 2) {
                    this.form.AccountId.element.closest('.category').toggle(true);
                    this.form.AccountId.element.toggleClass("required", true);
                    this.form.PaymentType.element.toggleClass("required", true);
                }
                else {
                    this.form.AccountId.element.closest('.category').toggle(false);
                }

            }
            else {
                this.form.AccountId.element.closest('.category').toggle(false);
                this.form.StatusDate.element.toggleClass("required", true);
            }
        }
        public type: number;
    }
}
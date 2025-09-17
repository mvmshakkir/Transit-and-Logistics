
namespace SerExtraCore.Accounts {

    @Serenity.Decorators.registerClass()
    export class PaymentDialog extends Serenity.EntityDialog<PaymentRow, any> {
        protected getFormKey() { return PaymentForm.formKey; }
        protected getIdProperty() { return PaymentRow.idProperty; }
        protected getLocalTextPrefix() { return PaymentRow.localTextPrefix; }
        protected getNameProperty() { return PaymentRow.nameProperty; }
        protected getService() { return PaymentService.baseUrl; }
        protected getDeletePermission() { return PaymentRow.deletePermission; }
        protected getInsertPermission() { return PaymentRow.insertPermission; }
        protected getUpdatePermission() { return PaymentRow.updatePermission; }

        protected form = new PaymentForm(this.idPrefix);
        protected afterLoadEntity() {
            super.afterLoadEntity();

            // fill next number in new record mode
            if (this.isNew())
                this.getNextNumber();

            if (this.entity.SupplierPaymentId > 0 || this.entity.ConsignmentVehicleDetailsId > 0 || this.entity.PurchaseId > 0 || this.entity.PDCPaymentDetailsId > 0 || this.entity.ConsignmentChargesId > 0 || this.entity.PayrollPaymentId > 0) {
                this.readOnly = true;
            }
        }
        private getNextNumber() {


            Accounts.CommonService.GetTrxNo({
                vouchertype: 2
            }, response => {
                this.form.VNo.value = response.voucherno;


            });
        }

    }
}
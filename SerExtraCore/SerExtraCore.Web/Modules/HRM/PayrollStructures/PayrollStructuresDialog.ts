
namespace SerExtraCore.HRM {

    @Serenity.Decorators.registerClass()
    export class PayrollStructuresDialog extends Serenity.EntityDialog<PayrollStructuresRow, any> {
        protected getFormKey() { return PayrollStructuresForm.formKey; }
        protected getIdProperty() { return PayrollStructuresRow.idProperty; }
        protected getLocalTextPrefix() { return PayrollStructuresRow.localTextPrefix; }
        protected getNameProperty() { return PayrollStructuresRow.nameProperty; }
        protected getService() { return PayrollStructuresService.baseUrl; }
        protected getDeletePermission() { return PayrollStructuresRow.deletePermission; }
        protected getInsertPermission() { return PayrollStructuresRow.insertPermission; }
        protected getUpdatePermission() { return PayrollStructuresRow.updatePermission; }

        protected form = new PayrollStructuresForm(this.idPrefix);
        protected afterLoadEntity() {
            super.afterLoadEntity();
            this.form.PayrollPayment.payments = this.form.PayrollPayment.value;

            

            (this.form.PayrollPayment.view as any).onDataChanged.subscribe(() => {
                this.form.PayrollPayment.payments = this.form.PayrollPayment.value;
            });
            (this.form.PayrollPayment.view as any).onRowCountChanged.subscribe(() => {
                this.form.PayrollPayment.payments = this.form.PayrollPayment.value;
            });
        }
    }
}
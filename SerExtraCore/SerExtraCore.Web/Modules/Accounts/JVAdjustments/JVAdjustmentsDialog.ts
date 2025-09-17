
namespace SerExtraCore.Accounts {

    @Serenity.Decorators.registerClass()
    export class JVAdjustmentsDialog extends Serenity.EntityDialog<JVAdjustmentsRow, any> {
        protected getFormKey() { return JVAdjustmentsForm.formKey; }
        protected getIdProperty() { return JVAdjustmentsRow.idProperty; }
        protected getLocalTextPrefix() { return JVAdjustmentsRow.localTextPrefix; }
        protected getNameProperty() { return JVAdjustmentsRow.nameProperty; }
        protected getService() { return JVAdjustmentsService.baseUrl; }
        protected getDeletePermission() { return JVAdjustmentsRow.deletePermission; }
        protected getInsertPermission() { return JVAdjustmentsRow.insertPermission; }
        protected getUpdatePermission() { return JVAdjustmentsRow.updatePermission; }

        protected form = new JVAdjustmentsForm(this.idPrefix);
        protected afterLoadEntity() {
            super.afterLoadEntity();

            // fill next number in new record mode
            if (this.isNew())
                this.getNextNumber();

            if (this.entity.SupplierPaymentId > 0 || this.entity.OpeningCustomerId > 0 || this.entity.OpeningSupplierId > 0 || this.entity.FreightId >0) {
                this.readOnly = true;
            }
            
        }
        private getNextNumber() {


            Accounts.CommonService.GetTrxNo({
                vouchertype: 4
            }, response => {
                this.form.VNo.value = response.voucherno;


            });
        }
    }
}
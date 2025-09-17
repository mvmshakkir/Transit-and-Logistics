
namespace SerExtraCore.Accounts {

    @Serenity.Decorators.registerClass()
    export class ReceiptDialog extends Serenity.EntityDialog<ReceiptRow, any> {
        protected getFormKey() { return ReceiptForm.formKey; }
        protected getIdProperty() { return ReceiptRow.idProperty; }
        protected getLocalTextPrefix() { return ReceiptRow.localTextPrefix; }
        protected getNameProperty() { return ReceiptRow.nameProperty; }
        protected getService() { return ReceiptService.baseUrl; }
        protected getDeletePermission() { return ReceiptRow.deletePermission; }
        protected getInsertPermission() { return ReceiptRow.insertPermission; }
        protected getUpdatePermission() { return ReceiptRow.updatePermission; }

        protected form = new ReceiptForm(this.idPrefix);
        protected afterLoadEntity() {
            super.afterLoadEntity();

            // fill next number in new record mode
            if (this.isNew())
                this.getNextNumber();
            if (this.entity.InvoiceCollectionId > 0 || this.entity.PDCPaymentDetailsId > 0 || this.entity.PDCReceiptDetailsId > 0) {
                this.readOnly = true;
            }
        }
        private getNextNumber() {


            Accounts.CommonService.GetTrxNo({
                vouchertype: 1
            }, response => {
                this.form.VNo.value = response.voucherno;


            });
        }
    }
}
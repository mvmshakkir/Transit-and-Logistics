
namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    export class SuppliersPaymentInvoicesDialog extends Serenity.EntityDialog<SuppliersPaymentInvoicesRow, any> {
        protected getFormKey() { return SuppliersPaymentInvoicesForm.formKey; }
        protected getIdProperty() { return SuppliersPaymentInvoicesRow.idProperty; }
        protected getLocalTextPrefix() { return SuppliersPaymentInvoicesRow.localTextPrefix; }
        protected getService() { return SuppliersPaymentInvoicesService.baseUrl; }
        protected getDeletePermission() { return SuppliersPaymentInvoicesRow.deletePermission; }
        protected getInsertPermission() { return SuppliersPaymentInvoicesRow.insertPermission; }
        protected getUpdatePermission() { return SuppliersPaymentInvoicesRow.updatePermission; }

        protected form = new SuppliersPaymentInvoicesForm(this.idPrefix);

    }
}
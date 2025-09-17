
namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    export class SuppliersPaymentInvoiceChargesDialog extends Common.GridEditorDialog<SuppliersPaymentInvoiceChargesRow> {
        protected getFormKey() { return SuppliersPaymentInvoiceChargesForm.formKey; }
        //protected getIdProperty() { return SuppliersPaymentInvoiceChargesRow.idProperty; }
        protected getLocalTextPrefix() { return SuppliersPaymentInvoiceChargesRow.localTextPrefix; }
        //protected getService() { return SuppliersPaymentInvoiceChargesService.baseUrl; }
        //protected getDeletePermission() { return SuppliersPaymentInvoiceChargesRow.deletePermission; }
        //protected getInsertPermission() { return SuppliersPaymentInvoiceChargesRow.insertPermission; }
        //protected getUpdatePermission() { return SuppliersPaymentInvoiceChargesRow.updatePermission; }

        protected form : SuppliersPaymentInvoiceChargesForm;

        constructor() {
            super();

            this.form = new SuppliersPaymentInvoiceChargesForm(this.idPrefix);
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

          

            var InvoiceChargesId = this.form.InvoiceChargesId.value;
            this.form.InvoiceChargesId.cascadeField = "SupplierId";
            this.form.InvoiceChargesId.cascadeValue = this.supplierid ?? 0;
           

            if (Q.toId(InvoiceChargesId) > 0) {
                this.form.InvoiceChargesId.items = this.form.InvoiceChargesId.items.filter(i => i.source.SupplierPaymentStatus == "1" || i.id == InvoiceChargesId);
            }
            else {
                this.form.InvoiceChargesId.filterField = "SupplierPaymentStatus";
                this.form.InvoiceChargesId.filterValue = 1;
                
            }
            this.form.InvoiceChargesId.value = InvoiceChargesId;
            this.form.InvoiceChargesId.changeSelect2(e => {
                var productID = Q.toId(this.form.InvoiceChargesId.value);
                if (productID != null) {

                    Accounts.CommonService.GetInvoiceVehicleChargesBalance({
                        InvoiceVehicleChargesId: productID
                    }, response => {
                        this.form.Amount.value = response.Balance;
                    });

                }
            });

        }

        public supplierid: number;
    }
}

namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    export class SuppliersPaymentInvoiceVehicleDetailsDialog extends Common.GridEditorDialog<SuppliersPaymentInvoiceVehicleDetailsRow> {
        protected getFormKey() { return SuppliersPaymentInvoiceVehicleDetailsForm.formKey; }
        //protected getIdProperty() { return SuppliersPaymentInvoiceVehicleDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return SuppliersPaymentInvoiceVehicleDetailsRow.localTextPrefix; }
        //protected getService() { return SuppliersPaymentInvoiceVehicleDetailsService.baseUrl; }
        //protected getDeletePermission() { return SuppliersPaymentInvoiceVehicleDetailsRow.deletePermission; }
        //protected getInsertPermission() { return SuppliersPaymentInvoiceVehicleDetailsRow.insertPermission; }
        //protected getUpdatePermission() { return SuppliersPaymentInvoiceVehicleDetailsRow.updatePermission; }
        

        protected form: SuppliersPaymentInvoiceVehicleDetailsForm;

        constructor() {
            super();

            this.form = new SuppliersPaymentInvoiceVehicleDetailsForm(this.idPrefix);
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

            
            var InvoiceVehicleDetailId = this.form.InvoiceVehicleDetailId.value;
            this.form.InvoiceVehicleDetailId.cascadeField = "SupplierId";
            this.form.InvoiceVehicleDetailId.cascadeValue = this.supplierid ?? 0;

            if (Q.toId(InvoiceVehicleDetailId) > 0) {
                this.form.InvoiceVehicleDetailId.items = this.form.InvoiceVehicleDetailId.items.filter(i => i.source.SupplierPaymentStatus == "1" || i.id == InvoiceVehicleDetailId);
            }
            else
            {
                this.form.InvoiceVehicleDetailId.filterField = "SupplierPaymentStatus";
                this.form.InvoiceVehicleDetailId.filterValue = 1;
            }



            this.form.InvoiceVehicleDetailId.value = InvoiceVehicleDetailId;
           

            this.form.InvoiceVehicleDetailId.changeSelect2(e => {
                var productID = Q.toId(this.form.InvoiceVehicleDetailId.value);
                if (productID != null) {
                 
                    Accounts.CommonService.GetInvoiceVehicleDetailsBalance({
                        InvoiceVehicleDetailid: productID
                    }, response => {
                        this.form.Amount.value = response.Balance;
                    });
                }
            });
            
           
        }

        

        public supplierid: number;
    }
}
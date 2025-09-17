
namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    export class DeliveryServiceDetailsDialog extends Common.GridEditorDialog<DeliveryServiceDetailsRow> {
        protected getFormKey() { return DeliveryServiceDetailsForm.formKey; }
       // protected getIdProperty() { return DeliveryServiceDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return DeliveryServiceDetailsRow.localTextPrefix; }
        //protected getNameProperty() { return DeliveryServiceDetailsRow.nameProperty; }
        //protected getService() { return DeliveryServiceDetailsService.baseUrl; }
        //protected getDeletePermission() { return DeliveryServiceDetailsRow.deletePermission; }
        //protected getInsertPermission() { return DeliveryServiceDetailsRow.insertPermission; }
        //protected getUpdatePermission() { return DeliveryServiceDetailsRow.updatePermission; }

        protected form = new DeliveryServiceDetailsForm(this.idPrefix);
        constructor() {
            super();
            this.form = new DeliveryServiceDetailsForm(this.idPrefix);
        }
        protected afterLoadEntity() {
            super.afterLoadEntity();

            this.form.Quantity.change(e => {

                this.totalamount();

            });

            this.form.UnitPrice.change(e => {

                this.totalamount();

            });
        }
        private totalamount() {
            this.form.TotalAmount.value = (this.form.Quantity.value || 0) * (this.form.UnitPrice.value || 0)
        }
    }
}
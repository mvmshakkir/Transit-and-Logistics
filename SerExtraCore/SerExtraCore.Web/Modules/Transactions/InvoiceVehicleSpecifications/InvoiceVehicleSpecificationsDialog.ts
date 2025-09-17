
namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    export class InvoiceVehicleSpecificationsDialog extends Serenity.EntityDialog<InvoiceVehicleSpecificationsRow, any> {
        protected getFormKey() { return InvoiceVehicleSpecificationsForm.formKey; }
        protected getIdProperty() { return InvoiceVehicleSpecificationsRow.idProperty; }
        protected getLocalTextPrefix() { return InvoiceVehicleSpecificationsRow.localTextPrefix; }
        protected getService() { return InvoiceVehicleSpecificationsService.baseUrl; }
        protected getDeletePermission() { return InvoiceVehicleSpecificationsRow.deletePermission; }
        protected getInsertPermission() { return InvoiceVehicleSpecificationsRow.insertPermission; }
        protected getUpdatePermission() { return InvoiceVehicleSpecificationsRow.updatePermission; }

        protected form = new InvoiceVehicleSpecificationsForm(this.idPrefix);

    }
}

namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    export class InvoiceTripDatesDialog extends Common.GridEditorDialog<InvoiceTripDatesRow> {
        protected getFormKey() { return InvoiceTripDatesForm.formKey; }
        protected getIdProperty() { return InvoiceTripDatesRow.idProperty; }
        protected getLocalTextPrefix() { return InvoiceTripDatesRow.localTextPrefix; }
        protected getService() { return InvoiceTripDatesService.baseUrl; }
        protected getDeletePermission() { return InvoiceTripDatesRow.deletePermission; }
        protected getInsertPermission() { return InvoiceTripDatesRow.insertPermission; }
        protected getUpdatePermission() { return InvoiceTripDatesRow.updatePermission; }

        protected form : InvoiceTripDatesForm;

    }
}

namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    export class ConsignmentTripDatesDialog extends Common.GridEditorDialog<ConsignmentTripDatesRow> {
        protected getFormKey() { return ConsignmentTripDatesForm.formKey; }
        protected getIdProperty() { return ConsignmentTripDatesRow.idProperty; }
        protected getLocalTextPrefix() { return ConsignmentTripDatesRow.localTextPrefix; }
        protected getService() { return ConsignmentTripDatesService.baseUrl; }
        protected getDeletePermission() { return ConsignmentTripDatesRow.deletePermission; }
        protected getInsertPermission() { return ConsignmentTripDatesRow.insertPermission; }
        protected getUpdatePermission() { return ConsignmentTripDatesRow.updatePermission; }

        protected form : ConsignmentTripDatesForm;

    }
}
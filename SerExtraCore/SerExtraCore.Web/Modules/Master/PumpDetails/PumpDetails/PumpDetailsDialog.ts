
namespace SerExtraCore.PumpDetails {

    @Serenity.Decorators.registerClass()
    export class PumpDetailsDialog extends Serenity.EntityDialog<PumpDetailsRow, any> {
        protected getFormKey() { return PumpDetailsForm.formKey; }
        protected getIdProperty() { return PumpDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return PumpDetailsRow.localTextPrefix; }
        protected getNameProperty() { return PumpDetailsRow.nameProperty; }
        protected getService() { return PumpDetailsService.baseUrl; }
        protected getDeletePermission() { return PumpDetailsRow.deletePermission; }
        protected getInsertPermission() { return PumpDetailsRow.insertPermission; }
        protected getUpdatePermission() { return PumpDetailsRow.updatePermission; }

        protected form = new PumpDetailsForm(this.idPrefix);

    }
}
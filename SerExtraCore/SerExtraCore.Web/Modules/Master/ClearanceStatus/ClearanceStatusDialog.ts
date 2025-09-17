
namespace SerExtraCore.Master {

    @Serenity.Decorators.registerClass()
    export class ClearanceStatusDialog extends Serenity.EntityDialog<ClearanceStatusRow, any> {
        protected getFormKey() { return ClearanceStatusForm.formKey; }
        protected getIdProperty() { return ClearanceStatusRow.idProperty; }
        protected getLocalTextPrefix() { return ClearanceStatusRow.localTextPrefix; }
        protected getNameProperty() { return ClearanceStatusRow.nameProperty; }
        protected getService() { return ClearanceStatusService.baseUrl; }
        protected getDeletePermission() { return ClearanceStatusRow.deletePermission; }
        protected getInsertPermission() { return ClearanceStatusRow.insertPermission; }
        protected getUpdatePermission() { return ClearanceStatusRow.updatePermission; }

        protected form = new ClearanceStatusForm(this.idPrefix);
        protected afterLoadEntity() {
            super.afterLoadEntity();

            if (this.entityId == 1 || this.entityId == 2) {
                this.readOnly = true;
            }

        }
    }
}
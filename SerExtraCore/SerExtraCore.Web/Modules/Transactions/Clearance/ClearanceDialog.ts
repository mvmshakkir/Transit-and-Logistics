
namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class ClearanceDialog extends Serenity.EntityDialog<ClearanceRow, any> {
        protected getFormKey() { return ClearanceForm.formKey; }
        protected getIdProperty() { return ClearanceRow.idProperty; }
        protected getLocalTextPrefix() { return ClearanceRow.localTextPrefix; }
        protected getNameProperty() { return ClearanceRow.nameProperty; }
        protected getService() { return ClearanceService.baseUrl; }
        protected getDeletePermission() { return ClearanceRow.deletePermission; }
        protected getInsertPermission() { return ClearanceRow.insertPermission; }
        protected getUpdatePermission() { return ClearanceRow.updatePermission; }

        protected form = new ClearanceForm(this.idPrefix);

    }
}
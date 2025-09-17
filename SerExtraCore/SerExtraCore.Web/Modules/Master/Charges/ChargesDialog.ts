
namespace SerExtraCore.Master {

    @Serenity.Decorators.registerClass()
    export class ChargesDialog extends Serenity.EntityDialog<ChargesRow, any> {
        protected getFormKey() { return ChargesForm.formKey; }
        protected getIdProperty() { return ChargesRow.idProperty; }
        protected getLocalTextPrefix() { return ChargesRow.localTextPrefix; }
        protected getNameProperty() { return ChargesRow.nameProperty; }
        protected getService() { return ChargesService.baseUrl; }
        protected getDeletePermission() { return ChargesRow.deletePermission; }
        protected getInsertPermission() { return ChargesRow.insertPermission; }
        protected getUpdatePermission() { return ChargesRow.updatePermission; }

        protected form = new ChargesForm(this.idPrefix);

    }
}

namespace SerExtraCore.Master {

    @Serenity.Decorators.registerClass()
    export class OutsourceDialog extends Serenity.EntityDialog<OutsourceRow, any> {
        protected getFormKey() { return OutsourceForm.formKey; }
        protected getIdProperty() { return OutsourceRow.idProperty; }
        protected getLocalTextPrefix() { return OutsourceRow.localTextPrefix; }
        protected getNameProperty() { return OutsourceRow.nameProperty; }
        protected getService() { return OutsourceService.baseUrl; }
        protected getDeletePermission() { return OutsourceRow.deletePermission; }
        protected getInsertPermission() { return OutsourceRow.insertPermission; }
        protected getUpdatePermission() { return OutsourceRow.updatePermission; }

        protected form = new OutsourceForm(this.idPrefix);

    }
}

namespace SerExtraCore.Master {

    @Serenity.Decorators.registerClass()
    export class TaxCodeDialog extends Serenity.EntityDialog<TaxCodeRow, any> {
        protected getFormKey() { return TaxCodeForm.formKey; }
        protected getIdProperty() { return TaxCodeRow.idProperty; }
        protected getLocalTextPrefix() { return TaxCodeRow.localTextPrefix; }
        protected getNameProperty() { return TaxCodeRow.nameProperty; }
        protected getService() { return TaxCodeService.baseUrl; }
        protected getDeletePermission() { return TaxCodeRow.deletePermission; }
        protected getInsertPermission() { return TaxCodeRow.insertPermission; }
        protected getUpdatePermission() { return TaxCodeRow.updatePermission; }

        protected form = new TaxCodeForm(this.idPrefix);

    }
}

namespace SerExtraCore.Documents {

    @Serenity.Decorators.registerClass()
    export class DocumentTypeDialog extends Serenity.EntityDialog<DocumentTypeRow, any> {
        protected getFormKey() { return DocumentTypeForm.formKey; }
        protected getIdProperty() { return DocumentTypeRow.idProperty; }
        protected getLocalTextPrefix() { return DocumentTypeRow.localTextPrefix; }
        protected getNameProperty() { return DocumentTypeRow.nameProperty; }
        protected getService() { return DocumentTypeService.baseUrl; }
        protected getDeletePermission() { return DocumentTypeRow.deletePermission; }
        protected getInsertPermission() { return DocumentTypeRow.insertPermission; }
        protected getUpdatePermission() { return DocumentTypeRow.updatePermission; }

        protected form = new DocumentTypeForm(this.idPrefix);

    }
}
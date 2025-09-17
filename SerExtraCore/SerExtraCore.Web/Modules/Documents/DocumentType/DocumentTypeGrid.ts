
namespace SerExtraCore.Documents {

    @Serenity.Decorators.registerClass()
    export class DocumentTypeGrid extends Serenity.EntityGrid<DocumentTypeRow, any> {
        protected getColumnsKey() { return 'Documents.DocumentType'; }
        protected getDialogType() { return DocumentTypeDialog; }
        protected getIdProperty() { return DocumentTypeRow.idProperty; }
        protected getInsertPermission() { return DocumentTypeRow.insertPermission; }
        protected getLocalTextPrefix() { return DocumentTypeRow.localTextPrefix; }
        protected getService() { return DocumentTypeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}

namespace SerExtraCore.Documents {

    @Serenity.Decorators.registerClass()
    export class DocumentsGrid extends Serenity.EntityGrid<DocumentsRow, any> {
        protected getColumnsKey() { return 'Documents.Documents'; }
        protected getDialogType() { return DocumentsDialog; }
        protected getIdProperty() { return DocumentsRow.idProperty; }
        protected getInsertPermission() { return DocumentsRow.insertPermission; }
        protected getLocalTextPrefix() { return DocumentsRow.localTextPrefix; }
        protected getService() { return DocumentsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: DocumentsService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));

            buttons.push(Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));

            return buttons;
        }
    }
}
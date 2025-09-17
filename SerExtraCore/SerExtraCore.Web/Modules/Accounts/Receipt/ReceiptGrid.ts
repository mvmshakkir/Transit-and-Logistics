
namespace SerExtraCore.Accounts {

    @Serenity.Decorators.registerClass()
    export class ReceiptGrid extends Serenity.EntityGrid<ReceiptRow, any> {
        protected getColumnsKey() { return 'Accounts.Receipt'; }
        protected getDialogType() { return ReceiptDialog; }
        protected getIdProperty() { return ReceiptRow.idProperty; }
        protected getInsertPermission() { return ReceiptRow.insertPermission; }
        protected getLocalTextPrefix() { return ReceiptRow.localTextPrefix; }
        protected getService() { return ReceiptService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: ReceiptService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));

            buttons.push(Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));

            return buttons;
        }
        private nextId = 1;
        protected onViewProcessData(response: Serenity.ListResponse<ReceiptRow>) {
            response = super.onViewProcessData(response);

            // there is no __id property in SalesByCategoryRow but 
            // this is javascript and we can set any property of an object
            this.nextId = 1;
            for (var x of response.Entities) {
                (x as any).Slno = this.nextId++;
            }
            return response;
        }

       
    }
}
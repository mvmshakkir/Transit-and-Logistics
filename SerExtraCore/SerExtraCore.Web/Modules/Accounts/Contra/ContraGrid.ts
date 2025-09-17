
namespace SerExtraCore.Accounts {

    @Serenity.Decorators.registerClass()
    export class ContraGrid extends Serenity.EntityGrid<ContraRow, any> {
        protected getColumnsKey() { return 'Accounts.Contra'; }
        protected getDialogType() { return ContraDialog; }
        protected getIdProperty() { return ContraRow.idProperty; }
        protected getInsertPermission() { return ContraRow.insertPermission; }
        protected getLocalTextPrefix() { return ContraRow.localTextPrefix; }
        protected getService() { return ContraService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: ContraService.baseUrl + '/ListExcel',
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
        protected onViewProcessData(response: Serenity.ListResponse<ContraRow>) {
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
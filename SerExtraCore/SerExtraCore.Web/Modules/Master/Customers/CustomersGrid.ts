
namespace SerExtraCore.Master {

    @Serenity.Decorators.registerClass()
    export class CustomersGrid extends Serenity.EntityGrid<CustomersRow, any> {
        protected getColumnsKey() { return 'Master.Customers'; }
        protected getDialogType() { return CustomersDialog; }
        protected getIdProperty() { return CustomersRow.idProperty; }
        protected getInsertPermission() { return CustomersRow.insertPermission; }
        protected getLocalTextPrefix() { return CustomersRow.localTextPrefix; }
        protected getService() { return CustomersService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: CustomersService.baseUrl + '/ListExcel',
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
        protected onViewProcessData(response: Serenity.ListResponse<CustomersRow>) {
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
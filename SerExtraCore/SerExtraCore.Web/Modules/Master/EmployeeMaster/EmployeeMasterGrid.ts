
namespace SerExtraCore.Master {

    @Serenity.Decorators.registerClass()
    export class EmployeeMasterGrid extends Serenity.EntityGrid<EmployeeMasterRow, any> {
        protected getColumnsKey() { return 'Master.EmployeeMaster'; }
        protected getDialogType() { return EmployeeMasterDialog; }
        protected getIdProperty() { return EmployeeMasterRow.idProperty; }
        protected getInsertPermission() { return EmployeeMasterRow.insertPermission; }
        protected getLocalTextPrefix() { return EmployeeMasterRow.localTextPrefix; }
        protected getService() { return EmployeeMasterService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        getButtons() {
            var buttons = super.getButtons();

            buttons.push(SerExtraCore.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Master/EmployeeMaster/ListExcel',
                separator: true
            }));

            buttons.push(SerExtraCore.Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));

            return buttons;
        }
        private nextId = 1;
        protected onViewProcessData(response: Serenity.ListResponse<EmployeeMasterRow>) {
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
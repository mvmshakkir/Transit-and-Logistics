
namespace SerExtraCore.HRM {

    @Serenity.Decorators.registerClass()
    export class EmployeeLeavesGrid extends Serenity.EntityGrid<EmployeeLeavesRow, any> {
        protected getColumnsKey() { return 'HRM.EmployeeLeaves'; }
        protected getDialogType() { return EmployeeLeavesDialog; }
        protected getIdProperty() { return EmployeeLeavesRow.idProperty; }
        protected getInsertPermission() { return EmployeeLeavesRow.insertPermission; }
        protected getLocalTextPrefix() { return EmployeeLeavesRow.localTextPrefix; }
        protected getService() { return EmployeeLeavesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: EmployeeLeavesService.baseUrl + '/ListExcel',
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
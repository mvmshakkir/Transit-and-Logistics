
namespace SerExtraCore.Master {

    @Serenity.Decorators.registerClass()
    export class VehiclesGrid extends Serenity.EntityGrid<VehiclesRow, any> {
        protected getColumnsKey() { return 'Master.Vehicles'; }
        protected getDialogType() { return VehiclesDialog; }
        protected getIdProperty() { return VehiclesRow.idProperty; }
        protected getInsertPermission() { return VehiclesRow.insertPermission; }
        protected getLocalTextPrefix() { return VehiclesRow.localTextPrefix; }
        protected getService() { return VehiclesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        getButtons() {
            var buttons = super.getButtons();

            buttons.push(SerExtraCore.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Master/Vehicles/ListExcel',
                separator: true
            }));

            buttons.push(SerExtraCore.Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));

            return buttons;
        }

        private nextId = 1;
        protected onViewProcessData(response: Serenity.ListResponse<VehiclesRow>) {
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
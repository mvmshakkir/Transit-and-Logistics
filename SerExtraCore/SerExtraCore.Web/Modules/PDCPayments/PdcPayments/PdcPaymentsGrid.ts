
namespace SerExtraCore.PDCPayments {

    @Serenity.Decorators.registerClass()
    export class PdcPaymentsGrid extends Serenity.EntityGrid<PdcPaymentsRow, any> {
        protected getColumnsKey() { return 'PDCPayments.PdcPayments'; }
        protected getDialogType() { return PdcPaymentsDialog; }
        protected getIdProperty() { return PdcPaymentsRow.idProperty; }
        protected getInsertPermission() { return PdcPaymentsRow.insertPermission; }
        protected getLocalTextPrefix() { return PdcPaymentsRow.localTextPrefix; }
        protected getService() { return PdcPaymentsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        private nextId = 1;
        protected onViewProcessData(response: Serenity.ListResponse<PdcPaymentsRow>) {
            response = super.onViewProcessData(response);

            // there is no __id property in SalesByCategoryRow but 
            // this is javascript and we can set any property of an object
            this.nextId = 1;
            for (var x of response.Entities) {
                (x as any).Slno = this.nextId++;
            }
            return response;
        }
        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: PdcPaymentsService.baseUrl + '/ListExcel',
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
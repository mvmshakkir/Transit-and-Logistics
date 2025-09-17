
namespace SerExtraCore.Accounts {

    @Serenity.Decorators.registerClass()
    export class PaymentGrid extends Serenity.EntityGrid<PaymentRow, any> {
        protected getColumnsKey() { return 'Accounts.Payment'; }
        protected getDialogType() { return PaymentDialog; }
        protected getIdProperty() { return PaymentRow.idProperty; }
        protected getInsertPermission() { return PaymentRow.insertPermission; }
        protected getLocalTextPrefix() { return PaymentRow.localTextPrefix; }
        protected getService() { return PaymentService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        //protected getDefaultSortBy() {
        //    return [PaymentRow.Fields.TrxDate];
        //}

        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: PaymentService.baseUrl + '/ListExcel',
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
        protected onViewProcessData(response: Serenity.ListResponse<PaymentRow>) {
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

namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class InvoiceCollectionGrid extends Serenity.EntityGrid<InvoiceCollectionRow, any> {
        protected getColumnsKey() { return 'Transactions.InvoiceCollection'; }
        protected getDialogType() { return InvoiceCollectionDialog; }
        protected getIdProperty() { return InvoiceCollectionRow.idProperty; }
        protected getInsertPermission() { return InvoiceCollectionRow.insertPermission; }
        protected getLocalTextPrefix() { return InvoiceCollectionRow.localTextPrefix; }
        protected getService() { return InvoiceCollectionService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: InvoiceCollectionService.baseUrl + '/ListExcel',
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
        protected onViewProcessData(response: Serenity.ListResponse<InvoiceCollectionRow>) {
            response = super.onViewProcessData(response);

            // there is no __id property in SalesByCategoryRow but 
            // this is javascript and we can set any property of an object
            this.nextId = 1;
            for (var x of response.Entities) {
                (x as any).Slno = this.nextId++;
            }
            return response;
        }
        protected createSlickGrid() {
            var grid = super.createSlickGrid();

            // need to register this plugin for grouping or you'll have errors
            grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());

            this.view.setSummaryOptions({
                aggregators: [

                    new Slick.Aggregators.Sum('TotalAmount'),

                ]
            });

            return grid;
        }
        protected getColumns() {
            var columns = super.getColumns();

            Q.first(columns, x => x.field === 'TotalAmount')
                .groupTotalsFormatter = (totals, col) =>
                    (totals.max ? ('max: ' + Q.coalesce(totals.max[col.field], '')) : '');


            return columns;
        }

        protected getSlickOptions() {
            var opt = super.getSlickOptions();
            opt.showFooterRow = true;
            return opt;
        }
    }
}
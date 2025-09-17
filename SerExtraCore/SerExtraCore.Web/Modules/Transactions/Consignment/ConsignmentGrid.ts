
namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class ConsignmentGrid extends Serenity.EntityGrid<ConsignmentRow, any> {
        protected getColumnsKey() { return 'Transactions.Consignment'; }
        protected getDialogType() { return ConsignmentDialog; }
        protected getIdProperty() { return ConsignmentRow.idProperty; }
        protected getInsertPermission() { return ConsignmentRow.insertPermission; }
        protected getLocalTextPrefix() { return ConsignmentRow.localTextPrefix; }
        protected getService() { return ConsignmentService.baseUrl; }
        private nextId = 1; 
        constructor(container: JQuery) {
            super(container);
        }
        protected onViewProcessData(response: Serenity.ListResponse<ConsignmentRow>) {
            response = super.onViewProcessData(response);

            // there is no __id property in SalesByCategoryRow but 
            // this is javascript and we can set any property of an object
            this.nextId = 1;
            for (var x of response.Entities) {
                (x as any).Slno = this.nextId++;
            }
            return response;
        }
        //protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[] {
            
        //    // get quick filter list from base class
        //    let filters = super.getQuickFilters();

        //    // quick filter init method is a good place to set initial
        //    // value for a quick filter editor, just after it is created

        //    Q.first(filters, x => x.field == "Date").init = w => {
        //        // w is a reference to the editor for this quick filter widget
        //        // here we cast it to DateEditor, and set its value as date.
        //        // note that in Javascript, months are 0 based, so date below
        //        // is actually 2016-05-01
        //        (w as Serenity.DateEditor).valueAsDate = new Date(Date.now());

        //        // setting start date was simple. but this quick filter is actually
        //        // a combination of two date editors. to get reference to second one,
        //        // need to find its next sibling element by its class
        //        let endDate = w.element.nextAll(".s-DateEditor").getWidget(Serenity.DateEditor);
        //        endDate.valueAsDate = new Date(Date.now());
        //    };
        //    return filters;
        //}
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
        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: ConsignmentService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));

            buttons.push(Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));

            return buttons;
        }
        protected getColumns() {
            var columns = super.getColumns();

            Q.first(columns, x => x.field === 'TotalAmount')
                .groupTotalsFormatter = (totals, col) =>
                    (totals.max ? ('max: ' + Q.coalesce(totals.max[col.field], '')) : '');

            columns.splice(1, 0, {
                field: 'Print Consignment',
                name: '',
                format: ctx => '<a class="inline-action print-consignment" title="consignment">' +
                    '<i class="fa fa-file-pdf-o text-red"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
            return columns;
            //} protected getColumns() {
            //    var columns = super.getColumns();
        }
        protected onClick(e: JQueryEventObject, row: number, cell: number) {
            super.onClick(e, row, cell);

            if (e.isDefaultPrevented())
                return;

            var item = this.itemAt(row);
            var target = $(e.target);

            // if user clicks "i" element, e.g. icon
            if (target.parent().hasClass('inline-action'))
                target = target.parent();

            if (target.hasClass('inline-action')) {
                e.preventDefault();

                if (target.hasClass('print-consignment')) {
                    //SerExtraCore.Common.ReportHelper.execute({

                    //    reportKey: 'Transactions.Consignment',
                    //    params: {
                    //         OrderID: item.Id
                    //    }
                    //});
                    /*/Reports/DynamicReport ? reportid = 9*/
                    /*window.location.href = "/Reports/DynamicReport?reportid=9&Id=" + item.Id;*/
                   /* window.location.href = "/Transactions/Print?reportid=9&id=" + item.Id;*/
                    /*window.location.href = "/Transactions/Print?saleid==9&id=" + item.Id;*/
                    /*window.location.href = "/Transactions/Print?saleid=" + item.Id + "&id=Consignment"*/
                    /*  window.location.href = "/Transactions/Print?id=9&saleid=" + item.Id + "&id=Consignment";*/

                    window.location.href = "/Transactions/Print?id=Consignment&saleid=" + item.Id + "&id=Consignment";

                   /* window.location.href = "/Transactions/Print?saleid=" + item.Id + "&id=Consignment"*/



                }
            }
        }


        protected getSlickOptions() {
            var opt = super.getSlickOptions();
            opt.showFooterRow = true;
            return opt;
        }
    }
}
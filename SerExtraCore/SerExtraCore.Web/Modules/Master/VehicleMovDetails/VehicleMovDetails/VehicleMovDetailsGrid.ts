//import { localText } from '@serenity/Serenity.CoreLib';



namespace SerExtraCore.VehicleMovDetails {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class VehicleMovDetailsGrid extends Serenity.EntityGrid<VehicleMovDetailsRow, any> {
        protected getColumnsKey() { return 'VehicleMovDetails.VehicleMovDetails'; }
        protected getDialogType() { return VehicleMovDetailsDialog; }
        protected getIdProperty() { return VehicleMovDetailsRow.idProperty; }
        protected getInsertPermission() { return VehicleMovDetailsRow.insertPermission; }
        protected getLocalTextPrefix() { return VehicleMovDetailsRow.localTextPrefix; }
        protected getService() { return VehicleMovDetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
            //    } protected createSlickGrid() {
            //        var grid = super.createSlickGrid();

            //        // need to register this plugin for grouping or you'll have errors
            //        grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());

            //        this.view.setSummaryOptions({
            //            aggregators: [

            //                new Slick.Aggregators.Sum('TotalAmount'),

            //            ]
            //        });

            //        return grid;
            //    }
            //    protected getColumns() {
            //        var columns = super.getColumns();

            //        Q.first(columns, x => x.field === 'TotalAmount')
            //            .groupTotalsFormatter = (totals, col) =>
            //                (totals.max ? ('max: ' + Q.coalesce(totals.max[col.field], '')) : '');


            //        return columns;
            //    }

            //    protected getSlickOptions() {
            //        var opt = super.getSlickOptions();
            //        opt.showFooterRow = true;
            //        return opt;
            //    }
            //}}}
        }
             protected getColumns() {
            var columns = super.getColumns();

            //Q.first(columns, x => x.field === 'TotalAmount')
            //    .groupTotalsFormatter = (totals, col) =>
            //        (totals.max ? ('max: ' + Q.coalesce(totals.max[col.field], '')) : '');

            columns.splice(1, 0, {
                field: 'Print Consignment',
                name: '',
                format: ctx => '<a class="inline-action print-consignment" title="Trip">' +
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
                    window.location.href = "/Transactions/Print?id=Trip&saleid=" + item.Id + "&id=Trip";

                    /* window.location.href = "/Transactions/Print?saleid=" + item.Id + "&id=Consignment"*/



                }
            }
       

        }
        //protected getQuickFilters() {
        //    var filters = super.getQuickFilters();

        //    var orderDate = this.dateRangeQuickFilter('Trx Date', 'Trx Date');

        //    orderDate.handler = args => {

        //        // args.widget here is the start date editor. value of a date editor is a ISO date string
        //        //var start = args.widget.value;
                

        //        // to find end date editor, need to search it by its css class among siblings
        //        var end = args.widget.element.nextAll('.s-DateEditor')
        //            .getWidget(Serenity.DateEditor).value;
        //        const today = new Date();

        //        // Set the time to the start of the day (00:00:00)
        //        today.setHours(0, 0, 0, 0);

        //        // Calculate the start date 7 days before today
        //        const start = new Date(today.getTime()); // Convert Date object to number (milliseconds) using getTime()

        //        start.setDate(today.getDate() - 7);

        //        // Set the time to the end of the day (23:59:59)
        //        today.setHours(23, 59, 59, 999);

        //        // Assign the start date to args.request.EqualityFilter.StartDate
        //        args.request.EqualityFilter.StartDate = start;

        //        // Assign the end date to args.request.EqualityFilter.EndDate
        //        args.request.EqualityFilter.EndDate = today;
        //      //  this.startdate = start;


        //        // active option controls when a filter editor looks active, e.g. its label is blueish
        //       // args.active = !Q.isEmptyOrNull(start) || !Q.isEmptyOrNull(end);
        //    };

        //    filters.push(orderDate);

        //    return filters;
        //}
    }
}
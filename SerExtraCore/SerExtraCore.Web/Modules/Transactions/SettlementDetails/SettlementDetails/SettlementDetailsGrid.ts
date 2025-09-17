
namespace SerExtraCore.SettlementDetails {

    @Serenity.Decorators.registerClass()
    export class SettlementDetailsGrid extends Serenity.EntityGrid<SettlementDetailsRow, any> {
        protected getColumnsKey() { return 'SettlementDetails.SettlementDetails'; }
        protected getDialogType() { return SettlementDetailsDialog; }
        protected getIdProperty() { return SettlementDetailsRow.idProperty; }
        protected getInsertPermission() { return SettlementDetailsRow.insertPermission; }
        protected getLocalTextPrefix() { return SettlementDetailsRow.localTextPrefix; }
        protected getService() { return SettlementDetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getColumns() {
            var columns = super.getColumns();

            //Q.first(columns, x => x.field === 'TotalAmount')
            //    .groupTotalsFormatter = (totals, col) =>
            //        (totals.max ? ('max: ' + Q.coalesce(totals.max[col.field], '')) : '');

            columns.splice(1, 0, {
                field: 'Print Consignment',
                name: '',
                format: ctx => '<a class="inline-action print-consignment" title="settlement">' +
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
                    window.location.href = "/Transactions/Print?id=settlement&saleid=" + item.Id + "&id=settlement";

                    /* window.location.href = "/Transactions/Print?saleid=" + item.Id + "&id=Consignment"*/



                }
            }

        }
    }
}
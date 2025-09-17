
namespace SerExtraCore.Accounts {

    @Serenity.Decorators.registerClass()
    export class MoneyInGrid extends Serenity.EntityGrid<MoneyInRow, any> {
        protected getColumnsKey() { return 'Accounts.MoneyIn'; }
        protected getDialogType() { return MoneyInDialog; }
        protected getIdProperty() { return MoneyInRow.idProperty; }
        protected getInsertPermission() { return MoneyInRow.insertPermission; }
        protected getLocalTextPrefix() { return MoneyInRow.localTextPrefix; }
        protected getService() { return MoneyInService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        //protected getDefaultSortBy() {
        //    return [MoneyInRow.Fields.TrxDate]
        //}


        protected getColumns() {
            var columns = super.getColumns();

            columns.splice(1, 0, {
                field: 'Print Invoice',
                name: '',
                format: ctx => '<a class="inline-action print-invoice" title="invoice">' +
                    '<i class="fa fa-file-pdf-o text-red"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
            return columns;
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

                if (target.hasClass('print-invoice')) {
                    //SerExtraCore.Common.ReportHelper.execute({
                    //    reportKey: 'SalesInvoicePrint.Invoice',
                    //    params: {
                    //        SalesId: item.SaleId
                    //    }
                    //});
                    window.location.href = "/Transactions/Print?saleid=" + item.Id + "&id=Receipt"
                }


            }
        }
    }
}
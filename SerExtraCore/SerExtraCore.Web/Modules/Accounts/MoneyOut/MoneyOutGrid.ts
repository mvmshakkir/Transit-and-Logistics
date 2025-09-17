
namespace SerExtraCore.Accounts {

    @Serenity.Decorators.registerClass()
    export class MoneyOutGrid extends Serenity.EntityGrid<MoneyOutRow, any> {
        protected getColumnsKey() { return 'Accounts.MoneyOut'; }
        protected getDialogType() { return MoneyOutDialog; }
        protected getIdProperty() { return MoneyOutRow.idProperty; }
        protected getInsertPermission() { return MoneyOutRow.insertPermission; }
        protected getLocalTextPrefix() { return MoneyOutRow.localTextPrefix; }
        protected getService() { return MoneyOutService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        //protected getDefaultSortBy() {
        //    return [MoneyOutRow.Fields.TrxDate]
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
                    window.location.href = "/Transactions/Print?saleid=" + item.Id + "&id=Payment"
                }

                
            }
        }
    }
}
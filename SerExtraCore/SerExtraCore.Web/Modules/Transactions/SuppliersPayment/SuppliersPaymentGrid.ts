
namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    export class SuppliersPaymentGrid extends Serenity.EntityGrid<SuppliersPaymentRow, any> {
        protected getColumnsKey() { return 'Transactions.SuppliersPayment'; }
        protected getDialogType() { return SuppliersPaymentDialog; }
        protected getIdProperty() { return SuppliersPaymentRow.idProperty; }
        protected getInsertPermission() { return SuppliersPaymentRow.insertPermission; }
        protected getLocalTextPrefix() { return SuppliersPaymentRow.localTextPrefix; }
        protected getService() { return SuppliersPaymentService.baseUrl; }
        
        constructor(container: JQuery) {
            super(container);
        }
        private nextId = 1; 
        protected onViewProcessData(response: Serenity.ListResponse<SuppliersPaymentRow>) {
            response = super.onViewProcessData(response);

            // there is no __id property in SalesByCategoryRow but 
            // this is javascript and we can set any property of an object
            this.nextId = 1;
            for (var x of response.Entities) {
                (x as any).Slno = this.nextId++;
            }
            return response;
        }
        protected getColumns() {
            var columns = super.getColumns();

            columns.splice(1, 0, {
                field: 'Print',
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
                    window.location.href = "/Transactions/Print?saleid=" + item.Id + "&id=SupplierPayment"
                }


            }
        }
    }
}
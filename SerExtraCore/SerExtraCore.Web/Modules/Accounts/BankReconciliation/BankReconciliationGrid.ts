


    namespace SerExtraCore.Accounts {

        @Serenity.Decorators.registerClass()
        export class BankReconciliationGrid extends Serenity.EntityGrid<Accounts.BankReconciliationRow, any> {

            protected getColumnsKey() { return "Accounts.BankReconciliationColumns"; }
            protected getIdProperty() { return "__id"; }
            protected getNameProperty() { return Accounts.BankReconciliationRow.nameProperty; }
            protected getLocalTextPrefix() { return Accounts.BankReconciliationRow.localTextPrefix; }
            protected getService() { return BankReconciliationService.baseUrl; }

            private nextId = 1;
            private startdate = "";
            constructor(container: JQuery) {
                super(container);
            }

            /**
             * This method is called to preprocess data returned from the list service
             */
            protected onViewProcessData(response: Serenity.ListResponse<Accounts.JVAdjustmentsRow>) {
                response = super.onViewProcessData(response);

                // there is no __id property in CustomerGrossSalesRow but 
                // this is javascript and we can set any property of an object
                for (var x of response.Entities) {
                    (x as any).__id = this.nextId++;
                }
                return response;
            }

            protected getButtons() {
                var buttons = [];

                buttons.push(Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: BankReconciliationService.baseUrl + '/ListExcel',
                    onViewSubmit: () => this.onViewSubmit(),
                    separator: true
                }));

                buttons.push(Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: () => this.onViewSubmit()
                }));

                return buttons;
            }

            protected createSlickGrid() {
                var grid = super.createSlickGrid();

                // need to register this plugin for grouping or you'll have errors
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());

                this.view.setSummaryOptions({
                    aggregators: [
                        new Slick.Aggregators.Sum('Debit'),
                        new Slick.Aggregators.Sum('Credit')
                    ]
                });

               

                return grid;
            }
            protected getColumns(): Slick.Column[] {

                var columns = super.getColumns();
                columns.push(
                    {
                        field: "DeleteRow",
                        name: "",
                        format: ctx => '<a class="inline-action print-invoice" title="invoice">' +
                            '<i class="fa fa-check text-red"></i></a>',
                        width: 24,
                        minWidth: 24,
                        maxWidth: 24
                    });

                return columns;
            }
            protected getSlickOptions() {
                var opt = super.getSlickOptions();
                opt.showFooterRow = true;
                return opt;
            }

            protected usePager() {
                return false;
            }
           
            protected getQuickFilters() {
                var filters = super.getQuickFilters();

                var orderDate = this.dateRangeQuickFilter('Trx Date', 'Trx Date');
                orderDate.handler = args => {

                    // args.widget here is the start date editor. value of a date editor is a ISO date string
                    var start = args.widget.value;

                    // to find end date editor, need to search it by its css class among siblings
                    var end = args.widget.element.nextAll('.s-DateEditor')
                        .getWidget(Serenity.DateEditor).value;

                    args.request.EqualityFilter.StartDate = start;
                    args.request.EqualityFilter.EndDate = end;
                    this.startdate = start;
                    

                    // active option controls when a filter editor looks active, e.g. its label is blueish
                    args.active = !Q.isEmptyOrNull(start) || !Q.isEmptyOrNull(end);
                };

                filters.push(orderDate);

                return filters;
            }

            protected viewDataChanged() {
                var customFilter = this.findQuickFilter(Serenity.LookupEditor, "AccountId");
                var data = this.slickGrid.getData();
                var items = data.getItems();
                var sumCredit = items.reduce((n, { Credit }) => n + Credit, 0);
                var sumDebit = items.reduce((n, { Debit }) => n + Debit, 0);
                document.getElementById("debit").innerText = sumDebit.toFixed(3);
                document.getElementById("credit").innerText = sumCredit.toFixed(3);
                Accounts.BankReconciliationService.AccountOpening(
                    {

                        FromDate: this.startdate,
                        AccountId: Q.toId(customFilter.value || 0)
                    }
                    , response => {
                        document.getElementById("opening").innerText = response.toFixed(3);

                        document.getElementById("closing").innerText = (response + sumDebit - sumCredit).toFixed(3)
                    });
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
                var kk = this;
                if (target.hasClass('inline-action')) {
                    e.preventDefault();

                    if (target.hasClass('print-invoice')) {
                        //SerExtraCore.Common.ReportHelper.execute({
                        //    reportKey: 'Transactions.Invoice',
                        //    params: {
                        //        OrderID: item.Id
                        //    }
                        //});

                        Accounts.BankReconciliationService.UpdateStatus(
                            {

                                TrxId: item.Id
                            }
                            , response => {
                                kk.refresh();
                            });
                    }
                }
            }
            protected getItemCssClass(item: Accounts.BankReconciliationRow, index: number): string {

                //index row
                let klass: string = "";

                if ((item.BankReconciliation || false) == true) {
                    klass += " high-price";
                }
                return Q.trimToNull(klass);
            }
        }
    }
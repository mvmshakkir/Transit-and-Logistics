
namespace SerExtraCore.VehicleFreight {

    @Serenity.Decorators.registerClass()
    export class VehicleFreightGrid extends Serenity.EntityGrid<VehicleFreightRow, any> {
        protected getColumnsKey() { return 'VehicleFreight.VehicleFreight'; }
        protected getDialogType() { return VehicleFreightDialog; }
        protected getIdProperty() { return VehicleFreightRow.idProperty; }
        protected getInsertPermission() { return VehicleFreightRow.insertPermission; }
        protected getLocalTextPrefix() { return VehicleFreightRow.localTextPrefix; }
        protected getService() { return VehicleFreightService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected createSlickGrid() {
            var grid = super.createSlickGrid();

            // need to register this plugin for grouping or you'll have errors
            grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());

            this.view.setSummaryOptions({
                aggregators: [

                    new Slick.Aggregators.Sum('TotalFreight'),

                ]
            });

            return grid;
        }
        protected getColumns() {
            var columns = super.getColumns();

            Q.first(columns, x => x.field === 'TotalFreight')
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
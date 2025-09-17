
namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    export class ConsignmentVehicleDetailsGrid extends Serenity.EntityGrid<ConsignmentVehicleDetailsRow, any> {
        protected getColumnsKey() { return 'Transactions.ConsignmentVehicleDetails'; }
        protected getDialogType() { return ConsignmentVehicleDetailsDialog; }
        protected getIdProperty() { return ConsignmentVehicleDetailsRow.idProperty; }
        protected getInsertPermission() { return ConsignmentVehicleDetailsRow.insertPermission; }
        protected getLocalTextPrefix() { return ConsignmentVehicleDetailsRow.localTextPrefix; }
        protected getService() { return ConsignmentVehicleDetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        private nextId = 1;
        protected onViewProcessData(response: Serenity.ListResponse<ConsignmentVehicleDetailsRow>) {
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
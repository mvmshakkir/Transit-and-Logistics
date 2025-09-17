
namespace SerExtraCore.Master {

    @Serenity.Decorators.registerClass()
    export class VehicleSpecificationsGrid extends Serenity.EntityGrid<VehicleSpecificationsRow, any> {
        protected getColumnsKey() { return 'Master.VehicleSpecifications'; }
        protected getDialogType() { return VehicleSpecificationsDialog; }
        protected getIdProperty() { return VehicleSpecificationsRow.idProperty; }
        protected getInsertPermission() { return VehicleSpecificationsRow.insertPermission; }
        protected getLocalTextPrefix() { return VehicleSpecificationsRow.localTextPrefix; }
        protected getService() { return VehicleSpecificationsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        private nextId = 1;
        protected onViewProcessData(response: Serenity.ListResponse<VehicleSpecificationsRow>) {
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
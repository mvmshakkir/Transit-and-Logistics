
namespace SerExtraCore.Master {

    @Serenity.Decorators.registerClass()
    export class VehicleModelsGrid extends Serenity.EntityGrid<VehicleModelsRow, any> {
        protected getColumnsKey() { return 'Master.VehicleModels'; }
        protected getDialogType() { return VehicleModelsDialog; }
        protected getIdProperty() { return VehicleModelsRow.idProperty; }
        protected getInsertPermission() { return VehicleModelsRow.insertPermission; }
        protected getLocalTextPrefix() { return VehicleModelsRow.localTextPrefix; }
        protected getService() { return VehicleModelsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        private nextId = 1;
        protected onViewProcessData(response: Serenity.ListResponse<VehicleModelsRow>) {
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
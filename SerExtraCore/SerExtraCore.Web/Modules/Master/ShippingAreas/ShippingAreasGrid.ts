
namespace SerExtraCore.Master {

    @Serenity.Decorators.registerClass()
    export class ShippingAreasGrid extends Serenity.EntityGrid<ShippingAreasRow, any> {
        protected getColumnsKey() { return 'Master.ShippingAreas'; }
        protected getDialogType() { return ShippingAreasDialog; }
        protected getIdProperty() { return ShippingAreasRow.idProperty; }
        protected getInsertPermission() { return ShippingAreasRow.insertPermission; }
        protected getLocalTextPrefix() { return ShippingAreasRow.localTextPrefix; }
        protected getService() { return ShippingAreasService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        private nextId = 1;
        protected onViewProcessData(response: Serenity.ListResponse<ShippingAreasRow>) {
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
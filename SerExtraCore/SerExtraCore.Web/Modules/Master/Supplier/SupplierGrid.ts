
namespace SerExtraCore.Master {

    @Serenity.Decorators.registerClass()
    export class SupplierGrid extends Serenity.EntityGrid<SupplierRow, any> {
        protected getColumnsKey() { return 'Master.Supplier'; }
        protected getDialogType() { return SupplierDialog; }
        protected getIdProperty() { return SupplierRow.idProperty; }
        protected getInsertPermission() { return SupplierRow.insertPermission; }
        protected getLocalTextPrefix() { return SupplierRow.localTextPrefix; }
        protected getService() { return SupplierService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        private nextId = 1;
        protected onViewProcessData(response: Serenity.ListResponse<SupplierRow>) {
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
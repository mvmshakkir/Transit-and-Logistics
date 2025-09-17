
namespace SerExtraCore.Master {

    @Serenity.Decorators.registerClass()
    export class DesignationGrid extends Serenity.EntityGrid<DesignationRow, any> {
        protected getColumnsKey() { return 'Master.Designation'; }
        protected getDialogType() { return DesignationDialog; }
        protected getIdProperty() { return DesignationRow.idProperty; }
        protected getInsertPermission() { return DesignationRow.insertPermission; }
        protected getLocalTextPrefix() { return DesignationRow.localTextPrefix; }
        protected getService() { return DesignationService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        private nextId = 1;
        protected onViewProcessData(response: Serenity.ListResponse<DesignationRow>) {
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
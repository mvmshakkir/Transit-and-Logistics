
namespace SerExtraCore.Master {

    @Serenity.Decorators.registerClass()
    export class SpecificationsGrid extends Serenity.EntityGrid<SpecificationsRow, any> {
        protected getColumnsKey() { return 'Master.Specifications'; }
        protected getDialogType() { return SpecificationsDialog; }
        protected getIdProperty() { return SpecificationsRow.idProperty; }
        protected getInsertPermission() { return SpecificationsRow.insertPermission; }
        protected getLocalTextPrefix() { return SpecificationsRow.localTextPrefix; }
        protected getService() { return SpecificationsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        private nextId = 1;
        protected onViewProcessData(response: Serenity.ListResponse<SpecificationsRow>) {
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
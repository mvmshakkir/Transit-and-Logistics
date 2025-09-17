
namespace SerExtraCore.Master {

    @Serenity.Decorators.registerClass()
    export class OutsourceGrid extends Serenity.EntityGrid<OutsourceRow, any> {
        protected getColumnsKey() { return 'Master.Outsource'; }
        protected getDialogType() { return OutsourceDialog; }
        protected getIdProperty() { return OutsourceRow.idProperty; }
        protected getInsertPermission() { return OutsourceRow.insertPermission; }
        protected getLocalTextPrefix() { return OutsourceRow.localTextPrefix; }
        protected getService() { return OutsourceService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        private nextId = 1;
        protected onViewProcessData(response: Serenity.ListResponse<OutsourceRow>) {
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
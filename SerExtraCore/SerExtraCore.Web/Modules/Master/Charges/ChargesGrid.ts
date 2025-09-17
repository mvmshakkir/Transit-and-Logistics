
namespace SerExtraCore.Master {

    @Serenity.Decorators.registerClass()
    export class ChargesGrid extends Serenity.EntityGrid<ChargesRow, any> {
        protected getColumnsKey() { return 'Master.Charges'; }
        protected getDialogType() { return ChargesDialog; }
        protected getIdProperty() { return ChargesRow.idProperty; }
        protected getInsertPermission() { return ChargesRow.insertPermission; }
        protected getLocalTextPrefix() { return ChargesRow.localTextPrefix; }
        protected getService() { return ChargesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        private nextId = 1;
        protected onViewProcessData(response: Serenity.ListResponse<ChargesRow>) {
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
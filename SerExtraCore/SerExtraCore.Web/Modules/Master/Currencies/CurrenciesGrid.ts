
namespace SerExtraCore.Master {

    @Serenity.Decorators.registerClass()
    export class CurrenciesGrid extends Serenity.EntityGrid<CurrenciesRow, any> {
        protected getColumnsKey() { return 'Master.Currencies'; }
        protected getDialogType() { return CurrenciesDialog; }
        protected getIdProperty() { return CurrenciesRow.idProperty; }
        protected getInsertPermission() { return CurrenciesRow.insertPermission; }
        protected getLocalTextPrefix() { return CurrenciesRow.localTextPrefix; }
        protected getService() { return CurrenciesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        private nextId = 1;
        protected onViewProcessData(response: Serenity.ListResponse<CurrenciesRow>) {
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
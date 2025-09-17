
namespace SerExtraCore.Master {

    @Serenity.Decorators.registerClass()
    export class CountriesGrid extends Serenity.EntityGrid<CountriesRow, any> {
        protected getColumnsKey() { return 'Master.Countries'; }
        protected getDialogType() { return CountriesDialog; }
        protected getIdProperty() { return CountriesRow.idProperty; }
        protected getInsertPermission() { return CountriesRow.insertPermission; }
        protected getLocalTextPrefix() { return CountriesRow.localTextPrefix; }
        protected getService() { return CountriesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        private nextId = 1;
        protected onViewProcessData(response: Serenity.ListResponse<CountriesRow>) {
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
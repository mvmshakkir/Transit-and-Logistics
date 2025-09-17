
namespace SerExtraCore.Companies {

    @Serenity.Decorators.registerClass()
    export class CompaniesGrid extends Serenity.EntityGrid<CompaniesRow, any> {
        protected getColumnsKey() { return 'Companies.Companies'; }
        protected getDialogType() { return CompaniesDialog; }
        protected getIdProperty() { return CompaniesRow.idProperty; }
        protected getInsertPermission() { return CompaniesRow.insertPermission; }
        protected getLocalTextPrefix() { return CompaniesRow.localTextPrefix; }
        protected getService() { return CompaniesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
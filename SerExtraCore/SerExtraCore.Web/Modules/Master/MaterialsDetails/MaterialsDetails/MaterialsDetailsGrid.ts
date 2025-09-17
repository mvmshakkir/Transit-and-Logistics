
namespace SerExtraCore.MaterialsDetails {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class MaterialsDetailsGrid extends Serenity.EntityGrid<MaterialsDetailsRow, any> {
        protected getColumnsKey() { return 'MaterialsDetails.MaterialsDetails'; }
        protected getDialogType() { return MaterialsDetailsDialog; }
        protected getIdProperty() { return MaterialsDetailsRow.idProperty; }
        protected getInsertPermission() { return MaterialsDetailsRow.insertPermission; }
        protected getLocalTextPrefix() { return MaterialsDetailsRow.localTextPrefix; }
        protected getService() { return MaterialsDetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
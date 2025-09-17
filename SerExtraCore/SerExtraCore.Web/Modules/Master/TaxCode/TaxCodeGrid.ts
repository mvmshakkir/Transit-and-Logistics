
namespace SerExtraCore.Master {

    @Serenity.Decorators.registerClass()
    export class TaxCodeGrid extends Serenity.EntityGrid<TaxCodeRow, any> {
        protected getColumnsKey() { return 'Master.TaxCode'; }
        protected getDialogType() { return TaxCodeDialog; }
        protected getIdProperty() { return TaxCodeRow.idProperty; }
        protected getInsertPermission() { return TaxCodeRow.insertPermission; }
        protected getLocalTextPrefix() { return TaxCodeRow.localTextPrefix; }
        protected getService() { return TaxCodeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
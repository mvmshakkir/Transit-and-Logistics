
namespace SerExtraCore.ServiceAmount {

    @Serenity.Decorators.registerClass()
    export class ServiceAmountGrid extends Serenity.EntityGrid<ServiceAmountRow, any> {
        protected getColumnsKey() { return 'ServiceAmount.ServiceAmount'; }
        protected getDialogType() { return ServiceAmountDialog; }
        protected getIdProperty() { return ServiceAmountRow.idProperty; }
        protected getInsertPermission() { return ServiceAmountRow.insertPermission; }
        protected getLocalTextPrefix() { return ServiceAmountRow.localTextPrefix; }
        protected getService() { return ServiceAmountService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
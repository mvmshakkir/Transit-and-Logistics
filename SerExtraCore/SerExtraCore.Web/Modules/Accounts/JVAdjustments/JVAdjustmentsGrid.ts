
namespace SerExtraCore.Accounts {

    @Serenity.Decorators.registerClass()
    export class JVAdjustmentsGrid extends Serenity.EntityGrid<JVAdjustmentsRow, any> {
        protected getColumnsKey() { return 'Accounts.JVAdjustments'; }
        protected getDialogType() { return JVAdjustmentsDialog; }
        protected getIdProperty() { return JVAdjustmentsRow.idProperty; }
        protected getInsertPermission() { return JVAdjustmentsRow.insertPermission; }
        protected getLocalTextPrefix() { return JVAdjustmentsRow.localTextPrefix; }
        protected getService() { return JVAdjustmentsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        private nextId = 1;
        protected onViewProcessData(response: Serenity.ListResponse<ContraRow>) {
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
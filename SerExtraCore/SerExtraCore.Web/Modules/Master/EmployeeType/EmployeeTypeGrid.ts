
namespace SerExtraCore.Master {

    @Serenity.Decorators.registerClass()
    export class EmployeeTypeGrid extends Serenity.EntityGrid<EmployeeTypeRow, any> {
        protected getColumnsKey() { return 'Master.EmployeeType'; }
        protected getDialogType() { return EmployeeTypeDialog; }
        protected getIdProperty() { return EmployeeTypeRow.idProperty; }
        protected getInsertPermission() { return EmployeeTypeRow.insertPermission; }
        protected getLocalTextPrefix() { return EmployeeTypeRow.localTextPrefix; }
        protected getService() { return EmployeeTypeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        private nextId = 1;
        protected onViewProcessData(response: Serenity.ListResponse<EmployeeTypeRow>) {
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
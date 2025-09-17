
namespace SerExtraCore.Master {

    @Serenity.Decorators.registerClass()
    export class PortsGrid extends Serenity.EntityGrid<PortsRow, any> {
        protected getColumnsKey() { return 'Master.Ports'; }
        protected getDialogType() { return PortsDialog; }
        protected getIdProperty() { return PortsRow.idProperty; }
        protected getInsertPermission() { return PortsRow.insertPermission; }
        protected getLocalTextPrefix() { return PortsRow.localTextPrefix; }
        protected getService() { return PortsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
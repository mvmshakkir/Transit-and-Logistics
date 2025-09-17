
namespace SerExtraCore.Accounts {

    @Serenity.Decorators.registerClass()
    export class AccountHeadsGrid extends Serenity.EntityGrid<AccountHeadsRow, any> {
        protected getColumnsKey() { return 'Accounts.AccountHeads'; }
        protected getDialogType() { return AccountHeadsDialog; }
        protected getIdProperty() { return AccountHeadsRow.idProperty; }
        protected getInsertPermission() { return AccountHeadsRow.insertPermission; }
        protected getLocalTextPrefix() { return AccountHeadsRow.localTextPrefix; }
        protected getService() { return AccountHeadsService.baseUrl; }

        
        private treeMixin: Serenity.TreeGridMixin<AccountHeadsRow>;

        constructor(container: JQuery) {
            super(container);
            this.treeMixin = new Serenity.TreeGridMixin({
                grid: this,
                // bring tree items initially collapsed
                initialCollapse: () => true,
                // which column to place tree toggle / expand/collapse button
                toggleField: AccountHeadsRow.Fields.Code,
                getParentId: x => {
                    // as we don't have parentId column here, we are cheating by using modulus 10 and 50
                    // e.g. order with ID 1605 will have parent 1600, order with ID 1613 will have parent 1610


                    // if you had a ParentID column, you'd just return x.ParentID
                    return x.ParentHeadId;
                }
            });
        }

        private nextId = 1;
        protected onViewProcessData(response: Serenity.ListResponse<AccountHeadsRow>) {
            response = super.onViewProcessData(response);

            // there is no __id property in SalesByCategoryRow but 
            // this is javascript and we can set any property of an object
            this.nextId = 1;
            for (var x of response.Entities) {
                (x as any).Slno = this.nextId++;
            }
            return response;
        }
        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: AccountHeadsService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));

            buttons.push(Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));

            return buttons;
        }
    }
}
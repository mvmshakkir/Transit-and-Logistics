/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace SerExtraCore.Reports {

    @Serenity.Decorators.registerClass()
    export class ReportDataSetsEditor extends Common.GridEditorBase<ReportDataSetsRow> {
        protected getColumnsKey() { return "Reports.ReportDataSets"; }
        protected getDialogType() { return ReportDataSetsDialog; }
        protected getLocalTextPrefix() { return ReportDataSetsRow.localTextPrefix; }
        public fromlocationid: number;
        constructor(container: JQuery) {
            super(container);

         
        }
        
        validateEntity(row, id) {
           
            return true;
        }

        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>) {
            super.initEntityDialog(itemType, dialog);
           

            
        }
    }
}
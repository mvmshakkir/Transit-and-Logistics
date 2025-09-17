/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace SerExtraCore.Reports {

    @Serenity.Decorators.registerClass()
    export class ReportParametersEditor extends Common.GridEditorBase<ReportParametersRow> {
        protected getColumnsKey() { return "Reports.ReportParameters"; }
        protected getDialogType() { return ReportParametersDialog; }
        protected getLocalTextPrefix() { return ReportParametersRow.localTextPrefix; }
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
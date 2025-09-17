/// <reference path="../../../Common/Helpers/GridEditorBase.ts" />

namespace SerExtraCore.Extr {
    import fld = ExtrRow.Fields;
    @Serenity.Decorators.registerClass()
    export class ExtrEditor extends Common.GridEditorBase<ExtrRow> {
        protected getColumnsKey() { return "Extr.Extr"; }
        protected getDialogType() { return ExtrDialog; }
        protected getLocalTextPrefix() { return ExtrRow.localTextPrefix; }

        private pendingChanges: Q.Dictionary<any> = {};
        public hidesupppieradvance: boolean;
        constructor(container: JQuery) {
            super(container);

           
        }
       
        //validateEntity(row, id) {


        //    row.PumpName = PumpDetails.PumpDetailsRow.getLookup().itemById[row.PumpId].PumpName;
        //    //row.CurrencyCurrencyCode = Master.CurrenciesRow.getLookup().itemById[row.CurrencyId].CurrencyCode;

        //    return true;
        //}
      
    }
}

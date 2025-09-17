/// <reference path="../../../Common/Helpers/GridEditorBase.ts" />

namespace SerExtraCore.Crossing {
    import fld = CrossingRow.Fields;
    @Serenity.Decorators.registerClass()
    export class CrossingEditor extends Common.GridEditorBase<CrossingRow> {
        protected getColumnsKey() { return "Crossing.Crossing"; }
        protected getDialogType() { return CrossingDialog; }
        protected getLocalTextPrefix() { return CrossingRow.localTextPrefix; }

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

/// <reference path="../../../Common/Helpers/GridEditorBase.ts" />

namespace SerExtraCore.FuelDetails {
    import fld = FuelDetailsRow.Fields;
    @Serenity.Decorators.registerClass()
    export class FuelDetailsEditor extends Common.GridEditorBase<FuelDetailsRow> {
        protected getColumnsKey() { return "FuelDetails.FuelDetails"; }
        protected getDialogType() { return FuelDetailsDialog; }
        protected getLocalTextPrefix() { return FuelDetailsRow.localTextPrefix; }

        private pendingChanges: Q.Dictionary<any> = {};
        public hidesupppieradvance: boolean;
        constructor(container: JQuery) {
            super(container);

           
        }
       
        validateEntity(row, id) {


            row.SupplierName = Master.SupplierRow.getLookup().itemById[row.Supplierid].SupplierName;
            //row.CurrencyCurrencyCode = Master.CurrenciesRow.getLookup().itemById[row.CurrencyId].CurrencyCode;

            return true;
        }
      
    }
}

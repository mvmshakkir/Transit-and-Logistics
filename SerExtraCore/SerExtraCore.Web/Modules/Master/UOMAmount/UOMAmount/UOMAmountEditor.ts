/// <reference path="../../../Common/Helpers/GridEditorBase.ts" />

namespace SerExtraCore.UOMAmount {
    import fld = UOMAmountRow.Fields;
    @Serenity.Decorators.registerClass()
    export class UOMAmountEditor extends Common.GridEditorBase<UOMAmountRow> {
        protected getColumnsKey() { return "UOMAmount.UOMAmount"; }
        protected getDialogType() { return UOMAmountDialog; }
        protected getLocalTextPrefix() { return UOMAmountRow.localTextPrefix; }

        private pendingChanges: Q.Dictionary<any> = {};
        public hidesupppieradvance: boolean;
        constructor(container: JQuery) {
            super(container);

           
        }
        validateEntity(row, id) {


            row.UomUnit = UOM.UOMRow.getLookup().itemById[row.UomId].Unit;
          
            /* row.CommissionAmount = VehicleMovDetails.VehicleMovDetailsRow.getLookup().itemById[row.Id].TotalFright;*/
            return true;
        }

      
    }
}

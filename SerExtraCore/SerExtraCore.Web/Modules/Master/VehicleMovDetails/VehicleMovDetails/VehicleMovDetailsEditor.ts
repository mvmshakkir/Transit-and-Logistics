/// <reference path="../../../Common/Helpers/GridEditorBase.ts" />

namespace SerExtraCore.VehicleMovDetails {
    import fld = VehicleMovDetailsRow.Fields;
    @Serenity.Decorators.registerClass()
    export class VehicleMovDetailsEditor extends Common.GridEditorBase<VehicleMovDetailsRow> {
        protected getColumnsKey() { return "VehicleMovDetails.VehicleMovDetails"; }
        protected getDialogType() { return VehicleMovDetailsDialog; }
        protected getLocalTextPrefix() { return VehicleMovDetailsRow.localTextPrefix; }

        private pendingChanges: Q.Dictionary<any> = {};
        public hidesupppieradvance: boolean;
        constructor(container: JQuery) {
            super(container);

           
        }
       

      
    }
}

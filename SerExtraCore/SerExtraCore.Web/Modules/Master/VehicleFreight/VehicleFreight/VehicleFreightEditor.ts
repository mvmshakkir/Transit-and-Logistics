





/// <reference path="../../../Common/Helpers/GridEditorBase.ts" />

namespace SerExtraCore.VehicleFreight {
    import fld = VehicleFreightRow.Fields;
    @Serenity.Decorators.registerClass()
    export class VehicleFreightEditor extends Common.GridEditorBase<VehicleFreightRow> {
        protected getColumnsKey() { return "VehicleFreight.VehicleFreight"; }
        protected getDialogType() { return VehicleFreightDialog; }
        protected getLocalTextPrefix() { return VehicleFreightRow.localTextPrefix; }

        private pendingChanges: Q.Dictionary<any> = {};
        public hidesupppieradvance: boolean;
        constructor(container: JQuery) {
            super(container);


        }

        validateEntity(row, id) {

            
            row.Materials = MaterialsDetails.MaterialsDetailsRow.getLookup().itemById[row.MaterialId].Materials;
            row.Unit = UOM.UOMRow.getLookup().itemById[row.UnitId].Unit;
           
            row.FromPlaceAreaName = Master.ShippingAreasRow.getLookup().itemById[row.FromPlace].AreaName;
            row.ToPlaceAreaName = Master.ShippingAreasRow.getLookup().itemById[row.ToPlace].AreaName;
            return true;
        }

    }
}










  
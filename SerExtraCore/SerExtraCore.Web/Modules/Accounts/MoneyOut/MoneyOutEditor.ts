

namespace SerExtraCore.Accounts {
    //import fld = MoneyOut.Fields;
    @Serenity.Decorators.registerClass()
    export class MoneyOutEditor extends Common.GridEditorBase<MoneyOutRow> {
        protected getColumnsKey() { return "Accounts.MoneyOut"; }
        protected getDialogType() { return MoneyOutDialog; }
        protected getLocalTextPrefix() { return MoneyOutRow.localTextPrefix; }

        private pendingChanges: Q.Dictionary<any> = {};
        public hidesupppieradvance: boolean;
        constructor(container: JQuery) {
            super(container);


        }

        //validateEntity(row, id) {

            
        //    row.Materials = MaterialsDetails.MaterialsDetailsRow.getLookup().itemById[row.MaterialId].Materials;
        //    row.Unit = UOM.UOMRow.getLookup().itemById[row.UnitId].Unit;
           
        //    row.FromPlaceAreaName = Master.ShippingAreasRow.getLookup().itemById[row.FromPlace].AreaName;
        //    row.ToPlaceAreaName = Master.ShippingAreasRow.getLookup().itemById[row.ToPlace].AreaName;
        //    return true;
        //}

    }
}










  
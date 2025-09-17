/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    export class ConsignmentVehicleDetailsEditor extends Common.GridEditorBase<ConsignmentVehicleDetailsRow> {
        protected getColumnsKey() { return "Transactions.ConsignmentVehicleDetails"; }
        protected getDialogType() { return ConsignmentVehicleDetailsDialog; }
        protected getLocalTextPrefix() { return ConsignmentVehicleDetailsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }

        validateEntity(row, id) {
            //row.ProductID = Q.toId(row.ProductID);

            //var sameProduct = Q.tryFirst(this.view.getItems(), x => x.ProductID === row.ProductID);
            //if (sameProduct && this.id(sameProduct) !== id) {
            //    Q.alert('This product is already in order details!');
            //    return false;
            //}

           
            if (row.Driver != "")
            {
                row.DriverEmployeeName = Master.EmployeeMasterRow.getLookup().itemById[row.Driver].EmployeeName;
            }
            if (row.ShippingAreaFrom != "")
            {
                row.ShippingAreaFromAreaName = Master.ShippingAreasRow.getLookup().itemById[row.ShippingAreaFrom].AreaName;
            }
            if (row.ShippingAreaTo != "")
            {
                row.ShippingAreaToAreaName = Master.ShippingAreasRow.getLookup().itemById[row.ShippingAreaTo].AreaName;
            }
            
            //row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
            return true;
        }
    }
}
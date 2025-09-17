/// <reference path="../../../Common/Helpers/GridEditorBase.ts" />

namespace SerExtraCore.CommisionDetails {
    import fld = CommisionDetailsRow.Fields;
    @Serenity.Decorators.registerClass()
    export class CommisionDetailsEditor extends Common.GridEditorBase<CommisionDetailsRow> {
        protected getColumnsKey() { return "CommisionDetails.CommisionDetails"; }
        protected getDialogType() { return CommisionDetailsDialog; }
        protected getLocalTextPrefix() { return CommisionDetailsRow.localTextPrefix; }

        /*public TsId: number;*/
        constructor(container: JQuery) {
            super(container);


        }

        //protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>) {
        //    super.initEntityDialog(itemType, dialog);


        //    // passing codeComite from grid editor to detail dialog
        //    (dialog as CommisionDetailsDialog).tsid = this.TsId
        //        ;
        //}
        validateEntity(row, id) {


            row.DriverEmployeeName = Master.EmployeeMasterRow.getLookup().itemById[row.DriverId].EmployeeName;
            row.MobileNumber = Master.EmployeeMasterRow.getLookup().itemById[row.DriverId].MobileNumber;
            row.Percentage = CommissionPercentage.CommissionPercentageRow.getLookup().itemById[row.PercentageId].Percentage;
           /* row.CommissionAmount = VehicleMovDetails.VehicleMovDetailsRow.getLookup().itemById[row.Id].TotalFright;*/
            return true;
        }


    }
}

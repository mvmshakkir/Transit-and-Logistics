//import { VehicleMovDetailsDialog } from './../Master/VehicleMovDetails/VehicleMovDetails/VehicleMovDetailsDialog'; 



namespace SerExtraCore.CommisionDetails {

    @Serenity.Decorators.registerClass()
    export class CommisionDetailsDialog extends Common.GridEditorDialog<CommisionDetailsRow> {
        protected getFormKey() { return CommisionDetailsForm.formKey; }
        //protected getIdProperty() { return UOMAmountRow.idProperty; }
        protected getLocalTextPrefix() { return CommisionDetailsRow.localTextPrefix; }
        /* protected getservice() { return UOMAmountRow.baseurl; }*/


        protected form = new CommisionDetailsForm(this.idPrefix);
        constructor() {
            super();

            this.form = new CommisionDetailsForm(this.idPrefix);



        }
        protected afterLoadEntity() {
            super.afterLoadEntity();
            this.form.DriverId.changeSelect2(e => {
                this.updatephone();
            });

            
            /*var tsid = this.form.TsId.value;*/
            /*this.form.TsId = "SupplierId";*/
            /*this.form.TsId.cascadeValue = this.supplierid ?? 0;*/
            //Subscribe to changes in MaterialId

            /*this.form.*/
            //this.form.PercentageId.changeSelect2(e => {
            //    this.updatePercentage();
            //});
        }
        //private updatePercentage() {
        //    const percentageId = Q.toId(this.form.PercentageId.value);
        //    if (percentageId > 0) {
        //        const commmissionpercentagerow = CommissionPercentage.CommissionPercentageRow.getLookup().itemById[percentageId];
        //        if (commmissionpercentagerow != null) {
        //           /* this.form.CommissionAmount.value = commmissionpercentagerow.Percentage ;*/

        //        }
        //    }



       /* public tsid: number;*/

        private updatephone() {
            const driverid = Q.toId(this.form.DriverId.value);
            if (driverid > 0) {
                const uomAmountRow = Master.EmployeeMasterRow.getLookup().itemById[driverid];
                if (uomAmountRow != null) {
                    this.form.MobileNumber.value = uomAmountRow.MobileNumber;
                   
                }
            }
        }

    }
}

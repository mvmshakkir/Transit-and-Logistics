
//namespace SerExtraCore.SettlementDetails {

//    @Serenity.Decorators.registerClass()
//    export class SettlementDetailsDialog extends Serenity.EntityDialog<SettlementDetailsRow, any> {
//        protected getFormKey() { return SettlementDetailsForm.formKey; }
//        protected getIdProperty() { return SettlementDetailsRow.idProperty; }
//        protected getLocalTextPrefix() { return SettlementDetailsRow.localTextPrefix; }
//        protected getService() { return SettlementDetailsService.baseUrl; }
//        protected getDeletePermission() { return SettlementDetailsRow.deletePermission; }
//        protected getInsertPermission() { return SettlementDetailsRow.insertPermission; }
//        protected getUpdatePermission() { return SettlementDetailsRow.updatePermission; }
namespace SerExtraCore.SettlementDetails {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class SettlementDetailsDialog extends Serenity.EntityDialog<SettlementDetailsRow, any> {
        protected getFormKey() { return SettlementDetailsForm.formKey; }
        protected getIdProperty() { return SettlementDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return SettlementDetailsRow.localTextPrefix; }
        //protected getNameProperty() { return SettlementDetailsRow.nameProperty; }/
        //protected getService() { return SettlementDetailsService.baseUrl; }

        //protected getDeletePermission() { return SettlementDetailsRow.deletePermission; }
        //protected getInsertPermission() { return SettlementDetailsRow.insertPermission; }
        //protected getUpdatePermission() { return SettlementDetailsRow.updatePermission; }

        protected form = new SettlementDetailsForm(this.idPrefix);

    constructor() {
        super();
        Q.reloadLookup(VehicleMovDetails.VehicleMovDetailsRow.lookupKey);
        this.form = new SettlementDetailsForm(this.idPrefix);
    }

        protected afterLoadEntity() {
            super.afterLoadEntity();
            //this.form.Crossing.hidesupppieradvance = true;
            this.form.TsNo.changeSelect2(e => {
                this.updateTrip();
                /*this.fualadvance();*/
            });
            }



            //private fualadvance() {
            //    const tsid = Q.toId(this.form.TsNo.value);
            //    if (tsid > 0) {
            //        const PaymentRow = Accounts.MoneyInRow.getLookup().itemById[tsid];
            //        if (PaymentRow != null) {
            //            this.form.MoneyInOutTsNo.value = PaymentRow.TotalAmount;
            //        }
            //    }
            //}
        //private fualadvance() {
        //    const tsid = Q.toId(this.form.TsNo.value);
        //    if (tsid > 0) {
        //        const uomAmountRowLookup = Accounts.MoneyInRow.getLookup().items;
        //        const paymentRows = uomAmountRowLookup.filter(row => row.TsId === tsid);
        //        if (paymentRows.length > 0) {
        //            let moneyInOutTsNoValue: string = '';

        //            for (const paymentRow of paymentRows) {
        //                const amount = parseFloat(paymentRow.Amount.toString());
        //                const taxAmount = parseFloat(paymentRow.TaxAmount.toString());
        //                moneyInOutTsNoValue += `Place = ${taxAmount}, Amount = ${amount}\n`;
        //            }

        //            // Assuming you want to set the string representation to the form field
        //            this.form.MoneyInOutTsNo.value = moneyInOutTsNoValue;
        //        }

        //            // Alternatively, if you want to set the numeric value directly
        //            // this.form.MoneyInOutTsNo.value = parseFloat(moneyInOutTsNoValue);

        //        //if (PaymentRow != null) {
        //        //    this.form.MoneyInOutTsNo.value = PaymentRow.TotalAmount;  
        //        //}
        //    }
        //}



        private updateTrip() {


            //Grid Push example
            //VehicleMovDetails.VehicleMovDetailsService.Retrieve(
            //    { EntityId: this.form.TsNo.value },
            //    response => {
                  
                 
            //        var z: Crossing.CrossingRow[];
            //        z = [];
            //        response.Entity.CommisionDetails.forEach((chargeitem, index1) => {

            //            z.push({  Name: chargeitem.DriverEmployeeName, Amount: chargeitem.Percentage });
            //            this.form.Crossing.value = z;
            //        })
            //    }

            //);
          

                const materialId = Q.toId(this.form.TsNo.value);
                if (materialId > 0) {
                    const TripRow = VehicleMovDetails.VehicleMovDetailsRow.getLookup().itemById[materialId];
                    if (TripRow != null) {
                        /* this.form.TripAdvance.value = 10;*/
                        this.form.TSNumber.value = TripRow.TsNo;
                        this.form.Advance.value = TripRow.Advance;
                        this.form.TripBalancee.value = TripRow.Profit;
                        this.form.toll.value = TripRow.Toll;
                    }
                    //const PaymentRow = Accounts.MoneyInRow.getLookup().itemById[materialId];
                    //if (PaymentRow != null) {
                    //    this.form.TripAdvance.value = PaymentRow.TotalAmount;
                    //}
                    {
                        /*  const uomAmountRow = UOMAmount.UOMAmountRow.getLookup().item();*/
                        //const uomAmountRowArray = Object.values(UOMAmount.UOMAmountRow.getLookup());
                        //const uomAmountRow = uomAmountRowArray.find(row => row.materialId === materialId);
                        var uomAmountRowLookup = FuelDetails.FuelDetailsRow.getLookup().items;
                        const uomAmountRow = uomAmountRowLookup.filter(row => row.TsId === materialId && row.AmountType==2);
                        if (uomAmountRow != null) {
                            const totalAmount = uomAmountRow.reduce((acc, curr) => acc + curr.TotalAmt, 0);
                            this.form.FualAmount.value = totalAmount ;
                        }
                    }
                    var uomAmountRowLookupp = Accounts.MoneyOutRow.getLookup().items;
                    const credit = uomAmountRowLookupp.filter(row => row.TsId === materialId);

                    
                    
            }
            

            }
            
            
    }
   

}
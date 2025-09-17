
//namespace SerExtraCore.Expenses {

//    @Serenity.Decorators.registerClass()
//    export class ExpensesDialog extends Serenity.EntityDialog<ExpensesRow, any> {
//        protected getFormKey() { return ExpensesForm.formKey; }
//        protected getIdProperty() { return ExpensesRow.idProperty; }
//        protected getLocalTextPrefix() { return ExpensesRow.localTextPrefix; }
//        protected getService() { return ExpensesService.baseUrl; }
//        protected getDeletePermission() { return ExpensesRow.deletePermission; }
//        protected getInsertPermission() { return ExpensesRow.insertPermission; }
//        protected getUpdatePermission() { return ExpensesRow.updatePermission; }

//        protected form = new ExpensesForm(this.idPrefix);



//    }
//}
namespace SerExtraCore.Expenses {

    @Serenity.Decorators.registerClass()
    export class ExpensesDialog extends Serenity.EntityDialog<ExpensesRow, any> {
        protected getFormKey() { return ExpensesForm.formKey; }
        protected getIdProperty() { return ExpensesRow.idProperty; }
        protected getLocalTextPrefix() { return ExpensesRow.localTextPrefix; }
        //protected getNameProperty() { return SettlementDetailsRow.nameProperty; }/
        //protected getService() { return SettlementDetailsService.baseUrl; }

        //protected getDeletePermission() { return SettlementDetailsRow.deletePermission; }
        //protected getInsertPermission() { return SettlementDetailsRow.insertPermission; }
        //protected getUpdatePermission() { return SettlementDetailsRow.updatePermission; }

        protected form = new ExpensesForm(this.idPrefix);

        constructor() {
            super();

            this.form = new ExpensesForm(this.idPrefix);
        }
        protected afterLoadEntity() {
            super.afterLoadEntity();

            this.form.VehicleId.changeSelect2(e => {
                this.updateTrip();
                /*this.fualadvance();*/
            });
            this.form.Startdate.changeSelect2(e => {
                this.updateTrip();
                /*this.fualadvance();*/
            });
            this.form.Enddate.changeSelect2(e => {
                this.updateTrip();
                /*this.fualadvance();*/
            });
        }

        private updateTrip() {
            const materialId = Q.toId(this.form.VehicleId.value);
            const sdate = this.form.Startdate.value;
            const edate = this.form.Enddate.value;
            if (materialId > 0) {
                var uomAmountRowLookup = VehicleMovDetails.VehicleMovDetailsRow.getLookup().items;
                const TripRow = VehicleMovDetails.VehicleMovDetailsRow.getLookup().itemById[materialId];
                const filteredRows = uomAmountRowLookup.filter(row => row.VehicleId === materialId);
               
                // Apply date condition to filtered rows
                const uomAmountRow = filteredRows.filter(row => {
                    const rowStartDate = extractDate(row.Startdate);
                    const rowEndDate = extractDate(row.Enddate);

                    return rowStartDate >= sdate && rowEndDate <= edate;
                });
                if (uomAmountRow.length > 0) {
                    /* this.form.TripAdvance.value = 10;*/
                    //this.form.TSNumber.value = TripRow.TsNo;
                    //this.form.Advance.value = TripRow.Advance;
                    //this.form.TripBalancee.value = TripRow.Profit;
                    //this.form.toll.value = TripRow.Toll;
                    const totalAmount = uomAmountRow.reduce((acc, curr) => acc + curr.Profit, 0);
                    this.form.Profit.value = totalAmount;
                }
                //var a = this.form.Startdate;
                const startDate = new Date(this.form.Startdate.value);
                const endDate = new Date(this.form.Enddate.value);

                const allRowsWithinRange = uomAmountRowLookup.every(row => {
                    const rowStartDate = new Date(row.Startdate);
                    const rowEndDate = new Date(row.Enddate);

                    return row.VehicleId === materialId &&
                        rowStartDate >= startDate &&
                        rowEndDate <= endDate;
                });
                console.log("uomAmountRowLookup:", uomAmountRowLookup);
                console.log("materialId:", materialId);
                console.log("startDate:", startDate);
                console.log("endDate:", endDate);
              
                if (allRowsWithinRange) {
                    const totalAmount = uomAmountRowLookup.reduce((acc, curr) => {
                        if (curr.VehicleId === materialId) {
                            const rowStartDate = new Date(curr.Startdate);
                            const rowEndDate = new Date(curr.Enddate);
                            if (rowStartDate >= startDate && rowEndDate <= endDate) {
                                return acc + curr.Profit;
                            }
                        }
                        return acc;
                    }, 0);

                    this.form.Profit.value = totalAmount;
                } else {
                    // Handle case where not all rows are within range
                }

            }

            function extractDate(datetimeString: string): string {
                return datetimeString.split('T')[0];
            }
        }
    }
}
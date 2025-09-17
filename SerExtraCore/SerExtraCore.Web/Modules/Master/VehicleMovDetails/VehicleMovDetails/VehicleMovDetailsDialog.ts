namespace SerExtraCore.VehicleMovDetails {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
   // @Serenity.Decorators.filterable()
    export class VehicleMovDetailsDialog extends Serenity.EntityDialog<VehicleMovDetailsRow, any> {
        protected getFormKey() { return VehicleMovDetailsForm.formKey; }
        protected getIdProperty() { return VehicleMovDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return VehicleMovDetailsRow.localTextPrefix; }
        protected getNameProperty() { return VehicleMovDetailsRow.nameProperty; }
        protected getService() { return VehicleMovDetailsService.baseUrl; }
        protected getDeletePermission() { return VehicleMovDetailsRow.deletePermission; }
        protected getInsertPermission() { return VehicleMovDetailsRow.insertPermission; }
        protected getUpdatePermission() { return VehicleMovDetailsRow.updatePermission; }

        protected form = new VehicleMovDetailsForm(this.idPrefix);

        constructor() {
            super();
            this.form = new VehicleMovDetailsForm(this.idPrefix);
            var self = this;
            // Subscribe to changes in Qty and LiterRate

            this.form.VehicleId.change(e => {
                this.updatestartkm();
               
            });



            this.form.StartKm.change(e => {
                this.updateTotalAmt();
                this.updateMilage();
            });

            this.form.EndKm.change(e => {
                this.updateTotalAmt();
                this.updateMilage();

            });
            this.form.Startdate.change(e => {
                this.updateDate();
            });

            this.form.Enddate.change(e => {
                this.updateDate();
            });
            this.form.TotalKm.change(e => {
                this.updateMilage();
            });

            this.form.TotalLiter.change(e => {
                self.updateMilage();
            });

            this.form.TotalDriverCommission.change(e => {
                this.calculateCommission();
                this.Totalexpense();
            });
            this.form.CommisionDetails.change(e => {
                this.calculateCommission();
            });

            this.form.DrivertwoBata.change(e => {
                this.calculateCommission();
                this.Totalexpense();
            });


            this.form.Rto.change(e => {
                this.totalProfit();
                this.Totalexpense();
            });

            this.form.Pc.change(e => {
                this.totalProfit()
                this.Totalexpense();
            });
            this.form.Toll
                .change(e => {
                    this.totalProfit();
                    this.Totalexpense();
                });
            this.form.ExtraBill
                .change(e => {
                    this.totalProfit();
                    this.Totalexpense();
                });

            //this.form.CommisionDetails
            //    .change(e =>
            //    this.)

        }

        protected afterLoadEntity() {
            super.afterLoadEntity();
            if (this.isNew()) {
                this.getNextNumber();

            

            }


            







            // Subscribe to onDataChanged event only if VehicleFreight view is loaded
            if (this.form.VehicleFreight) {
                (this.form.VehicleFreight.view as any).onDataChanged.subscribe(() => {
                    var total = 0;
                    var totalcommission = 0;
                    var totLoadExp = 0;
                    var totUnlExp = 0;

                    for (var k of this.form.VehicleFreight.getItems()) {
                        total += k.TotalFreight * k.PerTonRate || 0;
                        totalcommission += k.TotalCommission || 0;
                        totLoadExp += k.LoadingExpense || 0;
                        totUnlExp += k.UnloadingExpense || 0;

                    }
                    //this.form.TotalFright.value = total;
                    //this.form.TotalCommison.value = totalcommission;
                    //this.form.TotalLoadingExpense.value = totLoadExp;
                    //this.form.TotalUnloadExpense.value = totUnlExp;
                    this.calculatefreight();

                });



            


                (this.form.VehicleFreight.view as any).onRowCountChanged.subscribe(() => {
                    var total = 0;
                    var totalcommission = 0;
                    var totLoadExp = 0;
                    var totUnlExp = 0;

                    for (var k of this.form.VehicleFreight.getItems()) {
                        total += k.TotalFreight * k.PerTonRate || 0;
                        totalcommission += k.TotalCommission || 0;
                        totLoadExp += k.LoadingExpense || 0;
                        totUnlExp += k.UnloadingExpense || 0;

                    }
                    this.calculatefreight();
                    this.totcom();
                });

                (this.form.CommisionDetails.view as any).onDataChanged.subscribe(() => {
                    var total = 0;
                    for (var k of this.form.CommisionDetails.getItems()) {

                        total = k.Percentage || 0;


                    }

                    this.calculateCommission();
                });
                (this.form.CommisionDetails.view as any).onRowCountChanged.subscribe(() => {
                    var total = 0;
                    for (var k of this.form.CommisionDetails.getItems()) {

                        total = k.Percentage || 0;


                    }

                    this.calculateCommission();
                });



                //(this.form.CommisionDetails.view as any).onDataDeleted.subscribe(() => {
                //    var total = 0;
                //    for (var k of this.form.CommisionDetails.getItems()) {

                //        total = k.Percentage || 0;


                //    }

                //    this.calculateCommission();
                //});




                   







                if (this.form.ServiceAmount) {
                    (this.form.ServiceAmount.view as any).onDataChanged.subscribe(() => {
                        var total = 0;
                        for (var k of this.form.ServiceAmount.getItems()) {

                            total += k.Amount || 0;


                        }

                        this.calculatetotal();
                    });
                    (this.form.ServiceAmount.view as any).onRowCountChanged.subscribe(() => {
                        var total = 0;
                        for (var k of this.form.ServiceAmount.getItems()) {

                            total += k.Amount || 0;


                        }

                        this.calculatetotal();
                    });
                    if (this.form.FuelDetails) {
                        (this.form.FuelDetails.view as any).onDataChanged.subscribe(() => {
                            var totalqty = 0;
                            var totalfuelamount = 0;


                            for (var k of this.form.FuelDetails.getItems()) {
                                totalqty += k.Qty || 0;
                                totalfuelamount += k.TotalAmt || 0;



                            }
                            //this.form.TotalFuelAmount.value = totalfuelamount;
                            //this.form.TotalLiter.value = totalqty;

                            this.calculatefuel();


                        });
                        (this.form.FuelDetails.view as any).onRowCountChanged.subscribe(() => {
                            var totalqty = 0;
                            var totalfuelamount = 0;
                            for (var k of this.form.FuelDetails.getItems()) {
                                totalqty += k.Qty || 0;
                                totalfuelamount += k.TotalAmt || 0;



                            }

                            this.calculatefuel();
                        });


                    }
                }
            }
        }


        private updatestartkm() {
            const vehicleno = Number(this.form.VehicleId.value);
            const triprowlookup = VehicleMovDetailsRow.getLookup().items;

            const filteredRows = triprowlookup.filter(row => row.VehicleId == vehicleno);
            const lastRow = filteredRows[filteredRows.length - 1];

            if (lastRow) {
                // Store EndKm from the last row into a variable
                const endKm = lastRow.EndKm;
                console.log('EndKm:', endKm);
                this.form.StartKm.value = endKm;
                if (endKm) {
                    Serenity.EditorUtils.setReadonly(this.form.StartKm.element, true);
               
                }
                // Proceed with using endKm variable as needed
            }
            
            
        }








        private updateTotalAmt() {
            const start = this.form.StartKm.value;
            const end = this.form.EndKm.value;


            if (start !== null && end !== null) {
                this.form.TotalKm.value = end - start;
            }
        }

        private updateMilage() {
            const TotKm = this.form.TotalKm.value;
            const TotLiter = this.form.TotalLiter.value;


            if (TotKm !== null && TotLiter !== null) {

                this.form.Mileage.value = TotKm / TotLiter;
            }

        }



        private updateDate() {
            const startdate = new Date(this.form.Startdate.value);
            const enddate = new Date(this.form.Enddate.value);

            // Check if both startdate and enddate are valid Date objects
            if (!isNaN(startdate.getTime()) && !isNaN(enddate.getTime())) {
                // Calculate the difference in days
                const timeDifference = enddate.getTime() - startdate.getTime();
                const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));

                this.form.Totaldays.value = daysDifference;
            } else {
                // Handle invalid date inputs
                this.form.Totaldays.value = null;
            }
        }




        private getNextNumber() {

            var val = Q.trimToNull(this.form.TsNo.value);

            // we will only get next number when customer ID is empty or 1 character in length
            if (!val || val.length <= 1) {

                // if no customer ID yet (new record mode probably) use 'C' as a prefix
                var prefix = (val || 'TS').toUpperCase();

                // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                VehicleMovDetailsService.GetNextNumber({
                    Prefix: prefix,
                    Length: 6 // we want service to search for and return serials of 5 in length
                }, response => {
                    this.form.TsNo.value = response.Serial;

                    // this is to mark numerical part after prefix
                    (this.form.TsNo.element[0] as any).setSelectionRange(prefix.length, response.Serial.length);
                });
            }
        }


        private calculatefreight() {
            /*(this.form.VehicleFreight.view as any).onDataChanged.subscribe(() => {*/
            for (var k of this.form.VehicleFreight.getItems()) {
                var total = 0;
                var totalcommission = 0;
                var totLoadExp = 0;
                var totUnlExp = 0;

                for (var k of this.form.VehicleFreight.getItems()) {
                    total += k.UnitPrice*k.PerTonRate || 0;
                    totalcommission += k.TotalCommission || 0;
                    totLoadExp += k.LoadingExpense || 0;
                    totUnlExp += k.UnloadingExpense || 0;

                }
                this.form.TotalFright.value = total;

                /*this.form.TotalDriverCommission=*/

               /* this.form.TotalCommison.value = totalcommission;*/
                this.form.TotalLoadingExpense.value = totLoadExp;
                this.form.TotalUnloadExpense.value = totUnlExp;
                this.calculateCommission();
                this.totalProfit();
                this.Totalexpense();
                this.totcom();
            }

        }



        private calculatefuel() {
            var totalqty = 0;
            var totalfuelamount = 0;


            for (var k of this.form.FuelDetails.getItems()) {
                totalqty += k.Qty || 0;
                totalfuelamount += k.TotalAmt || 0;

            }
            this.form.TotalFuelAmount.value = totalfuelamount;
            this.form.TotalLiter.value = totalqty;
            this.updateMilage();
            this.totalProfit();
            this.Totalexpense();

        }

      





        private calculatetotal() {
            var total = 0;
            for (var k of this.form.ServiceAmount.getItems()) {

                total += k.Amount || 0;

            }
            this.form.TotalOtherExpense.value = total;
            this.updateMilage();
            this.totalProfit();
            this.Totalexpense();
        }


        private calculateCommission() {
            var totalFreight = this.form.TotalFright.value; // Assuming TotalFright is a DecimalEditor with a 'value' property
            var totalDriverCommission = 0;
            var totalDriverTwoBata = 0;

            for (var k of this.form.CommisionDetails.getItems()) {
                var percentage = k.Percentage;
                var commission = 0;

                if (percentage !== 0) { // If percentage is not 0, calculate commission
                    commission = (percentage / 100) * totalFreight;
                }

                // Update totalDriverCommission with the commission for each row
                totalDriverCommission += commission;

                // For the first row, update this.form.TotalDriverCommission
                if (totalDriverCommission == commission) {
                    this.form.TotalDriverCommission.value = commission + this.form.TotalCommison.value;
                }

                // For the second row, update this.form.DriverTwoBata
                if (totalDriverCommission > commission) {
                    this.form.DrivertwoBata.value = commission + this.form.TotalCommison.value;
                } else {
                    this.form.DrivertwoBata.value = 0;
                }
                this.totalProfit();
                this.Totalexpense();
            }
        }

        private Totalexpense() {
            var totexpense = this.form.Rto.value + this.form.Pc.value + this.form.Toll.value + this.form.ExtraBill.value +
                this.form.TotalFuelAmount.value + this.form.DrivertwoBata.value +
                this.form.TotalDriverCommission.value + this.form.TotalOtherExpense.value +
                this.form.TotalLoadingExpense.value + this.form.TotalUnloadExpense.value
                + this.form.TotalCommison.value;

            this.form.TotalExpense.value = totexpense;
        }


        private totalProfit() {
            // Calculate the total expenses
            var totalExpenses = this.form.Rto.value + this.form.Pc.value + this.form.Toll.value + this.form.ExtraBill.value +
                this.form.TotalFuelAmount.value + this.form.DrivertwoBata.value +
                this.form.TotalDriverCommission.value + this.form.TotalOtherExpense.value +
                this.form.TotalLoadingExpense.value + this.form.TotalUnloadExpense.value
                + this.form.TotalCommison.value;

            // Calculate the profit by subtracting total expenses from total freight
            this.form.Profit.value = this.form.TotalFright.value - totalExpenses;
        }
        private totcom() {
            this.form.TotalCommison.value = this.form.TotalFright.value * 0.05;
            this.totalProfit();
            this.Totalexpense();
            this.calculateCommission();
        }
       
    }



}
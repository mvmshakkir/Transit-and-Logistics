
namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class ConsignmentDialog extends Serenity.EntityDialog<ConsignmentRow, any> {
        protected getFormKey() { return ConsignmentForm.formKey; }
        protected getIdProperty() { return ConsignmentRow.idProperty; }
        protected getLocalTextPrefix() { return ConsignmentRow.localTextPrefix; }
        protected getNameProperty() { return ConsignmentRow.nameProperty; }
        protected getService() { return ConsignmentService.baseUrl; }
        protected getDeletePermission() { return ConsignmentRow.deletePermission; }
        protected getInsertPermission() { return ConsignmentRow.insertPermission; }
        protected getUpdatePermission() { return ConsignmentRow.updatePermission; }

        protected form = new ConsignmentForm(this.idPrefix);
        constructor() {
            super();

            this.form = new ConsignmentForm(this.idPrefix);

            this.form.Cgst.change(e => {
                this.cgst();
                
            });
            this.form.Sgst.change(e => {
                this.sgst();

            });
            this.form.Igst.change(e => {
                this.igst();

            });
            
            this.form.AdvanceAmount.change(e => {
                this.calculatebalance();

            });
            this.form.Extracharge.change(e => {
                this.calculatebalance();
            });
            this.form.ChargeDetailList.change(e => {
                this.calculatetotal();
            })
            this.form.TotalFreightAmount.change(e => {
                this.calculatetotal();
            })

           
        }
        
        protected afterLoadEntity() {
           
            super.afterLoadEntity();
            (this.form.ChargeDetailList.view as any).onDataChanged.subscribe(() => {
                var total = 0;

                for (var k of this.form.ChargeDetailList.getItems()) {

                    total += k.TotalAmountInLocalCurrency || 0;


                }

                this.calculatetotal();
            });

            (this.form.ChargeDetailList.view as any).onRowCountChanged.subscribe(() => {
                var total = 0;
                var slno = 1;
                for (var k of this.form.ChargeDetailList.getItems()) {

                    total += k.TotalAmountInLocalCurrency || 0;
                    k.Slno = slno++;

                }
                this.calculatetotal();

            });
            this.form.PdcPaymentDetails.type = 1;
            this.form.ShipperId.changeSelect2(e => {
                /*this.updateTrip();*/
                this.fualadvance();
            });
            this.form.ConsigneeId.changeSelect2(e => {
                this.fualadvance();
            })
        }


        private fualadvance() {
            const shiperid = Q.toId(this.form.ShipperId.value);
            const consigneeid = Q.toId(this.form.ConsigneeId.value);

            if (shiperid > 0 && consigneeid > 0) {
                const shipperRow = Master.CustomersRow.getLookup().itemById[shiperid];
                const consigneeRow = Master.CustomersRow.getLookup().itemById[consigneeid];

                if (shipperRow != null && consigneeRow != null) {
                    const shipperState = shipperRow.StateName;
                    const consigneeState = consigneeRow.StateName;

                    // Check if shipper state and consignee state are equal
                    //if (shipperState === consigneeState) {
                    //    // States are the same, show CGST and SGST fields
                    //    //this.form.Cgst.visibility = true;
                    //    //this.form.Sgst.visibility = true;
                    //    //this.form.Igst.visibility = false; // Hide IGST field
                    //    this.categoryToggler("Inside  States", true);
                    //    this.categoryToggler("Outside", false);
                    //} else {
                    //    // States are different, show IGST and CGST fields
                    //    //this.form.Cgst.visibility = true;
                    //    //this.form.Sgst.visibility = false; // Hide SGST field
                    //    //this.form.Igst.visibility = true;
                    //    this.categoryToggler("Outside", true);
                    //    this.categoryToggler("Inside  States", false);
                    //}
                }

            }






            //this.form.ChargeDetailList.hidesupppieradvance = true;
            Accounts.CommonService.GetConfigration(
                {}
                , response => {
                    if (response.Consignee) {
                        this.form.ConsigneeId.element.toggleClass("required", true);
                        this.element.find(".ConsigneeId").show();
                    }
                    else {
                        this.form.ConsigneeId.element.toggleClass("required", false);
                        this.element.find(".ConsigneeId").hide();
                    }
                    if (response.Shipper) {
                        this.form.ShipperId.element.toggleClass("required", true);
                        this.element.find(".ShipperId").show();
                    }
                    else {
                        this.form.ShipperId.element.toggleClass("required", false);
                        this.element.find(".ShipperId").hide();
                    }

                    if (!response.Consignee && !response.Shipper) {
                        this.form.Payment.value = "3";
                        this.form.Payment.readOnly = true;
                        this.element.find(".Payment").hide();
                    }
                });

            // fill next number in new record mode
            if (this.isNew()) {
                //this.getNextNumber();


                //Accounts.CommonService.GetConfigration(
                //    {}
                //    , response => {



                //            var charges = Master.ChargesRow.getLookup();
                //            var k = this.form.ChargeDetailList.getItems();
                //        k = [];
                //        var currname = "";
                //        if (response.DefaultCurrency != null) {
                //            var curr = Master.CurrenciesRow.getLookup().itemById[response.DefaultCurrency];
                //            if (curr != null) {
                //                currname = curr.CurrencyCode
                //            }
                //        }
                //        charges.items.forEach((item, index) => {
                //            var ch = Master.ChargesRow.getLookup().itemById[item.Id];
                //                k.push({
                //                    ChargeId: item.Id, ChargeChargeName: item.ChargeName, CurrencyId: response.DefaultCurrency, CurrencyCurrencyCode: currname, Description: item.ChargeName, TaxPer: ch.TaxRate
                //                });

                //            });
                //            this.form.ChargeDetailList.value = k;

                //    });

            }
            this.form.Billing.value = this.form.ConsigneeId.value;

            this.form.Payment.changeSelect2(e => {
                var Payment = Q.toId(this.form.Payment.value);
                if (Payment != null) {
                    if (Payment == 1) {
                        this.form.Billing.value = this.form.ConsigneeId.value;
                        this.form.Billing.readOnly = true;
                    }
                    else {
                        if (Payment == 2) {
                            this.form.Billing.value = this.form.ShipperId.value;
                            this.form.Billing.readOnly = true;
                        }
                        else {
                            this.form.Billing.readOnly = false;
                        }
                    }

                }


            });
            this.form.ConsigneeId.changeSelect2(e => {
                var Payment = Q.toId(this.form.Payment.value);
                if (Payment != null) {
                    if (Payment == 1) {
                        this.form.Billing.value = this.form.ConsigneeId.value;
                    }
                }


            });
            this.form.ClearanceId.changeSelect2(e => {
                var clearenceid = Q.toId(this.form.ClearanceId.value);
                if (clearenceid > 0) {
                    var clea = Transactions.ClearanceRow.getLookup().itemById[clearenceid];
                    if (clea != null) {
                        if (clea.Consignee != null) {
                            this.form.ConsigneeId.value = clea.Consignee.toString();
                        }
                        if (clea.Shipper != null) {
                            this.form.ShipperId.value = clea.Shipper.toString();
                        }
                        this.setpaymenttype();
                    }
                }


            });
            this.form.AdvanceAmount.change(e => {

                this.calculatebalance();
                this.setadancerequied();

            });

            this.form.ShipperId.changeSelect2(e => {
                var Payment = Q.toId(this.form.Payment.value);
                if (Payment != null) {
                    if (Payment == 2) {
                        this.form.Billing.value = this.form.ShipperId.value;
                    }
                }


            });
            //if (this.form.ChargeDetailList) {
            //    (this.form.ChargeDetailList.view as any).onDataChanged.subscribe(() => {
            //        var total = 0;
            //        /* var totalfuelamount = 0;*/


            //        for (var k of this.form.ChargeDetailList.getItems()) {
            //            total += k.TotalAmountInLocalCurrency || 0;



            //        }
            //        //this.form.TotalFuelAmount.value = totalfuelamount;
            //        //this.form.TotalLiter.value = totalqty;

            //        this.calculatetotal();


            //    });
        
                //(this.form.ChargeDetailList.view as any).onDataChanged.subscribe(() => {
                //    var total = 0;

                //    for (var k of this.form.ChargeDetailList.getItems()) {

                //        total += k.TotalAmountInLocalCurrency || 0;


                //    }

                //    this.calculatetotal();
                //});

                //(this.form.ChargeDetailList.view as any).onRowCountChanged.subscribe(() => {
                //    var total = 0;
                //    var slno = 1;
                //    for (var k of this.form.ChargeDetailList.getItems()) {

                //        total += k.TotalAmountInLocalCurrency || 0;
                //        k.Slno = slno++;

                //    }
                //    this.calculatetotal();

                //});
            
            (this.form.ConsignmentVehicleDetails.view as any).onRowCountChanged.subscribe(() => {
                var slno = 1;
                for (var k of this.form.ConsignmentVehicleDetails.getItems()) {

                   
                    k.Slno = slno++;


                }
                this.calculatetotal();
            });
            (this.form.ConsignmentVehicleDetails.view as any).onDataChanged.subscribe(() => {
                
            //    this.setsupp();
                this.calculatetotal();
                
            });
            this.form.AdvancePaymentType.changeSelect2(e => {
               /* this.setvisible();*/
            });
            /*this.setvisible();*/
            this.setadancerequied();
          //  this.setsupp();
        }
        //private setvisible() {
        //    var productID = Q.toId(this.form.AdvancePaymentType.value);
        //    if (productID != null) {

        //        if (productID == 3) {
        //            this.form.AdvanceAccountId.element.toggleClass("required", false);
        //            this.element.find(".AdvanceAccountId").hide();
        //            this.element.find(".PdcPaymentDetails").show();
        //        }
        //        else {
        //            this.form.AdvanceAccountId.element.toggleClass("required", true);
        //            this.element.find(".AdvanceAccountId").show();
        //            this.element.find(".PdcPaymentDetails").hide();
        //        }

        //    }
        //    else {
        //        this.element.find(".AdvanceAccountId").hide();
        //        this.element.find(".PdcPaymentDetails").hide();
        //    }
        //}
        private setpaymenttype() {
            var Payment = Q.toId(this.form.Payment.value);
            if (Payment != null) {
                if (Payment == 1) {
                    this.form.Billing.value = this.form.ConsigneeId.value;
                    this.form.Billing.readOnly = true;
                }
                else {
                    if (Payment == 2) {
                        this.form.Billing.value = this.form.ShipperId.value;
                        this.form.Billing.readOnly = true;
                    }
                    else {
                        this.form.Billing.readOnly = false;
                    }
                }

            }
        }
        private calculatetotal() {
            var total = 0;
            for (var k of this.form.ChargeDetailList.getItems()) {

                total += k.TotalAmountInLocalCurrency || 0;
               

            }
            for (var l of this.form.ConsignmentVehicleDetails.getItems()) {


                total += l.TotalAmountInLocalCurrency || 0;
                for (var k of l.VehicleCharges) {

                    total += k.TotalAmountInLocalCurrency || 0;


                }

            }
            this.form.TotalAmount.value = total;
            this.totconsignmentamount();
            this.calculatebalance();
            this.cgst();
            this.sgst();
            this.igst();
        }

        private cgst() {
            var amount = this.form.TotalAmount.value
            var amount = this.form.TotalAmount.value;
            var taxpercentage = this.form.Cgst.value;

            // Calculate the tax amount
            var taxamount = (amount * taxpercentage) / 100;

            this.form.CgstAmt.value = taxamount;
            this.totaltax();
        }
        private sgst() {
            var amount = this.form.TotalAmount.value
            var amount = this.form.TotalAmount.value;
            var taxpercentage = this.form.Sgst.value;

            // Calculate the tax amount
            var taxamount = (amount * taxpercentage) / 100;

            this.form.SgstAmt.value = taxamount;
            this.totaltax();
        }
        private igst() {
            var amount = this.form.TotalAmount.value
            var amount = this.form.TotalAmount.value;
            var taxpercentage = this.form.Igst.value;

            // Calculate the tax amount
            var taxamount = (amount * taxpercentage) / 100;

            this.form.IgstAmt.value = taxamount;
            this.totaltax();
        }

        private totaltax() {
            var tottax = this.form.IgstAmt.value + this.form.SgstAmt.value + this.form.CgstAmt.value;
            this.form.TotalTaxAmount.value = tottax;
            this.totconsignmentamount();
        }



        private setadancerequied() {
            if (this.form.AdvanceAmount.value != null) {
                this.form.AdvanceAccountId.element.toggleClass("required", true);
                this.form.AdvancePaymentType.element.toggleClass("required", true);

            }
            else {
                this.form.AdvanceAccountId.element.toggleClass("required", false);
                this.form.AdvancePaymentType.element.toggleClass("required", false);
            }
        }
        private calculatebalance() {
            this.form.BalanceAmount.value = (this.form.TotalFreightAmount.value +this.form.Extracharge.value) - this.form.AdvanceAmount.value;
            
        }

        private totconsignmentamount() {
            this.form.TotalFreightAmount.value = this.form.TotalAmount.value + this.form.TotalTaxAmount.value;
            this.calculatebalance();
            
        }
        private setsupp() {
            //var suppen = false;
            //var slno = 1;
            //for (var k of this.form.ConsignmentVehicleDetails.getItems()) {

            //    if (k.TypeOfVehicle == VehicleTypes.Value2) {
            //        suppen = true;
            //    }
              


            //}
            //if (suppen) {
            //    Serenity.EditorUtils.setReadonly(this.form.SupplierAmount.element, false);
            //    Serenity.EditorUtils.setReadonly(this.form.SupplierId.element, false);
            //}
            //else {
            //    Serenity.EditorUtils.setReadonly(this.form.SupplierAmount.element, true);
            //    Serenity.EditorUtils.setReadonly(this.form.SupplierId.element, true);
            //}
        }
        //private getNextNumber() {

        //    var val = Q.trimToNull(this.form.JobNo.value);

        //    // we will only get next number when customer ID is empty or 1 character in length
        //    if (!val || val.length <= 1) {

        //        // if no customer ID yet (new record mode probably) use 'C' as a prefix
        //        var prefix = (val || '').toUpperCase();

        //        // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
        //        ConsignmentService.GetNextNumber({
        //            Prefix: prefix,
        //            Length: 6 // we want service to search for and return serials of 5 in length
        //        }, response => {
        //            this.form.JobNo.value = response.Serial;

        //            // this is to mark numerical part after prefix
        //                (this.form.JobNo.element[0] as any).setSelectionRange(prefix.length, response.Serial.length);
        //        });
        //    }
        //}
        protected categoryToggler(categoryTitle: string, value: boolean) {
            var ele = this.element.find(".category-title:contains('" + categoryTitle + "')").parent();
            ele.toggle(value);
        };  

    }

}
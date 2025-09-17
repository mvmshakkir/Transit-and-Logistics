
namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    export class ConsignmentVehicleDetailsDialog extends Common.GridEditorDialog<ConsignmentVehicleDetailsRow> {
        protected getFormKey() { return ConsignmentVehicleDetailsForm.formKey; }
      //  protected getIdProperty() { return ConsignmentVehicleDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return ConsignmentVehicleDetailsRow.localTextPrefix; }
        //protected getNameProperty() { return ConsignmentVehicleDetailsRow.nameProperty; }
        //protected getService() { return ConsignmentVehicleDetailsService.baseUrl; }
        //protected getDeletePermission() { return ConsignmentVehicleDetailsRow.deletePermission; }
        //protected getInsertPermission() { return ConsignmentVehicleDetailsRow.insertPermission; }
        //protected getUpdatePermission() { return ConsignmentVehicleDetailsRow.updatePermission; }

        protected form: ConsignmentVehicleDetailsForm;
        constructor() {
            super();

            this.form = new ConsignmentVehicleDetailsForm(this.idPrefix);
            (this.form.VehicleCharges.view as any).onRowCountChanged.subscribe(() => {

                var slno = 1;
                for (var k of this.form.VehicleCharges.getItems()) {

                    k.Slno = slno++;
                }
            });
           
        }
        protected afterLoadEntity() {
            super.afterLoadEntity();
            this.saveDialog();
            this.form.VehicleCharges.hidesupppieradvance = true;
            this.form.VehicleId.changeSelect2(e => {
                var productID = Q.toId(this.form.VehicleId.value);
                if (productID != null) {
                    var x = Master.VehiclesRow.getLookup().itemById[productID];
                    this.form.Type.value = x.Description;
                    this.form.VehicleNumber.value = x.VehicleNumber;
                    if (x.Driver != null) {


                        this.form.Driver.value = x.Driver.toString();
                    }

                    Accounts.CommonService.GetVehicleSpecification(
                        { vehicleId: productID }
                        , response => {
                            if (response != null) {
                                this.form.VehicleSpecifications.value = response.toString();
                            }
                           
                        });
                    if (this.form.TypeOfVehicle.value == "2") {
                        Accounts.CommonService.GetConsigmentByVehicle(
                            {
                                vehicleId: productID
                            }
                            , response => {



                                if (response != null) {
                                    if (response.Id > 0) {
                                        if (response.CountryId != null) {
                                            this.form.CountryId.value = response.CountryId.toString();
                                        }
                                        this.form.DriverName.value = response.DriverName;
                                        this.form.Number.value = response.Number;
                                        this.form.ResidentID.value = response.ResidentID;

                                       
                                    }
                                }
                            });
                    }

                }
            });
            /*var a = this.form.VehicleCharges.value;*/




            this.form.TypeOfVehicle.changeSelect2(e => {
                this.hidediv();
            });
            this.hidediv();

           

            if (this.isNew()) {

                Accounts.CommonService.GetConfigration(
                    {}
                    , response => {
                        if (response.DefaultCurrency != null) {
                            this.form.CurrencyId.value = response.DefaultCurrency.toString();
                        }
                    });

            }
            this.form.ChargeId.changeSelect2(e => {
                var productID = Q.toId(this.form.ChargeId.value);
                if (productID != null) {
                    var x = Master.ChargesRow.getLookup().itemById[productID];
                    var desc = x.Description;
                  
                    
                    if (this.form.ShippingAreaFrom.text != null) {
                        desc = desc   + " " + this.form.ShippingAreaFrom.text;
                    }
                    if (this.form.ShippingAreaTo.text != null) {
                        desc = desc + "-" + this.form.ShippingAreaTo.text;
                    }
                    var vehicleid = Q.toId(this.form.VehicleId.value);
                    if (vehicleid != null) {
                        var veh = Master.VehiclesRow.getLookup().itemById[vehicleid];
                        if (veh.Description != null) {
                            desc = desc + " (" + veh.Description + ")";
                        }
                    }
                    this.form.Description.value = desc;
                    this.form.TaxPer.value = x.TaxRate;


                }
            });

            this.form.CurrencyId.changeSelect2(e => {
                var productID = Q.toId(this.form.CurrencyId.value);
                if (productID != null) {
                    var x = Master.CurrenciesRow.getLookup().itemById[productID];
                    this.form.ExchangeRate.value = x.ExchangeRate;
                    this.CalculateTotal();

                }
            });
            this.form.ExchangeRate.change(e => {
                this.CalculateTotal();
            });
            this.form.Amount.change(e => {
                this.CalculateTotal();
            });
            this.form.Qty.change(e => {
                this.CalculateTotal();
            });
            this.form.TaxPer.change(e => {
                this.CalculateTotal();
            });
            this.form.SupplierAdvanceAmount.change(e => {
                if (this.form.SupplierAdvanceAmount.value != null) {
                    this.form.AccountId.element.toggleClass("required", true);
                    this.form.PaymentType.element.toggleClass("required", true);
                }
                else {
                    this.form.AccountId.element.toggleClass("required", false);
                    this.form.PaymentType.element.toggleClass("required", false);
                }
            });
            this.form.DisAmount.change(e => {
                this.CalculateTotal();
            });

            this.form.DriverAdvance.change(e => {
                if (this.form.DriverAdvance.value != null) {
                    this.form.DriverAdvanceAccount.element.toggleClass("required", true);
                    this.form.DriverAdvancePaymentType.element.toggleClass("required", true);
                }
                else {
                    this.form.DriverAdvanceAccount.element.toggleClass("required", false);
                    this.form.DriverAdvancePaymentType.element.toggleClass("required", false);
                }
            });
            
        }
        private CalculateTotal() {
            var amount = this.form.Amount.value * this.form.Qty.value;
            this.form.Total.value = amount;
            var discount = 0;
            if (this.form.DisAmount.value != null) {

                discount = this.form.DisAmount.value;
            }
            var taxable = amount - discount;
            var taxper = 0;
            if (this.form.TaxPer.value != null) {
                taxper = this.form.TaxPer.value;
            }
            this.form.TaxableAmount.value = taxable;
            var taxamount = (taxable * taxper) / 100;
            var totalamount = taxable + taxamount;
            this.form.TotalAmount.value = totalamount;
            this.form.TaxAmount.value = taxamount;
            this.form.TotalAmountInLocalCurrency.value = totalamount * this.form.ExchangeRate.value;
           
        }
        protected hidediv() {
            if (this.form.TypeOfVehicle.value == "1") {
                this.form.SupplierId.value = null;
                this.form.SupplierAmount.value = null;
                this.categoryToggler("Own Driver Details", true);
                this.categoryToggler("Outsourse Driver Details", false);
                this.categoryToggler("Supplier Payment Details", false);
            }
            else {
                if (this.form.TypeOfVehicle.value == "2") {


                    this.categoryToggler("Own Driver Details", false);
                    this.categoryToggler("Outsourse Driver Details", true);
                    this.categoryToggler("Supplier Payment Details", true);
                }
                else {
                    this.categoryToggler("Own Driver Details", false);
                    this.categoryToggler("Outsourse Driver Details", false);
                    this.categoryToggler("Supplier Payment Details", false);
                }
            }
        }
        protected categoryToggler(categoryTitle: string, value: boolean) {
            var ele = this.element.find(".category-title:contains('" + categoryTitle + "')").parent();
            ele.toggle(value);
        };       
        protected saveDialog() {
            // Call the base class method to perform default saving actions
            var vehicleCharges = this.form.VehicleCharges.getItems();

            // Iterate through each ConsignmentChargesRow object in VehicleCharges list
            for (var chargeRow of vehicleCharges) {
                // Set default values of 0 for each property inside the ConsignmentChargesRow object
                chargeRow.ChargeId = 0;
                chargeRow.Amount = 0;
                chargeRow.Qty = 0;
                chargeRow.Total = 0;
                chargeRow.DisAmount = 0;
                chargeRow.TaxableAmount = 0;
                chargeRow.TaxPer = 0;
                chargeRow.TaxAmount = 0;
                chargeRow.TotalAmount = 0;
                chargeRow.CurrencyId = 0;
                chargeRow.ExchangeRate = 0;
                chargeRow.TotalAmountInLocalCurrency = 0;
            }
        }
    }
}

namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    export class InvoiceVehicleDetailsDialog extends Common.GridEditorDialog<InvoiceVehicleDetailsRow> {
        protected getFormKey() { return InvoiceVehicleDetailsForm.formKey; }
     //   protected getIdProperty() { return InvoiceVehicleDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return InvoiceVehicleDetailsRow.localTextPrefix; }
        //protected getNameProperty() { return InvoiceVehicleDetailsRow.nameProperty; }
        //protected getService() { return InvoiceVehicleDetailsService.baseUrl; }
        //protected getDeletePermission() { return InvoiceVehicleDetailsRow.deletePermission; }
        //protected getInsertPermission() { return InvoiceVehicleDetailsRow.insertPermission; }
        //protected getUpdatePermission() { return InvoiceVehicleDetailsRow.updatePermission; }

        protected form :  InvoiceVehicleDetailsForm;
        constructor() {
            super();

            this.form = new InvoiceVehicleDetailsForm(this.idPrefix);
            (this.form.VehicleCharges.view as any).onRowCountChanged.subscribe(() => {

                var slno = 1;
                for (var k of this.form.VehicleCharges.getItems()) {


                    k.Slno = slno++;


                }
            });
        }
        protected afterLoadEntity() {
            super.afterLoadEntity();
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

                }
            });
            if (this.isNew()) {

                Accounts.CommonService.GetConfigration(
                    {}
                    , response => {
                        if (response.DefaultCurrency != null) {
                            this.form.CurrencyId.value = response.DefaultCurrency.toString();
                        }
                    });

            }
            this.form.TypeOfVehicle.changeSelect2(e => {
                this.hidediv();
            });
            this.hidediv();

            this.form.ChargeId.changeSelect2(e => {
                var productID = Q.toId(this.form.ChargeId.value);
                if (productID != null) {
                    var x = Master.ChargesRow.getLookup().itemById[productID];
                    var desc = x.Description;


                    if (this.form.ShippingAreaFrom.text != null) {
                        desc = desc + " " + this.form.ShippingAreaFrom.text;
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
            this.form.DisAmount.change(e => {
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
    }
}

namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    export class ConsignmentChargesDialog extends Common.GridEditorDialog<ConsignmentChargesRow> {
        protected getFormKey() { return ConsignmentChargesForm.formKey; }
        //protected getIdProperty() { return ConsignmentChargesRow.idProperty; }
        protected getLocalTextPrefix() { return ConsignmentChargesRow.localTextPrefix; }
        //protected getNameProperty() { return ConsignmentChargesRow.nameProperty; }
        //protected getService() { return ConsignmentChargesService.baseUrl; }
        //protected getDeletePermission() { return ConsignmentChargesRow.deletePermission; }
        //protected getInsertPermission() { return ConsignmentChargesRow.insertPermission; }
        //protected getUpdatePermission() { return ConsignmentChargesRow.updatePermission; }

        protected form: ConsignmentChargesForm;
        constructor() {
            super();

            this.form = new ConsignmentChargesForm(this.idPrefix);
           /* this.form.ChargeId.value = '0';*/
           
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();
            //this.form.ChargeId.value = '0';
            //if (this.hidesupppieradvance) {
            //    this.element.find(".SupplierAdvanceAmount").hide();
            //    this.element.find(".PaymentType").hide();
            //    this.element.find(".AccountId").hide();

           // }
            // fill next number in new record mode
            if (this.isNew()) {

                Accounts.CommonService.GetConfigration(
                    { }
                    , response => {
                        if (response.DefaultCurrency != null) {
                            this.form.CurrencyId.value = response.DefaultCurrency.toString();
                        }
                    });

            }
       
            
            //this.form.ChargeId.changeSelect2(e => {
            //    var productID = Q.toId(this.form.ChargeId.value);
            //    if (productID != null) {
            //        var x = Master.ChargesRow.getLookup().itemById[productID];
            //        this.form.Description.value = x.Description;
            //        this.form.TaxPer.value = x.TaxRate;

            //    }
            //});
           /* this.form.ChargeId.value = '0';*/

            // Handle the changeSelect2 event
            this.form.ChargeId.changeSelect2(e => {
                // Proceed with handling the selected charge
                var productID = Q.toId(this.form.ChargeId.value);
                //if (productID != null) {
                //    var x = Master.ChargesRow.getLookup().itemById[productID];
                //    this.form.Description.value = x.Description;
                //    this.form.TaxPer.value = x.TaxRate;
                //}
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
            
            this.form.Total.change(e => {
                this.CalculateTotal();
            });
            this.form.Qty.change(e => {
                this.CalculateTotal();
            });

            this.form.TaxPer.change(e => {
                this.CalculateTotal();
            });
            this.form.DisAmount.change(e => {
                this.CalculateTotal();
            });
            this.form.TotalAmount.change(e => {
                this.CalculateTotal();
            });
            //this.form.Total.change(e => {
            //    this.CalculateTotal();
            //    this.CalculateTotal();
            //});
        }
        private CalculateTotal() {
            if (this.form.Amount.value && this.form.Qty.value) {
                var amount = this.form.Amount.value * this.form.Qty.value;
                this.form.Total.value = amount;
            } else if (this.form.Total.value && this.form.Qty.value) {
                var rate = this.form.Total.value / this.form.Qty.value;
                this.form.Amount.value = rate;
            }

            var discount = 0;
            //if (this.form.DisAmount.value != null) {

            //    discount = this.form.DisAmount.value;
            //}
            var taxable = amount - discount;
            var taxper = 0;
            if (this.form.TaxPer.value != null) {
                taxper = this.form.TaxPer.value;
            }
            /* this.form.TaxableAmount.value = taxable;*/
            this.form.TaxableAmount.value = this.form.DisAmount.value + this.form.TotalAmount.value;
            var taxamount = (taxable * taxper) / 100;
            var totalamount = taxable + taxamount;
            this.form.TotalAmount.value = totalamount;
            this.form.TaxAmount.value = taxamount;
            this.form.TotalAmountInLocalCurrency.value = this.form.DisAmount.value + this.form.Total.value;
        }
        public hidesupppieradvance: boolean;
    }
}
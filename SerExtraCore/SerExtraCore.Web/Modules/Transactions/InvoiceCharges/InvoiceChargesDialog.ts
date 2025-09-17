
namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    export class InvoiceChargesDialog extends Common.GridEditorDialog<InvoiceChargesRow> {
        protected getFormKey() { return InvoiceChargesForm.formKey; }
      //  protected getIdProperty() { return InvoiceChargesRow.idProperty; }
        protected getLocalTextPrefix() { return InvoiceChargesRow.localTextPrefix; }
        //protected getNameProperty() { return InvoiceChargesRow.nameProperty; }
        //protected getService() { return InvoiceChargesService.baseUrl; }
        //protected getDeletePermission() { return InvoiceChargesRow.deletePermission; }
        //protected getInsertPermission() { return InvoiceChargesRow.insertPermission; }
        //protected getUpdatePermission() { return InvoiceChargesRow.updatePermission; }

        protected form: InvoiceChargesForm;
        protected afterLoadEntity() {
            super.afterLoadEntity();
            if (this.hidesupppieradvance) {
                this.element.find(".SupplierAdvanceAmount").hide();
                this.element.find(".PaymentType").hide();
                this.element.find(".AccountId").hide();
            }
        }
        constructor() {
            super();
            if (this.isNew()) {

                Accounts.CommonService.GetConfigration(
                    {}
                    , response => {
                        if (response.DefaultCurrency != null) {
                            this.form.CurrencyId.value = response.DefaultCurrency.toString();
                        }
                    });

            }
            this.form = new InvoiceChargesForm(this.idPrefix);

            this.form.ChargeId.changeSelect2(e => {
                var productID = Q.toId(this.form.ChargeId.value);
                if (productID != null) {
                    var x = Master.ChargesRow.getLookup().itemById[productID];
                    this.form.Description.value = x.Description;


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
            this.form.DisAmount.change(e => {
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
            var taxable = amount + discount;
           
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
        public hidesupppieradvance: boolean;
    }
}
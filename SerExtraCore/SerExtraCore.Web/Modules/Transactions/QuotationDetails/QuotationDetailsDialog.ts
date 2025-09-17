
namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    export class QuotationDetailsDialog extends Common.GridEditorDialog<QuotationDetailsRow> {
        protected getFormKey() { return QuotationDetailsForm.formKey; }
      //  protected getIdProperty() { return QuotationDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return QuotationDetailsRow.localTextPrefix; }
        //protected getNameProperty() { return QuotationDetailsRow.nameProperty; }
        //protected getService() { return QuotationDetailsService.baseUrl; }
        //protected getDeletePermission() { return QuotationDetailsRow.deletePermission; }
        //protected getInsertPermission() { return QuotationDetailsRow.insertPermission; }
        //protected getUpdatePermission() { return QuotationDetailsRow.updatePermission; }

        protected form :  QuotationDetailsForm;
        constructor() {
            super();
            this.form = new QuotationDetailsForm(this.idPrefix);
        }
        protected afterLoadEntity() {
            super.afterLoadEntity();
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
            this.form.Rate.change(e => {
                this.CalculateTotal();
            });
            this.form.Quantity.change(e => {
                this.CalculateTotal();
            });
            this.form.TaxPer.change(e => {
                this.CalculateTotal();
            });
            
        }
        private CalculateTotal() {
            var amount = this.form.Rate.value * this.form.Quantity.value;
            this.form.TaxableAmount.value = amount;
            var discount = 0;
            
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

    }
}

namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    export class InvoiceCollectionDialog extends Serenity.EntityDialog<InvoiceCollectionRow, any> {
        protected getFormKey() { return InvoiceCollectionForm.formKey; }
        protected getIdProperty() { return InvoiceCollectionRow.idProperty; }
        protected getLocalTextPrefix() { return InvoiceCollectionRow.localTextPrefix; }
        protected getNameProperty() { return InvoiceCollectionRow.nameProperty; }
        protected getService() { return InvoiceCollectionService.baseUrl; }
        protected getDeletePermission() { return InvoiceCollectionRow.deletePermission; }
        protected getInsertPermission() { return InvoiceCollectionRow.insertPermission; }
        protected getUpdatePermission() { return InvoiceCollectionRow.updatePermission; }

        protected form = new InvoiceCollectionForm(this.idPrefix);
        constructor() {
            super();

            
        }
       
        protected afterLoadEntity() {
            super.afterLoadEntity();
            this.form.PdcPaymentDetails.type = 1;
            this.form.DetailList.customerid = this.entity.CustomerId;
            this.form = new InvoiceCollectionForm(this.idPrefix);
            this.form.Status.changeSelect2(e => {
                InvoiceService.LoginUser({

                }, response => {
                    this.form.StatusUser.value = response;
                });

            });
            this.form.CustomerId.changeSelect2(e => {
                var productID = Q.toId(this.form.CustomerId.value);
                if (productID != null) {

                    this.form.DetailList.customerid = productID;
                }
            });
            (this.form.DetailList.view as any).onDataChanged.subscribe(() => {
                var total = 0;
                for (var k of this.form.DetailList.getItems()) {

                    total += k.Amount || 0;


                }

                this.form.TotalAmount.value = total;
            });
            (this.form.DetailList.view as any).onRowCountChanged.subscribe(() => {
                var total = 0;
                for (var k of this.form.DetailList.getItems()) {

                    total += k.Amount || 0;


                }

                this.form.TotalAmount.value = total;
            });


            Accounts.CommonService.GetUserHierarchy({
                type: "InvoiceCollection"
            }, response => {
                this.form.Status.readOnly = !response;
            });

            // fill next number in new record mode
            if (this.isNew())
                this.getNextNumber();

            this.form.PaymentType.changeSelect2(e => {
                this.setvisible();
            });
            this.setvisible();
        }
        private setvisible() {
            var productID = Q.toId(this.form.PaymentType.value);
            if (productID != null) {

                if (productID == 3) {
                    this.form.AccountId.element.toggleClass("required", false);
                    this.element.find(".AccountId").hide();
                    this.element.find(".PdcPaymentDetails").show();
                }
                else {
                    this.form.AccountId.element.toggleClass("required", true);
                    this.element.find(".AccountId").show();
                    this.element.find(".PdcPaymentDetails").hide();
                }

            }
            else {
                this.element.find(".AccountId").hide();
                this.element.find(".PdcPaymentDetails").hide();
            }
        }
        private getNextNumber() {

            var val = Q.trimToNull(this.form.CollectionNumber.value);

            // we will only get next number when customer ID is empty or 1 character in length
            if (!val || val.length <= 1) {

                // if no customer ID yet (new record mode probably) use 'C' as a prefix
                var prefix = (val || 'C').toUpperCase();

                // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                InvoiceCollectionService.GetNextNumber({
                    Prefix: prefix,
                    Length: 6 // we want service to search for and return serials of 5 in length
                }, response => {
                        this.form.CollectionNumber.value = response.Serial;

                    // this is to mark numerical part after prefix
                        (this.form.CollectionNumber.element[0] as any).setSelectionRange(prefix.length, response.Serial.length);
                });
            }
        }
    }
}
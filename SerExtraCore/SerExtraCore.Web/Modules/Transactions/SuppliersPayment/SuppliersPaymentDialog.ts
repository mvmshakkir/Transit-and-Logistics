
namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    export class SuppliersPaymentDialog extends Serenity.EntityDialog<SuppliersPaymentRow, any> {
        protected getFormKey() { return SuppliersPaymentForm.formKey; }
        protected getIdProperty() { return SuppliersPaymentRow.idProperty; }
        protected getLocalTextPrefix() { return SuppliersPaymentRow.localTextPrefix; }
        protected getNameProperty() { return SuppliersPaymentRow.nameProperty; }
        protected getService() { return SuppliersPaymentService.baseUrl; }
        protected getDeletePermission() { return SuppliersPaymentRow.deletePermission; }
        protected getInsertPermission() { return SuppliersPaymentRow.insertPermission; }
        protected getUpdatePermission() { return SuppliersPaymentRow.updatePermission; }

        protected form = new SuppliersPaymentForm(this.idPrefix);
        constructor() {
            super();
            Q.reloadLookup(InvoiceVehicleDetailsRow.lookupKey);
            Q.reloadLookup(InvoiceChargesRow.lookupKey);
        }
        protected afterLoadEntity() {
            super.afterLoadEntity();
            this.form.PdcPaymentDetails.type = 2;
            // fill next number in new record mode
            if (this.isNew()) {

                
                this.getNextNumber();

                //this.form.InvoiceVehicleDetails.filterField = "SupplierPaymentStatus";
                //this.form.InvoiceVehicleDetails.filterValue = 1;

                //this.form.InvoiceCharges.filterField = "SupplierPaymentStatus";
                //this.form.InvoiceCharges.filterValue = 1;

            }
            this.setvisible();
            //this.form.InvoiceVehicleDetails.changeSelect2(e => {

            //    this.calctotal();
            //});
            //this.form.InvoiceCharges.changeSelect2(e => {

            //    this.calctotal();
            //});
         
         
            this.form.SupplierId.changeSelect2(e => {
                var productID = Q.toId(this.form.SupplierId.value);
                if (productID != null) {

                    
                    this.form.InvoiceVehicleDetails.supplierid = productID??0;
                    this.form.InvoiceCharges.supplierid = productID??0;

                    Accounts.CommonService.GetSupplierBalance(
                        { SupplierId: productID }
                        , response => {

                            this.form.OldBalance.value = response.Balance;
                            
                        });
                }
            });

            this.form.PaymentType.changeSelect2(e => {
                this.setvisible();
            });


           
            (this.form.InvoiceVehicleDetails.view as any).onDataChanged.subscribe(() => {
                var total = 0;
                for (var k of this.form.InvoiceVehicleDetails.getItems()) {
                    total += k.Amount || 0;
                }
                for (var l of this.form.InvoiceCharges.getItems()) {
                    total += l.Amount || 0;
                }
                this.form.TotalAmount.value = total;
            });
            (this.form.InvoiceCharges.view as any).onDataChanged.subscribe(() => {
                var total = 0;
                for (var k of this.form.InvoiceCharges.getItems()) {
                    total += k.Amount || 0;
                }
                for (var l of this.form.InvoiceVehicleDetails.getItems()) {
                    total += l.Amount || 0;
                }
                this.form.TotalAmount.value = total;
            });


            (this.form.InvoiceVehicleDetails.view as any).onRowCountChanged.subscribe(() => {
                var total = 0;
                for (var k of this.form.InvoiceVehicleDetails.getItems()) {
                    total += k.Amount || 0;
                }
                for (var l of this.form.InvoiceCharges.getItems()) {
                    total += l.Amount || 0;
                }
                this.form.TotalAmount.value = total;
            });
            (this.form.InvoiceCharges.view as any).onRowCountChanged.subscribe(() => {
                var total = 0;
                for (var k of this.form.InvoiceCharges.getItems()) {
                    total += k.Amount || 0;
                }
                for (var l of this.form.InvoiceVehicleDetails.getItems()) {
                    total += l.Amount || 0;
                }
                this.form.TotalAmount.value = total;
            });
            if (this.isEditMode())
            {
                this.form.InvoiceVehicleDetails.supplierid = Q.toId(this.form.SupplierId.value);
                this.form.InvoiceCharges.supplierid = Q.toId(this.form.SupplierId.value);
            }
        }


        //private calctotal() {
        //    var x = this.form.InvoiceVehicleDetails.value.split(",");
        //    var y = this.form.InvoiceCharges.value.split(",");
        //    var total = 0;
        //    x.forEach((item, index) => {

        //        var productID = Q.toId(item);

        //        if (productID != null) {
        //            var x = Transactions.InvoiceVehicleDetailsRow.getLookup().itemById[productID];
        //            if (x.SupplierAmount > 0) {
        //                var advan = 0;
        //                if (x.SupplierAdvanceAmount != null) {
        //                    advan = x.SupplierAdvanceAmount;
        //                }
        //                total = total + (x.SupplierAmount - advan);
        //            }


        //        }

        //    });
        //    y.forEach((item, index) => {

        //        var productID = Q.toId(item);

        //        if (productID != null) {
        //            var x = Transactions.InvoiceChargesRow.getLookup().itemById[productID];
        //            if (x.SupplierAmount > 0) {
        //                var advan = 0;
        //                if (x.SupplierAdvanceAmount != null) {
        //                    advan = x.SupplierAdvanceAmount;
        //                }
        //                total = total + (x.SupplierAmount - advan);
        //            }


        //        }

        //    });
        //    this.form.TotalAmount.value = total;
        //}

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

            var val = Q.trimToNull(this.form.Code.value);

            // we will only get next number when customer ID is empty or 1 character in length
            if (!val || val.length <= 1) {

                // if no customer ID yet (new record mode probably) use 'C' as a prefix
                var prefix = (val || 'SP').toUpperCase();

                // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                SuppliersPaymentService.GetNextNumber({
                    Prefix: prefix,
                    Length: 7 // we want service to search for and return serials of 5 in length
                }, response => {
                        this.form.Code.value = response.Serial;

                    // this is to mark numerical part after prefix
                        (this.form.Code.element[0] as any).setSelectionRange(prefix.length, response.Serial.length);
                });
            }
        }
        
    }
}
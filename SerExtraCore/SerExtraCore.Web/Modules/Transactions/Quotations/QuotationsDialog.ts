
namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    export class QuotationsDialog extends Serenity.EntityDialog<QuotationsRow, any> {
        protected getFormKey() { return QuotationsForm.formKey; }
        protected getIdProperty() { return QuotationsRow.idProperty; }
        protected getLocalTextPrefix() { return QuotationsRow.localTextPrefix; }
        protected getNameProperty() { return QuotationsRow.nameProperty; }
        protected getService() { return QuotationsService.baseUrl; }
        protected getDeletePermission() { return QuotationsRow.deletePermission; }
        protected getInsertPermission() { return QuotationsRow.insertPermission; }
        protected getUpdatePermission() { return QuotationsRow.updatePermission; }

        protected form = new QuotationsForm(this.idPrefix);
        constructor() {
            super();
            this.form = new QuotationsForm(this.idPrefix);
        }
        protected afterLoadEntity() {
            super.afterLoadEntity();
            if (this.isNew()) {

                
                this.getNextNumber();

            }

            (this.form.QuotationDetails.view as any).onDataChanged.subscribe(() => {
                var total = 0;
                for (var k of this.form.QuotationDetails.getItems()) {

                    total += k.TotalAmountInLocalCurrency || 0;


                }

                this.calculatetotal();
            });
            (this.form.QuotationDetails.view as any).onRowCountChanged.subscribe(() => {
                var total = 0;
                for (var k of this.form.QuotationDetails.getItems()) {

                    total += k.TotalAmountInLocalCurrency || 0;


                }

                this.calculatetotal();
            });

            this.form.QuotationType.changeSelect2(e => {
                var productID = Q.toId(this.form.QuotationType.value);
                if (productID != null) {
                    
                    Accounts.CommonService.GetConfigration(
                        {}
                        , response => {
                            if (productID == 1) {
                                this.form.TermsAndConditions.value = response.KSATermsAndConditions;
                               
                            }
                            else {
                                if (productID == 2) {
                                    this.form.TermsAndConditions.value = response.PDOTermsAndConditions;
                                }
                                else {
                                    if (productID == 3) {
                                        this.form.TermsAndConditions.value = response.UAETermsAndConditions;
                                    }
                                }
                            }
                        });
                    this.setbutton();
                }
            });
            this.setbutton();
        }
        private  setbutton()
        {
            if (this.isEditMode) {
                var productID = Q.toId(this.form.QuotationType.value);
                if (productID != null) {

                    if (productID == 1) {
                        this.toolbar.findButton('export-pdf-button.ksa').toggle(true);
                        this.toolbar.findButton('export-pdf-button.pdo').toggle(false);
                        this.toolbar.findButton('export-pdf-button.uae').toggle(false);
                    }
                    else {
                        if (productID == 2) {
                            this.toolbar.findButton('export-pdf-button.pdo').toggle(true);
                            this.toolbar.findButton('export-pdf-button.ksa').toggle(false);
                            this.toolbar.findButton('export-pdf-button.uae').toggle(false);
                        }
                        else {
                            if (productID == 3) {
                                this.toolbar.findButton('export-pdf-button.uae').toggle(true);
                                this.toolbar.findButton('export-pdf-button.ksa').toggle(false);
                                this.toolbar.findButton('export-pdf-button.pdo').toggle(false);
                                

                            }
                        }
                    }
                }
            }
        }
        
        //private getNextNumber() {
        //    Accounts.CommonService.GetConfigration(
        //        {}
        //        , response => {
        //            if (response.Consignee) {
        //                var val = Q.trimToNull(this.form.QuotNo.value);

        //                // we will only get next number when customer ID is empty or 1 character in length
        //                if (!val || val.length <= 1) {

        //                    // if no customer ID yet (new record mode probably) use 'C' as a prefix
        //                    var prefix = (val || response.QuotationPrefix).toUpperCase();
        //                    //var prefix = (val || response.QuotationPrefix);
        //                    // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
        //                    Transactions.QuotationsService.GetNextNumber({
        //                        Prefix: prefix,
        //                        Length: 8 // we want service to search for and return serials of 5 in length
        //                    }, response => {
        //                        this.form.QuotNo.value = response.Serial;

        //                        // this is to mark numerical part after prefix
        //                        (this.form.QuotNo.element[0] as any).setSelectionRange(prefix.length, response.Serial.length);
        //                    });
        //                }
        //            }
        //        });
        //}
        private getNextNumber() {
            Accounts.CommonService.GetConfigration(
                {},
                response => {
                    // Check if response and response.Consignee are not null
                    if (response && response.Consignee) {
                        var val = Q.trimToNull(this.form.QuotNo.value);

                        // Check if this.form.QuotNo is not null
                        if (!this.form.QuotNo) {
                            console.error("QuotNo field is null");
                            return;
                        }

                        // We will only get the next number when QuotNo is empty or 1 character in length
                        if (!val || val.length <= 1) {
                            // Ensure response.QuotationPrefix is not null or undefined before using it
                            var prefix = val || (response.QuotationPrefix ? response.QuotationPrefix.toUpperCase() : 'C');

                            // Call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                            Transactions.QuotationsService.GetNextNumber({
                                Prefix: prefix,
                                Length: 8 // We want the service to search for and return serials of 8 in length
                            }, response => {
                                // Check if the response and response.Serial are not null
                                if (response && response.Serial) {
                                    this.form.QuotNo.value = response.Serial;

                                    // This is to mark the numerical part after the prefix
                                    (this.form.QuotNo.element[0] as any).setSelectionRange(prefix.length, response.Serial.length);
                                } else {
                                    console.error("Response or response.Serial is null");
                                }
                            });
                        }
                    } else {
                        console.error("Response or response.Consignee is null");
                    }
                });
        }


        getToolbarButtons() {
            var buttons = super.getToolbarButtons();

            buttons.push(SerExtraCore.Common.ReportHelper.createToolButton({
                title: 'KSA',
                cssClass: 'export-pdf-button ksa',
                reportKey: 'Transactions.QuotationFormat1',
                getParams: () => ({
                    OrderID: this.get_entityId(),
                    Type:'KSA'
                })
            }));
            buttons.push(SerExtraCore.Common.ReportHelper.createToolButton({
                title: 'PDO',
                cssClass: 'export-pdf-button pdo',
                reportKey: 'Transactions.QuotationFormat1',
                getParams: () => ({
                    OrderID: this.get_entityId(),
                    Type: 'PDO'
                })
            }));
            buttons.push(SerExtraCore.Common.ReportHelper.createToolButton({
                title: 'UAE',
                cssClass: 'export-pdf-button uae',
                reportKey: 'Transactions.QuotationFormat1',
                getParams: () => ({
                    OrderID: this.get_entityId(),
                    Type: 'UAE'
                })
            }));

            return buttons;
        }
        protected updateInterface() {
            super.updateInterface();

            this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());

        }
        private calculatetotal() {
            var total = 0;
            for (var k of this.form.QuotationDetails.getItems()) {

                total += k.TotalAmountInLocalCurrency || 0;


            }
        
            this.form.TotalAmount.value = total;
            
        }

    }
}
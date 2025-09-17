
namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class DeliveryServicesDialog extends Serenity.EntityDialog<DeliveryServicesRow, any> {
        protected getFormKey() { return DeliveryServicesForm.formKey; }
        protected getIdProperty() { return DeliveryServicesRow.idProperty; }
        protected getLocalTextPrefix() { return DeliveryServicesRow.localTextPrefix; }
        protected getNameProperty() { return DeliveryServicesRow.nameProperty; }
        protected getService() { return DeliveryServicesService.baseUrl; }
        protected getDeletePermission() { return DeliveryServicesRow.deletePermission; }
        protected getInsertPermission() { return DeliveryServicesRow.insertPermission; }
        protected getUpdatePermission() { return DeliveryServicesRow.updatePermission; }

        protected form = new DeliveryServicesForm(this.idPrefix);

        constructor() {
            super();
            this.form = new DeliveryServicesForm(this.idPrefix);
        }
        protected afterLoadEntity() {
            super.afterLoadEntity();

            (this.form.DeliveryServiceDetails.view as any).onDataChanged.subscribe(() => {
                var total = 0;
                for (var k of this.form.DeliveryServiceDetails.getItems()) {
                    total += k.TotalAmount || 0;
                }
                this.form.TotalAmount.value = total;
              
            });

            (this.form.DeliveryServiceDetails.view as any).onRowCountChanged.subscribe(() => {
                var total = 0;
                for (var k of this.form.DeliveryServiceDetails.getItems()) {
                    total += k.TotalAmount || 0;
                }
                this.form.TotalAmount.value = total;
                
            });
            if (this.isNew()) {
                this.getNextNumber();

            }
            this.form.PaymentType.changeSelect2(e => {
                this.PaymentSectionVisibilty();
            });
            this.PaymentSectionVisibilty();

           
        }
        getToolbarButtons() {
            var buttons = super.getToolbarButtons();


            buttons.push(SerExtraCore.Common.ReportHelper.createToolButton({
                title: 'Invoice',
                cssClass: 'export-pdf-button',
                reportKey: 'Transactions.DeliveryPrint',
                getParams: () => ({
                    OrderID: this.get_entityId()
                })
            }));

            // *** Create Dropdown-Button ***
            buttons.push(
                {
                    title: "Delivered",	// *** Get button text from translation
                    cssClass: 'stampe',
                    icon: 'fa fa-truck',
                    onClick: () => {
                        this.form.DeliveryStatus.value = "2";
                        this.PaymentSectionVisibilty();
                        this.saveAndCloseButton.click();
                        //this.form.

                    },
                }
            );



            return buttons;
        }
        protected updateInterface() {
            super.updateInterface();

            this.toolbar.findButton('stampe').toggle(this.isEditMode());

            if (this.form.DeliveryStatus.value == "2") {
                this.toolbar.findButton('stampe').toggle(false);
            }

        }
        private PaymentSectionVisibilty() {
            if (this.form.PaymentType.value == "1" || this.form.DeliveryStatus.value == "2") {
                this.form.PaymentTypeA.element.closest('.category').fadeIn();
                Serenity.EditorUtils.setRequired(this.form.PaymentTypeA, true);
                Serenity.EditorUtils.setRequired(this.form.AccountId, true);
            }
            else {
                this.form.PaymentTypeA.element.closest('.category').fadeOut();
                Serenity.EditorUtils.setRequired(this.form.PaymentTypeA, false);
                Serenity.EditorUtils.setRequired(this.form.AccountId, false);
            }
        }
        private getNextNumber() {

            var val = Q.trimToNull(this.form.BillNo.value);

            // we will only get next number when customer ID is empty or 1 character in length
            if (!val || val.length <= 1) {

                // if no customer ID yet (new record mode probably) use 'C' as a prefix
                var prefix = (val || 'I').toUpperCase();

                // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                DeliveryServicesService.GetNextNumber({
                    Prefix: prefix,
                    Length: 6 // we want service to search for and return serials of 5 in length
                }, response => {
                        this.form.BillNo.value = response.Serial;

                    // this is to mark numerical part after prefix
                        (this.form.BillNo.element[0] as any).setSelectionRange(prefix.length, response.Serial.length);
                });
            }
        }
    }
}
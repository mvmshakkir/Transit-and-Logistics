
namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    export class InvoiceCollectionDetailsDialog extends Common.GridEditorDialog<InvoiceCollectionDetailsRow> {
        protected getFormKey() { return InvoiceCollectionDetailsForm.formKey; }
        //protected getIdProperty() { return InvoiceCollectionDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return InvoiceCollectionDetailsRow.localTextPrefix; }
        //protected getNameProperty() { return InvoiceCollectionDetailsRow.nameProperty; }
        //protected getService() { return InvoiceCollectionDetailsService.baseUrl; }
        //protected getDeletePermission() { return InvoiceCollectionDetailsRow.deletePermission; }
        //protected getInsertPermission() { return InvoiceCollectionDetailsRow.insertPermission; }
        //protected getUpdatePermission() { return InvoiceCollectionDetailsRow.updatePermission; }

        protected form: InvoiceCollectionDetailsForm;
        constructor() {
            super();
            Q.reloadLookup(InvoiceRow.lookupKey);
            
            this.form = new InvoiceCollectionDetailsForm(this.idPrefix);

            
        }
        protected afterLoadEntity() {
            super.afterLoadEntity();



            this.form = new InvoiceCollectionDetailsForm(this.idPrefix);

            this.form.InvoiceId.changeSelect2(e => {
                if (!this.set) {
                    var productID = Q.toId(this.form.InvoiceId.value);
                    if (productID != null) {
                        Accounts.CommonService.GetInvoiceBalance({
                            invoiceid: productID
                        }, response => {
                            this.form.Amount.value = response.Balance;

                            // this is to mark numerical part after prefix


                        });


                    }
                }
            });
            
            this.form.InvoiceId.value = null;

            // pass value into lookup editor and update items
            this.form.InvoiceId.myId = this.customerid;
            const invoicelookup = InvoiceRow.getLookup().items;

            const filteredRows = invoicelookup.filter(row => row.ConsigneeId == this.customerid);
                this.form.InvoiceId.isedit = this.isEditMode()
            this.form.InvoiceId.updateItems();

            // select first lookup item after changing
            if (this.form.InvoiceId.items && this.form.InvoiceId.items.length > 0) {
                this.set = true;
                Serenity.EditorUtils.setValue(this.form.InvoiceId, this.entity.InvoiceId);
                this.set = false;
            } 
            //const filteredRows = invoicelookup.filter(row => row.ConsigneeId == this.customerid);

            //// Check if filteredRows contains any items
            //if (filteredRows.length > 0) {
            //    // Update the InvoiceId field based on filteredRows
            //    this.form.InvoiceId.value = filteredRows[0].Id.toString();

            //}

            //// Set the edit mode
            //this.form.InvoiceId.isedit = this.isEditMode();

            //// Update items
            //this.form.InvoiceId.updateItems();

            //// Select the first lookup item after changing
            //if (this.form.InvoiceId.items && this.form.InvoiceId.items.length > 0) {
            //    this.set = true;
            //    Serenity.EditorUtils.setValue(this.form.InvoiceId, this.entity.InvoiceId);
            //    this.set = false;
            //}

        }
        public set: boolean;
        public customerid: number;
    }

}

namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    export class InvoiceDueDetailsDialog extends Common.GridEditorDialog<InvoiceDueDetailsRow> {
        protected getFormKey() { return InvoiceDueDetailsForm.formKey; }
      //  protected getIdProperty() { return InvoiceDueDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return InvoiceDueDetailsRow.localTextPrefix; }
        //protected getService() { return InvoiceDueDetailsService.baseUrl; }
        //protected getDeletePermission() { return InvoiceDueDetailsRow.deletePermission; }
        //protected getInsertPermission() { return InvoiceDueDetailsRow.insertPermission; }
        //protected getUpdatePermission() { return InvoiceDueDetailsRow.updatePermission; }
        constructor() {
            super();

            this.form = new InvoiceDueDetailsForm(this.idPrefix);


        }
        protected afterLoadEntity() {

            super.afterLoadEntity();

            this.form.DueDate.changeSelect2(e => {

                var diff = Math.abs(this.form.DueDate.valueAsDate.getTime() - this.datetime.getTime());
                var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
                this.form.DueDays.value = diffDays;

            });
            this.form.DueDays.changeSelect2(e => {


                this.form.DueDate.value = this.addDays(this.datetime, this.form.DueDays.value).toDateString();

            });
          
        }
        private addDays(date: Date, days: number): Date {
            date.setDate(date.getDate() + days);
            return date;
        }
        protected form: InvoiceDueDetailsForm;
        public datetime: Date;
    }
     
}
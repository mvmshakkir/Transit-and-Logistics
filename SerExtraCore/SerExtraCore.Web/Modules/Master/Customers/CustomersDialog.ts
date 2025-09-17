
namespace SerExtraCore.Master {

    @Serenity.Decorators.registerClass()
    export class CustomersDialog extends Serenity.EntityDialog<CustomersRow, any> {
        protected getFormKey() { return CustomersForm.formKey; }
        protected getIdProperty() { return CustomersRow.idProperty; }
        protected getLocalTextPrefix() { return CustomersRow.localTextPrefix; }
        protected getNameProperty() { return CustomersRow.nameProperty; }
        protected getService() { return CustomersService.baseUrl; }
        protected getDeletePermission() { return CustomersRow.deletePermission; }
        protected getInsertPermission() { return CustomersRow.insertPermission; }
        protected getUpdatePermission() { return CustomersRow.updatePermission; }

        protected form = new CustomersForm(this.idPrefix);
        protected afterLoadEntity() {
            super.afterLoadEntity();

            // fill next number in new record mode
            if (this.isNew())
                this.getNextNumber();
        }

        private getNextNumber() {

            var val = Q.trimToNull(this.form.CustomerCode.value);

            // we will only get next number when customer ID is empty or 1 character in length
            if (!val || val.length <= 1) {

                // if no customer ID yet (new record mode probably) use 'C' as a prefix
                var prefix = (val || 'C').toUpperCase();

                // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                CustomersService.GetNextNumber({
                    Prefix: prefix,
                    Length: 6 // we want service to search for and return serials of 5 in length
                }, response => {
                    this.form.CustomerCode.value = response.Serial;

                    // this is to mark numerical part after prefix
                        (this.form.CustomerCode.element[0] as any).setSelectionRange(prefix.length, response.Serial.length);
                });
            }
        }
    }
}
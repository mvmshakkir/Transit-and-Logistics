
namespace SerExtraCore.Master {

    @Serenity.Decorators.registerClass()
    export class SupplierDialog extends Serenity.EntityDialog<SupplierRow, any> {
        protected getFormKey() { return SupplierForm.formKey; }
        protected getIdProperty() { return SupplierRow.idProperty; }
        protected getLocalTextPrefix() { return SupplierRow.localTextPrefix; }
        protected getNameProperty() { return SupplierRow.nameProperty; }
        protected getService() { return SupplierService.baseUrl; }
        protected getDeletePermission() { return SupplierRow.deletePermission; }
        protected getInsertPermission() { return SupplierRow.insertPermission; }
        protected getUpdatePermission() { return SupplierRow.updatePermission; }

        protected form = new SupplierForm(this.idPrefix);
        protected afterLoadEntity() {
            super.afterLoadEntity();

            // fill next number in new record mode
            if (this.isNew())
                this.getNextNumber();
        }

        private getNextNumber() {

            var val = Q.trimToNull(this.form.SupplierCode.value);

            // we will only get next number when customer ID is empty or 1 character in length
            if (!val || val.length <= 1) {

                // if no customer ID yet (new record mode probably) use 'C' as a prefix
                var prefix = (val || 'S').toUpperCase();

                // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                SupplierService.GetNextNumber({
                    Prefix: prefix,
                    Length: 6 // we want service to search for and return serials of 5 in length
                }, response => {
                        this.form.SupplierCode.value = response.Serial;

                    // this is to mark numerical part after prefix
                        (this.form.SupplierCode.element[0] as any).setSelectionRange(prefix.length, response.Serial.length);
                });
            }
        }
    }
}
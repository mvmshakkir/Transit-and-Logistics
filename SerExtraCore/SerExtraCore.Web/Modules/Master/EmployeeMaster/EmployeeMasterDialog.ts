
namespace SerExtraCore.Master {

    @Serenity.Decorators.registerClass()
    export class EmployeeMasterDialog extends Serenity.EntityDialog<EmployeeMasterRow, any> {
        protected getFormKey() { return EmployeeMasterForm.formKey; }
        protected getIdProperty() { return EmployeeMasterRow.idProperty; }
        protected getLocalTextPrefix() { return EmployeeMasterRow.localTextPrefix; }
        protected getNameProperty() { return EmployeeMasterRow.nameProperty; }
        protected getService() { return EmployeeMasterService.baseUrl; }
        protected getDeletePermission() { return EmployeeMasterRow.deletePermission; }
        protected getInsertPermission() { return EmployeeMasterRow.insertPermission; }
        protected getUpdatePermission() { return EmployeeMasterRow.updatePermission; }

        protected form = new EmployeeMasterForm(this.idPrefix);
        protected afterLoadEntity() {
            super.afterLoadEntity();

            // fill next number in new record mode
            if (this.isNew())
                this.getNextNumber();
        }

        private getNextNumber() {

            var val = Q.trimToNull(this.form.EmployeeCode.value);

            // we will only get next number when customer ID is empty or 1 character in length
            if (!val || val.length <= 1) {

                // if no customer ID yet (new record mode probably) use 'C' as a prefix
                var prefix = (val || 'E').toUpperCase();

                // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                EmployeeMasterService.GetNextNumber({
                    Prefix: prefix,
                    Length: 6 // we want service to search for and return serials of 5 in length
                }, response => {
                    this.form.EmployeeCode.value = response.Serial;

                    // this is to mark numerical part after prefix
                        (this.form.EmployeeCode.element[0] as any).setSelectionRange(prefix.length, response.Serial.length);
                });
            }
        }
    }
}
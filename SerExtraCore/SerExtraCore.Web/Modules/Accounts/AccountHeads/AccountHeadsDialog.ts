
namespace SerExtraCore.Accounts {

    @Serenity.Decorators.registerClass()
    export class AccountHeadsDialog extends Serenity.EntityDialog<AccountHeadsRow, any> {
        protected getFormKey() { return AccountHeadsForm.formKey; }
        protected getIdProperty() { return AccountHeadsRow.idProperty; }
        protected getLocalTextPrefix() { return AccountHeadsRow.localTextPrefix; }
        protected getNameProperty() { return AccountHeadsRow.nameProperty; }
        protected getService() { return AccountHeadsService.baseUrl; }
        protected getDeletePermission() { return AccountHeadsRow.deletePermission; }
        protected getInsertPermission() { return AccountHeadsRow.insertPermission; }
        protected getUpdatePermission() { return AccountHeadsRow.updatePermission; }

        protected form = new AccountHeadsForm(this.idPrefix);
        constructor() {
            super();
            Q.reloadLookup(AccountHeadsRow.lookupKey);
        }
        protected afterLoadEntity() {
            super.afterLoadEntity();

            // fill next number in new record mode
            if (this.isNew())
                this.getNextNumber();
        }

        private getNextNumber() {

            var val = Q.trimToNull(this.form.Code.value);

            // we will only get next number when customer ID is empty or 1 character in length
            if (!val || val.length <= 1) {

                // if no customer ID yet (new record mode probably) use 'C' as a prefix
                var prefix = (val || 'AH').toUpperCase();

                // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                AccountHeadsService.GetNextNumber({
                    Prefix: prefix,
                    Length: 6 // we want service to search for and return serials of 5 in length
                }, response => {
                        this.form.Code.value = response.Serial;

                    // this is to mark numerical part after prefix
                        (this.form.Code.element[0] as any).setSelectionRange(prefix.length, response.Serial.length);
                });
            }
        }
    }
}
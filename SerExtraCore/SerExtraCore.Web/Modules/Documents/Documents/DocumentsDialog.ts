
namespace SerExtraCore.Documents {

    @Serenity.Decorators.registerClass()
    export class DocumentsDialog extends Serenity.EntityDialog<DocumentsRow, any> {
        protected getFormKey() { return DocumentsForm.formKey; }
        protected getIdProperty() { return DocumentsRow.idProperty; }
        protected getLocalTextPrefix() { return DocumentsRow.localTextPrefix; }
        protected getNameProperty() { return DocumentsRow.nameProperty; }
        protected getService() { return DocumentsService.baseUrl; }
        protected getDeletePermission() { return DocumentsRow.deletePermission; }
        protected getInsertPermission() { return DocumentsRow.insertPermission; }
        protected getUpdatePermission() { return DocumentsRow.updatePermission; }

        protected form = new DocumentsForm(this.idPrefix);
        private getNextNumber() {

            var val = Q.trimToNull(this.form.TrxNo.value);

            // we will only get next number when customer ID is empty or 1 character in length
            if (!val || val.length <= 1) {

                // if no customer ID yet (new record mode probably) use 'C' as a prefix
                var prefix = (val || 'DOC_').toUpperCase();

                // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                DocumentsService.GetNextNumber({
                    Prefix: prefix,
                    Length: 9 // we want service to search for and return serials of 5 in length
                }, response => {
                    this.form.TrxNo.value = response.Serial;

                        // this is to mark numerical part after prefix
                        (this.form.TrxNo.element[0] as any).setSelectionRange(prefix.length, response.Serial.length);
                });
            }
        }
        protected afterLoadEntity() {
            super.afterLoadEntity();

            // fill next number in new record mode
            if (this.isNew()) {

                
                this.getNextNumber();

            }
        }
    }
}
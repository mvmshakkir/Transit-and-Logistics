
namespace SerExtraCore.PDCPayments {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class PdcPaymentsDialog extends Serenity.EntityDialog<PdcPaymentsRow, any> {
        protected getFormKey() { return PdcPaymentsForm.formKey; }
        protected getIdProperty() { return PdcPaymentsRow.idProperty; }
        protected getLocalTextPrefix() { return PdcPaymentsRow.localTextPrefix; }
        protected getNameProperty() { return PdcPaymentsRow.nameProperty; }
        protected getService() { return PdcPaymentsService.baseUrl; }
        protected getDeletePermission() { return PdcPaymentsRow.deletePermission; }
        protected getInsertPermission() { return PdcPaymentsRow.insertPermission; }
        protected getUpdatePermission() { return PdcPaymentsRow.updatePermission; }

        protected form = new PdcPaymentsForm(this.idPrefix);
        constructor() {
            super();

            this.form = new PdcPaymentsForm(this.idPrefix);

            this.form.StartDate.change(e => {
                this.getdatediff()
            });
            this.form.EndDate.change(e => {
                this.getdatediff()
            });
            this.form.Installments.change(e => {
                if (this.form.StartDate.value != null) {
                    if (this.form.Installments.value != null) {
                        PdcPaymentsService.GetMonthTodate({
                            fromdatetime: this.form.StartDate.value,
                            numberofmonths: this.form.Installments.value,
                        }, response => {
                            this.form.EndDate.value = response.todatetime


                            // this is to mark numerical part after prefix


                        });
                    }
                }
                this.calculateamounts();
            });
            this.form.InstallmentAmount.change(e => {
                this.calculateamounts()
            });
            

            this.form.ChequeType.change(e => {
                this.calculateamounts()
            });
        }
        private getdatediff() {
            if (this.form.StartDate.value != null) {
                if (this.form.EndDate.value != null) {
                    PdcPaymentsService.GetMonthDifference({
                        fromdatetime: this.form.StartDate.value,
                        todatetime: this.form.EndDate.value,
                    }, response => {
                        this.form.Installments.value = response.numberofmonths


                        // this is to mark numerical part after prefix


                    });
                }
            }

        }
        private calculateamounts() {
            if (this.form.StartDate.value != null) {
                if (this.form.EndDate.value != null) {
                    if (this.form.Installments.value != null) {
                        if (this.form.InstallmentAmount.value != null) {
                            if (this.form.ChequeType.value != null) {

                                var k = this.form.PdcPaymentDetails.getItems();
                                k = [];
                                var i = 0;
                                PdcPaymentsService.GetDateList({
                                    fromdatetime: this.form.StartDate.value,
                                    numberofmonths: this.form.Installments.value,
                                    todatetime: this.form.EndDate.value,
                                    amount: this.form.InstallmentAmount.value,
                                    pdctype: Q.toId(this.form.ChequeType.value)

                                }, response => {

                                    response.forEach((item, index) => {

                                        k.push(item);

                                    });
                                    this.form.PdcPaymentDetails.value = k;
                                }
                                );

                            }
                        }

                    }
                }
            }

        }
        protected afterLoadEntity() {
            super.afterLoadEntity();

            // fill next number in new record mode
            if (this.isNew()) {

                
                this.getNextNumber();
            }
        }

        private getNextNumber() {

            var val = Q.trimToNull(this.form.PdcNumber.value);

            // we will only get next number when customer ID is empty or 1 character in length
            if (!val || val.length <= 1) {

                // if no customer ID yet (new record mode probably) use 'C' as a prefix
                var prefix = (val || 'PDC').toUpperCase();

                // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                PdcPaymentsService.GetNextNumber({
                    Prefix: prefix,
                    Length: 7 // we want service to search for and return serials of 5 in length
                }, response => {
                        this.form.PdcNumber.value = response.Serial;

                    // this is to mark numerical part after prefix
                        (this.form.PdcNumber.element[0] as any).setSelectionRange(prefix.length, response.Serial.length);
                });
            }
        }
    }
}
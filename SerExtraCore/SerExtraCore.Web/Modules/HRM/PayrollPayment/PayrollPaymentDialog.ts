
namespace SerExtraCore.HRM {

    @Serenity.Decorators.registerClass()
    export class PayrollPaymentDialog extends Common.GridEditorDialog<PayrollPaymentRow> {
        protected getFormKey() { return PayrollPaymentForm.formKey; }
    //    protected getIdProperty() { return PayrollPaymentRow.idProperty; }
        protected getLocalTextPrefix() { return PayrollPaymentRow.localTextPrefix; }
        //protected getNameProperty() { return PayrollPaymentRow.nameProperty; }
        //protected getService() { return PayrollPaymentService.baseUrl; }
        //protected getDeletePermission() { return PayrollPaymentRow.deletePermission; }
        //protected getInsertPermission() { return PayrollPaymentRow.insertPermission; }
        //protected getUpdatePermission() { return PayrollPaymentRow.updatePermission; }

        protected form: PayrollPaymentForm;
        constructor() {
            super();

            this.form = new PayrollPaymentForm(this.idPrefix);


        }

        protected afterLoadEntity() {
            super.afterLoadEntity();
            this.form.EmployeeId.changeSelect2(e => {
                var Payment = Q.toId(this.form.EmployeeId.value);

                var h = this.payments;
                var exsist = false;
                for (var l of this.payments)
                {


                    if (l.EmployeeId == Payment)
                    {
                        
                        exsist = true;
                        break;
                    }


                }
                if (exsist) {
                    Q.notifyInfo("Employee already include in list");
                    this.form.EmployeeId.value = null;
                    /* vendors contains the element we're looking for */
                }
                else {
                    if (Payment > 0) {
                        Accounts.CommonService.GetEmployee(
                            {
                                SupplierId: Payment
                            }
                            , response => {

                                this.form.BasicPay.value = response.BasicSalary;
                                this.form.Allowance.value = response.Allowance;
                                this.CalculateTotal();
                            });
                    }
                }
                
                
            });
            this.form.BasicPay.change(e => {
                this.CalculateTotal();
            });
            this.form.Allowance.change(e => {
                this.CalculateTotal();
            });
            this.form.OverTime.change(e => {
                this.CalculateTotal();
            });
            this.form.Other.change(e => {
                this.CalculateTotal();
            });
        }
        private CalculateTotal() {
            this.form.Total.value = this.form.BasicPay.value + this.form.Allowance.value + this.form.OverTime.value + this.form.Other.value;
        }
        public payments: PayrollPaymentRow[]; 
    }
}
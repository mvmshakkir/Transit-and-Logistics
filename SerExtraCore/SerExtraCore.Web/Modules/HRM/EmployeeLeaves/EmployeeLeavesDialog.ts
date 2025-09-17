
namespace SerExtraCore.HRM {

    @Serenity.Decorators.registerClass()
    export class EmployeeLeavesDialog extends Serenity.EntityDialog<EmployeeLeavesRow, any> {
        protected getFormKey() { return EmployeeLeavesForm.formKey; }
        protected getIdProperty() { return EmployeeLeavesRow.idProperty; }
        protected getLocalTextPrefix() { return EmployeeLeavesRow.localTextPrefix; }
        protected getNameProperty() { return EmployeeLeavesRow.nameProperty; }
        protected getService() { return EmployeeLeavesService.baseUrl; }
        protected getDeletePermission() { return EmployeeLeavesRow.deletePermission; }
        protected getInsertPermission() { return EmployeeLeavesRow.insertPermission; }
        protected getUpdatePermission() { return EmployeeLeavesRow.updatePermission; }

        protected form = new EmployeeLeavesForm(this.idPrefix);
        protected afterLoadEntity() {

            super.afterLoadEntity();

            this.form.FromDate.changeSelect2(e => {

                this.calculatediif();

            });
            this.form.ToDate.changeSelect2(e => {

                this.calculatediif();

            });
            this.form.Days.changeSelect2(e => {

                if (this.form.FromDate.value != null) {
                    this.form.ToDate.value = this.addDays(this.form.FromDate.valueAsDate, this.form.Days.value).toDateString();
                }
                else {
                    if (this.form.ToDate.value != null) {
                        this.form.FromDate.value = this.subDays(this.form.ToDate.valueAsDate, this.form.Days.value).toDateString();
                    }
                }
               

            });

        }
        private addDays(date: Date, days: number): Date {
            date.setDate(date.getDate() + days);
            return date;
        }
        private subDays(date: Date, days: number): Date {
            date.setDate(date.getDate() - days);
            return date;
        }
        private calculatediif() {

            if (this.form.FromDate.value != null) {
                if (this.form.ToDate.value != null) {
                    var diff = Math.abs(this.form.FromDate.valueAsDate.getTime() - this.form.ToDate.valueAsDate.getTime());
                    var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
                    this.form.Days.value = diffDays;
                }
            }
        }
    }
}
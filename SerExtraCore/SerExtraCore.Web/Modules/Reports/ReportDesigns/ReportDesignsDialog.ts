
namespace SerExtraCore.Reports {
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class ReportDesignsDialog extends Serenity.EntityDialog<ReportDesignsRow, any> {
        protected getFormKey() { return ReportDesignsForm.formKey; }
        protected getIdProperty() { return ReportDesignsRow.idProperty; }
        protected getLocalTextPrefix() { return ReportDesignsRow.localTextPrefix; }
        protected getNameProperty() { return ReportDesignsRow.nameProperty; }
        protected getService() { return ReportDesignsService.baseUrl; }
        protected getDeletePermission() { return ReportDesignsRow.deletePermission; }
        protected getInsertPermission() { return ReportDesignsRow.insertPermission; }
        protected getUpdatePermission() { return ReportDesignsRow.updatePermission; }

        protected form = new ReportDesignsForm(this.idPrefix);
        constructor() {
            super();
            this.form = new ReportDesignsForm(this.idPrefix);

           
        }
        protected afterLoadEntity() {
            super.afterLoadEntity();
            if (this.isNew())
            {
                Accounts.CommonService.GetBalnkReport({
                   
                }, response => {
                        this.form.Design.value = response.RefNo;

                });
                
            }
        }
    }
}
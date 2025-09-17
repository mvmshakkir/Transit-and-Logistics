
//namespace SerExtraCore.CommissionPercentage {

//    @Serenity.Decorators.registerClass()
//    export class CommissionPercentageDialog extends Serenity.EntityDialog<CommissionPercentageRow, any> {
//        protected getFormKey() { return CommissionPercentageForm.formKey; }
//        protected getIdProperty() { return CommissionPercentageRow.idProperty; }
//        protected getLocalTextPrefix() { return CommissionPercentageRow.localTextPrefix; }
//        protected getService() { return CommissionPercentageService.baseUrl; }
//        protected getDeletePermission() { return CommissionPercentageRow.deletePermission; }
//        protected getInsertPermission() { return CommissionPercentageRow.insertPermission; }
//        protected getUpdatePermission() { return CommissionPercentageRow.updatePermission; }

//        protected form = new CommissionPercentageForm(this.idPrefix);

//    }
//}



namespace SerExtraCore.CommissionPercentage {

    @Serenity.Decorators.registerClass()
    export class CommissionPercentageDialog extends Serenity.EntityDialog<CommissionPercentageRow, any> {
        protected getFormKey() { return CommissionPercentageForm.formKey; }
        protected getIdProperty() { return CommissionPercentageRow.idProperty; }
        protected getLocalTextPrefix() { return CommissionPercentageRow.localTextPrefix; }
        protected getNameProperty() { return CommissionPercentageRow.nameProperty; }
        protected getService() { return CommissionPercentageService.baseUrl; }
        protected getDeletePermission() { return CommissionPercentageRow.deletePermission; }
        protected getInsertPermission() { return CommissionPercentageRow.insertPermission; }
        protected getUpdatePermission() { return CommissionPercentageRow.updatePermission; }

        protected form = new CommissionPercentageForm(this.idPrefix);

    }
}
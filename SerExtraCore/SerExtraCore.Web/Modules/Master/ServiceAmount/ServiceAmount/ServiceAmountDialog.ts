namespace SerExtraCore.ServiceAmount {

    @Serenity.Decorators.registerClass()
    export class ServiceAmountDialog extends Common.GridEditorDialog<ServiceAmountRow> {
        protected getFormKey() { return ServiceAmountForm.formKey; }
        //protected getIdProperty() { return UOMAmountRow.idProperty; }
        protected getLocalTextPrefix() { return ServiceAmountRow.localTextPrefix; }
        /* protected getservice() { return UOMAmountRow.baseurl; }*/


        protected form = ServiceAmountForm;

    }
}
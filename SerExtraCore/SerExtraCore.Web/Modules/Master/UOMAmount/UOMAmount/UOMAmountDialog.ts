
namespace SerExtraCore.UOMAmount{

    @Serenity.Decorators.registerClass()
    export class UOMAmountDialog extends Common.GridEditorDialog<UOMAmountRow> {
        protected getFormKey() { return UOMAmountForm.formKey; }
        //protected getIdProperty() { return UOMAmountRow.idProperty; }
        protected getLocalTextPrefix() { return UOMAmountRow.localTextPrefix; }
       /* protected getservice() { return UOMAmountRow.baseurl; }*/
       

        protected form =  UOMAmountForm;

    }
}




namespace SerExtraCore.Reports {

    @Serenity.Decorators.registerClass()
    export class ReportParametersDialog extends Common.GridEditorDialog<ReportParametersRow> {
        protected getFormKey() { return ReportParametersForm.formKey; }
        protected getLocalTextPrefix() { return ReportParametersRow.localTextPrefix; }

        protected form : ReportParametersForm;
        constructor() {
            super();
            this.form = new ReportParametersForm(this.idPrefix);
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();
            this.form.EditorType.changeSelect2(e => {
                this.HideLookupSection();
            });
            this.form.LookupType.changeSelect2(e => {
                this.HideLookupTypes();
            });
            this.HideLookupSection();
        }
        private HideLookupSection() {

            if (this.form.EditorType.value == ParameterEditorTypes.Value5.toString()) {


                this.form.LookupType.element.closest('.category').fadeIn();

                Serenity.EditorUtils.setRequired(this.form.LookupType, true);
                this.HideLookupTypes();
                

            }
            else {
                this.form.LookupType.element.closest('.category').fadeOut();
                Serenity.EditorUtils.setRequired(this.form.LookupType, false);
            }
            
        }
        private HideLookupTypes() {

            if (this.form.LookupType.value == LookupType.Value1.toString()) {


                this.form.LookupName.getGridField().fadeIn();
                this.form.CustomLookupId.getGridField().fadeOut();
                Serenity.EditorUtils.setRequired(this.form.LookupName, true);
                Serenity.EditorUtils.setRequired(this.form.CustomLookupId, false);


            }
            else {
                if (this.form.LookupType.value == LookupType.Value2.toString()) {


                    this.form.LookupName.getGridField().fadeOut();
                    this.form.CustomLookupId.getGridField().fadeIn();
                    Serenity.EditorUtils.setRequired(this.form.LookupName, false);
                    Serenity.EditorUtils.setRequired(this.form.CustomLookupId, true);


                }
                else {
                    this.form.LookupName.getGridField().fadeOut();
                    this.form.CustomLookupId.getGridField().fadeOut();
                    Serenity.EditorUtils.setRequired(this.form.LookupName, false);
                    Serenity.EditorUtils.setRequired(this.form.CustomLookupId, false);
                }
            }
        }
    }
}

namespace SerExtraCore.Administration {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class ConfigurationDialog extends Serenity.EntityDialog<ConfigurationRow, any> {
        protected getFormKey() { return ConfigurationForm.formKey; }
        protected getIdProperty() { return ConfigurationRow.idProperty; }
        protected getLocalTextPrefix() { return ConfigurationRow.localTextPrefix; }
        protected getService() { return ConfigurationService.baseUrl; }
        protected getDeletePermission() { return ConfigurationRow.deletePermission; }
        protected getInsertPermission() { return ConfigurationRow.insertPermission; }
        protected getUpdatePermission() { return ConfigurationRow.updatePermission; }

        protected form = new ConfigurationForm(this.idPrefix);
        protected updateInterface() {
            super.updateInterface();
            var btns = super.getToolbarButtons();
            //this.form.Bookings.filterValue = [UnitStatus.Value4, UnitStatus.Value5];

            var k = this.element.find('.delete-button').hide();

            
        }

    }
}
/// <reference path="../../../Common/Helpers/GridEditorBase.ts" />

namespace SerExtraCore.ServiceAmount {
    import fld = ServiceAmountRow.Fields;
    @Serenity.Decorators.registerClass()
    export class ServiceAmountEditor extends Common.GridEditorBase<ServiceAmountRow> {
        protected getColumnsKey() { return "ServiceAmount.ServiceAmount"; }
        protected getDialogType() { return ServiceAmountDialog; }
        protected getLocalTextPrefix() { return ServiceAmountRow.localTextPrefix; }

        private pendingChanges: Q.Dictionary<any> = {};
        public hidesupppieradvance: boolean;
        constructor(container: JQuery) {
            super(container);

           
        }
       
        validateEntity(row, id) {
            

            row.ServiceServiceName = Services.ServicesRow.getLookup().itemById[row.ServiceId].ServiceName;
            //row.CurrencyCurrencyCode = Master.CurrenciesRow.getLookup().itemById[row.CurrencyId].CurrencyCode;
           
            return true;
        }
      
    }
}

/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    export class SupplierPaymentInvoiceVehicleDetailsEditor extends Common.GridEditorBase<SuppliersPaymentInvoiceVehicleDetailsRow> {
        protected getColumnsKey() { return "Transactions.SuppliersPaymentInvoiceVehicleDetails"; }
        protected getDialogType() { return SuppliersPaymentInvoiceVehicleDetailsDialog; }
        protected getLocalTextPrefix() { return SuppliersPaymentInvoiceVehicleDetailsRow.localTextPrefix; }
        public supplierid: number;
        constructor(container: JQuery) {
            super(container);
        }
        protected getAddButtonCaption() {
            return "Add";
        }

        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>) {
            super.initEntityDialog(itemType, dialog);

           
            // passing codeComite from grid editor to detail dialog
            (dialog as SuppliersPaymentInvoiceVehicleDetailsDialog).supplierid = this.supplierid;
        }

        protected validateEntity(row: SuppliersPaymentInvoiceVehicleDetailsRow, id: number) {
            if (!super.validateEntity(row, id))
                return false;

            row.InvoiceVehicleDetailFullName = Transactions.InvoiceVehicleDetailsRow.getLookup().itemById[row.InvoiceVehicleDetailId].FullName;

            return true;
        }
    }
}
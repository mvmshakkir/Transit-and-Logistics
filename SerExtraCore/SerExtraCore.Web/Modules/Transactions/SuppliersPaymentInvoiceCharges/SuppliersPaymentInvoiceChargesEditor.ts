/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    export class SupplierPaymentInvoiceChargesEditor extends Common.GridEditorBase<SuppliersPaymentInvoiceChargesRow> {
        protected getColumnsKey() { return "Transactions.SuppliersPaymentInvoiceCharges"; }
        protected getDialogType() { return SuppliersPaymentInvoiceChargesDialog; }
        protected getLocalTextPrefix() { return SuppliersPaymentInvoiceChargesRow.localTextPrefix; }

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
            (dialog as SuppliersPaymentInvoiceChargesDialog).supplierid = this.supplierid;
        }

        protected validateEntity(row: SuppliersPaymentInvoiceChargesRow, id: number) {
            if (!super.validateEntity(row, id))
                return false;

            row.InvoiceChargeFullName = Transactions.InvoiceChargesRow.getLookup().itemById[row.InvoiceChargesId].FullName;
           
            
            return true;
        }
    }
}
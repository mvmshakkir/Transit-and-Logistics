using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20240318175800)]
    public class DefaultDB_20240318_1758_AlterInvoiceCharges : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("InvoiceCharges")
                .AlterColumn("InvoiceId").AsInt32().Nullable()
                .AlterColumn("ChargeId").AsInt32().Nullable()
                .AlterColumn("Description").AsString(500).Nullable()
                .AlterColumn("SupplierAmount").AsDecimal(18, 3).Nullable()
                .AlterColumn("SupplierId").AsInt32().Nullable()
                .AlterColumn("SupplierPaymentStatus").AsInt32().Nullable()
                .AlterColumn("SupplierAdvanceAmount").AsDecimal(18, 3).Nullable()
                .AlterColumn("PaymentType").AsInt32().Nullable()
                .AlterColumn("AccountId").AsInt32().Nullable()
                .AlterColumn("InvoiceChargeVehicleDetailId").AsInt32().Nullable()
                .AlterColumn("TaxPer").AsDecimal(18, 3).Nullable()
                .AlterColumn("TaxAmount").AsDecimal(18, 3).Nullable()
                .AlterColumn("DisAmount").AsDecimal(18, 3).Nullable();
        }
    }
}

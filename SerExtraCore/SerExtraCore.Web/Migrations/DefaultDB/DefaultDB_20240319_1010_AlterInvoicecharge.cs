using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20240319100100)]
    public class DefaultDB_20240319_1010_AlterInvoicecharge : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("InvoiceCharges")
                .AlterColumn("InvoiceId").AsInt32().Nullable()
                .AlterColumn("ChargeId").AsInt32().Nullable()
                .AlterColumn("Description").AsString(500).Nullable()
                .AlterColumn("Amount").AsDecimal(18, 3).Nullable() // Include Amount field
                .AlterColumn("Qty").AsDecimal(18, 3).Nullable()
                .AlterColumn("TotalAmount").AsDecimal(18, 3).Nullable()
                .AlterColumn("CurrencyId").AsInt32().NotNullable() // Assuming CurrencyId shouldn't be nullable
                .AlterColumn("ExchangeRate").AsDecimal(18, 3).Nullable()
                .AlterColumn("TotalAmountInLocalCurrency").AsDecimal(18, 3).Nullable()
                .AlterColumn("Date").AsDate().Nullable()
                .AlterColumn("InvoiceVehicleDetailId").AsInt32().Nullable()
                .AlterColumn("SupplierAmount").AsDecimal(18, 3).Nullable()
                .AlterColumn("SupplierId").AsInt32().Nullable()
                .AlterColumn("SupplierPaymentStatus").AsInt32().Nullable()
                .AlterColumn("SupplierAdvanceAmount").AsDecimal(18, 3).Nullable()
                .AlterColumn("PaymentType").AsInt32().Nullable()
                .AlterColumn("AccountId").AsInt32().Nullable()
                .AlterColumn("InvoiceChargeVehicleDetailId").AsInt32().Nullable()
                .AlterColumn("TaxableAmount").AsDecimal(18, 3).Nullable()
                .AlterColumn("TaxPer").AsDecimal(18, 3).Nullable()
                .AlterColumn("TaxAmount").AsDecimal(18, 3).Nullable()
                .AlterColumn("Total").AsDecimal(18, 3).Nullable()
                .AlterColumn("DisAmount").AsDecimal(18, 3).Nullable();
        }
    }
}

using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20220811123500)]
    public class DefaultDB_20220811_123500_SuppliersPaymentInvoiceChargesAlter : AutoReversingMigration
    {
        public override void Up()
        {
            this.Alter.Table("SuppliersPaymentInvoiceCharges")
               .AddColumn("Amount").AsDecimal(18, 3).Nullable();
        }
    }
}
using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20220811121100)]
    public class DefaultDB_20220811_121100_SuppliersPaymentInvoiceVehicleDetailsAlter : AutoReversingMigration
    {
        public override void Up()
        {
            this.Alter.Table("SuppliersPaymentInvoiceVehicleDetails")
               .AddColumn("Amount").AsDecimal(18, 3).Nullable();
        }
    }
}
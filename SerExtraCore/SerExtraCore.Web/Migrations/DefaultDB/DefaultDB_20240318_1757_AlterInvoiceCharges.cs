using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20240318175700)]
    public class DefaultDB_20240318_1757_AlterInvoiceCharges : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("InvoiceCharges")
                .AlterColumn("ChargeId").AsInt32().Nullable();
        }
    }
}

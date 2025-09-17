using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20220723123600)]
    public class DefaultDB_20220723_123600_SupplierAlter : AutoReversingMigration
    {
        public override void Up()
        {
            this.Alter.Table("Supplier")
                .AddColumn("TaxRegNo").AsString(500).Nullable();

        }
    }
}
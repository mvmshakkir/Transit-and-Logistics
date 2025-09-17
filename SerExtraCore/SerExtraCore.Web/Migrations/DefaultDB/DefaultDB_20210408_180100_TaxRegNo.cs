using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20210408180100)]
    public class DefaultDB_20210408_180100_TaxRegNo : AutoReversingMigration
    {
        public override void Up()
        {
            this.Alter.Table("Customers")
                .AddColumn("TaxRegNo").AsString(500).Nullable();

            this.Alter.Table("Configuration")
                 .AddColumn("TaxRegNo").AsString(500).Nullable();



        }
    }
}
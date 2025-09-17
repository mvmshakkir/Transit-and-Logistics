using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20220716112900)]
    public class DefaultDB_20220716_112900_ConfigurationAlter : AutoReversingMigration
    {
        public override void Up()
        {
            this.Alter.Table("Configuration")
                        .AddColumn("DriverAdvanceLedgerId").AsInt32().Nullable();
                       
        }
    }
}
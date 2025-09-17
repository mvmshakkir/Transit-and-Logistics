using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20220321105900)]
    public class DefaultDB_20220321_105900_ReportHeader : AutoReversingMigration
    {
        public override void Up()
        {

            this.Alter.Table("Configuration")
                 .AddColumn("ReportHeader").AsString(5000).Nullable();
        }
    }
}
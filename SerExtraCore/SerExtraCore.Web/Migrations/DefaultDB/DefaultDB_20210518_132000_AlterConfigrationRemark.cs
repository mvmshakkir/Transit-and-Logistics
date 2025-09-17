using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20210518132000)]
    public class DefaultDB_20210518_132000_AlterConfigrationRemark : AutoReversingMigration
    {
        public override void Up()
        {

            this.Alter.Table("Configuration")
                .AddColumn("InvoiceRemarks").AsString(500).Nullable();
        }
    }
}
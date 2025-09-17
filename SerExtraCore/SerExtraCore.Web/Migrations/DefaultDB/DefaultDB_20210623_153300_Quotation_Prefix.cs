using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20210623153300)]
    public class DefaultDB_20210623_153300_Quotation_Prefix : AutoReversingMigration
    {
        public override void Up()
        {

            this.Alter.Table("Configuration")
                .AddColumn("QuotationPrefix").AsString().Nullable();

        }
    }
}
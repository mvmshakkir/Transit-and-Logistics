using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20210525153000)]
    public class DefaultDB_20210525_153000_AlterInvoiceRemark : AutoReversingMigration
    {
        public override void Up()
        {

            this.Alter.Table("Invoice")
                .AddColumn("Remarks").AsString(500).Nullable();
        }
    }
}
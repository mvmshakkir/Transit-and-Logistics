using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20211028100000)]
    public class DefaultDB_20211028_100000_ReceivableLedger : AutoReversingMigration
    {
        public override void Up()
        {


            this.Alter.Table("Configuration")
            .AddColumn("ReceivableLedgerId").AsInt32().Nullable()
              .ForeignKey("FK_Configuration_ReceivableAccountHead", "AccountHeads", "Id");

        }
    }
}
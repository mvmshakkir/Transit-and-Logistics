using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20211027154600)]
    public class DefaultDB_20211027_154600_ChargesLedger : AutoReversingMigration
    {
        public override void Up()
        {

            this.Alter.Table("Configuration")
            .AddColumn("ChargesLedgerId").AsInt32().Nullable()
              .ForeignKey("FK_Configuration_ChargesAccountHead", "AccountHeads", "Id");

        }
    }
}
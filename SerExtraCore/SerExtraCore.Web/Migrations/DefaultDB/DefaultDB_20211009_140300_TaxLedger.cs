using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20211009140300)]
    public class DefaultDB_20211009_140300_TaxLedger : AutoReversingMigration
    {
        public override void Up()
        {

            this.Alter.Table("Configuration")
            .AddColumn("TaxLedgerId").AsInt32().Nullable()
              .ForeignKey("FK_Configuration_TaxAccountHead", "AccountHeads", "Id");

        }
    }
}
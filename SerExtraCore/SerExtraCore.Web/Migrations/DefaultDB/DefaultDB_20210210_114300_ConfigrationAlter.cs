using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20210210114300)]
    public class DefaultDB_20210210_114300_ConfigrationAlter : AutoReversingMigration
    {
        public override void Up()
        {




            this.Alter.Table("Configuration")
                .AddColumn("PDCWithdrawalsLedger").AsInt32().Nullable()
                   .ForeignKey("FK_Configuration_PDCWithdrawalsAccountHead", "AccountHeads", "ID")
                .AddColumn("PDCDepositsLedger").AsInt32().Nullable()
                   .ForeignKey("FK_Configuration_PDCDepositsAccountHead", "AccountHeads", "ID");









        }
    }
}
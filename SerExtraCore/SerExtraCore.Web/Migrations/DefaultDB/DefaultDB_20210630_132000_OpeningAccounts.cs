using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20210630132000)]
    public class DefaultDB_20210630_132000_OpeningAccounts : AutoReversingMigration
    {
        public override void Up()
        {

            this.Alter.Table("Configuration")
                .AddColumn("CustomerOpeningLedgerId").AsInt32().Nullable()
                  .ForeignKey("FK_Configuration_CustomerOpeningAccountHead", "AccountHeads", "Id")
                 .AddColumn("SupplierOpeningLedgerId").AsInt32().Nullable()
                  .ForeignKey("FK_Configuration_SupplierOpeningAccountHead", "AccountHeads", "Id");
        }
    }
}
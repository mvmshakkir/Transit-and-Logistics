using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20200928142200)]
    public class DefaultDB_20200928_142200_Configuration : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("Configuration")
                   .WithColumn("ID").AsInt32().PrimaryKey().Identity().NotNullable()
                   .WithColumn("InvoiceCollectionLedgerId").AsInt32().NotNullable()
                       .ForeignKey("FK_Configuration_AccountHead", "AccountHeads", "ID");

            Execute.Sql("insert into AccountHeads(Description,Code,LedgerType) values('Collection Ledger','AH0001',1)");

            Execute.Sql("insert into Configuration(InvoiceCollectionLedgerId) values((SELECT TOP 1 ID FROM AccountHeads WHERE Description='Collection Ledger'))");
        }
    }
}
using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20211027152700)]
    public class DefaultDB_20211027_152700_Invoice : AutoReversingMigration
    {
        public override void Up()
        {

            this.Alter.Table("Configuration")
            .AddColumn("InvoiceLedgerId").AsInt32().Nullable()
              .ForeignKey("FK_Configuration_InvoiceAccountHead", "AccountHeads", "Id");

        }
    }
}
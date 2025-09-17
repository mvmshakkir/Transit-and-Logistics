using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20211027155600)]
    public class DefaultDB_20211027_155600_JVINVOICE : AutoReversingMigration
    {
        public override void Up()
        {

            this.Alter.Table("JournalEntries")
              .AddColumn("InvoiceId").AsInt32().Nullable()
                       .ForeignKey("FK_JournalEntries_Invoice", "Invoice", "Id");

        }
    }
}
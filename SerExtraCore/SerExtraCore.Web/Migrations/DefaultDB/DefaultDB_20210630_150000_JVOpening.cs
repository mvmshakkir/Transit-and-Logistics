using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20210630150000)]
    public class DefaultDB_20210630_150000_JVOpening : AutoReversingMigration
    {
        public override void Up()
        {
            this.Alter.Table("JournalEntries")
              .AddColumn("OpeningCustomerId").AsInt32().Nullable()
                       .ForeignKey("FK_JournalEntries_OpeningCustomer", "Customers", "Id")
              .AddColumn("OpeningSupplierId").AsInt32().Nullable()
                       .ForeignKey("FK_JournalEntries_OpeningSupplier", "Supplier", "Id");

            this.Alter.Table("Configuration")
              .AddColumn("OpeningLedgerId").AsInt32().Nullable()
                .ForeignKey("FK_Configuration_OpeningAccountHead", "AccountHeads", "Id");



        }
    }
}
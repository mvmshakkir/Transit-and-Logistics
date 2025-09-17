using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20210216142100)]
    public class DefaultDB_20210216_142100_PDCReceipt : AutoReversingMigration
    {
        public override void Up()
        {




            this.Alter.Table("JournalEntries")
          .AddColumn("PDCReceiptDetailsId").AsInt32().Nullable()
                      .ForeignKey("FK_JournalEntries_PDCReceiptDetails", "PDCPaymentDetails", "Id");



        }
    }
}
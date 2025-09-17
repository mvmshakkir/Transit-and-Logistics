using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20211009120100)]
    public class DefaultDB_20211009_120100_MoneyInOutAlter : AutoReversingMigration
    {
        public override void Up()
        {

            this.Alter.Table("MoneyInOut")
                 .AlterColumn("TrxDate").AsDate().NotNullable();

            this.Alter.Table("JournalEntries")
             .AddColumn("MoneyInOutId").AsInt32().Nullable()
                    .ForeignKey("FK_JournalEntries_MoneyInOut", "MoneyInOut", "Id");

            Alter.Table("PdcPaymentDetails")
              .AddColumn("MoneyInOutId").AsInt32().Nullable()
               .ForeignKey("FK_PdcPaymentDetails_MoneyInOut", "MoneyInOut", "Id");

        }
    }
}
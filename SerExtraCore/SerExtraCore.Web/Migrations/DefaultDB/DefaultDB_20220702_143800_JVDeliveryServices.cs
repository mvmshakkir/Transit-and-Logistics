using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20220702143800)]
    public class DefaultDB_20220702_143800_JVDeliveryServices : AutoReversingMigration
    {
        public override void Up()
        {

            this.Alter.Table("JournalEntries")
              .AddColumn("DeliveryServiceId").AsInt32().Nullable()
                       .ForeignKey("FK_JournalEntries_DeliveryServices", "DeliveryServices", "Id");

        }
    }
}
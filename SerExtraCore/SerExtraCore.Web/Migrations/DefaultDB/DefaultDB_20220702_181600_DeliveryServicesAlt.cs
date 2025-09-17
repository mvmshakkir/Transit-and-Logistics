using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20220702181600)]
    public class DefaultDB_20220702_181600_DeliveryServicesAlt : AutoReversingMigration
    {
        public override void Up()
        {

            this.Alter.Table("DeliveryServices")
                 .AddColumn("ReceiverDetails").AsString(500).Nullable()
                 .AddColumn("ContactNo").AsString(200).Nullable()
                 .AddColumn("IDNo").AsString(200).Nullable();

        }
    }
}
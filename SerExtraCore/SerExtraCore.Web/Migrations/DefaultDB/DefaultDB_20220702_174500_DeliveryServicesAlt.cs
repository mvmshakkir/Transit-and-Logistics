using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20220702174500)]
    public class DefaultDB_20220702_174500_DeliveryServicesAlt : AutoReversingMigration
    {
        public override void Up()
        {

            this.Alter.Table("DeliveryServices")
                 .AddColumn("DeliveryStatus").AsInt32().Nullable();

        }
    }
}
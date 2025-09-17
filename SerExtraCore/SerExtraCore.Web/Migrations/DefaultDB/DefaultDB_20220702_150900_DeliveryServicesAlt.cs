using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20220702150900)]
    public class DefaultDB_20220702_150900_DeliveryServicesAlt : AutoReversingMigration
    {
        public override void Up()
        {

            this.Alter.Table("DeliveryServices")
                 .AddColumn("PaymentTypeA").AsInt32().Nullable()
                 .AddColumn("AccountId").AsInt32().Nullable()
                     .ForeignKey("FK_DeliveryServices_Accounts", "Accounts", "Id");

        }
    }
}
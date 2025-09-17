using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{             
    [Migration(20240322151800)] 
    public class DefaultDB_20240322_1518_AlterVehicleFreight : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("VehicleFreight")
                .AddColumn("PaymentMethod").AsInt32().Nullable()

            .AddColumn("DebitAccountId").AsInt32().ForeignKey("FK_VehicleFreight_DebitAccountId", "Accounts", "Id").Nullable()

            ;
		}
    }
}

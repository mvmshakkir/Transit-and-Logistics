using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{             
    [Migration(20240705134300)] 
    public class DefaultDB_20240705_1343_VehicleOwner : AutoReversingMigration
    {
        public override void Up()
        {

            Alter.Table("Vehicles")

    .AddColumn("OwnerId").AsInt32().ForeignKey("FK_Vehicles_OwnerId", "Customers", "Id").Nullable();


        }
    }
}

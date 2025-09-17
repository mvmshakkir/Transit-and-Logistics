using FluentMigrator;
namespace SerExtraCore.Migrations.DefaultDB
{

    [Migration(20240205113100)]
    public class DefaultDB_20240206_1125_AlterTrip : AutoReversingMigration
    {
        public override void Up()

        {




            Alter.Table("VehicleMovDetails")
     .AddColumn("TotalFuelAmount").AsDecimal(10, 2).Nullable();
                
    ;

        }

    }
}
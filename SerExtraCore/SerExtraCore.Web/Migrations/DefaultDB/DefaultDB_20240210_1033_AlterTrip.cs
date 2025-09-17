using FluentMigrator;
namespace SerExtraCore.Migrations.DefaultDB
{

    [Migration(20240210103200)]
    public class DefaultDB_20240210_1033_AlterTrip : AutoReversingMigration
    {
        public override void Up()

        {




            Alter.Table("VehicleMovDetails")
     .AddColumn("Toll").AsDecimal(10, 2).Nullable();
    


    ;

        }

    }
}
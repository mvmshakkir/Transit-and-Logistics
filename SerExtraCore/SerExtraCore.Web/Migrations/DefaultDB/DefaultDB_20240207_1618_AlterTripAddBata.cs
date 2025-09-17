using FluentMigrator;
namespace SerExtraCore.Migrations.DefaultDB
{

    [Migration(20240207161800)]
    public class DefaultDB_20240207_1618_AlterTripAddBata : AutoReversingMigration
    {
        public override void Up()

        {




            Alter.Table("VehicleMovDetails")
                .AddColumn("DrivertwoBata").AsDecimal(10, 2).Nullable();

    ;

        }

    }
}
using FluentMigrator;
namespace SerExtraCore.Migrations.DefaultDB
{

    [Migration(20240212164300)]
    public class DefaultDB_20240212_1643_AlterTripAdExtrabill : AutoReversingMigration
    {
        public override void Up()

        {




            Alter.Table("VehicleMovDetails")
     .AddColumn("ExtraBill").AsDecimal(10, 2).Nullable();
    


    ;

        }

    }
}
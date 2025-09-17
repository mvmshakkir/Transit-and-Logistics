using FluentMigrator;
namespace SerExtraCore.Migrations.DefaultDB
{

    [Migration(20240210123200)]
    public class DefaultDB_20240210_1232_AlterTripAddExpense : AutoReversingMigration
    {
        public override void Up()

        {




            Alter.Table("VehicleMovDetails")
     .AddColumn("TotalExpense").AsDecimal(10, 2).Nullable();
    


    ;

        }

    }
}
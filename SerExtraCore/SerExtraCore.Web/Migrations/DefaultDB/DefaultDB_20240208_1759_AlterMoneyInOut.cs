using FluentMigrator;
namespace SerExtraCore.Migrations.DefaultDB
{

    [Migration(20240208175900)]
    public class DefaultDB_20240208_1759_AlterMoneyInOut : AutoReversingMigration
    {
        public override void Up()

        {




            Alter.Table("MoneyInOut")
     .AddColumn("TsId").AsInt32().ForeignKey("FK_MoneyInOut_TsId", "VehicleMovDetails", "Id").Nullable()


    ;

        }

    }
}
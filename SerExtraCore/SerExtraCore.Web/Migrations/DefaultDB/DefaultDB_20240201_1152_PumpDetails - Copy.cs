using FluentMigrator;
namespace SerExtraCore.Migrations.DefaultDB
{

    [Migration(20240201115200)]
    public class DefaultDB_20240205_1152_AlterVehicleMov : AutoReversingMigration
    {
        public override void Up()

        {

            Create.Table("PumpDetails")
               .WithColumn("Id").AsInt32()
                    .Identity().PrimaryKey().NotNullable()
                .WithColumn("PumpName").AsString(100).Nullable()
                .WithColumn("PumpPlace").AsString(100).Nullable()
                .WithColumn("Address").AsString(250).Nullable()
                  ;
        }

    }
}
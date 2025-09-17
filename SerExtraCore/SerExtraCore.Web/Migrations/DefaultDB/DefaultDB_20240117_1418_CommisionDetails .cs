using FluentMigrator;
namespace SerExtraCore.Migrations.DefaultDB
{


    [Migration(20240117141800)]
    public class DefaultDB_20240117_1418_CommisionDetails : AutoReversingMigration
    {
        public override void Up()

        {
            Create.Table("CommisionDetails")
         .WithColumn("Id").AsInt32().Identity().PrimaryKey().NotNullable()
        .WithColumn("TSId").AsInt32().ForeignKey("FK_CommisionDetails_TSId", "VehicleMovDetails", "Id").Nullable()
        .WithColumn("DriverId").AsInt32().ForeignKey("FK_CommisionDetails_DriverId", "EmployeeMaster", "Id").Nullable()
        .WithColumn("CommissionAmount").AsDecimal(10, 2).Nullable();



        }
    }
}
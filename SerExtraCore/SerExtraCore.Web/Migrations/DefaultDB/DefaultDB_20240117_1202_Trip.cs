using FluentMigrator;
namespace SerExtraCore.Migrations.DefaultDB
{

    [Migration(20240111120200)]
    public class DefaultDB_20240117_1202_VehicleMovDetails : AutoReversingMigration
    {
        public override void Up()

        {

            Create.Table("VehicleMovDetails")
             .WithColumn("Id").AsInt32().Identity().PrimaryKey().NotNullable()
             .WithColumn("TSNo").AsString().NotNullable()
             .WithColumn("VehicleId").AsInt32().ForeignKey("FK_VehicleMovDetails_VehicleId", "Vehicles", "Id").Nullable()
             .WithColumn("Advance").AsDecimal(10, 2).Nullable()
             .WithColumn("StartKM").AsDecimal(10, 2).Nullable()
             .WithColumn("EndKm").AsDecimal(10, 2).Nullable()
             .WithColumn("TotalKm").AsDecimal(10, 2).Nullable()
             .WithColumn("TotalLiter").AsDecimal(10, 2).Nullable()
             .WithColumn("Mileage").AsDecimal(10, 2).Nullable()
             .WithColumn("Startdate").AsDate().Nullable()
             .WithColumn("Enddate").AsDate().Nullable()
             .WithColumn("Totaldays").AsInt32().Nullable()
             .WithColumn("RTO").AsDecimal(10, 2).Nullable()
             .WithColumn("PC").AsDecimal(10, 2).Nullable()
             .WithColumn("TotalDriverCommission").AsDecimal(10, 2).Nullable()
             .WithColumn("TotalCommison").AsDecimal(10, 2).Nullable()
             .WithColumn("TotalLoadingExpense").AsDecimal(10, 2).Nullable()
             .WithColumn("TotalUnloadExpense").AsDecimal(10, 2).Nullable()
             .WithColumn("TotalOtherExpense").AsDecimal(10, 2).Nullable()
             .WithColumn("TotalFright").AsDecimal(10, 2).Nullable()
             .WithColumn("Profit").AsDecimal(10, 2).Nullable();
        }

    }
}
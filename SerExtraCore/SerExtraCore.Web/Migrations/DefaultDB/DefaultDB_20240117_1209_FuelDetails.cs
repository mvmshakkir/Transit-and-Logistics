using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
[Migration(20240117120900)]
public class DefaultDB_20240117_1209_FuelMovDetails : AutoReversingMigration
{
    public override void Up()

    {

        Create.Table("FuelDetails")
     .WithColumn("Id").AsInt32().Identity().PrimaryKey().NotNullable()
     .WithColumn("TSId").AsInt32().ForeignKey("FK_FuelDetails_TSId", "VehicleMovDetails", "Id").Nullable()
     .WithColumn("PumpId").AsInt32().ForeignKey("FK_FuelDetails_PumpId", "PumpDetails", "Id").Nullable()
     .WithColumn("Date").AsDate().Nullable()
     .WithColumn("Qty").AsDecimal(10, 2).Nullable()
     .WithColumn("LiterRate").AsDecimal(10, 2).Nullable()
     .WithColumn("TotalAmt").AsDecimal(10, 2).Nullable();

    }

}
}
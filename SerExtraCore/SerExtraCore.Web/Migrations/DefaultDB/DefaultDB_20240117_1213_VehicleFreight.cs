using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20240117121300)]
    public class DefaultDB_20240117_1213_VehicleFreight : AutoReversingMigration
    {
        public override void Up()

        {
            Create.Table("VehicleFreight")
                .WithColumn("Id").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("TSId").AsInt32().ForeignKey("FK_VehicleFreight_TSId", "VehicleMovDetails", "Id").Nullable()
                .WithColumn("MaterialId").AsInt32().ForeignKey("FK_VehicleFreight_MaterialId", "MaterialsDetails", "Id").Nullable()
                .WithColumn("UnitID").AsInt32().ForeignKey("FK_VehicleFreight_UnitID", "UOM", "Id").Nullable()
                .WithColumn("FromPlace").AsInt32().ForeignKey("FK_VehicleFreight_FromPlace", "ShippingAreas", "Id").Nullable()
                .WithColumn("ToPlace").AsInt32().ForeignKey("FK_VehicleFreight_ToPlace", "ShippingAreas", "Id").Nullable()
                .WithColumn("TripDate").AsDate().Nullable()
                .WithColumn("PerTonRate").AsDecimal(10, 2).Nullable()
                .WithColumn("TotalFreight").AsDecimal(10, 2).Nullable()
                .WithColumn("Commission").AsDecimal(10, 2).Nullable()
                .WithColumn("LoadingExpense").AsDecimal(10, 2).Nullable()
                .WithColumn("UnloadingExpense").AsDecimal(10, 2).Nullable()
                .WithColumn("AmountOtherExpenses").AsDecimal(10, 2).Nullable()
                .WithColumn("UnitPrice").AsDecimal(10, 2).Nullable()
                .WithColumn("TotalCommission").AsDecimal(10, 2).Nullable();

        }

    }
}
using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20220715122000)]
    public class DefaultDB_20220715_122000_ConsigmentVehicleAlter3 : AutoReversingMigration
    {
        public override void Up()
        {
            this.Alter.Table("ConsignmentVehicleDetails")
                        .AddColumn("DriverAdvance").AsDecimal(18, 3).Nullable()
                        .AddColumn("DriverAdvancePaymentType").AsInt32().Nullable()
                        .AddColumn("DriverAdvanceAccount").AsInt32().Nullable();

        }
    }
}
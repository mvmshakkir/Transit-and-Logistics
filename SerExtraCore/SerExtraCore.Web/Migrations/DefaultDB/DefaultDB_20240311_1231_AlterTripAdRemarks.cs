using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
	[Migration(20240311123100)]
	public class DefaultDB_20240311_1231_AlterTripAdRemarks : AutoReversingMigration
	{
		public override void Up()
		{
			Alter.Table("VehicleMovDetails")
				.AddColumn("Remarks").AsString(500).Nullable();

			Alter.Table("VehicleFreight")
				.AddColumn("Party").AsString(250).Nullable();

			Alter.Table("FuelDetails")
				.AddColumn("AmountType").AsInt32().Nullable();

			Alter.Table("SettlementDetails")
				.AddColumn("FualAmount").AsDecimal(10, 2).Nullable(); // Note: Typo fixed in "FuelAmount"
		}
	}
}

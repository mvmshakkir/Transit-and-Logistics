using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
	[Migration(20240312105900)]
	public class DefaultDB_20240312_1059_AlterExpenses : AutoReversingMigration
	{
		public override void Up()
		{
			Alter.Table("Expenses")
				.AddColumn("VehicleId").AsInt32().ForeignKey("FK_Expenses_VehicleId", "Vehicles", "Id").Nullable()
				.AddColumn("Profit").AsDecimal(10, 2).Nullable();


        }
	}
}

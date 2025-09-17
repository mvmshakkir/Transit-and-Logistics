using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
	[Migration(20240313172800)]
	public class DefaultDB_20240313_1728_AlterFreight : AutoReversingMigration
	{
		public override void Up()
		{
            Alter.Table("VehicleFreight")
            .AddColumn("CashCredit").AsInt32().Nullable()
            .AddColumn("partys").AsInt32().ForeignKey("FK_VehicleFreight_partys", "Customers", "Id").Nullable()

            ;


        }
	}
}

using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
	[Migration(20240325162000)]
	public class DefaultDB_20240325_1620_AddCrossing : AutoReversingMigration
	{
		public override void Up()
		{
            Create.Table("Crossing")
            .WithColumn("Id").AsInt32().Identity().PrimaryKey().NotNullable()
            .WithColumn("settlementid").AsInt32().ForeignKey("FK_Crossing_settlementid", "SettlementDetails", "Id").Nullable()
            .WithColumn("Name").AsString(250).Nullable()
            .WithColumn("Amount").AsDecimal(10, 2).Nullable();
            ;


        }
	}
}

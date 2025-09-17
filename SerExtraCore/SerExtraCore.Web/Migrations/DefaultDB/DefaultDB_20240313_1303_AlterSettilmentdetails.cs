using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
	[Migration(20240313130300)]
	public class DefaultDB_20240313_1303_AlterSettilmentdetails : AutoReversingMigration
	{
		public override void Up()
		{
            Create.Table("ExtraExpense")
            .WithColumn("Id").AsInt32().Identity().PrimaryKey().NotNullable()
            .WithColumn("settlementid").AsInt32().ForeignKey("FK_ExtraExpense_settlementid", "SettlementDetails", "Id").Nullable()
            .WithColumn("Name").AsString(250).Nullable()
            .WithColumn("Amount").AsDecimal(10, 2).Nullable();
            ;


        }
	}
}

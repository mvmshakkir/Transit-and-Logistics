using FluentMigrator;
namespace SerExtraCore.Migrations.DefaultDB
{

	[Migration(20240222043000)]
	public class DefaultDB_20240222_0430_AlterSettilmentDetails : AutoReversingMigration
	{
		public override void Up()

		{




			Alter.Table("SettlementDetails")
	 .AddColumn("TripBalancee").AsDecimal(10, 2).Nullable()
	 .AddColumn("Advance").AsDecimal(10, 2).Nullable()
	 .AddColumn("toll").AsDecimal(10, 2).Nullable()
	 ;



			;

		}

	}
}
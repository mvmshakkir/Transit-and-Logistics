using FluentMigrator;
namespace SerExtraCore.Migrations.DefaultDB
{

	[Migration(20240222171100)]
	public class DefaultDB_20240222_1711_AlterSettilmentDetailsts : AutoReversingMigration
	{
		public override void Up()

		{




			Alter.Table("SettlementDetails")
	 .AddColumn("TsNumber").AsString(100).Nullable()
	 
	 



			;

		}

	}
}
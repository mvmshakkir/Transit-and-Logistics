using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
	[Migration(20240312111400)]
	public class DefaultDB_20240312_1114_AlterExpenses : AutoReversingMigration
	{
		public override void Up()
		{
			Alter.Table("Expenses")
				.AddColumn("StartDate").AsDate().Nullable()
				.AddColumn("EndDate").AsDate().Nullable();


        }
	}
}

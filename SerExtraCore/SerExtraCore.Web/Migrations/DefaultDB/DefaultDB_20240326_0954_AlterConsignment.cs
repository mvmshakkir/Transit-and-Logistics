using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
	[Migration(20240326095400)]
	public class DefaultDB_20240326_0954_AlterConsignment : AutoReversingMigration
	{
		public override void Up()
		{
            Alter.Table("Consignment")
            .AddColumn("LoadedDate").AsDate().Nullable();

            ;


        }
	}
}

using FluentMigrator;
namespace SerExtraCore.Migrations.DefaultDB
{

    [Migration(20240302161400)]
    public class DefaultDB_20240302_1614_AlterConsignmentAddPO : AutoReversingMigration
    {
        public override void Up()

        {





			this.Alter.Table("Consignment")
	  .AddColumn("Po").AsString(100).Nullable()
	 ;
    


    ;

        }

    }
}
using FluentMigrator;
namespace SerExtraCore.Migrations.DefaultDB
{

    [Migration(20240221142900)]
    public class DefaultDB_20240221_1429_AlterConsignmentBilling : AutoReversingMigration
    {
        public override void Up()

        {





			this.Alter.Table("Consignment")
	  .AlterColumn("Billing").AsInt32().Nullable()
	 ;
    


    ;

        }

    }
}
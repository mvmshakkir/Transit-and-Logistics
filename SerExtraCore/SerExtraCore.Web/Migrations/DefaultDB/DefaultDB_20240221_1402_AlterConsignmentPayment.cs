using FluentMigrator;
namespace SerExtraCore.Migrations.DefaultDB
{

    [Migration(20240221140200)]
    public class DefaultDB_20240221_1402_AlterConsignmentPayment : AutoReversingMigration
    {
        public override void Up()

        {





			this.Alter.Table("Consignment")
	  .AlterColumn("Payment").AsInt32().Nullable()
	 ;
    


    ;

        }

    }
}
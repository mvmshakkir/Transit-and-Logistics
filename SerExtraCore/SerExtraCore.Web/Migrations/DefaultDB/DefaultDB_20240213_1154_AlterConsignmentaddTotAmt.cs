using FluentMigrator;
namespace SerExtraCore.Migrations.DefaultDB
{

    [Migration(20240213115400)]
    public class DefaultDB_20240213_1154_AlterConsignmentaddTotAmt : AutoReversingMigration
    {
        public override void Up()

        {




            Alter.Table("Consignment")
     .AddColumn("TotalFreightAmount").AsDecimal(10, 2).Nullable()    
     ;
    


    ;

        }

    }
}
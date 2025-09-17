using FluentMigrator;
namespace SerExtraCore.Migrations.DefaultDB
{

    [Migration(20240210174800)]
    public class DefaultDB_20240210_1748_AlterConsignmenttwo : AutoReversingMigration
    {
        public override void Up()

        {




            Alter.Table("Consignment")
     .AddColumn("CgstAmt").AsDecimal(10, 2).Nullable()
     .AddColumn("SgstAmt").AsDecimal(10, 2).Nullable()
     .AddColumn("IgstAmt").AsDecimal(10, 2).Nullable()
     ;
    


    ;

        }

    }
}
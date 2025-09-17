using FluentMigrator;
namespace SerExtraCore.Migrations.DefaultDB
{

    [Migration(20240210152100)]
    public class DefaultDB_20240210_1521_AlterConsignment : AutoReversingMigration
    {
        public override void Up()

        {




            Alter.Table("Consignment")
     .AddColumn("Cgst").AsDecimal(10, 2).Nullable()
     .AddColumn("Sgst").AsDecimal(10, 2).Nullable()
     .AddColumn("Igst").AsDecimal(10, 2).Nullable()
     ;
    


    ;

        }

    }
}
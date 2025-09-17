using FluentMigrator;
namespace SerExtraCore.Migrations.DefaultDB
{

    [Migration(20240209163200)]
    public class DefaultDB_20240209_1632_AlterIConsignment : AutoReversingMigration
    {
        public override void Up()

        {




            Alter.Table("Consignment")
     .AddColumn("TaxPaidBy").AsInt32().Nullable()
     .AddColumn("TotalTaxAmount").AsDecimal(10, 2).Nullable()


    ;

        }

    }
}
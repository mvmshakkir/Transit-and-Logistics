using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{             
    [Migration(20240705093800)] 
    public class DefaultDB_20240705_0938_InvoiceTax : AutoReversingMigration
    {
        public override void Up()
        {

            Alter.Table("Invoice")
     .AddColumn("Cgst").AsDecimal(10, 2).Nullable()
     .AddColumn("Sgst").AsDecimal(10, 2).Nullable()
     .AddColumn("Igst").AsDecimal(10, 2).Nullable()
     ;
        }
    }
}

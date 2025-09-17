using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{             
    [Migration(20240705095400)] 
    public class DefaultDB_20240705_0954_InvoiceTaxAmount : AutoReversingMigration
    {
        public override void Up()
        {

            Alter.Table("Invoice")
     .AddColumn("CgstAmt").AsDecimal(10, 2).Nullable()
     .AddColumn("SgstAmt").AsDecimal(10, 2).Nullable()
     .AddColumn("IgstAmt").AsDecimal(10, 2).Nullable()
     ;
        }
    }
}

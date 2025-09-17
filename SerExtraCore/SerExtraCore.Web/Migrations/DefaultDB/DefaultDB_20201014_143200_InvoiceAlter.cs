using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20201014143200)]
    public class DefaultDB_20201014_143200_InvoiceAlter : AutoReversingMigration
    {
        public override void Up()
        {




            

            this.Alter.Table("Invoice")
              .AddColumn("Billing").AsInt32().NotNullable().WithDefaultValue(1)
                .ForeignKey("FK_Invoice_Customers", "Customers", "Id");


          
        }
    }
}
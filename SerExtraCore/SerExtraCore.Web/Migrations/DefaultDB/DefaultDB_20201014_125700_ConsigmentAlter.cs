using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20201014125700)]
    public class DefaultDB_20201014_125700_ConsigmentAlter : AutoReversingMigration
    {
        public override void Up()
        {




            

            this.Alter.Table("Consignment")
              .AddColumn("Billing").AsInt32().NotNullable().WithDefaultValue(1)
                .ForeignKey("FK_Consignment_Customers", "Customers", "Id");


          
        }
    }
}
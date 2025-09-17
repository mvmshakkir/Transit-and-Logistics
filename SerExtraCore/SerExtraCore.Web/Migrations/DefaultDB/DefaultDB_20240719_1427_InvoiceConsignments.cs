using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{             
    [Migration(20240719142700)] 
    public class DefaultDB_20240719_1427_InvoiceConsignments : AutoReversingMigration
    {
        public override void Up()
        {

            Create.Table("InvoiceConsignment")
                 .WithColumn("Id").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("InvoiceId").AsInt32().NotNullable()
                    .ForeignKey("FK_InvoiceConsignment_Invoice", "Invoice", "Id")
                .WithColumn("ConsignmentId").AsInt32().NotNullable()
                    .ForeignKey("FK_InvoiceConsignment_Consignment", "Consignment", "Id");


        }
    }
}

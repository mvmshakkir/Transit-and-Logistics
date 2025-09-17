using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20201103123800)]
    public class DefaultDB_20201103_123800_ConsigmentInvoice : AutoReversingMigration
    {
        public override void Up()
        {


            this.CreateTableWithId32("InvoiceConsignments", "Id", s => s
             .WithColumn("ConsignmentId").AsInt32().NotNullable()
                .ForeignKey("FK_InvoiceConsignments_Consignment", "Consignment", "Id")
             .WithColumn("InvoiceId").AsInt32().NotNullable()
                 .ForeignKey("FK_InvoiceConsignments_Invoice", "Invoice", "Id"));

            this.Alter.Table("ConsignmentVehicleDetails")
                       .AddColumn("TypeOfVehicle").AsInt32().NotNullable().WithDefaultValue(1);


            this.Alter.Table("InvoiceVehicleDetails")
                       .AddColumn("TypeOfVehicle").AsInt32().NotNullable().WithDefaultValue(1);

        }
    }
}
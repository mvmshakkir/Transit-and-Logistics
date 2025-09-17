using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20201208181400)]
    public class DefaultDB_20201208_181400_InvoiceVehicleDetails3 : AutoReversingMigration
    {
        public override void Up()
        {

            this.CreateTableWithId32("ConsignmentVehicleSpecifications", "Id", s => s
             .WithColumn("ConsignmentVehicleDetailId").AsInt32().NotNullable()
              .ForeignKey("FK_ConsignmentVehicleSpecifications_ConsignmentVehicleDetails", "ConsignmentVehicleDetails", "Id")
             .WithColumn("SpecificationId").AsInt32().NotNullable()
               .ForeignKey("FK_ConsignmentVehicleSpecifications_Specifications", "Specifications", "Id"));


            this.CreateTableWithId32("InvoiceVehicleSpecifications", "Id", s => s
            .WithColumn("InvoiceVehicleDetailId").AsInt32().NotNullable()
             .ForeignKey("FK_InvoiceVehicleSpecifications_InvoiceVehicleDetails", "InvoiceVehicleDetails", "Id")
            .WithColumn("SpecificationId").AsInt32().NotNullable()
              .ForeignKey("FK_InvoiceVehicleSpecifications_Specifications", "Specifications", "Id"));
        }
    }
}
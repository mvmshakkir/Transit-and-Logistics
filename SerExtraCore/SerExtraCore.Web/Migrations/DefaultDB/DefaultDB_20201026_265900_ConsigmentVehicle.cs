using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20201026265900)]
    public class DefaultDB_20201026_265900_ConsigmentVehicle : AutoReversingMigration
    {
        public override void Up()
        {






            this.CreateTableWithId32("ConsignmentVehicleDetails", "Id", s => s
              .WithColumn("ConsignmentId").AsInt32().NotNullable()
                 .ForeignKey("FK_ConsignmentVehicleDetails_Consignment", "Consignment", "Id")
               .WithColumn("VehicleId").AsInt32().NotNullable()
                   .ForeignKey("FK_ConsignmentVehicleDetails_Vehicles", "Vehicles", "Id")
               .WithColumn("Type").AsString(500).Nullable()
               .WithColumn("VehicleNumber").AsString(200).Nullable()
               .WithColumn("Driver").AsInt32().Nullable()
                 .ForeignKey("FK_ConsignmentVehicleDetails_EmployeeMaster", "EmployeeMaster", "Id")
                .WithColumn("ShippingAreaFrom").AsInt32().Nullable()
                   .ForeignKey("FK_ConsignmentVehicleDetails_ShippingAreaFrom", "ShippingAreas", "Id")
               .WithColumn("ShippingAreaTo").AsInt32().Nullable()
                   .ForeignKey("FK_ConsignmentVehicleDetails_ShippingAreaTo", "ShippingAreas", "Id"));



            this.CreateTableWithId32("InvoiceVehicleDetails", "Id", s => s
               .WithColumn("InvoiceId").AsInt32().NotNullable()
                 .ForeignKey("FK_InvoiceVehicleDetails_Invoice", "Invoice", "Id")
               .WithColumn("VehicleId").AsInt32().NotNullable()
                   .ForeignKey("FK_InvoiceVehicleDetails_Vehicles", "Vehicles", "Id")
               .WithColumn("Type").AsString(500).Nullable()
               .WithColumn("VehicleNumber").AsString(200).Nullable()
               .WithColumn("Driver").AsInt32().Nullable()
                 .ForeignKey("FK_InvoiceVehicleDetails_EmployeeMaster", "EmployeeMaster", "Id")
                .WithColumn("ShippingAreaFrom").AsInt32().Nullable()
                   .ForeignKey("FK_InvoiceVehicleDetails_ShippingAreaFrom", "ShippingAreas", "Id")
               .WithColumn("ShippingAreaTo").AsInt32().Nullable()
                   .ForeignKey("FK_InvoiceVehicleDetails_ShippingAreaTo", "ShippingAreas", "Id"));



        }
    }
}
using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20201208110000)]
    public class DefaultDB_20201208_110000_AlterVehicleDetails : AutoReversingMigration
    {
        public override void Up()
        {

            this.Alter.Table("ConsignmentVehicleDetails")
                       .AddColumn("SupplierAmount").AsDecimal(18, 3).Nullable()
                 .AddColumn("SupplierId").AsInt32().Nullable()
                  .ForeignKey("FK_ConsignmentVehicleDetails_Supplier", "Supplier", "Id");


            this.Alter.Table("InvoiceVehicleDetails")
                      .AddColumn("SupplierAmount").AsDecimal(18, 3).Nullable()
                 .AddColumn("SupplierId").AsInt32().Nullable()
                       .ForeignKey("FK_InvoiceVehicleDetails_Supplier", "Supplier", "Id")
                 .AddColumn("SupplierPaymentStatus").AsInt32().Nullable();
        }
    }
}
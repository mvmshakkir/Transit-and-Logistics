using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20210305105000)]
    public class DefaultDB_20210305_105000_VehicleCharges : AutoReversingMigration
    {
        public override void Up()
        {

            

            this.Alter.Table("ConsignmentCharges")
                 .AddColumn("ConsignmentVehicleDetailId").AsInt32().Nullable()
                       .ForeignKey("FK_ConsignmentCharges_ConsignmentVehicleDetails_ChargeDetails", "ConsignmentVehicleDetails", "Id");


            this.Alter.Table("InvoiceCharges")
                 .AddColumn("InvoiceChargeVehicleDetailId").AsInt32().Nullable()
                       .ForeignKey("FK_InvoiceCharges_InvoiceVehicleDetails_ChargeDetails", "InvoiceVehicleDetails", "Id");






        }
    }
}
using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20210127105300)]
    public class DefaultDB_20210127_105300_InvoiceSupplierAdvance : AutoReversingMigration
    {
        public override void Up()
        {

            this.Alter.Table("InvoiceVehicleDetails")
                 .AddColumn("SupplierAdvanceAmount").AsDecimal(18, 3).Nullable()
                 .AddColumn("PaymentType").AsInt32().Nullable()
                 .AddColumn("AccountId").AsInt32().Nullable()
                     .ForeignKey("FK_InvoiceVehicleDetails_Accounts", "Accounts", "Id")
                 .AddColumn("ConsignmentVehicleDetailsId").AsInt32().Nullable()
                     .ForeignKey("FK_InvoiceVehicleDetails_ConsignmentVehicleDetails", "ConsignmentVehicleDetails", "Id");


           
        }
    }
}
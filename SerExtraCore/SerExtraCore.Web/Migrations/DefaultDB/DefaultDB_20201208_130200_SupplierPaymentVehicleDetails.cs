using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20201208130200)]
    public class DefaultDB_20201208_130200_SupplierPaymentVehicleDetails : AutoReversingMigration
    {
        public override void Up()
        {

            this.CreateTableWithId32("SuppliersPaymentInvoiceVehicleDetails", "Id", s => s
           .WithColumn("SuppliersPaymentId").AsInt32().NotNullable()
              .ForeignKey("FK_SuppliersPaymentInvoiceVehicleDetails_SuppliersPayment", "SuppliersPayment", "Id")
           .WithColumn("InvoiceVehicleDetailId").AsInt32().NotNullable()
               .ForeignKey("FK_SuppliersPaymentInvoiceVehicleDetails_InvoiceVehicleDetails", "InvoiceVehicleDetails", "Id"));
        }
    }
}
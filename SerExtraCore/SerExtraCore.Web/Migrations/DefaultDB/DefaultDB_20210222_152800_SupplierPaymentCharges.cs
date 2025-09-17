using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20210222152800)]
    public class DefaultDB_20210222_152800_SupplierPaymentCharges : AutoReversingMigration
    {
        public override void Up()
        {

            this.CreateTableWithId32("SuppliersPaymentInvoiceCharges", "Id", s => s
           .WithColumn("SuppliersPaymentId").AsInt32().NotNullable()
              .ForeignKey("FK_SuppliersPaymentInvoiceCharges_SuppliersPayment", "SuppliersPayment", "Id")
           .WithColumn("InvoiceChargesId").AsInt32().NotNullable()
               .ForeignKey("FK_SuppliersPaymentInvoiceCharges_InvoiceCharges", "InvoiceCharges", "Id"));
        }
    }
}
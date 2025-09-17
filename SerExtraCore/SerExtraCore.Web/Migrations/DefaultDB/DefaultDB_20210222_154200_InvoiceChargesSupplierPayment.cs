using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20210222154200)]
    public class DefaultDB_20210222_154200_InvoiceChargesSupplierPayment : AutoReversingMigration
    {
        public override void Up()
        {

            this.Alter.Table("InvoiceCharges")
                 .AddColumn("SupplierAmount").AsDecimal(18, 3).Nullable()
                 .AddColumn("SupplierId").AsInt32().Nullable()
                       .ForeignKey("FK_InvoiceCharges_Supplier", "Supplier", "Id")
                 .AddColumn("SupplierPaymentStatus").AsInt32().Nullable()
                 .AddColumn("SupplierAdvanceAmount").AsDecimal(18, 3).Nullable()
                 .AddColumn("PaymentType").AsInt32().Nullable()
                 .AddColumn("AccountId").AsInt32().Nullable()
                     .ForeignKey("FK_InvoiceCharges_Accounts", "Accounts", "Id");

          






        }
    }
}
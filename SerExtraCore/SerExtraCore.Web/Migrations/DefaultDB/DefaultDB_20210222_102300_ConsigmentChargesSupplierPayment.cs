using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20210222102300)]
    public class DefaultDB_20210222_102300_ConsigmentChargesSupplierPayment : AutoReversingMigration
    {
        public override void Up()
        {

            this.Alter.Table("ConsignmentCharges")
                 .AddColumn("SupplierAmount").AsDecimal(18, 3).Nullable()
                 .AddColumn("SupplierId").AsInt32().Nullable()
                       .ForeignKey("FK_ConsignmentCharges_Supplier", "Supplier", "Id")
                 .AddColumn("SupplierPaymentStatus").AsInt32().Nullable()
                 .AddColumn("SupplierAdvanceAmount").AsDecimal(18, 3).Nullable()
                 .AddColumn("PaymentType").AsInt32().Nullable()
                 .AddColumn("AccountId").AsInt32().Nullable()
                     .ForeignKey("FK_ConsignmentCharges_Accounts", "Accounts", "Id");

            this.Alter.Table("JournalEntries")
                 .AddColumn("ConsignmentChargesId").AsInt32().Nullable()
                       .ForeignKey("FK_JournalEntries_ConsignmentCharges", "ConsignmentCharges", "Id");






        }
    }
}
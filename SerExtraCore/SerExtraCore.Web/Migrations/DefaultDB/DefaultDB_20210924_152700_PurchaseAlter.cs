using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20210924152700)]
    public class DefaultDB_20210924_152700_PurchaseAlter : AutoReversingMigration
    {
        public override void Up()
        {
            this.Alter.Table("Purchase")
             .AddColumn("SupplierId").AsInt32().NotNullable()
                    .ForeignKey("FK_Purchase_Supplier", "Supplier", "Id")
             .AddColumn("PaymentMode").AsInt32().NotNullable()
             .AddColumn("PaidAmount").AsDecimal(18,3).Nullable()
             .AddColumn("PaymentType").AsInt32().Nullable()
             .AddColumn("AccountId").AsInt32().Nullable()
                     .ForeignKey("FK_Purchase_Accounts", "Accounts", "Id");

            Alter.Table("PdcPaymentDetails")
              .AddColumn("PurchaseId").AsInt32().Nullable()
               .ForeignKey("FK_PdcPaymentDetails_Purchase", "Purchase", "Id");


            this.Alter.Table("JournalEntries")
            .AddColumn("PurchaseId").AsInt32().Nullable()
                   .ForeignKey("FK_JournalEntries_Purchase", "Purchase", "Id");



            this.Alter.Table("Configuration")
             .AddColumn("PurchaseLedgerId").AsInt32().Nullable()
               .ForeignKey("FK_Configuration_PurchaseAccountHead", "AccountHeads", "Id");

        }
    }
}
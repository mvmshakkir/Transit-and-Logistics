using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20201103175600)]
    public class DefaultDB_20201103_175600_ConsiChargeUpdate : AutoReversingMigration
    {
        public override void Up()
        {



            this.Alter.Table("SuppliersPayment")
                      .AlterColumn("Date").AsDate().NotNullable();




            this.Alter.Table("Configuration")
           .AddColumn("SupplierPaymentLedgerId").AsInt32().NotNullable().WithDefaultValue(1)
                       .ForeignKey("FK_Configuration_SupplierPaymentAccountHead", "AccountHeads", "ID");


            this.Alter.Table("JournalEntries")
           .AddColumn("SupplierPaymentId").AsInt32().Nullable()
                       .ForeignKey("FK_JournalEntries_SupplierPayment", "SuppliersPayment", "Id");
        }
    }
}
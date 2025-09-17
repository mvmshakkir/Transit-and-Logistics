using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20210304150700)]
    public class DefaultDB_20210304_150700_PayrollJV : AutoReversingMigration
    {
        public override void Up()
        {

            

            this.Alter.Table("JournalEntries")
                 .AddColumn("PayrollPaymentId").AsInt32().Nullable()
                       .ForeignKey("FK_JournalEntries_PayrollPayment", "PayrollPayment", "Id");


            this.Alter.Table("PayrollPayment")
                 .AddColumn("PaymentType").AsInt32().NotNullable().WithDefaultValue(1)
                 .AddColumn("AccountId").AsInt32().NotNullable().WithDefaultValue(1)
                     .ForeignKey("FK_PayrollPayment_Accounts", "Accounts", "Id");


            this.Alter.Table("Configuration")
         .AddColumn("SalaryLedgerId").AsInt32().NotNullable().WithDefaultValue(1)
                     .ForeignKey("FK_Configuration_SalaryAccountHead", "AccountHeads", "ID");



        }
    }
}
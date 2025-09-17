using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20201103183600)]
    public class DefaultDB_20201103_183600_SupplierPayments : AutoReversingMigration
    {
        public override void Up()
        {



            this.Alter.Table("SuppliersPayment")
                       .AddColumn("PaymentType").AsInt32().NotNullable()
               .AddColumn("AccountId").AsInt32().NotNullable()
                     .ForeignKey("FK_SuppliersPayment_Accounts", "Accounts", "Id")
               .AddColumn("Status").AsInt32().NotNullable()
               .AddColumn("StatusUser").AsInt32().Nullable()
                   .ForeignKey("FK_SuppliersPayment_Users", "Users", "UserId");

            this.Alter.Table("JournalEntries")
           .AddColumn("SupplierId").AsInt32().Nullable()
                       .ForeignKey("FK_JournalEntries_Supplier", "Supplier", "Id");



        }
    }
}
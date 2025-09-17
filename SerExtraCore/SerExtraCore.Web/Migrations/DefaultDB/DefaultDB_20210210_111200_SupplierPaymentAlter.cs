using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20210210111200)]
    public class DefaultDB_20210210_111200_SupplierPaymentAlter : AutoReversingMigration
    {
        public override void Up()
        {




            Alter.Table("PdcPaymentDetails")
                .AddColumn("PaymentType").AsInt32().Nullable()
                 .AddColumn("AccountId").AsInt32().Nullable()
                     .ForeignKey("FK_PdcPaymentDetails_Accounts", "Accounts", "Id");
        }
    }
}
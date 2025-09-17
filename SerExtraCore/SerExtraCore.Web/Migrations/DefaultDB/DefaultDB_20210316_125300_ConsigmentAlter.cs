using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20210316125300)]
    public class DefaultDB_20210316_125300_ConsigmentAlter : AutoReversingMigration
    {
        public override void Up()
        {



            this.Alter.Table("Consignment")
                .AddColumn("AdvanceAmount").AsDecimal(18,3).Nullable()
                .AddColumn("AdvancePaymentType").AsInt32().Nullable()
                .AddColumn("AdvanceAccountId").AsInt32().Nullable()
                    .ForeignKey("FK_Advance_Consignment_Accounts", "Accounts", "Id")
                .AddColumn("BalanceAmount").AsDecimal(18, 3).NotNullable().WithDefaultValue(0);

            this.Execute.Sql("update Consignment set BalanceAmount=TotalAmount");

            this.Alter.Table("JournalEntries")
                 .AddColumn("ConsignmentAdvanceConsignmentId").AsInt32().Nullable()
                       .ForeignKey("FK_JournalEntries_Consignment_Advance", "Consignment", "Id");






        }
    }
}
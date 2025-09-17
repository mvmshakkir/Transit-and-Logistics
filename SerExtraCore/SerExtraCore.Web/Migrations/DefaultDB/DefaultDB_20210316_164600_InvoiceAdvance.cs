using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20210316164600)]
    public class DefaultDB_20210316_164600_InvoiceAdvance : AutoReversingMigration
    {
        public override void Up()
        {
            this.Alter.Table("Invoice")
               .AddColumn("AdvanceAmount").AsDecimal(18, 3).Nullable()
               .AddColumn("BalanceAmount").AsDecimal(18, 3).NotNullable().WithDefaultValue(0);

            this.Execute.Sql("update Invoice set BalanceAmount=TotalAmount");
        }
    }
}
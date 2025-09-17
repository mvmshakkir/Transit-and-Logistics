using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20210629105500)]
    public class DefaultDB_20210629_105500_Quotation_TermsAndCond : AutoReversingMigration
    {
        public override void Up()
        {

            this.Alter.Table("Quotations")
                .AddColumn("TermsAndConditions").AsString(1000).Nullable();

        }
    }
}
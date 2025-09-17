using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20210629110900)]
    public class DefaultDB_20210629_110900_Quotation_Type : AutoReversingMigration
    {
        public override void Up()
        {

            this.Alter.Table("Quotations")
                .AddColumn("QuotationType").AsInt32().Nullable();


            this.Alter.Table("Configuration")
                .AddColumn("KSATermsAndConditions").AsString(1000).Nullable()
                .AddColumn("PDOTermsAndConditions").AsString(1000).Nullable()
                .AddColumn("UAETermsAndConditions").AsString(1000).Nullable();

        }
    }
}
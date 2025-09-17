using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20210630102600)]
    public class DefaultDB_20210630_102600_Quotation_TypeAlter : AutoReversingMigration
    {
        public override void Up()
        {

            this.Alter.Table("Quotations")
              .AlterColumn("TermsAndConditions").AsString(5000).Nullable();

            this.Alter.Table("Configuration")
                .AlterColumn("KSATermsAndConditions").AsString(5000).Nullable()
                .AlterColumn("PDOTermsAndConditions").AsString(5000).Nullable()
                .AlterColumn("UAETermsAndConditions").AsString(5000).Nullable();

        }
    }
}
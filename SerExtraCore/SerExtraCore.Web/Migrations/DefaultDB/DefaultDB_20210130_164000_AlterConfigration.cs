using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20210130164000)]
    public class DefaultDB_20210130_164000_AlterConfigration : AutoReversingMigration
    {
        public override void Up()
        {

            this.Alter.Table("Configuration")
                .AddColumn("BankName").AsString(300).Nullable()
                .AddColumn("AccountName").AsString(300).Nullable()
                .AddColumn("SwiftCode").AsString(300).Nullable()
                .AddColumn("AccountNumber").AsString(300).Nullable()
                .AddColumn("IbanNo").AsString(300).Nullable();
        }
    }
}
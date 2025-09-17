using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20210210142700)]
    public class DefaultDB_20210210_142700_InvoiceCollection : AutoReversingMigration
    {
        public override void Up()
        {



            Alter.Table("InvoiceCollection")
                .AlterColumn("AccountId").AsInt32().Nullable();


        }
    }
}
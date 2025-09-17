using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20200928130600)]
    public class DefaultDB_20200928_130600_AlterTotalAmount : AutoReversingMigration
    {
        public override void Up()
        {
            this.Alter.Table("InvoiceCollection").AlterColumn("TotalAmount").AsDecimal(18,3).NotNullable().WithDefaultValue(1);

            
        }
    }
}
using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20220714150300)]
    public class DefaultDB_20220714_150300_MoneyInOutAlter1 : AutoReversingMigration
    {
        public override void Up()
        {

            this.Alter.Table("MoneyInOut")
                 .AlterColumn("VNo").AsInt32().NotNullable();

        }
    }
}
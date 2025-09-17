using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20200928110600)]
    public class DefaultDB_20200928_110600_PaymentMode : AutoReversingMigration
    {
        public override void Up()
        {
            this.Alter.Table("Consignment").AddColumn("PaymentMode").AsInt32().NotNullable().WithDefaultValue(1);

            this.Alter.Table("Invoice").AddColumn("PaymentMode").AsInt32().NotNullable().WithDefaultValue(1);
        }
    }
}
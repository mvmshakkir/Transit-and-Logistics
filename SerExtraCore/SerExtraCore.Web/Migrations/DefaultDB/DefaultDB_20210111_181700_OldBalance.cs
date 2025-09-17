using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20210111181700)]
    public class DefaultDB_20210111_181700_OldBalance : AutoReversingMigration
    {
        public override void Up()
        {

            this.Alter.Table("SuppliersPayment")
                 .AddColumn("OldBalance").AsDecimal(18,3).Nullable();
        }
    }
}
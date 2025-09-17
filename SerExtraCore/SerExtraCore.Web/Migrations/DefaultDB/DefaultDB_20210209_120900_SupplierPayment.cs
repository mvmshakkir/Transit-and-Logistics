using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20210209120900)]
    public class DefaultDB_20210209_120900_SupplierPayment : AutoReversingMigration
    {
        public override void Up()
        {



            Alter.Table("SuppliersPayment")
                .AlterColumn("AccountId").AsInt32().Nullable();
        }
    }
}
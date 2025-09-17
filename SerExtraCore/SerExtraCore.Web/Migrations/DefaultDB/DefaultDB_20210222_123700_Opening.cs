using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20210222123700)]
    public class DefaultDB_20210222_123700_Opening : AutoReversingMigration
    {
        public override void Up()
        {

            Alter.Table("Supplier")
                  .AddColumn("Opening").AsDecimal(18,3).Nullable();


            Alter.Table("Customers")
                 .AddColumn("Opening").AsDecimal(18, 3).Nullable();





        }
    }
}
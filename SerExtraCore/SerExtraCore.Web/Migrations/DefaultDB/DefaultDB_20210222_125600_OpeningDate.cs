using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20210222125600)]
    public class DefaultDB_20210222_125600_OpeningDate : AutoReversingMigration
    {
        public override void Up()
        {

            Alter.Table("Supplier")
                  .AddColumn("OpeningDate").AsDate().Nullable();


            Alter.Table("Customers")
                  .AddColumn("OpeningDate").AsDate().Nullable();





        }
    }
}
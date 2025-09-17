using FluentMigrator;
namespace SerExtraCore.Migrations.DefaultDB
{

    [Migration(20240117122300)]
    public class DefaultDB_20240117_1223_Services : AutoReversingMigration
    {
        public override void Up()

        {
            Create.Table("Services")
         .WithColumn("Id").AsInt32().Identity().PrimaryKey().NotNullable()
         .WithColumn("ServiceName").AsString(50).Nullable();


        }
    }
}
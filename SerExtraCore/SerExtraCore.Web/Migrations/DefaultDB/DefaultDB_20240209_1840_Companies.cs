using FluentMigrator;
namespace SerExtraCore.Migrations.DefaultDB
{

    [Migration(20240209184000)]
    public class DefaultDB_20240209_1840_Companies : AutoReversingMigration
    {
        public override void Up()

        {

            Create.Table("Companies")
             .WithColumn("Id").AsInt32().Identity().PrimaryKey().NotNullable()
             .WithColumn("StateId").AsInt32().ForeignKey("FK_Companies_StateId", "States", "Id").Nullable()
             .WithColumn("Name").AsString(250).Nullable()
             .WithColumn("Address").AsString(500).Nullable()
              
;
        }

    }
}
using FluentMigrator;
namespace SerExtraCore.Migrations.DefaultDB
{

    [Migration(20240209183500)]
    public class DefaultDB_20240209_1835_States : AutoReversingMigration
    {
        public override void Up()

        {

            Create.Table("States")
             .WithColumn("Id").AsInt32().Identity().PrimaryKey().NotNullable()
             .WithColumn("CountryId").AsInt32().ForeignKey("FK_States_CountryId", "Countries", "Id").Nullable()
             .WithColumn("Name").AsString(250).Nullable()
              
;
        }

    }
}
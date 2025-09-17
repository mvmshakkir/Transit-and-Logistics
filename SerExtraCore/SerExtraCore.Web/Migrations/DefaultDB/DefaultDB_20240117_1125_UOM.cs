using FluentMigrator;
namespace SerExtraCore.Migrations.DefaultDB
{

    [Migration(20240111112500)]
    public class DefaultDB_20240117_1125_MaterialsDetails : AutoReversingMigration
    {
        public override void Up()

        {

            Create.Table("UOM")
               .WithColumn("Id").AsInt32()
                    .Identity().PrimaryKey().NotNullable()
                .WithColumn("Unit").AsString(200).Nullable()
               ;
        }

    }
}
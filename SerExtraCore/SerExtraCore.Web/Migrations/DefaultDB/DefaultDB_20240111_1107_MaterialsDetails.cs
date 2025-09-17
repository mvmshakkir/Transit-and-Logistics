using FluentMigrator;
namespace SerExtraCore.Migrations.DefaultDB {

    [Migration(20240111110700)]
    public class DefaultDB_20240117_1107_MaterialsDetails : AutoReversingMigration
    {
        public override void Up()

        {

            Create.Table("MaterialsDetails")
               .WithColumn("Id").AsInt32()
                    .Identity().PrimaryKey().NotNullable()
                .WithColumn("Materials").AsString(200).Nullable()
               ;
        }
    }
}


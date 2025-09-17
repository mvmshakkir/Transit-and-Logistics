using FluentMigrator;
namespace SerExtraCore.Migrations.DefaultDB
{

    [Migration(20240111113100)]
    public class DefaultDB_20240117_1131_UOMAmount : AutoReversingMigration
    {
        public override void Up()

        {

            Create.Table("UOMAmount")
               .WithColumn("Id").AsInt32()
                    .Identity().PrimaryKey().NotNullable()
                .WithColumn("Rate").AsDecimal(10, 2).Nullable()
                .WithColumn("MaterialsId").AsInt32().Nullable()
                    .ForeignKey("FK_UOMAmount_MaterialsId", "MaterialsDetails", "Id")
                .WithColumn("UOMId").AsInt32().Nullable()
                    .ForeignKey("FK_UOMAmount_UOMId", "UOM", "Id");
        }

    }
}
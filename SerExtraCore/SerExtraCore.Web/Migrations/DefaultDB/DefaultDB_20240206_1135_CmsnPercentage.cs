using FluentMigrator;
namespace SerExtraCore.Migrations.DefaultDB {

    [Migration(20240206113500)]
    public class DefaultDB_20240206_1135_CmsnPercentage : AutoReversingMigration
    {
        public override void Up()

        {

            Create.Table("CommissionPercentage")
               .WithColumn("Id").AsInt32()
                    .Identity().PrimaryKey().NotNullable()
                .WithColumn("Percentage").AsDecimal(10, 2).Nullable();
               
        }
    }
}


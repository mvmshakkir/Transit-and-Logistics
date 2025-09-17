using FluentMigrator;
namespace SerExtraCore.Migrations.DefaultDB
{

    [Migration(20240206120800)]
    public class DefaultDB_20240206_1208_AlterCommisionDetails : AutoReversingMigration
    {
        public override void Up()

        {




            Alter.Table("CommisionDetails")
                .AddColumn("PercentageId").AsInt32().ForeignKey("FK_CommisionDetails_PercentageId", "CommissionPercentage", "Id").Nullable()

    ;

        }

    }
}
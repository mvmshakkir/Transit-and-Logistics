using FluentMigrator;
namespace SerExtraCore.Migrations.DefaultDB
{

    [Migration(20240210095300)]
    public class DefaultDB_20240210_0953_AlterICustomers : AutoReversingMigration
    {
        public override void Up()

        {




            Alter.Table("Customers")
      .AddColumn("StateId").AsInt32().ForeignKey("FK_Customers_StateId", "States", "Id").Nullable()


    ;

        }

    }
}
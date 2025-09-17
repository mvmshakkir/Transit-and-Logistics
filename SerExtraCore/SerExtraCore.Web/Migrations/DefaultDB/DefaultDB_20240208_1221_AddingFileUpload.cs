using FluentMigrator;
namespace SerExtraCore.Migrations.DefaultDB
{

    [Migration(20240208122100)]
    public class DefaultDB_20240208_1221_AddingFileUpload : AutoReversingMigration
    {
        public override void Up()

        {




            Alter.Table("ServiceAmount")
                .AddColumn("Photo").AsString(500).Nullable();

            ;

        }

    }
}
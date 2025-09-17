using FluentMigrator;
namespace SerExtraCore.Migrations.DefaultDB
{

    [Migration(20240208123200)]
    public class DefaultDB_20240208_1232_AddingFileUploadFual : AutoReversingMigration
    {
        public override void Up()

        {




            Alter.Table("FuelDetails")
                .AddColumn("Photo").AsString(500).Nullable();

            ;

        }

    }
}
using FluentMigrator;
namespace SerExtraCore.Migrations.DefaultDB
{

    [Migration(20240208171000)]
    public class DefaultDB_20240208_1710_AlterJournalEntries : AutoReversingMigration
    {
        public override void Up()

        {




            Alter.Table("JournalEntries")
     .AddColumn("TsId").AsInt32().ForeignKey("FK_JournalEntries_TsId", "VehicleMovDetails", "Id").Nullable()


    ;

        }

    }
}
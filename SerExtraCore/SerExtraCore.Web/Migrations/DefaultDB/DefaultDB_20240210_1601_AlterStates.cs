using FluentMigrator;
namespace SerExtraCore.Migrations.DefaultDB
{

    [Migration(20240210160100)]
    public class DefaultDB_20240210_1601_AlterStates : AutoReversingMigration
    {
        public override void Up()

        {




            Alter.Table("States")
     .AddColumn("Code").AsString(100).Nullable()
     
     ;
    


    

        }

    }
}
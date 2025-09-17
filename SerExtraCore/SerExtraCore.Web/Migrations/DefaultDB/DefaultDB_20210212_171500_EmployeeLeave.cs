using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20210212171500)]
    public class DefaultDB_20210212_171500_EmployeeLeave : AutoReversingMigration
    {
        public override void Up()
        {




            Alter.Table("EmployeeLeaves")


              .AlterColumn("Remarks").AsString().Nullable();
              



        }
    }
}
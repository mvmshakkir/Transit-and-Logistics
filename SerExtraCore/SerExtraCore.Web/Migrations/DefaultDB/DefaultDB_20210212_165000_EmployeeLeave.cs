using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20210212165000)]
    public class DefaultDB_20210212_165000_EmployeeLeave : AutoReversingMigration
    {
        public override void Up()
        {

         


            Create.Table("EmployeeLeaves")
              .WithColumn("ID").AsInt32().PrimaryKey().Identity().NotNullable()
              .WithColumn("EmployeeId").AsInt32().NotNullable()
                 .ForeignKey("FK_EmployeeLeaves_EmployeeMaster", "EmployeeMaster", "Id")
              .WithColumn("FromDate").AsDate().NotNullable()
              .WithColumn("ToDate").AsDate().NotNullable()
              .WithColumn("Days").AsInt32().NotNullable()
              .WithColumn("Remarks").AsInt32().Nullable()
              .WithColumn("Attachments").AsString(500).Nullable();



        }
    }
}
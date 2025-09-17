using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20201106161800)]
    public class DefaultDB_20201106_161800_ConsiExpences : AutoReversingMigration
    {
        public override void Up()
        {



           

            this.Alter.Table("JournalEntries")
           .AddColumn("ConsignmentId").AsInt32().Nullable()
                       .ForeignKey("FK_JournalEntries_Consignment", "Consignment", "Id");



        }
    }
}
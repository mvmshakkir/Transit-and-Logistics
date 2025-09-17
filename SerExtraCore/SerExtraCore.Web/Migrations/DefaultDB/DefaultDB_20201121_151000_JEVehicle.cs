using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20201121151000)]
    public class DefaultDB_20201121_151000_JEVehicle : AutoReversingMigration
    {
        public override void Up()
        {

            this.Alter.Table("JournalEntries")
               .AddColumn("VehicleId").AsInt32().Nullable()
                    .ForeignKey("FK_JournalEntries_Vehicles", "Vehicles", "Id");

        }
    }
}
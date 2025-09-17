using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{             
    [Migration(20240323112700)] 
    public class DefaultDB_20240323_1127_AlterJournalEntries : AutoReversingMigration
    {
        public override void Up()
        {
			Alter.Table("JournalEntries")
	.AddColumn("FreightId").AsInt32().ForeignKey("FK_JournalEntries_FreightId", "VehicleFreight", "Id").Nullable()

		   ;
		}
    }
}

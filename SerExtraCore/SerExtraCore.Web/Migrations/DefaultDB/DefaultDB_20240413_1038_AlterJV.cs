using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{             
    [Migration(20240413103800)] 
    public class DefaultDB_20240413_1038_AlterJV : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("JournalEntries")
                

            .AddColumn("FuelId").AsInt32().ForeignKey("FK_JournalEntries_FuelId", "FuelDetails", "Id").Nullable()

            ;
		}
    }
}

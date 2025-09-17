using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{             
    [Migration(20240413141900)] 
    public class DefaultDB_20240413_1419_AlterJV : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("JournalEntries")
                

            .AddColumn("FuelTsId").AsInt32().ForeignKey("FK_JournalEntries_FuelTsId", "FuelDetails", "Id").Nullable()

            ;
		}
    }
}

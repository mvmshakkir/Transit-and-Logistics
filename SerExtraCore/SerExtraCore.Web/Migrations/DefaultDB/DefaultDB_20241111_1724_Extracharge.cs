using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{             
    [Migration(20241111172400)] 
    public class DefaultDB_20241111_1724_Extracharge : AutoReversingMigration
    {
        public override void Up()
        {

            Alter.Table("Consignment")
                .AddColumn("Extracharge").AsDecimal(18, 3).Nullable();


        }
    }
}

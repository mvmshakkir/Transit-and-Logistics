using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{             
    [Migration(20240705123200)] 
    public class DefaultDB_20240705_1232_VehicleHSN : AutoReversingMigration
    {
        public override void Up()
        {

            Alter.Table("Vehicles")

     .AddColumn("HSN").AsString().Nullable();
  
        }
    }
}

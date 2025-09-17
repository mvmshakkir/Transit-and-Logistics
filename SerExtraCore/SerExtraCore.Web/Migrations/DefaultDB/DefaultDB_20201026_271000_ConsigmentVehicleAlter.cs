using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20201026271000)]
    public class DefaultDB_20201026_271000_ConsigmentVehicleAlter : AutoReversingMigration
    {
        public override void Up()
        {




            this.Alter.Table("Consignment")
            .AlterColumn("VehicleId").AsInt32().Nullable();


            this.Alter.Table("Invoice")
           .AlterColumn("VehicleId").AsInt32().Nullable();






        }
    }
}
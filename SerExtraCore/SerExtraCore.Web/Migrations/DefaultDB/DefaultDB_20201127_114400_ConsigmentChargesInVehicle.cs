using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20201127114400)]
    public class DefaultDB_20201127_114400_ConsigmentChargesInVehicle : AutoReversingMigration
    {
        public override void Up()
        {

         

            this.Execute.Sql("ALTER TABLE ConsignmentCharges DROP CONSTRAINT FK_ConsignmentCharges_ConsignmentCharges");

            this.Alter.Table("ConsignmentCharges")
                    .AlterColumn("ConsignmentChargesId").AsInt32().Nullable()
                       .ForeignKey("FK_ConsignmentCharges_ConsignmentVehicleDetails", "ConsignmentVehicleDetails", "Id");

        }
    }
}
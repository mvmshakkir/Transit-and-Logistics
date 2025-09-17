using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20201014114900)]
    public class DefaultDB_20201014_114900_AlterVehicle : AutoReversingMigration
    {
        public override void Up()
        {




            this.CreateTableWithId32("VehicleModels", "Id", s => s
              .WithColumn("ModelName").AsString(200).NotNullable()
              .WithColumn("Description").AsString(500).Nullable());

            this.Execute.Sql("update Vehicles set VehicleModel=null");

            this.Alter.Table("Vehicles")
              .AlterColumn("VehicleModel").AsInt32().Nullable()
                .ForeignKey("FK_Vehicles_VehicleModels", "VehicleModels", "Id");


            this.CreateTableWithId32("Specifications", "Id", s => s
             .WithColumn("Specifications").AsString(500).NotNullable()
             .WithColumn("Description").AsString(500).Nullable());

            this.CreateTableWithId32("VehicleSpecifications", "Id", s => s
              .WithColumn("VehicleId").AsInt32().NotNullable()
               .ForeignKey("FK_VehicleSpecifications_Vehicles", "Vehicles", "Id")
              .WithColumn("SpecificationId").AsInt32().NotNullable()
                .ForeignKey("FK_VehicleSpecifications_Specifications", "Specifications", "Id"));
        }
    }
}
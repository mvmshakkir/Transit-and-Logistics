using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20201117110600)]
    public class DefaultDB_20201117_110600_AlterConsigment2 : AutoReversingMigration
    {
        public override void Up()
        {

            this.Alter.Table("ConsignmentVehicleDetails")
                .AddColumn("DriverName").AsString(200).Nullable()
                .AddColumn("Number").AsString(200).Nullable()
                .AddColumn("ResidentID").AsString(200).Nullable()
                .AddColumn("CountryId").AsInt32().Nullable()
                     .ForeignKey("FK_ConsignmentVehicleDetails_Countries", "Countries", "Id");

            this.Alter.Table("InvoiceVehicleDetails")
         .AddColumn("DriverName").AsString(200).Nullable()
                .AddColumn("Number").AsString(200).Nullable()
                .AddColumn("ResidentID").AsString(200).Nullable()
                .AddColumn("CountryId").AsInt32().Nullable()
                     .ForeignKey("FK_InvoiceVehicleDetails_Countries", "Countries", "Id");

        }
    }
}
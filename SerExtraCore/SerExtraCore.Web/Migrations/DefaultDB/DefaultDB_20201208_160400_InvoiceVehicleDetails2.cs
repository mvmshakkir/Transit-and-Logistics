using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20201208160400)]
    public class DefaultDB_20201208_160400_InvoiceVehicleDetails2 : AutoReversingMigration
    {
        public override void Up()
        {

            this.Alter.Table("ConsignmentVehicleDetails")
                    .AddColumn("TypeOfPkg").AsString(200).Nullable()
               .AddColumn("TotalVolume").AsString(200).Nullable()
               .AddColumn("TotalWeight").AsString(200).Nullable()
               .AddColumn("TotalNoOfPkgs").AsString(200).Nullable();

            this.Alter.Table("InvoiceVehicleDetails")
                       .AddColumn("TypeOfPkg").AsString(200).Nullable()
               .AddColumn("TotalVolume").AsString(200).Nullable()
               .AddColumn("TotalWeight").AsString(200).Nullable()
               .AddColumn("TotalNoOfPkgs").AsString(200).Nullable();
        }
    }
}
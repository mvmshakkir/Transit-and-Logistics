using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20201208152800)]
    public class DefaultDB_20201208_152800_InvoiceVehicleDetails : AutoReversingMigration
    {
        public override void Up()
        {

            this.Alter.Table("ConsignmentVehicleDetails")
                     .AddColumn("DriverKMFrom").AsDecimal(18, 2).Nullable()
              .AddColumn("DriverKMTo").AsDecimal(18, 2).Nullable()
              .AddColumn("GPSKMFrom").AsDecimal(18, 2).Nullable()
              .AddColumn("GPSKMTo").AsDecimal(18, 2).Nullable();

            this.Alter.Table("InvoiceVehicleDetails")
                      .AddColumn("DriverKMFrom").AsDecimal(18, 2).Nullable()
               .AddColumn("DriverKMTo").AsDecimal(18, 2).Nullable()
               .AddColumn("GPSKMFrom").AsDecimal(18, 2).Nullable()
               .AddColumn("GPSKMTo").AsDecimal(18, 2).Nullable();
        }
    }
}
using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20201113100200)]
    public class DefaultDB_20201113_100200_AlterConsigment : AutoReversingMigration
    {
        public override void Up()
        {

            this.Alter.Table("ConsignmentVehicleDetails")
          .AddColumn("StartDate").AsDateTime().Nullable()
           .AddColumn("EndDate").AsDateTime().Nullable();

            this.Alter.Table("InvoiceVehicleDetails")
         .AddColumn("StartDate").AsDateTime().Nullable()
          .AddColumn("EndDate").AsDateTime().Nullable();

        }
    }
}
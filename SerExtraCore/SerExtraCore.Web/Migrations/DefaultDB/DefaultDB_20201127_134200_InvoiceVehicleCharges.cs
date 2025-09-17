using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20201127134200)]
    public class DefaultDB_20201127_134200_InvoiceVehicleCharges : AutoReversingMigration
    {
        public override void Up()
        {

            this.Alter.Table("InvoiceCharges")
                       .AlterColumn("InvoiceId").AsInt32().Nullable()
                       .AddColumn("InvoiceVehicleDetailId").AsInt32().Nullable()
                          .ForeignKey("FK_InvoiceCharges_InvoiceVehicleDetails", "InvoiceVehicleDetails", "Id");

        }
    }
}
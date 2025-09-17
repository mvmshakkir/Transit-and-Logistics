using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20210116161800)]
    public class DefaultDB_20210116_161800_SupplierAdvance : AutoReversingMigration
    {
        public override void Up()
        {

            this.Alter.Table("ConsignmentVehicleDetails")
                 .AddColumn("SupplierAdvanceAmount").AsDecimal(18,3).Nullable()
                 .AddColumn("PaymentType").AsInt32().Nullable()
                 .AddColumn("AccountId").AsInt32().Nullable()
                     .ForeignKey("FK_ConsignmentVehicleDetails_Accounts", "Accounts", "Id");


            this.Alter.Table("JournalEntries")
           .AddColumn("ConsignmentVehicleDetailsId").AsInt32().Nullable()
                       .ForeignKey("FK_JournalEntries_ConsignmentVehicleDetails", "ConsignmentVehicleDetails", "Id");
        }
    }
}
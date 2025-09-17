using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20211106151200)]
    public class DefaultDB_20211106_151200_Clearance : AutoReversingMigration
    {
        public override void Up()
        {

            this.Alter.Table("Consignment").AddColumn("ClearanceId").AsInt32().Nullable()
                                .ForeignKey("FK_Consignment_Clearance", "Clearance", "Id");



            this.Alter.Table("Invoice").AddColumn("ClearanceId").AsInt32().Nullable()
                                .ForeignKey("FK_Invoice_Clearance", "Clearance", "Id");
        }
    }
}
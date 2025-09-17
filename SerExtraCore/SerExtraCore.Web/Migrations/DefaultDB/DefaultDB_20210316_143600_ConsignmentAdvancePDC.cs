using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20210316143600)]
    public class DefaultDB_20210316_143600_ConsignmentAdvancePDC : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("PdcPaymentDetails")
               .AddColumn("ConsignmentAdvanceId").AsInt32().Nullable()
                .ForeignKey("FK_PdcPaymentDetails_Consignment", "Consignment", "ID");
        }
    }
}
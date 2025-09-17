using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20231007_105300)]
    public class DefaultDB_20231007_105300_PDCSupplier : AutoReversingMigration
    {
        public override void Up()
        {

            this.Alter.Table("PdcPaymentDetails")
                    .AddColumn("SupplierId").AsInt32().Nullable()
                     .ForeignKey("FK_PdcPaymentDetails_Supplier", "Supplier", "Id");



        }
    }
}
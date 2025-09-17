using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20231007_120100)]
    public class DefaultDB_20231007_120100_PDCSupplier : AutoReversingMigration
    {
        public override void Up()
        {

            this.Alter.Table("PDCPayments")
                    .AddColumn("SupplierId").AsInt32().Nullable()
                     .ForeignKey("FK_PDCPayments_Supplier", "Supplier", "Id");



        }
    }
}
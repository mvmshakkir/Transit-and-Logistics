using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20210206102100)]
    public class DefaultDB_20210206_102100_PDC : AutoReversingMigration
    {
        public override void Up()
        {



            Alter.Table("PdcPaymentDetails")
                .AddColumn("ChequeStatus").AsInt32().NotNullable().WithDefaultValue(1)
                .AddColumn("StatusDate").AsDate().Nullable()
                .AddColumn("ChequeType").AsInt32().NotNullable().WithDefaultValue(1)
                .AddColumn("SuppliersPaymentId").AsInt32().Nullable()
                 .ForeignKey("FK_PdcPaymentDetails_SuppliersPayment", "SuppliersPayment", "ID")
                .AlterColumn("PDCPaymentsId").AsInt32().Nullable()
                .AddColumn("InvoiceCollectionId").AsInt32().Nullable()
                 .ForeignKey("FK_PdcPaymentDetails_InvoiceCollection", "InvoiceCollection", "ID");
        }
    }
}
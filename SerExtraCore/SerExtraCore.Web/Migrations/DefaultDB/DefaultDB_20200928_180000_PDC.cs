using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20200928180000)]
    public class DefaultDB_20200928_180000_PDC : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("PDCPayments", "Id", s => s
              .WithColumn("PDCNumber").AsString().NotNullable()
               .WithColumn("TrxDate").AsDate().NotNullable()
              .WithColumn("Company").AsString(500).NotNullable()
              .WithColumn("StartDate").AsDate().NotNullable()
                .WithColumn("Installments").AsInt32().NotNullable()
                .WithColumn("EndDate").AsDate().NotNullable()
               .WithColumn("InstallmentAmount").AsDecimal(18,3).NotNullable()
               .WithColumn("Notes").AsString(500).Nullable());


            this.CreateTableWithId32("PDCPaymentDetails", "Id", s => s
               .WithColumn("PDCPaymentsId").AsInt32().NotNullable()
                       .ForeignKey("FK_PDCPaymentDetails_PDCPayments", "PDCPayments", "ID")
              .WithColumn("Date").AsDate().NotNullable()
              .WithColumn("ChequeNO").AsString(500).Nullable()
              .WithColumn("Amount").AsDecimal(18,3).NotNullable());


        }
    }
}
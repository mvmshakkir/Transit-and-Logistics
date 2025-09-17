using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20210623114000)]
    public class DefaultDB_20210623_114000_Quotation : AutoReversingMigration
    {
        public override void Up()
        {

            this.CreateTableWithId32("Quotations", "Id", s => s
                .WithColumn("CustomerId").AsInt32().NotNullable()
                    .ForeignKey("FK_Quotations_Customers", "Customers", "Id")
                .WithColumn("Date").AsDate().NotNullable()
                .WithColumn("QuotNo").AsString().Nullable()
                .WithColumn("ContactPerson").AsString().Nullable()
                .WithColumn("Mobile").AsString().Nullable()
                .WithColumn("Email").AsString().Nullable()
                .WithColumn("ENQUIRYREF").AsString().Nullable()
                .WithColumn("FaxNo").AsString().Nullable()
                .WithColumn("TotalAmount").AsDecimal(18,3).Nullable()
                .WithColumn("Note").AsString(500).Nullable()
                .WithColumn("VehicleType").AsString(500).Nullable());


            this.CreateTableWithId32("QuotationDetails", "Id", s => s
                .WithColumn("QuotationId").AsInt32().NotNullable()
                    .ForeignKey("FK_QuotationDetails_Quotations", "Quotations", "Id")
                .WithColumn("ChargeId").AsInt32().NotNullable()
                    .ForeignKey("FK_QuotationDetails_Charges", "Charges", "Id")
                .WithColumn("Description").AsString(500).Nullable()
                .WithColumn("Unit").AsString().Nullable()
                .WithColumn("Quantity").AsDecimal(18,3).Nullable()
                .WithColumn("Rate").AsDecimal(18,3).Nullable()
                .WithColumn("TaxableAmount").AsDecimal(18, 3).Nullable()
                .WithColumn("TaxPer").AsDecimal(18, 3).Nullable()
                .WithColumn("TaxAmount").AsDecimal(18, 3).Nullable()
                .WithColumn("TotalAmount").AsDecimal(18, 3).Nullable()
                .WithColumn("CurrencyId").AsInt32().Nullable()
                    .ForeignKey("FK_QuotationDetails_Currencies", "Currencies", "Id")
                .WithColumn("ExchangeRate").AsDecimal(18,3).Nullable()
                .WithColumn("TotalAmountInLocalCurrency").AsDecimal(18,3).Nullable());

        }
    }
}
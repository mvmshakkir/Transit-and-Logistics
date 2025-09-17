using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20210924120200)]
    public class DefaultDB_20210924_120200_Products : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("Products", "Id", s => s
                    .WithColumn("ProductCode").AsString().NotNullable()
                    .WithColumn("ProductName").AsString().NotNullable()
                    .WithColumn("UnitPrice").AsDecimal(18,3).NotNullable());


            this.CreateTableWithId32("Purchase", "Id", s => s
                    .WithColumn("TrxDate").AsDate().NotNullable()
                    .WithColumn("RefNo").AsString().Nullable()
                    .WithColumn("TotalAmount").AsDecimal(18, 3).NotNullable());

            this.CreateTableWithId32("PurchaseDetails", "Id", s => s
                    .WithColumn("PurchaseId").AsInt32().NotNullable()
                        .ForeignKey("FK_PurchaseDetails_Purchase", "Purchase", "Id")
                    .WithColumn("ProductId").AsInt32().NotNullable()
                        .ForeignKey("FK_PurchaseDetails_Products", "Products", "Id")
                    .WithColumn("UnitPrice").AsDecimal(18, 3).NotNullable()
                    .WithColumn("Quantity").AsDecimal(18, 3).NotNullable()
                    .WithColumn("TotalAmount").AsDecimal(18, 3).NotNullable()
                    .WithColumn("DisPer").AsDecimal(18, 3).NotNullable()
                    .WithColumn("DisAmount").AsDecimal(18, 3).NotNullable()
                    .WithColumn("TaxableAmount").AsDecimal(18, 3).NotNullable()
                    .WithColumn("TaxPer").AsDecimal(18, 3).NotNullable()
                    .WithColumn("TaxAmount").AsDecimal(18, 3).NotNullable()
                    .WithColumn("LineTotal").AsDecimal(18, 3).NotNullable());
        }
    }
}
using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20220702110900)]
    public class DefaultDB_20220702_110900_DeliveryServices : AutoReversingMigration
    {
        public override void Up()
        {

            this.CreateTableWithId32("DeliveryServices", "Id", s => s
                              .WithColumn("BillNo").AsString().NotNullable()
                              .WithColumn("TrxDate").AsDate().NotNullable()
                              .WithColumn("ConsigneeId").AsInt32().NotNullable()
                                  .ForeignKey("FK_DeliveryServices_Customers_Consignee", "Customers", "Id")
                              .WithColumn("ConsignorId").AsInt32().NotNullable()
                                  .ForeignKey("FK_DeliveryServices_Customers_Consignor", "Customers", "Id")
                              .WithColumn("ShippingAreaFrom").AsInt32().Nullable()
                                    .ForeignKey("FK_DeliveryServices_ShippingAreaFrom", "ShippingAreas", "Id")
                              .WithColumn("ShippingAreaTo").AsInt32().Nullable()
                                    .ForeignKey("FK_DeliveryServices_ShippingAreaTo", "ShippingAreas", "Id")
                              .WithColumn("HandDate").AsDate().Nullable()
                              .WithColumn("ReceivedDate").AsDate().Nullable()
                              .WithColumn("Note").AsString(500).Nullable()
                              .WithColumn("PaymentType").AsInt32().NotNullable()
                              .WithColumn("TotalAmount").AsDecimal(18,3).NotNullable());

            this.CreateTableWithId32("DeliveryServiceDetails", "Id", s => s
                               .WithColumn("DeliveryServiceId").AsInt32().NotNullable()
                                  .ForeignKey("FK_DeliveryServiceDetails_DeliveryServices", "DeliveryServices", "Id")
                               .WithColumn("ParcelType").AsString(500).Nullable()
                               .WithColumn("ParcelTypeOtherLang").AsString(500).Nullable()
                               .WithColumn("Quantity").AsDecimal(18, 3).NotNullable()
                               .WithColumn("UnitPrice").AsDecimal(18, 3).NotNullable()
                               .WithColumn("TotalAmount").AsDecimal(18, 3).NotNullable());
        }
    }
}
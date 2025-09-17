using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20200924111000)]
    public class DefaultDB_20200924_111000_Customers : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("Currencies", "Id", s => s
              .WithColumn("CurrencyCode").AsString(200).NotNullable()
              .WithColumn("CurrencyName").AsString(200).NotNullable()
              .WithColumn("ExchangeRate").AsDecimal(18,3).NotNullable()
             );

            this.CreateTableWithId32("Charges", "Id", s => s
              .WithColumn("ChargeName").AsString(200).NotNullable()
              .WithColumn("Description").AsString(500).Nullable()
             );

            this.CreateTableWithId32("ShippingAreas", "Id", s => s
             .WithColumn("AreaName").AsString(200).NotNullable()
             .WithColumn("Description").AsString(500).Nullable()
            );

            this.CreateTableWithId32("Customers", "Id", s => s
               .WithColumn("CustomerCode").AsString(200).NotNullable()
               .WithColumn("CustomerName").AsString(200).NotNullable()
               .WithColumn("Address").AsString(500).Nullable()
               .WithColumn("Place").AsString(200).Nullable()
               .WithColumn("Telephone").AsString(200).Nullable()
               .WithColumn("Email").AsString(200).Nullable()
               .WithColumn("ContactPerson").AsString(200).Nullable()
               .WithColumn("Mobile").AsString(200).Nullable()
               .WithColumn("CreationDate").AsDate().Nullable()
               .WithColumn("Description").AsString(500).Nullable());

            this.CreateTableWithId32("Consignment", "Id", s => s
               .WithColumn("Date").AsDate().NotNullable()
               .WithColumn("WayBillNo").AsString(200).Nullable()
               .WithColumn("JobNo").AsString(200).NotNullable()
               .WithColumn("ClientJobNo").AsString(200).Nullable()
               .WithColumn("ShipperId").AsInt32().NotNullable()
                   .ForeignKey("FK_Consignment_Customers_Shipper", "Customers", "Id")
               .WithColumn("ConsigneeId").AsInt32().NotNullable()
                   .ForeignKey("FK_Consignment_Customers_Consignee", "Customers", "Id")
               .WithColumn("VehicleId").AsInt32().NotNullable()
                   .ForeignKey("FK_Consignment_Vehicles", "Vehicles", "Id")
               .WithColumn("Type").AsString(500).Nullable()
               .WithColumn("VehicleNumber").AsString(200).Nullable()
               .WithColumn("Driver").AsInt32().Nullable()
                 .ForeignKey("FK_Consignment_EmployeeMaster", "EmployeeMaster", "Id")
               .WithColumn("Payment").AsInt32().NotNullable()
               .WithColumn("TypeOfPkg").AsString(200).Nullable()
               .WithColumn("TotalVolume").AsString(200).Nullable()
               .WithColumn("TotalWeight").AsString(200).Nullable()
               .WithColumn("TotalNoOfPkgs").AsString(200).Nullable()
               .WithColumn("ShippingAreaFrom").AsInt32().Nullable()
                   .ForeignKey("FK_Consignment_ShippingAreaFrom", "ShippingAreas", "Id")
               .WithColumn("ShippingAreaTo").AsInt32().Nullable()
                   .ForeignKey("FK_Consignment_ShippingAreaTo", "ShippingAreas", "Id")
               .WithColumn("TotalAmount").AsDecimal(18,3).NotNullable());

            this.CreateTableWithId32("ConsignmentCharges", "Id", s => s
               .WithColumn("ConsignmentId").AsInt32().NotNullable()
                 .ForeignKey("FK_ConsignmentCharges_Consignment", "Consignment", "Id")
              .WithColumn("ChargeId").AsInt32().NotNullable()
                 .ForeignKey("FK_ConsignmentCharges_Charges", "Charges", "Id")
               .WithColumn("Description").AsString(500).Nullable()
               .WithColumn("Amount").AsDecimal(18,3).NotNullable()
               .WithColumn("Qty").AsDecimal(18, 3).NotNullable()
               .WithColumn("TotalAmount").AsDecimal(18, 3).NotNullable()
               .WithColumn("CurrencyId").AsInt32().NotNullable()
                 .ForeignKey("FK_ConsignmentCharges_Currencies", "Currencies", "Id")
               .WithColumn("ExchangeRate").AsDecimal(18, 3).NotNullable()
               .WithColumn("TotalAmountInLocalCurrency").AsDecimal(18, 3).NotNullable());
        }
    }
}
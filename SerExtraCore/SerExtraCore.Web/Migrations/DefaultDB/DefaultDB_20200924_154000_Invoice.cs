using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20200924154000)]
    public class DefaultDB_20200924_154000_Invoice : AutoReversingMigration
    {
        public override void Up()
        {
           

            this.CreateTableWithId32("Invoice", "Id", s => s
               .WithColumn("InvoiceDate").AsDate().NotNullable()
                .WithColumn("InvoiceNO").AsString().NotNullable()
               .WithColumn("ConsignmentId").AsInt32().NotNullable()
                   .ForeignKey("FK_Invoice_Consignment", "Consignment", "Id")
               .WithColumn("ConsignmentDate").AsDate().NotNullable()
               .WithColumn("WayBillNo").AsString(200).Nullable()
               .WithColumn("JobNo").AsString(200).NotNullable()
               .WithColumn("ClientJobNo").AsString(200).Nullable()
               .WithColumn("ShipperId").AsInt32().NotNullable()
                   .ForeignKey("FK_Invoice_Customers_Shipper", "Customers", "Id")
               .WithColumn("ConsigneeId").AsInt32().NotNullable()
                   .ForeignKey("FK_Invoice_Customers_Consignee", "Customers", "Id")
               .WithColumn("VehicleId").AsInt32().NotNullable()
                   .ForeignKey("FK_Invoice_Vehicles", "Vehicles", "Id")
               .WithColumn("Type").AsString(500).Nullable()
               .WithColumn("VehicleNumber").AsString(200).Nullable()
               .WithColumn("Driver").AsInt32().Nullable()
                 .ForeignKey("FK_Invoice_EmployeeMaster", "EmployeeMaster", "Id")
               .WithColumn("Payment").AsInt32().NotNullable()
               .WithColumn("TypeOfPkg").AsString(200).Nullable()
               .WithColumn("TotalVolume").AsString(200).Nullable()
               .WithColumn("TotalWeight").AsString(200).Nullable()
               .WithColumn("TotalNoOfPkgs").AsString(200).Nullable()
               .WithColumn("ShippingAreaFrom").AsInt32().Nullable()
                   .ForeignKey("FK_Invoice_ShippingAreaFrom", "ShippingAreas", "Id")
               .WithColumn("ShippingAreaTo").AsInt32().Nullable()
                   .ForeignKey("FK_Invoice_ShippingAreaTo", "ShippingAreas", "Id")
               .WithColumn("TotalAmount").AsDecimal(18,3).NotNullable()
               .WithColumn("DriverKMFrom").AsDecimal(18, 2).Nullable()
               .WithColumn("DriverKMTo").AsDecimal(18, 2).Nullable()
               .WithColumn("GPSKMFrom").AsDecimal(18, 2).Nullable()
               .WithColumn("GPSKMTo").AsDecimal(18, 2).Nullable()
               .WithColumn("Status").AsInt32().NotNullable()
               .WithColumn("StatusUser").AsInt32().Nullable()
                   .ForeignKey("FK_Invoice_Users", "Users", "UserId"));

            this.CreateTableWithId32("InvoiceCharges", "Id", s => s
               .WithColumn("InvoiceId").AsInt32().NotNullable()
                 .ForeignKey("FK_InvoiceCharges_Invoice", "Invoice", "Id")
               .WithColumn("ChargeId").AsInt32().NotNullable()
                 .ForeignKey("FK_InvoiceCharges_Charges", "Charges", "Id")
               .WithColumn("Description").AsString(500).Nullable()
               .WithColumn("Amount").AsDecimal(18,3).NotNullable()
               .WithColumn("Qty").AsDecimal(18, 3).NotNullable()
               .WithColumn("TotalAmount").AsDecimal(18, 3).NotNullable()
               .WithColumn("CurrencyId").AsInt32().NotNullable()
                 .ForeignKey("FK_InvoiceCharges_Currencies", "Currencies", "Id")
               .WithColumn("ExchangeRate").AsDecimal(18, 3).NotNullable()
               .WithColumn("TotalAmountInLocalCurrency").AsDecimal(18, 3).NotNullable());
        }
    }
}
using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20201103162600)]
    public class DefaultDB_20201103_162600_Supplier : AutoReversingMigration
    {
        public override void Up()
        {



            this.CreateTableWithId32("Supplier", "Id", s => s
               .WithColumn("SupplierCode").AsString(200).NotNullable()
               .WithColumn("SupplierName").AsString(200).NotNullable()
               .WithColumn("Address").AsString(500).Nullable()
               .WithColumn("Place").AsString(200).Nullable()
               .WithColumn("Telephone").AsString(200).Nullable()
               .WithColumn("Email").AsString(200).Nullable()
               .WithColumn("ContactPerson").AsString(200).Nullable()
               .WithColumn("Mobile").AsString(200).Nullable()
               .WithColumn("CreationDate").AsDate().Nullable()
               .WithColumn("Description").AsString(500).Nullable());

            this.Alter.Table("Vehicles")
                  .AddColumn("SupplierId").AsInt32().Nullable()
                   .ForeignKey("FK_Vehicles_Supplier", "Supplier", "Id");

            this.Alter.Table("Consignment")
                 .AddColumn("SupplierAmount").AsDecimal(18,3).Nullable()
                 .AddColumn("SupplierId").AsInt32().Nullable()
                  .ForeignKey("FK_Consignment_Supplier", "Supplier", "Id");


            this.Alter.Table("Invoice")
                 .AddColumn("SupplierAmount").AsDecimal(18, 3).Nullable()
                 .AddColumn("SupplierId").AsInt32().Nullable()
                       .ForeignKey("FK_Invoice_Supplier", "Supplier", "Id")
                 .AddColumn("SupplierPaymentStatus").AsDecimal(18, 3).Nullable();


            this.CreateTableWithId32("SuppliersPayment", "Id", s => s
               .WithColumn("Code").AsString(200).NotNullable()
               .WithColumn("Date").AsString(200).NotNullable()
               .WithColumn("SupplierId").AsInt32().NotNullable()
                       .ForeignKey("FK_SuppliersPayment_Supplier", "Supplier", "Id")
               .WithColumn("TotalAmount").AsDecimal(18,3).NotNullable());


            this.CreateTableWithId32("SuppliersPaymentInvoices", "Id", s => s
             .WithColumn("SuppliersPaymentId").AsInt32().NotNullable()
                .ForeignKey("FK_SuppliersPaymentInvoices_SuppliersPayment", "SuppliersPayment", "Id")
             .WithColumn("InvoiceId").AsInt32().NotNullable()
                 .ForeignKey("FK_SuppliersPaymentInvoices_Invoice", "Invoice", "Id"));



        }
    }
}
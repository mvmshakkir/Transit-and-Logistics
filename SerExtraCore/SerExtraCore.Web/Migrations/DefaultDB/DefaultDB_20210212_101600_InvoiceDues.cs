using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20210212101600)]
    public class DefaultDB_20210212_101600_InvoiceDues : AutoReversingMigration
    {
        public override void Up()
        {

            Alter.Table("Customers")
                .AddColumn("DueDays").AsInt32().Nullable();


            Create.Table("InvoiceDueDetails")
              .WithColumn("ID").AsInt32().PrimaryKey().Identity().NotNullable()
              .WithColumn("InvoiceId").AsInt32().NotNullable()
                 .ForeignKey("FK_InvoiceDueDetails_Invoice", "Invoice", "Id")
              .WithColumn("DueDays").AsInt32().NotNullable()
              .WithColumn("DueDate").AsDate().NotNullable()
              .WithColumn("Amount").AsDecimal(18,3).NotNullable();



        }
    }
}
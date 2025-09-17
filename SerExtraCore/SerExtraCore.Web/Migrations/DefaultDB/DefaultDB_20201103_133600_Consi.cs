using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20201103133600)]
    public class DefaultDB_20201103_133600_Consi : AutoReversingMigration
    {
        public override void Up()
        {


           
            this.CreateTableWithId32("ConsignmentTripDates", "Id", s => s
               .WithColumn("ConsignmentId").AsInt32().NotNullable()
                  .ForeignKey("FK_ConsignmentTripDates_Consignment", "Consignment", "Id")
            .WithColumn("StartDate").AsDateTime().Nullable()
            .WithColumn("EndDate").AsDateTime().Nullable()
               );


            this.CreateTableWithId32("InvoiceTripDates", "Id", s => s
            .WithColumn("InvoiceId").AsInt32().NotNullable()
                 .ForeignKey("FK_InvoiceTripDates_Invoice", "Invoice", "Id")
          .WithColumn("StartDate").AsDateTime().Nullable()
          .WithColumn("EndDate").AsDateTime().Nullable()
             );
        }
    }
}
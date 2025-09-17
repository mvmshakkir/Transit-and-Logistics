using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20201103160700)]
    public class DefaultDB_20201103_160700_ConsiChargeDate : AutoReversingMigration
    {
        public override void Up()
        {



            this.Alter.Table("ConsignmentCharges")
                      .AddColumn("Date").AsDate().Nullable();

            this.Alter.Table("InvoiceCharges")
                    .AddColumn("Date").AsDate().Nullable();
        }
    }
}
using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20210408172100)]
    public class DefaultDB_20210408_172100_DataTaxableAlter : AutoReversingMigration
    {
        public override void Up()
        {
            this.Execute.Sql(@"update InvoiceCharges set TaxableAmount=TotalAmount");
            this.Execute.Sql(@"update ConsignmentCharges set TaxableAmount=TotalAmount");

          

        }
    }
}
using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20210413145400)]
    public class DefaultDB_20210413_145400_ChargeDiscount : AutoReversingMigration
    {
        public override void Up()
        {
            this.Alter.Table("ConsignmentCharges")
               .AddColumn("Total").AsDecimal(18, 3).NotNullable().WithDefaultValue(0)
               .AddColumn("DisAmount").AsDecimal(18, 3).Nullable();


            this.Alter.Table("InvoiceCharges")
                .AddColumn("Total").AsDecimal(18, 3).NotNullable().WithDefaultValue(0)
               .AddColumn("DisAmount").AsDecimal(18, 3).Nullable();

            this.Execute.Sql(@"update InvoiceCharges set Total=TaxableAmount");
            this.Execute.Sql(@"update ConsignmentCharges set Total=TaxableAmount");



        }
    }
}
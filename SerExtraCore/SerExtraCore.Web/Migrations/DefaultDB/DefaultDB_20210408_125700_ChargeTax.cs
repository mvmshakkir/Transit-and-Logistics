using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20210408125700)]
    public class DefaultDB_20210408_125700_ChargeTax : AutoReversingMigration
    {
        public override void Up()
        {
            this.Alter.Table("Charges")
               .AddColumn("TaxPer").AsDecimal(18, 3).Nullable();


            this.Alter.Table("ConsignmentCharges")
               .AddColumn("TaxableAmount").AsDecimal(18, 3).NotNullable().WithDefaultValue(0)
               .AddColumn("TaxPer").AsDecimal(18, 3).Nullable()
               .AddColumn("TaxAmount").AsDecimal(18, 3).Nullable();


            this.Alter.Table("InvoiceCharges")
               .AddColumn("TaxableAmount").AsDecimal(18, 3).NotNullable().WithDefaultValue(0)
               .AddColumn("TaxPer").AsDecimal(18, 3).Nullable()
               .AddColumn("TaxAmount").AsDecimal(18, 3).Nullable();


        }
    }
}
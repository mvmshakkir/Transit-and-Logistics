using FluentMigrator;
namespace SerExtraCore.Migrations.DefaultDB
{

    [Migration(20240212130300)]
    public class DefaultDB_20240212_1303_AlterConsCharge : AutoReversingMigration
    {
        public override void Up()

        {




            this.Alter.Table("ConsignmentCharges")
      .AlterColumn("Description").AsString(500).Nullable()
      .AlterColumn("Amount").AsDecimal(18, 3).Nullable()
      .AlterColumn("Qty").AsDecimal(18, 3).Nullable()
      .AlterColumn("TotalAmount").AsDecimal(18, 3).Nullable()
      .AlterColumn("CurrencyId").AsInt32().Nullable()
          //.ForeignKey("FK_ConsignmentCharges_Currencies", "Currencies", "Id")
      .AlterColumn("ExchangeRate").AsDecimal(18, 3).Nullable()
      .AlterColumn("TotalAmountInLocalCurrency").AsDecimal(18, 3).Nullable();





        }

    }
}
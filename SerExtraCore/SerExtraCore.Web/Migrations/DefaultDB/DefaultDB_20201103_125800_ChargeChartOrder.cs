using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20201103125800)]
    public class DefaultDB_20201103_125800_ChargeChartOrder : AutoReversingMigration
    {
        public override void Up()
        {


          

            this.Alter.Table("Charges")
                       .AddColumn("ChartOrder").AsInt32().Nullable();




        }
    }
}
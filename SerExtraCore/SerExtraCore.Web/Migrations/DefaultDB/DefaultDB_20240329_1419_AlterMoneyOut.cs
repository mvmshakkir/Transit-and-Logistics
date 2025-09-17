using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{             
    [Migration(20240329141900)] 
    public class DefaultDB_20240329_1419_AlterMoneyOut : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("MoneyInOut")
                

            .AddColumn("FuelId").AsInt32().ForeignKey("FK_MoneyInOut_FuelId", "FuelDetails", "Id").Nullable()

            ;
		}
    }
}

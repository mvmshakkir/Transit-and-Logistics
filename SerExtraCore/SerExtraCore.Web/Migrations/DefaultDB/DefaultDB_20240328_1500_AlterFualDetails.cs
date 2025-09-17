using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{             
    [Migration(20240328150000)] 
    public class DefaultDB_20240328_1500_AlterFualDetails : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("FuelDetails")
                .AddColumn("PaymentMethod").AsInt32().Nullable()

            .AddColumn("DebitAccountId").AsInt32().ForeignKey("FK_FuelDetails_DebitAccountId", "Accounts", "Id").Nullable()

            ;
		}
    }
}

using FluentMigrator;
namespace SerExtraCore.Migrations.DefaultDB
{

    [Migration(20240209104300)]
    public class DefaultDB_20240209_1043_SettimentDetails : AutoReversingMigration
    {
        public override void Up()

        {

            Create.Table("SettlementDetails")
             .WithColumn("Id").AsInt32().Identity().PrimaryKey().NotNullable()
             .WithColumn("TsNo").AsInt32().ForeignKey("FK_SettlementDetails_TsNo", "VehicleMovDetails", "Id").Nullable()
             .WithColumn("MoneyInOutTsNo").AsInt32().ForeignKey("FK_SettlementDetails_MoneyInOutTsNo", "MoneyInOut", "Id").Nullable()
              .WithColumn("TripAdvance").AsInt32().ForeignKey("FK_SettlementDetails_TripAdvance", "VehicleMovDetails", "Id").Nullable()
              .WithColumn("TripBalance").AsInt32().ForeignKey("FK_SettlementDetails_TripBalance", "VehicleMovDetails", "Id").Nullable()
              .WithColumn("TollTag").AsInt32().ForeignKey("FK_SettlementDetails_TollTag", "VehicleMovDetails", "Id").Nullable()
;
        }

    }
}
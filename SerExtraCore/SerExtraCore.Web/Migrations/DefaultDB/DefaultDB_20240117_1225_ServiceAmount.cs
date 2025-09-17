using FluentMigrator;
namespace SerExtraCore.Migrations.DefaultDB
{

    [Migration(20240117122500)]
    public class DefaultDB_20240117_1225_ServiceAmount : AutoReversingMigration
    {
        public override void Up()

        {
            Create.Table("ServiceAmount")
         .WithColumn("Id").AsInt32().Identity().PrimaryKey().NotNullable()
         .WithColumn("ServiceId").AsInt32().ForeignKey("FK_ServiceAmount_ServiceId", "Services", "Id").Nullable()
         .WithColumn("TSId").AsInt32().ForeignKey("FK_ServiceAmount_TSId", "VehicleMovDetails", "Id").Nullable()
         .WithColumn("Amount").AsDecimal(10, 2).Nullable();



        }
    }

}
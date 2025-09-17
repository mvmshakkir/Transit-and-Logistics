using FluentMigrator;
namespace SerExtraCore.Migrations.DefaultDB
{

    [Migration(20240312103300)]
    public class DefaultDB_20240312_1033_Expenses : AutoReversingMigration
    {
        public override void Up()

        {

            Create.Table("Expenses")
             .WithColumn("Id").AsInt32().Identity().PrimaryKey().NotNullable()
             .WithColumn("TSId").AsInt32().ForeignKey("FK_Expenses_TSId", "VehicleMovDetails", "Id").Nullable()
             .WithColumn("FromPlace").AsInt32().ForeignKey("FK_Expenses_FromPlace", "ShippingAreas", "Id").Nullable()
             .WithColumn("ToPlace").AsInt32().ForeignKey("FK_Expenses_ToPlace", "ShippingAreas", "Id").Nullable()
			 .WithColumn("Expense").AsInt32().ForeignKey("FK_Expenses_Expense", "MoneyInOut", "Id").Nullable()

;
        }

    }
}
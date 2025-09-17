using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20211009101200)]
    public class DefaultDB_20211009_101200_MoneyInOut : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("MoneyInOut", "Id", s => s
                   .WithColumn("VType").AsInt32().NotNullable()
                   .WithColumn("TrxDate").AsString().NotNullable()
                   .WithColumn("VNo").AsString().NotNullable()
                   .WithColumn("CustomerId").AsInt32().Nullable()
                       .ForeignKey("FK_MoneyInOut_Customers", "Customers", "Id")
                   .WithColumn("EmployeeId").AsInt32().Nullable()
                       .ForeignKey("FK_MoneyInOut_EmployeeMaster", "EmployeeMaster", "Id")
                   .WithColumn("SupplierId").AsInt32().Nullable()
                       .ForeignKey("FK_MoneyInOut_Supplier", "Supplier", "Id")
                   .WithColumn("VehicleId").AsInt32().Nullable()
                    .ForeignKey("FK_MoneyInOut_Vehicles", "Vehicles", "Id")
                   .WithColumn("Amount").AsDecimal(18,3).NotNullable()
                   .WithColumn("TaxPer").AsDecimal(18, 3).Nullable()
                   .WithColumn("TaxAmount").AsDecimal(18, 3).Nullable()
                   .WithColumn("TotalAmount").AsDecimal(18, 3).NotNullable()
                   .WithColumn("AccountHeadId").AsInt32().NotNullable()
                     .ForeignKey("FK_MoneyInOut_AccountHeads", "AccountHeads", "Id")
                   .WithColumn("PaymentMethod").AsInt32().NotNullable()
                   .WithColumn("AccountId").AsInt32().Nullable()
                     .ForeignKey("FK_MoneyInOut_Accounts", "Accounts", "Id")
                   .WithColumn("Remarks").AsString(500).Nullable());

        }
    }
}
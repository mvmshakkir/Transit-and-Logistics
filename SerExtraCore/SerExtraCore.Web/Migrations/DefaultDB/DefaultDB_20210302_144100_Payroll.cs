using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20210302144100)]
    public class DefaultDB_20210302_144100_Payroll : AutoReversingMigration
    {
        public override void Up()
        {

          


            Create.Table("PayrollStructures")
              .WithColumn("ID").AsInt32().PrimaryKey().Identity().NotNullable()
              .WithColumn("StructureName").AsString().NotNullable()
              .WithColumn("FromDate").AsDate().NotNullable()
              .WithColumn("ToDate").AsDate().NotNullable()
              .WithColumn("Remarks").AsString(500).Nullable();


            Create.Table("PayrollPayment")
            .WithColumn("ID").AsInt32().PrimaryKey().Identity().NotNullable()
            .WithColumn("TrxDate").AsDate().NotNullable()
            .WithColumn("PayrollStructureId").AsInt32().NotNullable()
                       .ForeignKey("FK_PayrollPayment_PayrollStructures", "PayrollStructures", "Id")
            .WithColumn("EmployeeId").AsInt32().NotNullable()
                       .ForeignKey("FK_PayrollPayment_EmployeeMaster", "EmployeeMaster", "Id")
            .WithColumn("BasicPay").AsDecimal(18,3).Nullable()
             .WithColumn("Allowance").AsDecimal(18, 3).Nullable()
             .WithColumn("OverTime").AsDecimal(18, 3).Nullable()
             .WithColumn("Other").AsDecimal(18, 3).Nullable()
             .WithColumn("Total").AsDecimal(18, 3).NotNullable()
            .WithColumn("Remarks").AsString(500).Nullable();


        }
    }
}
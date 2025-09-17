using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20210630170500)]
    public class DefaultDB_20210630_170500_JVCRParties : AutoReversingMigration
    {
        public override void Up()
        {
            this.Alter.Table("JournalEntries")
             .AddColumn("DebitSupplierId").AsInt32().Nullable()
                    .ForeignKey("FK_JournalEntries_DebitSupplier", "Supplier", "Id")
             .AddColumn("CreditSupplierId").AsInt32().Nullable()
                    .ForeignKey("FK_JournalEntries_CreditSupplier", "Supplier", "Id")

             .AddColumn("CreditCustomerId").AsInt32().Nullable()
                    .ForeignKey("FK_JournalEntries_CreditCustomers", "Customers", "Id")

             .AddColumn("CreditVehicleId").AsInt32().Nullable()
                    .ForeignKey("FK_JournalEntries_CreditVehicles", "Vehicles", "Id")

              .AddColumn("CreditEmployeeId").AsInt32().Nullable()
                    .ForeignKey("FK_JournalEntries_CreditEmployeeMaster", "EmployeeMaster", "Id");



        }
    }
}
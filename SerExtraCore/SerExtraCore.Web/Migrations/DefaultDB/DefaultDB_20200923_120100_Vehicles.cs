using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20200923120100)]
    public class DefaultDB_20200923_120100_Vehicles : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("Outsource", "Id", s => s
                .WithColumn("Name").AsInt32().NotNullable()
                .WithColumn("Description").AsString(500).Nullable()
               );

            this.CreateTableWithId32("EmployeeType", "Id", s => s
                .WithColumn("Type").AsString(200).NotNullable()
                .WithColumn("Description").AsString(500).Nullable()
               );

            this.CreateTableWithId32("Designation", "Id", s => s
               .WithColumn("Name").AsString(200).NotNullable()
               .WithColumn("Description").AsString(500).Nullable()
              );

            this.CreateTableWithId32("Countries", "Id", s => s
               .WithColumn("CountryCode").AsString(200).NotNullable()
               .WithColumn("CountryName").AsString(200).NotNullable()
              );

            this.CreateTableWithId32("EmployeeMaster", "Id", s => s
                .WithColumn("EmployeeCode").AsString(200).NotNullable()
                .WithColumn("EmployeeName").AsString(200).NotNullable()
                .WithColumn("Address").AsString(500).Nullable()
                .WithColumn("CountryId").AsInt32().NotNullable()
                     .ForeignKey("FK_EmployeeMaster_Countries", "Countries", "Id")
                .WithColumn("EmployeeStatus").AsInt32().NotNullable()
                .WithColumn("EmployeeTypeId").AsInt32().NotNullable()
                    .ForeignKey("FK_EmployeeMaster_EmployeeType", "EmployeeType", "Id")
                .WithColumn("DesignationId").AsInt32().Nullable()
                     .ForeignKey("FK_EmployeeMaster_Designation", "Designation", "Id")
                .WithColumn("ResidentID").AsString(200).Nullable()
                .WithColumn("RIDExpiryDate").AsDate().Nullable()
                .WithColumn("PassportNumber").AsString(200).Nullable()
                .WithColumn("PassportExpiryDate").AsDate().Nullable()
                .WithColumn("MobileNumber").AsString(200).Nullable()
                .WithColumn("BasicSalary").AsDecimal(18,3).Nullable()
                .WithColumn("Allowance").AsDecimal(18, 3).Nullable());


            this.CreateTableWithId32("Vehicles", "Id", s => s
                .WithColumn("TypeOfVehicle").AsInt32().NotNullable()
                .WithColumn("Through").AsInt32().Nullable()
                 .ForeignKey("FK_Vehicles_Outsource", "Outsource", "Id")
               .WithColumn("VehicleNumber").AsString(200).NotNullable()
               .WithColumn("VehicleModel").AsString(200).Nullable()
               .WithColumn("RegistraionNumber").AsString(200).Nullable()
               .WithColumn("Description").AsString(500).Nullable()
               .WithColumn("RegistrationDate").AsDate().Nullable()
               .WithColumn("ExpiryDate").AsDate().Nullable()
               .WithColumn("Driver").AsInt32().Nullable()
                 .ForeignKey("FK_Vehicles_EmployeeMaster", "EmployeeMaster", "Id")
                .WithColumn("PDOApproved").AsBoolean().NotNullable());

            
        }
    }
}
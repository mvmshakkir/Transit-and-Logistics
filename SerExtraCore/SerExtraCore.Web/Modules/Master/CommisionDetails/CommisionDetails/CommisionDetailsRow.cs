using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using SerExtraCore.CommissionPercentage.Entities;
using SerExtraCore.Master.Entities;
using SerExtraCore.PumpDetails.Entities;
using SerExtraCore.Services.Entities;
using System;
using System.ComponentModel;
using System.IO;

namespace SerExtraCore.CommisionDetails.Entities
{
    [ConnectionKey("Default"), Module("CommisionDetails"), TableName("[dbo].[CommisionDetails]")]
    [DisplayName("Driver Details"), InstanceName("Driver Details")]
    [ReadPermission("Master:CommisionDetails")]
    [ModifyPermission("Master:CommisionDetails")]
    public sealed class CommisionDetailsRow : Row, IIdRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get => Fields.Id[this];
            set => Fields.Id[this] = value;
        }

        [DisplayName("Ts"), Column("TSId"), ForeignKey("[dbo].[VehicleMovDetails]", "Id"), LeftJoin("jTs"), TextualField("TsTsNo")]
        public Int32? TsId
        {
            get => Fields.TsId[this];
            set => Fields.TsId[this] = value;
        }

        [DisplayName("Driver"), ForeignKey("[dbo].[EmployeeMaster]", "Id"), LeftJoin("jDriver"), TextualField("DriverEmployeeName")]
        [LookupEditor(typeof(EmployeeMasterRow), InplaceAdd = true),  QuickSearch]
        public Int32? DriverId
        {
            get => Fields.DriverId[this];
            set => Fields.DriverId[this] = value;
        }


       
        [DisplayName("Driver"), Expression("jDriver.[EmployeeName]"), LookupInclude,  QuickSearch]
        [MinSelectLevel(SelectLevel.List)]
        public String DriverEmployeeName
        {
            get { return Fields.DriverEmployeeName[this]; }
            set { Fields.DriverEmployeeName[this] = value; }
        }
        [DisplayName("Phone Number"), Expression("jDriver.[MobileNumber]"), QuickSearch]
        [MinSelectLevel(SelectLevel.List)]
        public String MobileNumber
        {
            get { return Fields.MobileNumber[this]; }
            set { Fields.MobileNumber[this] = value; }
        }


        [DisplayName("Percentage"), ForeignKey("[dbo].[CommissionPercentage]", "Id"), LeftJoin("jPercentage"), TextualField("Percentage")]
        [LookupEditor(typeof(CommissionPercentageRow), InplaceAdd = true), QuickSearch]
        public Int32? PercentageId
        {
            get => Fields.PercentageId[this];
            set => Fields.PercentageId[this] = value;
        }

        



        [DisplayName("Percentage"), Expression("jPercentage.[Percentage]"), LookupInclude, QuickSearch]
        [MinSelectLevel(SelectLevel.List)]
        public Decimal? Percentage
        {
            get { return Fields.Percentage[this]; }
            set { Fields.Percentage[this] = value; }
        }

        [DisplayName("Commission Amount"), Size(10), Scale(2)]
        public Decimal? CommissionAmount
        {
            get => Fields.CommissionAmount[this];
            set => Fields.CommissionAmount[this] = value;
        }

        [DisplayName("Ts Ts No"), Expression("jTs.[TSNo]")]
        public String TsTsNo
        {
            get => Fields.TsTsNo[this];
            set => Fields.TsTsNo[this] = value;
        }

        [DisplayName("Ts Vehicle Id"), Expression("jTs.[VehicleId]")]
        public Int32? TsVehicleId
        {
            get => Fields.TsVehicleId[this];
            set => Fields.TsVehicleId[this] = value;
        }

        [DisplayName("Ts Advance"), Expression("jTs.[Advance]")]
        public Decimal? TsAdvance
        {
            get => Fields.TsAdvance[this];
            set => Fields.TsAdvance[this] = value;
        }

        [DisplayName("Ts Start Km"), Expression("jTs.[StartKM]")]
        public Decimal? TsStartKm
        {
            get => Fields.TsStartKm[this];
            set => Fields.TsStartKm[this] = value;
        }

        [DisplayName("Ts End Km"), Expression("jTs.[EndKm]")]
        public Decimal? TsEndKm
        {
            get => Fields.TsEndKm[this];
            set => Fields.TsEndKm[this] = value;
        }

        [DisplayName("Ts Total Km"), Expression("jTs.[TotalKm]")]
        public Decimal? TsTotalKm
        {
            get => Fields.TsTotalKm[this];
            set => Fields.TsTotalKm[this] = value;
        }

        [DisplayName("Ts Total Liter"), Expression("jTs.[TotalLiter]")]
        public Decimal? TsTotalLiter
        {
            get => Fields.TsTotalLiter[this];
            set => Fields.TsTotalLiter[this] = value;
        }

        [DisplayName("Ts Mileage"), Expression("jTs.[Mileage]")]
        public Decimal? TsMileage
        {
            get => Fields.TsMileage[this];
            set => Fields.TsMileage[this] = value;
        }

        [DisplayName("Ts Startdate"), Expression("jTs.[Startdate]")]
        public DateTime? TsStartdate
        {
            get => Fields.TsStartdate[this];
            set => Fields.TsStartdate[this] = value;
        }

        [DisplayName("Ts Enddate"), Expression("jTs.[Enddate]")]
        public DateTime? TsEnddate
        {
            get => Fields.TsEnddate[this];
            set => Fields.TsEnddate[this] = value;
        }

        [DisplayName("Ts Totaldays"), Expression("jTs.[Totaldays]")]
        public Int32? TsTotaldays
        {
            get => Fields.TsTotaldays[this];
            set => Fields.TsTotaldays[this] = value;
        }

        [DisplayName("Ts Rto"), Expression("jTs.[RTO]")]
        public Decimal? TsRto
        {
            get => Fields.TsRto[this];
            set => Fields.TsRto[this] = value;
        }

        [DisplayName("Ts Pc"), Expression("jTs.[PC]")]
        public Decimal? TsPc
        {
            get => Fields.TsPc[this];
            set => Fields.TsPc[this] = value;
        }

        [DisplayName("Ts Total Driver Commission"), Expression("jTs.[TotalDriverCommission]")]
        public Decimal? TsTotalDriverCommission
        {
            get => Fields.TsTotalDriverCommission[this];
            set => Fields.TsTotalDriverCommission[this] = value;
        }

        [DisplayName("Ts Total Commison"), Expression("jTs.[TotalCommison]")]
        public Decimal? TsTotalCommison
        {
            get => Fields.TsTotalCommison[this];
            set => Fields.TsTotalCommison[this] = value;
        }

        [DisplayName("Ts Total Loading Expense"), Expression("jTs.[TotalLoadingExpense]")]
        public Decimal? TsTotalLoadingExpense
        {
            get => Fields.TsTotalLoadingExpense[this];
            set => Fields.TsTotalLoadingExpense[this] = value;
        }

        [DisplayName("Ts Total Unload Expense"), Expression("jTs.[TotalUnloadExpense]")]
        public Decimal? TsTotalUnloadExpense
        {
            get => Fields.TsTotalUnloadExpense[this];
            set => Fields.TsTotalUnloadExpense[this] = value;
        }

        [DisplayName("Ts Total Other Expense"), Expression("jTs.[TotalOtherExpense]")]
        public Decimal? TsTotalOtherExpense
        {
            get => Fields.TsTotalOtherExpense[this];
            set => Fields.TsTotalOtherExpense[this] = value;
        }

        [DisplayName("Ts Total Fright"), Expression("jTs.[TotalFright]")]
        public Decimal? TsTotalFright
        {
            get => Fields.TsTotalFright[this];
            set => Fields.TsTotalFright[this] = value;
        }

        [DisplayName("Ts Profit"), Expression("jTs.[Profit]")]
        public Decimal? TsProfit
        {
            get => Fields.TsProfit[this];
            set => Fields.TsProfit[this] = value;
        }

        [DisplayName("Driver Employee Code"), Expression("jDriver.[EmployeeCode]")]
        public String DriverEmployeeCode
        {
            get => Fields.DriverEmployeeCode[this];
            set => Fields.DriverEmployeeCode[this] = value;
        }

        //[DisplayName("Driver Employee Name"), Expression("jDriver.[EmployeeName]")]
        //public String DriverEmployeeName
        //{
        //    get => Fields.DriverEmployeeName[this];
        //    set => Fields.DriverEmployeeName[this] = value;
        //}

        [DisplayName("Driver Address"), Expression("jDriver.[Address]")]
        public String DriverAddress
        {
            get => Fields.DriverAddress[this];
            set => Fields.DriverAddress[this] = value;
        }

        [DisplayName("Driver Country Id"), Expression("jDriver.[CountryId]")]
        public Int32? DriverCountryId
        {
            get => Fields.DriverCountryId[this];
            set => Fields.DriverCountryId[this] = value;
        }

        [DisplayName("Driver Employee Status"), Expression("jDriver.[EmployeeStatus]")]
        public Int32? DriverEmployeeStatus
        {
            get => Fields.DriverEmployeeStatus[this];
            set => Fields.DriverEmployeeStatus[this] = value;
        }

        [DisplayName("Driver Employee Type Id"), Expression("jDriver.[EmployeeTypeId]")]
        public Int32? DriverEmployeeTypeId
        {
            get => Fields.DriverEmployeeTypeId[this];
            set => Fields.DriverEmployeeTypeId[this] = value;
        }

        [DisplayName("Driver Designation Id"), Expression("jDriver.[DesignationId]")]
        public Int32? DriverDesignationId
        {
            get => Fields.DriverDesignationId[this];
            set => Fields.DriverDesignationId[this] = value;
        }

        [DisplayName("Driver Resident Id"), Expression("jDriver.[ResidentID]")]
        public String DriverResidentId
        {
            get => Fields.DriverResidentId[this];
            set => Fields.DriverResidentId[this] = value;
        }

        [DisplayName("Driver Rid Expiry Date"), Expression("jDriver.[RIDExpiryDate]")]
        public DateTime? DriverRidExpiryDate
        {
            get => Fields.DriverRidExpiryDate[this];
            set => Fields.DriverRidExpiryDate[this] = value;
        }

        [DisplayName("Driver Passport Number"), Expression("jDriver.[PassportNumber]")]
        public String DriverPassportNumber
        {
            get => Fields.DriverPassportNumber[this];
            set => Fields.DriverPassportNumber[this] = value;
        }

        [DisplayName("Driver Passport Expiry Date"), Expression("jDriver.[PassportExpiryDate]")]
        public DateTime? DriverPassportExpiryDate
        {
            get => Fields.DriverPassportExpiryDate[this];
            set => Fields.DriverPassportExpiryDate[this] = value;
        }

        [DisplayName("Driver Mobile Number"), Expression("jDriver.[MobileNumber]")]
        public String DriverMobileNumber
        {
            get => Fields.DriverMobileNumber[this];
            set => Fields.DriverMobileNumber[this] = value;
        }

        [DisplayName("Driver Basic Salary"), Expression("jDriver.[BasicSalary]")]
        public Decimal? DriverBasicSalary
        {
            get => Fields.DriverBasicSalary[this];
            set => Fields.DriverBasicSalary[this] = value;
        }

        [DisplayName("Driver Allowance"), Expression("jDriver.[Allowance]")]
        public Decimal? DriverAllowance
        {
            get => Fields.DriverAllowance[this];
            set => Fields.DriverAllowance[this] = value;
        }

        IIdField IIdRow.IdField => Fields.Id;

        public static readonly RowFields Fields = new RowFields().Init();

        public CommisionDetailsRow()
            : base(Fields)
        {
        }


        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field TsId;
            public Int32Field DriverId;
            public Int32Field PercentageId;
            public DecimalField Percentage;
            public DecimalField CommissionAmount;
            public StringField MobileNumber;

            public StringField TsTsNo;
            public Int32Field TsVehicleId;
            public DecimalField TsAdvance;
            public DecimalField TsStartKm;
            public DecimalField TsEndKm;
            public DecimalField TsTotalKm;
            public DecimalField TsTotalLiter;
            public DecimalField TsMileage;
            public DateTimeField TsStartdate;
            public DateTimeField TsEnddate;
            public Int32Field TsTotaldays;
            public DecimalField TsRto;
            public DecimalField TsPc;
            public DecimalField TsTotalDriverCommission;
            public DecimalField TsTotalCommison;
            public DecimalField TsTotalLoadingExpense;
            public DecimalField TsTotalUnloadExpense;
            public DecimalField TsTotalOtherExpense;
            public DecimalField TsTotalFright;
            public DecimalField TsProfit;

            public StringField DriverEmployeeCode;
            public StringField DriverEmployeeName;
            public StringField DriverAddress;
            public Int32Field DriverCountryId;
            public Int32Field DriverEmployeeStatus;
            public Int32Field DriverEmployeeTypeId;
            public Int32Field DriverDesignationId;
            public StringField DriverResidentId;
            public DateTimeField DriverRidExpiryDate;
            public StringField DriverPassportNumber;
            public DateTimeField DriverPassportExpiryDate;
            public StringField DriverMobileNumber;
            public DecimalField DriverBasicSalary;
            public DecimalField DriverAllowance;
        }
    }
}

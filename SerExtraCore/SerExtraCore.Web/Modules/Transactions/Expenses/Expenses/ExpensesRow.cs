using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using SerExtraCore.Master.Entities;
using SerExtraCore.PumpDetails.Entities;
using System;
using System.ComponentModel;
using System.IO;

namespace SerExtraCore.Expenses.Entities
{
    [ConnectionKey("Default"), Module("Expenses"), TableName("[dbo].[Expenses]")]
    [DisplayName("Expenses"), InstanceName("Expenses")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ExpensesRow : Row, IIdRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get => Fields.Id[this];
            set => Fields.Id[this] = value;
        }
        [DisplayName("Profit")]
        public Decimal? Profit
        {
            get => Fields.Profit[this];
            set => Fields.Profit[this] = value;
        }
        [DisplayName("Startdate"), QuickFilter]
        public DateTime? Startdate
        {
            get => Fields.Startdate[this];
            set => Fields.Startdate[this] = value;
        }
        [DisplayName("Enddate")]
        public DateTime? Enddate
        {
            get => Fields.Enddate[this];
            set => Fields.Enddate[this] = value;
        }
        [DisplayName("Ts"), Column("TSId"), ForeignKey("[dbo].[VehicleMovDetails]", "Id"), LeftJoin("jTs"), TextualField("TsTsNo")]
        public Int32? TsId
        {
            get => Fields.TsId[this];
            set => Fields.TsId[this] = value;
        }

        [DisplayName("Vehicle"), ForeignKey("[dbo].[Vehicles]", "Id"), LeftJoin("jPump"), TextualField("VehicleNumber")]
        [LookupEditor(typeof(VehiclesRow)), QuickFilter, QuickSearch]
        public Int32? VehicleId
        {
            get { return Fields.VehicleId[this]; }
            set { Fields.VehicleId[this] = value; }
        }

        [DisplayName("Vehicle"), Expression("jPump.[VehicleNumber]"), LookupInclude, QuickSearch]
        [MinSelectLevel(SelectLevel.List)]
        public String VehicleNumber
        {
            get { return Fields.VehicleNumber[this]; }
            set { Fields.VehicleNumber[this] = value; }
        }
        [DisplayName("From Place"), ForeignKey("[dbo].[ShippingAreas]", "Id"), LeftJoin("jFromPlace"), TextualField("FromPlaceAreaName")]
        public Int32? FromPlace
        {
            get => Fields.FromPlace[this];
            set => Fields.FromPlace[this] = value;
        }

        [DisplayName("To Place"), ForeignKey("[dbo].[ShippingAreas]", "Id"), LeftJoin("jToPlace"), TextualField("ToPlaceAreaName")]
        public Int32? ToPlace
        {
            get => Fields.ToPlace[this];
            set => Fields.ToPlace[this] = value;
        }

        [DisplayName("Expense"), ForeignKey("[dbo].[MoneyInOut]", "Id"), LeftJoin("jExpense"), TextualField("ExpenseRemarks")]
        public Int32? Expense
        {
            get => Fields.Expense[this];
            set => Fields.Expense[this] = value;
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

        [DisplayName("Ts Total Fuel Amount"), Expression("jTs.[TotalFuelAmount]")]
        public Decimal? TsTotalFuelAmount
        {
            get => Fields.TsTotalFuelAmount[this];
            set => Fields.TsTotalFuelAmount[this] = value;
        }

        [DisplayName("Ts Drivertwo Bata"), Expression("jTs.[DrivertwoBata]")]
        public Decimal? TsDrivertwoBata
        {
            get => Fields.TsDrivertwoBata[this];
            set => Fields.TsDrivertwoBata[this] = value;
        }

        [DisplayName("Ts Toll"), Expression("jTs.[Toll]")]
        public Decimal? TsToll
        {
            get => Fields.TsToll[this];
            set => Fields.TsToll[this] = value;
        }

        [DisplayName("Ts Total Expense"), Expression("jTs.[TotalExpense]")]
        public Decimal? TsTotalExpense
        {
            get => Fields.TsTotalExpense[this];
            set => Fields.TsTotalExpense[this] = value;
        }

        [DisplayName("Ts Extra Bill"), Expression("jTs.[ExtraBill]")]
        public Decimal? TsExtraBill
        {
            get => Fields.TsExtraBill[this];
            set => Fields.TsExtraBill[this] = value;
        }

        [DisplayName("Ts Remarks"), Expression("jTs.[Remarks]")]
        public String TsRemarks
        {
            get => Fields.TsRemarks[this];
            set => Fields.TsRemarks[this] = value;
        }

        [DisplayName("From Place Area Name"), Expression("jFromPlace.[AreaName]")]
        public String FromPlaceAreaName
        {
            get => Fields.FromPlaceAreaName[this];
            set => Fields.FromPlaceAreaName[this] = value;
        }

        [DisplayName("From Place Description"), Expression("jFromPlace.[Description]")]
        public String FromPlaceDescription
        {
            get => Fields.FromPlaceDescription[this];
            set => Fields.FromPlaceDescription[this] = value;
        }

        [DisplayName("To Place Area Name"), Expression("jToPlace.[AreaName]")]
        public String ToPlaceAreaName
        {
            get => Fields.ToPlaceAreaName[this];
            set => Fields.ToPlaceAreaName[this] = value;
        }

        [DisplayName("To Place Description"), Expression("jToPlace.[Description]")]
        public String ToPlaceDescription
        {
            get => Fields.ToPlaceDescription[this];
            set => Fields.ToPlaceDescription[this] = value;
        }

        [DisplayName("Expense V Type"), Expression("jExpense.[VType]")]
        public Int32? ExpenseVType
        {
            get => Fields.ExpenseVType[this];
            set => Fields.ExpenseVType[this] = value;
        }

        [DisplayName("Expense Trx Date"), Expression("jExpense.[TrxDate]")]
        public DateTime? ExpenseTrxDate
        {
            get => Fields.ExpenseTrxDate[this];
            set => Fields.ExpenseTrxDate[this] = value;
        }

        [DisplayName("Expense V No"), Expression("jExpense.[VNo]")]
        public Int32? ExpenseVNo
        {
            get => Fields.ExpenseVNo[this];
            set => Fields.ExpenseVNo[this] = value;
        }

        [DisplayName("Expense Customer Id"), Expression("jExpense.[CustomerId]")]
        public Int32? ExpenseCustomerId
        {
            get => Fields.ExpenseCustomerId[this];
            set => Fields.ExpenseCustomerId[this] = value;
        }

        [DisplayName("Expense Employee Id"), Expression("jExpense.[EmployeeId]")]
        public Int32? ExpenseEmployeeId
        {
            get => Fields.ExpenseEmployeeId[this];
            set => Fields.ExpenseEmployeeId[this] = value;
        }

        [DisplayName("Expense Supplier Id"), Expression("jExpense.[SupplierId]")]
        public Int32? ExpenseSupplierId
        {
            get => Fields.ExpenseSupplierId[this];
            set => Fields.ExpenseSupplierId[this] = value;
        }

        [DisplayName("Expense Vehicle Id"), Expression("jExpense.[VehicleId]")]
        public Int32? ExpenseVehicleId
        {
            get => Fields.ExpenseVehicleId[this];
            set => Fields.ExpenseVehicleId[this] = value;
        }

        [DisplayName("Expense Amount"), Expression("jExpense.[Amount]")]
        public Decimal? ExpenseAmount
        {
            get => Fields.ExpenseAmount[this];
            set => Fields.ExpenseAmount[this] = value;
        }

        [DisplayName("Expense Tax Per"), Expression("jExpense.[TaxPer]")]
        public Decimal? ExpenseTaxPer
        {
            get => Fields.ExpenseTaxPer[this];
            set => Fields.ExpenseTaxPer[this] = value;
        }

        [DisplayName("Expense Tax Amount"), Expression("jExpense.[TaxAmount]")]
        public Decimal? ExpenseTaxAmount
        {
            get => Fields.ExpenseTaxAmount[this];
            set => Fields.ExpenseTaxAmount[this] = value;
        }

        [DisplayName("Expense Total Amount"), Expression("jExpense.[TotalAmount]")]
        public Decimal? ExpenseTotalAmount
        {
            get => Fields.ExpenseTotalAmount[this];
            set => Fields.ExpenseTotalAmount[this] = value;
        }

        [DisplayName("Expense Account Head Id"), Expression("jExpense.[AccountHeadId]")]
        public Int32? ExpenseAccountHeadId
        {
            get => Fields.ExpenseAccountHeadId[this];
            set => Fields.ExpenseAccountHeadId[this] = value;
        }

        [DisplayName("Expense Payment Method"), Expression("jExpense.[PaymentMethod]")]
        public Int32? ExpensePaymentMethod
        {
            get => Fields.ExpensePaymentMethod[this];
            set => Fields.ExpensePaymentMethod[this] = value;
        }

        [DisplayName("Expense Account Id"), Expression("jExpense.[AccountId]")]
        public Int32? ExpenseAccountId
        {
            get => Fields.ExpenseAccountId[this];
            set => Fields.ExpenseAccountId[this] = value;
        }

        [DisplayName("Expense Remarks"), Expression("jExpense.[Remarks]")]
        public String ExpenseRemarks
        {
            get => Fields.ExpenseRemarks[this];
            set => Fields.ExpenseRemarks[this] = value;
        }

        [DisplayName("Expense Consignment Id"), Expression("jExpense.[ConsignmentId]")]
        public Int32? ExpenseConsignmentId
        {
            get => Fields.ExpenseConsignmentId[this];
            set => Fields.ExpenseConsignmentId[this] = value;
        }

        [DisplayName("Expense Ts Id"), Expression("jExpense.[TsId]")]
        public Int32? ExpenseTsId
        {
            get => Fields.ExpenseTsId[this];
            set => Fields.ExpenseTsId[this] = value;
        }

        IIdField IIdRow.IdField => Fields.Id;

        public static readonly RowFields Fields = new RowFields().Init();

        public ExpensesRow()
            : base(Fields)
        {
        }


        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field TsId;
            public Int32Field FromPlace;
            public Int32Field ToPlace;
            public Int32Field Expense;

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
            public DecimalField TsTotalFuelAmount;
            public DecimalField TsDrivertwoBata;
            public DecimalField TsToll;
            public DecimalField TsTotalExpense;
            public DecimalField TsExtraBill;
            public StringField TsRemarks;

            public StringField FromPlaceAreaName;
            public StringField FromPlaceDescription;

            public StringField ToPlaceAreaName;
            public StringField ToPlaceDescription;

            public Int32Field ExpenseVType;
            public DateTimeField ExpenseTrxDate;
            public Int32Field ExpenseVNo;
            public Int32Field ExpenseCustomerId;
            public Int32Field ExpenseEmployeeId;
            public Int32Field ExpenseSupplierId;
            public Int32Field ExpenseVehicleId;
            public DecimalField ExpenseAmount;
            public DecimalField ExpenseTaxPer;
            public DecimalField ExpenseTaxAmount;
            public DecimalField ExpenseTotalAmount;
            public Int32Field ExpenseAccountHeadId;
            public Int32Field ExpensePaymentMethod;
            public Int32Field ExpenseAccountId;
            public StringField ExpenseRemarks;
            public Int32Field ExpenseConsignmentId;
            public Int32Field ExpenseTsId;



            public DecimalField Profit;
            public DateTimeField Startdate;
            public DateTimeField Enddate;

            public Int32Field VehicleId;
            public StringField VehicleNumber;
        }
    }
}

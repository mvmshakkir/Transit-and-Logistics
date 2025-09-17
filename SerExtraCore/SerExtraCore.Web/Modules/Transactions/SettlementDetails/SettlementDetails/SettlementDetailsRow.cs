using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;


using SerExtraCore.ServiceAmount.Entities;
using SerExtraCore.UOM.Entities;
using SerExtraCore.Extr.Entities;
using SerExtraCore.VehicleMovDetails.Entities;


using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;
using SerExtraCore.Crossing.Entities;

namespace SerExtraCore.SettlementDetails.Entities
{
    [ConnectionKey("Default"), Module("SettlementDetails"), TableName("[dbo].[SettlementDetails]")]
    [DisplayName("Settlement Details"), InstanceName("Settlement Details")]
    [ReadPermission("Master:SettlementDetails")]
    [ModifyPermission("Master:SettlementDetails")]
    public sealed class SettlementDetailsRow : Row, IIdRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get => Fields.Id[this];
            set => Fields.Id[this] = value;
        }

        [DisplayName("Extras"), MasterDetailRelation(foreignKey: "settlementid"), NotMapped]
        [MinSelectLevel(SelectLevel.List)]
        public List<ExtrRow> extraexpense
        {
            get { return Fields.extraexpense[this]; }
            set { Fields.extraexpense[this] = value; }
        }

        [DisplayName("Crossing"), MasterDetailRelation(foreignKey: "settlementid"), NotMapped]
        [MinSelectLevel(SelectLevel.List)]
        public List<CrossingRow> Crossing
        {
            get { return Fields.Crossing[this]; }
            set { Fields.Crossing[this] = value; }
        }


        [DisplayName("Toll/Fastag"), ReadOnly(true)]
		public Decimal? toll
		{
			get => Fields.toll[this];
			set => Fields.toll[this] = value;
		}
		[DisplayName("Trip Balance"), ReadOnly(true)]
		public Decimal? TripBalancee
		{
			get => Fields.TripBalancee[this];
			set => Fields.TripBalancee[this] = value;
		}
		[DisplayName("Advance"), ReadOnly(true)]
		public Decimal? Advance
		{
			get => Fields.Advance[this];
			set => Fields.Advance[this] = value;
		}

        [DisplayName("FualAmount"), ReadOnly(true)]
		public Decimal? FualAmount
		{
			get => Fields.FualAmount[this];
			set => Fields.FualAmount[this] = value;
		}

		//[DisplayName("Ts No"), ForeignKey("[dbo].[VehicleMovDetails]", "Id"), LeftJoin("jTsNo"), TextualField("TsNo")]
		//public Int32? TsNo
		//{
		//    get => Fields.TsNo[this];
		//    set => Fields.TsNo[this] = value;
		//}
		//[DisplayName("TS No"), Expression("jTsNo.[TSNo]"), LookupInclude, QuickSearch]
		//[MinSelectLevel(SelectLevel.List)]
		//public String TSNumber
		//{
		//    get { return Fields.TSNumber[this]; }
		//    set { Fields.TSNumber[this] = value; }
		//}
		//[DisplayName("TS No"), ForeignKey("[dbo].[VehicleMovDetails]", "Id"), LeftJoin("jTsNo"), TextualField("TSNo")]
		//      [LookupEditor(typeof(VehicleMovDetailsRow)), QuickFilter, QuickSearch]
		//      public Int32? TsNo
		//      {
		//          get { return Fields.TsNo[this]; }
		//          set { Fields.TsNo[this] = value; }
		//      }

		//      [DisplayName("TS No"), Expression("jTsNo.[TSNo]"), LookupInclude, QuickSearch]
		//      [MinSelectLevel(SelectLevel.List)]
		//      public String TSNumber
		//      {
		//          get { return Fields.TSNumber[this]; }
		//          set { Fields.TSNumber[this] = value; }
		//      }
		[DisplayName("TS No"), ForeignKey("[dbo].[VehicleMovDetails]", "Id"), LookupInclude, LeftJoin("jTsNo"), TextualField("TSNo")]
		[LookupEditor(typeof(VehicleMovDetailsRow)), QuickFilter, QuickSearch]
		public Int32? TsNo
		{
			get { return Fields.TsNo[this]; }
			set { Fields.TsNo[this] = value; }
		}

		[DisplayName("TS No"), Expression("jTsNo.[TSNo]"), LookupInclude, QuickSearch]
		[MinSelectLevel(SelectLevel.List)]
		public String TSNumber
		{
			get { return Fields.TSNumber[this]; }
			set { Fields.TSNumber[this] = value; }
		}









		[DisplayName("Fuel"), ForeignKey("[dbo].[MoneyInOut]", "Id"), LeftJoin("jMoneyInOutTsNo"), TextualField("MoneyInOutTsNoRemarks")]
        public Int32? MoneyInOutTsNo
        {
            get => Fields.MoneyInOutTsNo[this];
            set => Fields.MoneyInOutTsNo[this] = value;
        }

        [DisplayName("Trip Advance"), ForeignKey("[dbo].[VehicleMovDetails]", "Id"), LeftJoin("jTripAdvance"), TextualField("TripAdvanceTsNo")]
        public Int32? TripAdvance
        {
            get => Fields.TripAdvance[this];
            set => Fields.TripAdvance[this] = value;
        }

        [DisplayName("Trip Balance"), ForeignKey("[dbo].[VehicleMovDetails]", "Id"), LeftJoin("jTripBalance"), TextualField("TripBalanceTsNo")]
        public Int32? TripBalance
        {
            get => Fields.TripBalance[this];
            set => Fields.TripBalance[this] = value;
        }

        [DisplayName("Toll/Tag"), ForeignKey("[dbo].[VehicleMovDetails]", "Id"), LeftJoin("jTollTag"), TextualField("TollTagTsNo")]
        public Int32? TollTag
        {
            get => Fields.TollTag[this];
            set => Fields.TollTag[this] = value;
        }

        [DisplayName("Ts No"), Expression("jTsNo.[TSNo]")]
        public String TsNo1
        {
            get => Fields.TsNo1[this];
            set => Fields.TsNo1[this] = value;
        }

        [DisplayName("Ts No Vehicle Id"), Expression("jTsNo.[VehicleId]")]
        public Int32? TsNoVehicleId
        {
            get => Fields.TsNoVehicleId[this];
            set => Fields.TsNoVehicleId[this] = value;
        }

        [DisplayName("Ts No Advance"), Expression("jTsNo.[Advance]")]
        public Decimal? TsNoAdvance
        {
            get => Fields.TsNoAdvance[this];
            set => Fields.TsNoAdvance[this] = value;
        }

        [DisplayName("Ts No Start Km"), Expression("jTsNo.[StartKM]")]
        public Decimal? TsNoStartKm
        {
            get => Fields.TsNoStartKm[this];
            set => Fields.TsNoStartKm[this] = value;
        }

        [DisplayName("Ts No End Km"), Expression("jTsNo.[EndKm]")]
        public Decimal? TsNoEndKm
        {
            get => Fields.TsNoEndKm[this];
            set => Fields.TsNoEndKm[this] = value;
        }

        [DisplayName("Ts No Total Km"), Expression("jTsNo.[TotalKm]")]
        public Decimal? TsNoTotalKm
        {
            get => Fields.TsNoTotalKm[this];
            set => Fields.TsNoTotalKm[this] = value;
        }

        [DisplayName("Ts No Total Liter"), Expression("jTsNo.[TotalLiter]")]
        public Decimal? TsNoTotalLiter
        {
            get => Fields.TsNoTotalLiter[this];
            set => Fields.TsNoTotalLiter[this] = value;
        }

        [DisplayName("Ts No Mileage"), Expression("jTsNo.[Mileage]")]
        public Decimal? TsNoMileage
        {
            get => Fields.TsNoMileage[this];
            set => Fields.TsNoMileage[this] = value;
        }

        [DisplayName("Ts No Startdate"), Expression("jTsNo.[Startdate]")]
        public DateTime? TsNoStartdate
        {
            get => Fields.TsNoStartdate[this];
            set => Fields.TsNoStartdate[this] = value;
        }

        [DisplayName("Ts No Enddate"), Expression("jTsNo.[Enddate]")]
        public DateTime? TsNoEnddate
        {
            get => Fields.TsNoEnddate[this];
            set => Fields.TsNoEnddate[this] = value;
        }

        [DisplayName("Ts No Totaldays"), Expression("jTsNo.[Totaldays]")]
        public Int32? TsNoTotaldays
        {
            get => Fields.TsNoTotaldays[this];
            set => Fields.TsNoTotaldays[this] = value;
        }

        [DisplayName("Ts No Rto"), Expression("jTsNo.[RTO]")]
        public Decimal? TsNoRto
        {
            get => Fields.TsNoRto[this];
            set => Fields.TsNoRto[this] = value;
        }

        [DisplayName("Ts No Pc"), Expression("jTsNo.[PC]")]
        public Decimal? TsNoPc
        {
            get => Fields.TsNoPc[this];
            set => Fields.TsNoPc[this] = value;
        }

        [DisplayName("Ts No Total Driver Commission"), Expression("jTsNo.[TotalDriverCommission]")]
        public Decimal? TsNoTotalDriverCommission
        {
            get => Fields.TsNoTotalDriverCommission[this];
            set => Fields.TsNoTotalDriverCommission[this] = value;
        }

        [DisplayName("Ts No Total Commison"), Expression("jTsNo.[TotalCommison]")]
        public Decimal? TsNoTotalCommison
        {
            get => Fields.TsNoTotalCommison[this];
            set => Fields.TsNoTotalCommison[this] = value;
        }

        [DisplayName("Ts No Total Loading Expense"), Expression("jTsNo.[TotalLoadingExpense]")]
        public Decimal? TsNoTotalLoadingExpense
        {
            get => Fields.TsNoTotalLoadingExpense[this];
            set => Fields.TsNoTotalLoadingExpense[this] = value;
        }

        [DisplayName("Ts No Total Unload Expense"), Expression("jTsNo.[TotalUnloadExpense]")]
        public Decimal? TsNoTotalUnloadExpense
        {
            get => Fields.TsNoTotalUnloadExpense[this];
            set => Fields.TsNoTotalUnloadExpense[this] = value;
        }

        [DisplayName("Ts No Total Other Expense"), Expression("jTsNo.[TotalOtherExpense]")]
        public Decimal? TsNoTotalOtherExpense
        {
            get => Fields.TsNoTotalOtherExpense[this];
            set => Fields.TsNoTotalOtherExpense[this] = value;
        }

        [DisplayName("Ts No Total Fright"), Expression("jTsNo.[TotalFright]")]
        public Decimal? TsNoTotalFright
        {
            get => Fields.TsNoTotalFright[this];
            set => Fields.TsNoTotalFright[this] = value;
        }

        [DisplayName("Ts No Profit"), Expression("jTsNo.[Profit]")]
        public Decimal? TsNoProfit
        {
            get => Fields.TsNoProfit[this];
            set => Fields.TsNoProfit[this] = value;
        }

        [DisplayName("Ts No Total Fuel Amount"), Expression("jTsNo.[TotalFuelAmount]")]
        public Decimal? TsNoTotalFuelAmount
        {
            get => Fields.TsNoTotalFuelAmount[this];
            set => Fields.TsNoTotalFuelAmount[this] = value;
        }

        [DisplayName("Ts No Drivertwo Bata"), Expression("jTsNo.[DrivertwoBata]")]
        public Decimal? TsNoDrivertwoBata
        {
            get => Fields.TsNoDrivertwoBata[this];
            set => Fields.TsNoDrivertwoBata[this] = value;
        }

        [DisplayName("Money In Out Ts No V Type"), Expression("jMoneyInOutTsNo.[VType]")]
        public Int32? MoneyInOutTsNoVType
        {
            get => Fields.MoneyInOutTsNoVType[this];
            set => Fields.MoneyInOutTsNoVType[this] = value;
        }

        [DisplayName("Money In Out Ts No Trx Date"), Expression("jMoneyInOutTsNo.[TrxDate]")]
        public DateTime? MoneyInOutTsNoTrxDate
        {
            get => Fields.MoneyInOutTsNoTrxDate[this];
            set => Fields.MoneyInOutTsNoTrxDate[this] = value;
        }

        [DisplayName("Money In Out Ts No V No"), Expression("jMoneyInOutTsNo.[VNo]")]
        public Int32? MoneyInOutTsNoVNo
        {
            get => Fields.MoneyInOutTsNoVNo[this];
            set => Fields.MoneyInOutTsNoVNo[this] = value;
        }

        [DisplayName("Money In Out Ts No Customer Id"), Expression("jMoneyInOutTsNo.[CustomerId]")]
        public Int32? MoneyInOutTsNoCustomerId
        {
            get => Fields.MoneyInOutTsNoCustomerId[this];
            set => Fields.MoneyInOutTsNoCustomerId[this] = value;
        }

        [DisplayName("Money In Out Ts No Employee Id"), Expression("jMoneyInOutTsNo.[EmployeeId]")]
        public Int32? MoneyInOutTsNoEmployeeId
        {
            get => Fields.MoneyInOutTsNoEmployeeId[this];
            set => Fields.MoneyInOutTsNoEmployeeId[this] = value;
        }

        [DisplayName("Money In Out Ts No Supplier Id"), Expression("jMoneyInOutTsNo.[SupplierId]")]
        public Int32? MoneyInOutTsNoSupplierId
        {
            get => Fields.MoneyInOutTsNoSupplierId[this];
            set => Fields.MoneyInOutTsNoSupplierId[this] = value;
        }

        [DisplayName("Money In Out Ts No Vehicle Id"), Expression("jMoneyInOutTsNo.[VehicleId]")]
        public Int32? MoneyInOutTsNoVehicleId
        {
            get => Fields.MoneyInOutTsNoVehicleId[this];
            set => Fields.MoneyInOutTsNoVehicleId[this] = value;
        }

        [DisplayName("Money In Out Ts No Amount"), Expression("jMoneyInOutTsNo.[Amount]")]
        public Decimal? MoneyInOutTsNoAmount
        {
            get => Fields.MoneyInOutTsNoAmount[this];
            set => Fields.MoneyInOutTsNoAmount[this] = value;
        }

        [DisplayName("Money In Out Ts No Tax Per"), Expression("jMoneyInOutTsNo.[TaxPer]")]
        public Decimal? MoneyInOutTsNoTaxPer
        {
            get => Fields.MoneyInOutTsNoTaxPer[this];
            set => Fields.MoneyInOutTsNoTaxPer[this] = value;
        }

        [DisplayName("Money In Out Ts No Tax Amount"), Expression("jMoneyInOutTsNo.[TaxAmount]")]
        public Decimal? MoneyInOutTsNoTaxAmount
        {
            get => Fields.MoneyInOutTsNoTaxAmount[this];
            set => Fields.MoneyInOutTsNoTaxAmount[this] = value;
        }

        [DisplayName("Money In Out Ts No Total Amount"), Expression("jMoneyInOutTsNo.[TotalAmount]")]
        public Decimal? MoneyInOutTsNoTotalAmount
        {
            get => Fields.MoneyInOutTsNoTotalAmount[this];
            set => Fields.MoneyInOutTsNoTotalAmount[this] = value;
        }

        [DisplayName("Money In Out Ts No Account Head Id"), Expression("jMoneyInOutTsNo.[AccountHeadId]")]
        public Int32? MoneyInOutTsNoAccountHeadId
        {
            get => Fields.MoneyInOutTsNoAccountHeadId[this];
            set => Fields.MoneyInOutTsNoAccountHeadId[this] = value;
        }

        [DisplayName("Money In Out Ts No Payment Method"), Expression("jMoneyInOutTsNo.[PaymentMethod]")]
        public Int32? MoneyInOutTsNoPaymentMethod
        {
            get => Fields.MoneyInOutTsNoPaymentMethod[this];
            set => Fields.MoneyInOutTsNoPaymentMethod[this] = value;
        }

        [DisplayName("Money In Out Ts No Account Id"), Expression("jMoneyInOutTsNo.[AccountId]")]
        public Int32? MoneyInOutTsNoAccountId
        {
            get => Fields.MoneyInOutTsNoAccountId[this];
            set => Fields.MoneyInOutTsNoAccountId[this] = value;
        }

        [DisplayName("Money In Out Ts No Remarks"), Expression("jMoneyInOutTsNo.[Remarks]")]
        public String MoneyInOutTsNoRemarks
        {
            get => Fields.MoneyInOutTsNoRemarks[this];
            set => Fields.MoneyInOutTsNoRemarks[this] = value;
        }

        [DisplayName("Money In Out Ts No Consignment Id"), Expression("jMoneyInOutTsNo.[ConsignmentId]")]
        public Int32? MoneyInOutTsNoConsignmentId
        {
            get => Fields.MoneyInOutTsNoConsignmentId[this];
            set => Fields.MoneyInOutTsNoConsignmentId[this] = value;
        }

        [DisplayName("Money In Out Ts No Ts Id"), Expression("jMoneyInOutTsNo.[TsId]")]
        public Int32? MoneyInOutTsNoTsId
        {
            get => Fields.MoneyInOutTsNoTsId[this];
            set => Fields.MoneyInOutTsNoTsId[this] = value;
        }

        [DisplayName("Trip Advance Ts No"), Expression("jTripAdvance.[TSNo]")]
        public String TripAdvanceTsNo
        {
            get => Fields.TripAdvanceTsNo[this];
            set => Fields.TripAdvanceTsNo[this] = value;
        }

        [DisplayName("Trip Advance Vehicle Id"), Expression("jTripAdvance.[VehicleId]")]
        public Int32? TripAdvanceVehicleId
        {
            get => Fields.TripAdvanceVehicleId[this];
            set => Fields.TripAdvanceVehicleId[this] = value;
        }

        [DisplayName("Trip Advance Advance"), Expression("jTripAdvance.[Advance]")]
        public Decimal? TripAdvanceAdvance
        {
            get => Fields.TripAdvanceAdvance[this];
            set => Fields.TripAdvanceAdvance[this] = value;
        }

        [DisplayName("Trip Advance Start Km"), Expression("jTripAdvance.[StartKM]")]
        public Decimal? TripAdvanceStartKm
        {
            get => Fields.TripAdvanceStartKm[this];
            set => Fields.TripAdvanceStartKm[this] = value;
        }

        [DisplayName("Trip Advance End Km"), Expression("jTripAdvance.[EndKm]")]
        public Decimal? TripAdvanceEndKm
        {
            get => Fields.TripAdvanceEndKm[this];
            set => Fields.TripAdvanceEndKm[this] = value;
        }

        [DisplayName("Trip Advance Total Km"), Expression("jTripAdvance.[TotalKm]")]
        public Decimal? TripAdvanceTotalKm
        {
            get => Fields.TripAdvanceTotalKm[this];
            set => Fields.TripAdvanceTotalKm[this] = value;
        }

        [DisplayName("Trip Advance Total Liter"), Expression("jTripAdvance.[TotalLiter]")]
        public Decimal? TripAdvanceTotalLiter
        {
            get => Fields.TripAdvanceTotalLiter[this];
            set => Fields.TripAdvanceTotalLiter[this] = value;
        }

        [DisplayName("Trip Advance Mileage"), Expression("jTripAdvance.[Mileage]")]
        public Decimal? TripAdvanceMileage
        {
            get => Fields.TripAdvanceMileage[this];
            set => Fields.TripAdvanceMileage[this] = value;
        }

        [DisplayName("Trip Advance Startdate"), Expression("jTripAdvance.[Startdate]")]
        public DateTime? TripAdvanceStartdate
        {
            get => Fields.TripAdvanceStartdate[this];
            set => Fields.TripAdvanceStartdate[this] = value;
        }

        [DisplayName("Trip Advance Enddate"), Expression("jTripAdvance.[Enddate]")]
        public DateTime? TripAdvanceEnddate
        {
            get => Fields.TripAdvanceEnddate[this];
            set => Fields.TripAdvanceEnddate[this] = value;
        }

        [DisplayName("Trip Advance Totaldays"), Expression("jTripAdvance.[Totaldays]")]
        public Int32? TripAdvanceTotaldays
        {
            get => Fields.TripAdvanceTotaldays[this];
            set => Fields.TripAdvanceTotaldays[this] = value;
        }

        [DisplayName("Trip Advance Rto"), Expression("jTripAdvance.[RTO]")]
        public Decimal? TripAdvanceRto
        {
            get => Fields.TripAdvanceRto[this];
            set => Fields.TripAdvanceRto[this] = value;
        }

        [DisplayName("Trip Advance Pc"), Expression("jTripAdvance.[PC]")]
        public Decimal? TripAdvancePc
        {
            get => Fields.TripAdvancePc[this];
            set => Fields.TripAdvancePc[this] = value;
        }

        [DisplayName("Trip Advance Total Driver Commission"), Expression("jTripAdvance.[TotalDriverCommission]")]
        public Decimal? TripAdvanceTotalDriverCommission
        {
            get => Fields.TripAdvanceTotalDriverCommission[this];
            set => Fields.TripAdvanceTotalDriverCommission[this] = value;
        }

        [DisplayName("Trip Advance Total Commison"), Expression("jTripAdvance.[TotalCommison]")]
        public Decimal? TripAdvanceTotalCommison
        {
            get => Fields.TripAdvanceTotalCommison[this];
            set => Fields.TripAdvanceTotalCommison[this] = value;
        }

        [DisplayName("Trip Advance Total Loading Expense"), Expression("jTripAdvance.[TotalLoadingExpense]")]
        public Decimal? TripAdvanceTotalLoadingExpense
        {
            get => Fields.TripAdvanceTotalLoadingExpense[this];
            set => Fields.TripAdvanceTotalLoadingExpense[this] = value;
        }

        [DisplayName("Trip Advance Total Unload Expense"), Expression("jTripAdvance.[TotalUnloadExpense]")]
        public Decimal? TripAdvanceTotalUnloadExpense
        {
            get => Fields.TripAdvanceTotalUnloadExpense[this];
            set => Fields.TripAdvanceTotalUnloadExpense[this] = value;
        }

        [DisplayName("Trip Advance Total Other Expense"), Expression("jTripAdvance.[TotalOtherExpense]")]
        public Decimal? TripAdvanceTotalOtherExpense
        {
            get => Fields.TripAdvanceTotalOtherExpense[this];
            set => Fields.TripAdvanceTotalOtherExpense[this] = value;
        }

        [DisplayName("Trip Advance Total Fright"), Expression("jTripAdvance.[TotalFright]")]
        public Decimal? TripAdvanceTotalFright
        {
            get => Fields.TripAdvanceTotalFright[this];
            set => Fields.TripAdvanceTotalFright[this] = value;
        }

        [DisplayName("Trip Advance Profit"), Expression("jTripAdvance.[Profit]")]
        public Decimal? TripAdvanceProfit
        {
            get => Fields.TripAdvanceProfit[this];
            set => Fields.TripAdvanceProfit[this] = value;
        }

        [DisplayName("Trip Advance Total Fuel Amount"), Expression("jTripAdvance.[TotalFuelAmount]")]
        public Decimal? TripAdvanceTotalFuelAmount
        {
            get => Fields.TripAdvanceTotalFuelAmount[this];
            set => Fields.TripAdvanceTotalFuelAmount[this] = value;
        }

        [DisplayName("Trip Advance Drivertwo Bata"), Expression("jTripAdvance.[DrivertwoBata]")]
        public Decimal? TripAdvanceDrivertwoBata
        {
            get => Fields.TripAdvanceDrivertwoBata[this];
            set => Fields.TripAdvanceDrivertwoBata[this] = value;
        }

        [DisplayName("Trip Balance Ts No"), Expression("jTripBalance.[TSNo]")]
        public String TripBalanceTsNo
        {
            get => Fields.TripBalanceTsNo[this];
            set => Fields.TripBalanceTsNo[this] = value;
        }

        [DisplayName("Trip Balance Vehicle Id"), Expression("jTripBalance.[VehicleId]")]
        public Int32? TripBalanceVehicleId
        {
            get => Fields.TripBalanceVehicleId[this];
            set => Fields.TripBalanceVehicleId[this] = value;
        }

        [DisplayName("Trip Balance Advance"), Expression("jTripBalance.[Advance]")]
        public Decimal? TripBalanceAdvance
        {
            get => Fields.TripBalanceAdvance[this];
            set => Fields.TripBalanceAdvance[this] = value;
        }

        [DisplayName("Trip Balance Start Km"), Expression("jTripBalance.[StartKM]")]
        public Decimal? TripBalanceStartKm
        {
            get => Fields.TripBalanceStartKm[this];
            set => Fields.TripBalanceStartKm[this] = value;
        }

        [DisplayName("Trip Balance End Km"), Expression("jTripBalance.[EndKm]")]
        public Decimal? TripBalanceEndKm
        {
            get => Fields.TripBalanceEndKm[this];
            set => Fields.TripBalanceEndKm[this] = value;
        }

        [DisplayName("Trip Balance Total Km"), Expression("jTripBalance.[TotalKm]")]
        public Decimal? TripBalanceTotalKm
        {
            get => Fields.TripBalanceTotalKm[this];
            set => Fields.TripBalanceTotalKm[this] = value;
        }

        [DisplayName("Trip Balance Total Liter"), Expression("jTripBalance.[TotalLiter]")]
        public Decimal? TripBalanceTotalLiter
        {
            get => Fields.TripBalanceTotalLiter[this];
            set => Fields.TripBalanceTotalLiter[this] = value;
        }

        [DisplayName("Trip Balance Mileage"), Expression("jTripBalance.[Mileage]")]
        public Decimal? TripBalanceMileage
        {
            get => Fields.TripBalanceMileage[this];
            set => Fields.TripBalanceMileage[this] = value;
        }

        [DisplayName("Trip Balance Startdate"), Expression("jTripBalance.[Startdate]")]
        public DateTime? TripBalanceStartdate
        {
            get => Fields.TripBalanceStartdate[this];
            set => Fields.TripBalanceStartdate[this] = value;
        }

        [DisplayName("Trip Balance Enddate"), Expression("jTripBalance.[Enddate]")]
        public DateTime? TripBalanceEnddate
        {
            get => Fields.TripBalanceEnddate[this];
            set => Fields.TripBalanceEnddate[this] = value;
        }

        [DisplayName("Trip Balance Totaldays"), Expression("jTripBalance.[Totaldays]")]
        public Int32? TripBalanceTotaldays
        {
            get => Fields.TripBalanceTotaldays[this];
            set => Fields.TripBalanceTotaldays[this] = value;
        }

        [DisplayName("Trip Balance Rto"), Expression("jTripBalance.[RTO]")]
        public Decimal? TripBalanceRto
        {
            get => Fields.TripBalanceRto[this];
            set => Fields.TripBalanceRto[this] = value;
        }

        [DisplayName("Trip Balance Pc"), Expression("jTripBalance.[PC]")]
        public Decimal? TripBalancePc
        {
            get => Fields.TripBalancePc[this];
            set => Fields.TripBalancePc[this] = value;
        }

        [DisplayName("Trip Balance Total Driver Commission"), Expression("jTripBalance.[TotalDriverCommission]")]
        public Decimal? TripBalanceTotalDriverCommission
        {
            get => Fields.TripBalanceTotalDriverCommission[this];
            set => Fields.TripBalanceTotalDriverCommission[this] = value;
        }

        [DisplayName("Trip Balance Total Commison"), Expression("jTripBalance.[TotalCommison]")]
        public Decimal? TripBalanceTotalCommison
        {
            get => Fields.TripBalanceTotalCommison[this];
            set => Fields.TripBalanceTotalCommison[this] = value;
        }

        [DisplayName("Trip Balance Total Loading Expense"), Expression("jTripBalance.[TotalLoadingExpense]")]
        public Decimal? TripBalanceTotalLoadingExpense
        {
            get => Fields.TripBalanceTotalLoadingExpense[this];
            set => Fields.TripBalanceTotalLoadingExpense[this] = value;
        }

        [DisplayName("Trip Balance Total Unload Expense"), Expression("jTripBalance.[TotalUnloadExpense]")]
        public Decimal? TripBalanceTotalUnloadExpense
        {
            get => Fields.TripBalanceTotalUnloadExpense[this];
            set => Fields.TripBalanceTotalUnloadExpense[this] = value;
        }

        [DisplayName("Trip Balance Total Other Expense"), Expression("jTripBalance.[TotalOtherExpense]")]
        public Decimal? TripBalanceTotalOtherExpense
        {
            get => Fields.TripBalanceTotalOtherExpense[this];
            set => Fields.TripBalanceTotalOtherExpense[this] = value;
        }

        [DisplayName("Trip Balance Total Fright"), Expression("jTripBalance.[TotalFright]")]
        public Decimal? TripBalanceTotalFright
        {
            get => Fields.TripBalanceTotalFright[this];
            set => Fields.TripBalanceTotalFright[this] = value;
        }

        [DisplayName("Trip Balance Profit"), Expression("jTripBalance.[Profit]")]
        public Decimal? TripBalanceProfit
        {
            get => Fields.TripBalanceProfit[this];
            set => Fields.TripBalanceProfit[this] = value;
        }

        [DisplayName("Trip Balance Total Fuel Amount"), Expression("jTripBalance.[TotalFuelAmount]")]
        public Decimal? TripBalanceTotalFuelAmount
        {
            get => Fields.TripBalanceTotalFuelAmount[this];
            set => Fields.TripBalanceTotalFuelAmount[this] = value;
        }

        [DisplayName("Trip Balance Drivertwo Bata"), Expression("jTripBalance.[DrivertwoBata]")]
        public Decimal? TripBalanceDrivertwoBata
        {
            get => Fields.TripBalanceDrivertwoBata[this];
            set => Fields.TripBalanceDrivertwoBata[this] = value;
        }

        [DisplayName("Toll Tag Ts No"), Expression("jTollTag.[TSNo]")]
        public String TollTagTsNo
        {
            get => Fields.TollTagTsNo[this];
            set => Fields.TollTagTsNo[this] = value;
        }

        [DisplayName("Toll Tag Vehicle Id"), Expression("jTollTag.[VehicleId]")]
        public Int32? TollTagVehicleId
        {
            get => Fields.TollTagVehicleId[this];
            set => Fields.TollTagVehicleId[this] = value;
        }

        [DisplayName("Toll Tag Advance"), Expression("jTollTag.[Advance]")]
        public Decimal? TollTagAdvance
        {
            get => Fields.TollTagAdvance[this];
            set => Fields.TollTagAdvance[this] = value;
        }

        [DisplayName("Toll Tag Start Km"), Expression("jTollTag.[StartKM]")]
        public Decimal? TollTagStartKm
        {
            get => Fields.TollTagStartKm[this];
            set => Fields.TollTagStartKm[this] = value;
        }

        [DisplayName("Toll Tag End Km"), Expression("jTollTag.[EndKm]")]
        public Decimal? TollTagEndKm
        {
            get => Fields.TollTagEndKm[this];
            set => Fields.TollTagEndKm[this] = value;
        }

        [DisplayName("Toll Tag Total Km"), Expression("jTollTag.[TotalKm]")]
        public Decimal? TollTagTotalKm
        {
            get => Fields.TollTagTotalKm[this];
            set => Fields.TollTagTotalKm[this] = value;
        }

        [DisplayName("Toll Tag Total Liter"), Expression("jTollTag.[TotalLiter]")]
        public Decimal? TollTagTotalLiter
        {
            get => Fields.TollTagTotalLiter[this];
            set => Fields.TollTagTotalLiter[this] = value;
        }

        [DisplayName("Toll Tag Mileage"), Expression("jTollTag.[Mileage]")]
        public Decimal? TollTagMileage
        {
            get => Fields.TollTagMileage[this];
            set => Fields.TollTagMileage[this] = value;
        }

        [DisplayName("Toll Tag Startdate"), Expression("jTollTag.[Startdate]")]
        public DateTime? TollTagStartdate
        {
            get => Fields.TollTagStartdate[this];
            set => Fields.TollTagStartdate[this] = value;
        }

        [DisplayName("Toll Tag Enddate"), Expression("jTollTag.[Enddate]")]
        public DateTime? TollTagEnddate
        {
            get => Fields.TollTagEnddate[this];
            set => Fields.TollTagEnddate[this] = value;
        }

        [DisplayName("Toll Tag Totaldays"), Expression("jTollTag.[Totaldays]")]
        public Int32? TollTagTotaldays
        {
            get => Fields.TollTagTotaldays[this];
            set => Fields.TollTagTotaldays[this] = value;
        }

        [DisplayName("Toll Tag Rto"), Expression("jTollTag.[RTO]")]
        public Decimal? TollTagRto
        {
            get => Fields.TollTagRto[this];
            set => Fields.TollTagRto[this] = value;
        }

        [DisplayName("Toll Tag Pc"), Expression("jTollTag.[PC]")]
        public Decimal? TollTagPc
        {
            get => Fields.TollTagPc[this];
            set => Fields.TollTagPc[this] = value;
        }

        [DisplayName("Toll Tag Total Driver Commission"), Expression("jTollTag.[TotalDriverCommission]")]
        public Decimal? TollTagTotalDriverCommission
        {
            get => Fields.TollTagTotalDriverCommission[this];
            set => Fields.TollTagTotalDriverCommission[this] = value;
        }

        [DisplayName("Toll Tag Total Commison"), Expression("jTollTag.[TotalCommison]")]
        public Decimal? TollTagTotalCommison
        {
            get => Fields.TollTagTotalCommison[this];
            set => Fields.TollTagTotalCommison[this] = value;
        }

        [DisplayName("Toll Tag Total Loading Expense"), Expression("jTollTag.[TotalLoadingExpense]")]
        public Decimal? TollTagTotalLoadingExpense
        {
            get => Fields.TollTagTotalLoadingExpense[this];
            set => Fields.TollTagTotalLoadingExpense[this] = value;
        }

        [DisplayName("Toll Tag Total Unload Expense"), Expression("jTollTag.[TotalUnloadExpense]")]
        public Decimal? TollTagTotalUnloadExpense
        {
            get => Fields.TollTagTotalUnloadExpense[this];
            set => Fields.TollTagTotalUnloadExpense[this] = value;
        }

        [DisplayName("Toll Tag Total Other Expense"), Expression("jTollTag.[TotalOtherExpense]")]
        public Decimal? TollTagTotalOtherExpense
        {
            get => Fields.TollTagTotalOtherExpense[this];
            set => Fields.TollTagTotalOtherExpense[this] = value;
        }

        [DisplayName("Toll Tag Total Fright"), Expression("jTollTag.[TotalFright]")]
        public Decimal? TollTagTotalFright
        {
            get => Fields.TollTagTotalFright[this];
            set => Fields.TollTagTotalFright[this] = value;
        }

        [DisplayName("Toll Tag Profit"), Expression("jTollTag.[Profit]")]
        public Decimal? TollTagProfit
        {
            get => Fields.TollTagProfit[this];
            set => Fields.TollTagProfit[this] = value;
        }

        [DisplayName("Toll Tag Total Fuel Amount"), Expression("jTollTag.[TotalFuelAmount]")]
        public Decimal? TollTagTotalFuelAmount
        {
            get => Fields.TollTagTotalFuelAmount[this];
            set => Fields.TollTagTotalFuelAmount[this] = value;
        }

        [DisplayName("Toll Tag Drivertwo Bata"), Expression("jTollTag.[DrivertwoBata]")]
        public Decimal? TollTagDrivertwoBata
        {
            get => Fields.TollTagDrivertwoBata[this];
            set => Fields.TollTagDrivertwoBata[this] = value;
        }

        IIdField IIdRow.IdField => Fields.Id;

        public static readonly RowFields Fields = new RowFields().Init();

        public SettlementDetailsRow()
            : base(Fields)
        {
        }


        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field TsNo;
            public Int32Field MoneyInOutTsNo;
            public Int32Field TripAdvance;
            public Int32Field TripBalance;
            public Int32Field TollTag;

            public StringField TsNo1;
            public Int32Field TsNoVehicleId;
            public DecimalField TsNoAdvance;
            public DecimalField TsNoStartKm;
            public DecimalField TsNoEndKm;
            public DecimalField TsNoTotalKm;
            public DecimalField TsNoTotalLiter;
            public DecimalField TsNoMileage;
            public DateTimeField TsNoStartdate;
            public DateTimeField TsNoEnddate;
            public Int32Field TsNoTotaldays;
            public DecimalField TsNoRto;
            public DecimalField TsNoPc;
            public DecimalField TsNoTotalDriverCommission;
            public DecimalField TsNoTotalCommison;
            public DecimalField TsNoTotalLoadingExpense;
            public DecimalField TsNoTotalUnloadExpense;
            public DecimalField TsNoTotalOtherExpense;
            public DecimalField TsNoTotalFright;
            public DecimalField TsNoProfit;
            public DecimalField TsNoTotalFuelAmount;
            public DecimalField TsNoDrivertwoBata;

            public Int32Field MoneyInOutTsNoVType;
            public DateTimeField MoneyInOutTsNoTrxDate;
            public Int32Field MoneyInOutTsNoVNo;
            public Int32Field MoneyInOutTsNoCustomerId;
            public Int32Field MoneyInOutTsNoEmployeeId;
            public Int32Field MoneyInOutTsNoSupplierId;
            public Int32Field MoneyInOutTsNoVehicleId;
            public DecimalField MoneyInOutTsNoAmount;
            public DecimalField MoneyInOutTsNoTaxPer;
            public DecimalField MoneyInOutTsNoTaxAmount;
            public DecimalField MoneyInOutTsNoTotalAmount;
            public Int32Field MoneyInOutTsNoAccountHeadId;
            public Int32Field MoneyInOutTsNoPaymentMethod;
            public Int32Field MoneyInOutTsNoAccountId;
            public StringField MoneyInOutTsNoRemarks;
            public Int32Field MoneyInOutTsNoConsignmentId;
            public Int32Field MoneyInOutTsNoTsId;

            public StringField TripAdvanceTsNo;
            public Int32Field TripAdvanceVehicleId;
            public DecimalField TripAdvanceAdvance;
            public DecimalField TripAdvanceStartKm;
            public DecimalField TripAdvanceEndKm;
            public DecimalField TripAdvanceTotalKm;
            public DecimalField TripAdvanceTotalLiter;
            public DecimalField TripAdvanceMileage;
            public DateTimeField TripAdvanceStartdate;
            public DateTimeField TripAdvanceEnddate;
            public Int32Field TripAdvanceTotaldays;
            public DecimalField TripAdvanceRto;
            public DecimalField TripAdvancePc;
            public DecimalField TripAdvanceTotalDriverCommission;
            public DecimalField TripAdvanceTotalCommison;
            public DecimalField TripAdvanceTotalLoadingExpense;
            public DecimalField TripAdvanceTotalUnloadExpense;
            public DecimalField TripAdvanceTotalOtherExpense;
            public DecimalField TripAdvanceTotalFright;
            public DecimalField TripAdvanceProfit;
            public DecimalField TripAdvanceTotalFuelAmount;
            public DecimalField TripAdvanceDrivertwoBata;

            public StringField TripBalanceTsNo;
            public Int32Field TripBalanceVehicleId;
            public DecimalField TripBalanceAdvance;
            public DecimalField TripBalanceStartKm;
            public DecimalField TripBalanceEndKm;
            public DecimalField TripBalanceTotalKm;
            public DecimalField TripBalanceTotalLiter;
            public DecimalField TripBalanceMileage;
            public DateTimeField TripBalanceStartdate;
            public DateTimeField TripBalanceEnddate;
            public Int32Field TripBalanceTotaldays;
            public DecimalField TripBalanceRto;
            public DecimalField TripBalancePc;
            public DecimalField TripBalanceTotalDriverCommission;
            public DecimalField TripBalanceTotalCommison;
            public DecimalField TripBalanceTotalLoadingExpense;
            public DecimalField TripBalanceTotalUnloadExpense;
            public DecimalField TripBalanceTotalOtherExpense;
            public DecimalField TripBalanceTotalFright;
            public DecimalField TripBalanceProfit;
            public DecimalField TripBalanceTotalFuelAmount;
            public DecimalField TripBalanceDrivertwoBata;

            public StringField TollTagTsNo;
            public Int32Field TollTagVehicleId;
            public DecimalField TollTagAdvance;
            public DecimalField TollTagStartKm;
            public DecimalField TollTagEndKm;
            public DecimalField TollTagTotalKm;
            public DecimalField TollTagTotalLiter;
            public DecimalField TollTagMileage;
            public DateTimeField TollTagStartdate;
            public DateTimeField TollTagEnddate;
            public Int32Field TollTagTotaldays;
            public DecimalField TollTagRto;
            public DecimalField TollTagPc;
            public DecimalField TollTagTotalDriverCommission;
            public DecimalField TollTagTotalCommison;
            public DecimalField TollTagTotalLoadingExpense;
            public DecimalField TollTagTotalUnloadExpense;
            public DecimalField TollTagTotalOtherExpense;
            public DecimalField TollTagTotalFright;
            public DecimalField TollTagProfit;
            public DecimalField TollTagTotalFuelAmount;
            public DecimalField TollTagDrivertwoBata;





            public StringField TSNumber;


            public DecimalField TripBalancee;
            public DecimalField Advance;
            public DecimalField toll;
            public DecimalField FualAmount;

            public RowListField<ExtrRow> extraexpense;
            public RowListField<CrossingRow> Crossing;
            
        }
    }
}

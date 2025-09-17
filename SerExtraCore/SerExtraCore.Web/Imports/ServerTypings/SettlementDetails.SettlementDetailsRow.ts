namespace SerExtraCore.SettlementDetails {
    export interface SettlementDetailsRow {
        Id?: number;
        TsNo?: number;
        MoneyInOutTsNo?: number;
        TripAdvance?: number;
        TripBalance?: number;
        TollTag?: number;
        TsNo1?: string;
        TsNoVehicleId?: number;
        TsNoAdvance?: number;
        TsNoStartKm?: number;
        TsNoEndKm?: number;
        TsNoTotalKm?: number;
        TsNoTotalLiter?: number;
        TsNoMileage?: number;
        TsNoStartdate?: string;
        TsNoEnddate?: string;
        TsNoTotaldays?: number;
        TsNoRto?: number;
        TsNoPc?: number;
        TsNoTotalDriverCommission?: number;
        TsNoTotalCommison?: number;
        TsNoTotalLoadingExpense?: number;
        TsNoTotalUnloadExpense?: number;
        TsNoTotalOtherExpense?: number;
        TsNoTotalFright?: number;
        TsNoProfit?: number;
        TsNoTotalFuelAmount?: number;
        TsNoDrivertwoBata?: number;
        MoneyInOutTsNoVType?: number;
        MoneyInOutTsNoTrxDate?: string;
        MoneyInOutTsNoVNo?: number;
        MoneyInOutTsNoCustomerId?: number;
        MoneyInOutTsNoEmployeeId?: number;
        MoneyInOutTsNoSupplierId?: number;
        MoneyInOutTsNoVehicleId?: number;
        MoneyInOutTsNoAmount?: number;
        MoneyInOutTsNoTaxPer?: number;
        MoneyInOutTsNoTaxAmount?: number;
        MoneyInOutTsNoTotalAmount?: number;
        MoneyInOutTsNoAccountHeadId?: number;
        MoneyInOutTsNoPaymentMethod?: number;
        MoneyInOutTsNoAccountId?: number;
        MoneyInOutTsNoRemarks?: string;
        MoneyInOutTsNoConsignmentId?: number;
        MoneyInOutTsNoTsId?: number;
        TripAdvanceTsNo?: string;
        TripAdvanceVehicleId?: number;
        TripAdvanceAdvance?: number;
        TripAdvanceStartKm?: number;
        TripAdvanceEndKm?: number;
        TripAdvanceTotalKm?: number;
        TripAdvanceTotalLiter?: number;
        TripAdvanceMileage?: number;
        TripAdvanceStartdate?: string;
        TripAdvanceEnddate?: string;
        TripAdvanceTotaldays?: number;
        TripAdvanceRto?: number;
        TripAdvancePc?: number;
        TripAdvanceTotalDriverCommission?: number;
        TripAdvanceTotalCommison?: number;
        TripAdvanceTotalLoadingExpense?: number;
        TripAdvanceTotalUnloadExpense?: number;
        TripAdvanceTotalOtherExpense?: number;
        TripAdvanceTotalFright?: number;
        TripAdvanceProfit?: number;
        TripAdvanceTotalFuelAmount?: number;
        TripAdvanceDrivertwoBata?: number;
        TripBalanceTsNo?: string;
        TripBalanceVehicleId?: number;
        TripBalanceAdvance?: number;
        TripBalanceStartKm?: number;
        TripBalanceEndKm?: number;
        TripBalanceTotalKm?: number;
        TripBalanceTotalLiter?: number;
        TripBalanceMileage?: number;
        TripBalanceStartdate?: string;
        TripBalanceEnddate?: string;
        TripBalanceTotaldays?: number;
        TripBalanceRto?: number;
        TripBalancePc?: number;
        TripBalanceTotalDriverCommission?: number;
        TripBalanceTotalCommison?: number;
        TripBalanceTotalLoadingExpense?: number;
        TripBalanceTotalUnloadExpense?: number;
        TripBalanceTotalOtherExpense?: number;
        TripBalanceTotalFright?: number;
        TripBalanceProfit?: number;
        TripBalanceTotalFuelAmount?: number;
        TripBalanceDrivertwoBata?: number;
        TollTagTsNo?: string;
        TollTagVehicleId?: number;
        TollTagAdvance?: number;
        TollTagStartKm?: number;
        TollTagEndKm?: number;
        TollTagTotalKm?: number;
        TollTagTotalLiter?: number;
        TollTagMileage?: number;
        TollTagStartdate?: string;
        TollTagEnddate?: string;
        TollTagTotaldays?: number;
        TollTagRto?: number;
        TollTagPc?: number;
        TollTagTotalDriverCommission?: number;
        TollTagTotalCommison?: number;
        TollTagTotalLoadingExpense?: number;
        TollTagTotalUnloadExpense?: number;
        TollTagTotalOtherExpense?: number;
        TollTagTotalFright?: number;
        TollTagProfit?: number;
        TollTagTotalFuelAmount?: number;
        TollTagDrivertwoBata?: number;
        TSNumber?: string;
        TripBalancee?: number;
        Advance?: number;
        toll?: number;
        FualAmount?: number;
        extraexpense?: Extr.ExtrRow[];
        Crossing?: Crossing.CrossingRow[];
    }

    export namespace SettlementDetailsRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'SettlementDetails.SettlementDetails';
        export const deletePermission = 'Master:SettlementDetails';
        export const insertPermission = 'Master:SettlementDetails';
        export const readPermission = 'Master:SettlementDetails';
        export const updatePermission = 'Master:SettlementDetails';

        export declare const enum Fields {
            Id = "Id",
            TsNo = "TsNo",
            MoneyInOutTsNo = "MoneyInOutTsNo",
            TripAdvance = "TripAdvance",
            TripBalance = "TripBalance",
            TollTag = "TollTag",
            TsNo1 = "TsNo1",
            TsNoVehicleId = "TsNoVehicleId",
            TsNoAdvance = "TsNoAdvance",
            TsNoStartKm = "TsNoStartKm",
            TsNoEndKm = "TsNoEndKm",
            TsNoTotalKm = "TsNoTotalKm",
            TsNoTotalLiter = "TsNoTotalLiter",
            TsNoMileage = "TsNoMileage",
            TsNoStartdate = "TsNoStartdate",
            TsNoEnddate = "TsNoEnddate",
            TsNoTotaldays = "TsNoTotaldays",
            TsNoRto = "TsNoRto",
            TsNoPc = "TsNoPc",
            TsNoTotalDriverCommission = "TsNoTotalDriverCommission",
            TsNoTotalCommison = "TsNoTotalCommison",
            TsNoTotalLoadingExpense = "TsNoTotalLoadingExpense",
            TsNoTotalUnloadExpense = "TsNoTotalUnloadExpense",
            TsNoTotalOtherExpense = "TsNoTotalOtherExpense",
            TsNoTotalFright = "TsNoTotalFright",
            TsNoProfit = "TsNoProfit",
            TsNoTotalFuelAmount = "TsNoTotalFuelAmount",
            TsNoDrivertwoBata = "TsNoDrivertwoBata",
            MoneyInOutTsNoVType = "MoneyInOutTsNoVType",
            MoneyInOutTsNoTrxDate = "MoneyInOutTsNoTrxDate",
            MoneyInOutTsNoVNo = "MoneyInOutTsNoVNo",
            MoneyInOutTsNoCustomerId = "MoneyInOutTsNoCustomerId",
            MoneyInOutTsNoEmployeeId = "MoneyInOutTsNoEmployeeId",
            MoneyInOutTsNoSupplierId = "MoneyInOutTsNoSupplierId",
            MoneyInOutTsNoVehicleId = "MoneyInOutTsNoVehicleId",
            MoneyInOutTsNoAmount = "MoneyInOutTsNoAmount",
            MoneyInOutTsNoTaxPer = "MoneyInOutTsNoTaxPer",
            MoneyInOutTsNoTaxAmount = "MoneyInOutTsNoTaxAmount",
            MoneyInOutTsNoTotalAmount = "MoneyInOutTsNoTotalAmount",
            MoneyInOutTsNoAccountHeadId = "MoneyInOutTsNoAccountHeadId",
            MoneyInOutTsNoPaymentMethod = "MoneyInOutTsNoPaymentMethod",
            MoneyInOutTsNoAccountId = "MoneyInOutTsNoAccountId",
            MoneyInOutTsNoRemarks = "MoneyInOutTsNoRemarks",
            MoneyInOutTsNoConsignmentId = "MoneyInOutTsNoConsignmentId",
            MoneyInOutTsNoTsId = "MoneyInOutTsNoTsId",
            TripAdvanceTsNo = "TripAdvanceTsNo",
            TripAdvanceVehicleId = "TripAdvanceVehicleId",
            TripAdvanceAdvance = "TripAdvanceAdvance",
            TripAdvanceStartKm = "TripAdvanceStartKm",
            TripAdvanceEndKm = "TripAdvanceEndKm",
            TripAdvanceTotalKm = "TripAdvanceTotalKm",
            TripAdvanceTotalLiter = "TripAdvanceTotalLiter",
            TripAdvanceMileage = "TripAdvanceMileage",
            TripAdvanceStartdate = "TripAdvanceStartdate",
            TripAdvanceEnddate = "TripAdvanceEnddate",
            TripAdvanceTotaldays = "TripAdvanceTotaldays",
            TripAdvanceRto = "TripAdvanceRto",
            TripAdvancePc = "TripAdvancePc",
            TripAdvanceTotalDriverCommission = "TripAdvanceTotalDriverCommission",
            TripAdvanceTotalCommison = "TripAdvanceTotalCommison",
            TripAdvanceTotalLoadingExpense = "TripAdvanceTotalLoadingExpense",
            TripAdvanceTotalUnloadExpense = "TripAdvanceTotalUnloadExpense",
            TripAdvanceTotalOtherExpense = "TripAdvanceTotalOtherExpense",
            TripAdvanceTotalFright = "TripAdvanceTotalFright",
            TripAdvanceProfit = "TripAdvanceProfit",
            TripAdvanceTotalFuelAmount = "TripAdvanceTotalFuelAmount",
            TripAdvanceDrivertwoBata = "TripAdvanceDrivertwoBata",
            TripBalanceTsNo = "TripBalanceTsNo",
            TripBalanceVehicleId = "TripBalanceVehicleId",
            TripBalanceAdvance = "TripBalanceAdvance",
            TripBalanceStartKm = "TripBalanceStartKm",
            TripBalanceEndKm = "TripBalanceEndKm",
            TripBalanceTotalKm = "TripBalanceTotalKm",
            TripBalanceTotalLiter = "TripBalanceTotalLiter",
            TripBalanceMileage = "TripBalanceMileage",
            TripBalanceStartdate = "TripBalanceStartdate",
            TripBalanceEnddate = "TripBalanceEnddate",
            TripBalanceTotaldays = "TripBalanceTotaldays",
            TripBalanceRto = "TripBalanceRto",
            TripBalancePc = "TripBalancePc",
            TripBalanceTotalDriverCommission = "TripBalanceTotalDriverCommission",
            TripBalanceTotalCommison = "TripBalanceTotalCommison",
            TripBalanceTotalLoadingExpense = "TripBalanceTotalLoadingExpense",
            TripBalanceTotalUnloadExpense = "TripBalanceTotalUnloadExpense",
            TripBalanceTotalOtherExpense = "TripBalanceTotalOtherExpense",
            TripBalanceTotalFright = "TripBalanceTotalFright",
            TripBalanceProfit = "TripBalanceProfit",
            TripBalanceTotalFuelAmount = "TripBalanceTotalFuelAmount",
            TripBalanceDrivertwoBata = "TripBalanceDrivertwoBata",
            TollTagTsNo = "TollTagTsNo",
            TollTagVehicleId = "TollTagVehicleId",
            TollTagAdvance = "TollTagAdvance",
            TollTagStartKm = "TollTagStartKm",
            TollTagEndKm = "TollTagEndKm",
            TollTagTotalKm = "TollTagTotalKm",
            TollTagTotalLiter = "TollTagTotalLiter",
            TollTagMileage = "TollTagMileage",
            TollTagStartdate = "TollTagStartdate",
            TollTagEnddate = "TollTagEnddate",
            TollTagTotaldays = "TollTagTotaldays",
            TollTagRto = "TollTagRto",
            TollTagPc = "TollTagPc",
            TollTagTotalDriverCommission = "TollTagTotalDriverCommission",
            TollTagTotalCommison = "TollTagTotalCommison",
            TollTagTotalLoadingExpense = "TollTagTotalLoadingExpense",
            TollTagTotalUnloadExpense = "TollTagTotalUnloadExpense",
            TollTagTotalOtherExpense = "TollTagTotalOtherExpense",
            TollTagTotalFright = "TollTagTotalFright",
            TollTagProfit = "TollTagProfit",
            TollTagTotalFuelAmount = "TollTagTotalFuelAmount",
            TollTagDrivertwoBata = "TollTagDrivertwoBata",
            TSNumber = "TSNumber",
            TripBalancee = "TripBalancee",
            Advance = "Advance",
            toll = "toll",
            FualAmount = "FualAmount",
            extraexpense = "extraexpense",
            Crossing = "Crossing"
        }
    }
}

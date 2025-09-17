namespace SerExtraCore.Expenses {
    export interface ExpensesRow {
        Id?: number;
        TsId?: number;
        FromPlace?: number;
        ToPlace?: number;
        Expense?: number;
        TsTsNo?: string;
        TsVehicleId?: number;
        TsAdvance?: number;
        TsStartKm?: number;
        TsEndKm?: number;
        TsTotalKm?: number;
        TsTotalLiter?: number;
        TsMileage?: number;
        TsStartdate?: string;
        TsEnddate?: string;
        TsTotaldays?: number;
        TsRto?: number;
        TsPc?: number;
        TsTotalDriverCommission?: number;
        TsTotalCommison?: number;
        TsTotalLoadingExpense?: number;
        TsTotalUnloadExpense?: number;
        TsTotalOtherExpense?: number;
        TsTotalFright?: number;
        TsProfit?: number;
        TsTotalFuelAmount?: number;
        TsDrivertwoBata?: number;
        TsToll?: number;
        TsTotalExpense?: number;
        TsExtraBill?: number;
        TsRemarks?: string;
        FromPlaceAreaName?: string;
        FromPlaceDescription?: string;
        ToPlaceAreaName?: string;
        ToPlaceDescription?: string;
        ExpenseVType?: number;
        ExpenseTrxDate?: string;
        ExpenseVNo?: number;
        ExpenseCustomerId?: number;
        ExpenseEmployeeId?: number;
        ExpenseSupplierId?: number;
        ExpenseVehicleId?: number;
        ExpenseAmount?: number;
        ExpenseTaxPer?: number;
        ExpenseTaxAmount?: number;
        ExpenseTotalAmount?: number;
        ExpenseAccountHeadId?: number;
        ExpensePaymentMethod?: number;
        ExpenseAccountId?: number;
        ExpenseRemarks?: string;
        ExpenseConsignmentId?: number;
        ExpenseTsId?: number;
        Profit?: number;
        Startdate?: string;
        Enddate?: string;
        VehicleId?: number;
        VehicleNumber?: string;
    }

    export namespace ExpensesRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Expenses.Expenses';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            TsId = "TsId",
            FromPlace = "FromPlace",
            ToPlace = "ToPlace",
            Expense = "Expense",
            TsTsNo = "TsTsNo",
            TsVehicleId = "TsVehicleId",
            TsAdvance = "TsAdvance",
            TsStartKm = "TsStartKm",
            TsEndKm = "TsEndKm",
            TsTotalKm = "TsTotalKm",
            TsTotalLiter = "TsTotalLiter",
            TsMileage = "TsMileage",
            TsStartdate = "TsStartdate",
            TsEnddate = "TsEnddate",
            TsTotaldays = "TsTotaldays",
            TsRto = "TsRto",
            TsPc = "TsPc",
            TsTotalDriverCommission = "TsTotalDriverCommission",
            TsTotalCommison = "TsTotalCommison",
            TsTotalLoadingExpense = "TsTotalLoadingExpense",
            TsTotalUnloadExpense = "TsTotalUnloadExpense",
            TsTotalOtherExpense = "TsTotalOtherExpense",
            TsTotalFright = "TsTotalFright",
            TsProfit = "TsProfit",
            TsTotalFuelAmount = "TsTotalFuelAmount",
            TsDrivertwoBata = "TsDrivertwoBata",
            TsToll = "TsToll",
            TsTotalExpense = "TsTotalExpense",
            TsExtraBill = "TsExtraBill",
            TsRemarks = "TsRemarks",
            FromPlaceAreaName = "FromPlaceAreaName",
            FromPlaceDescription = "FromPlaceDescription",
            ToPlaceAreaName = "ToPlaceAreaName",
            ToPlaceDescription = "ToPlaceDescription",
            ExpenseVType = "ExpenseVType",
            ExpenseTrxDate = "ExpenseTrxDate",
            ExpenseVNo = "ExpenseVNo",
            ExpenseCustomerId = "ExpenseCustomerId",
            ExpenseEmployeeId = "ExpenseEmployeeId",
            ExpenseSupplierId = "ExpenseSupplierId",
            ExpenseVehicleId = "ExpenseVehicleId",
            ExpenseAmount = "ExpenseAmount",
            ExpenseTaxPer = "ExpenseTaxPer",
            ExpenseTaxAmount = "ExpenseTaxAmount",
            ExpenseTotalAmount = "ExpenseTotalAmount",
            ExpenseAccountHeadId = "ExpenseAccountHeadId",
            ExpensePaymentMethod = "ExpensePaymentMethod",
            ExpenseAccountId = "ExpenseAccountId",
            ExpenseRemarks = "ExpenseRemarks",
            ExpenseConsignmentId = "ExpenseConsignmentId",
            ExpenseTsId = "ExpenseTsId",
            Profit = "Profit",
            Startdate = "Startdate",
            Enddate = "Enddate",
            VehicleId = "VehicleId",
            VehicleNumber = "VehicleNumber"
        }
    }
}

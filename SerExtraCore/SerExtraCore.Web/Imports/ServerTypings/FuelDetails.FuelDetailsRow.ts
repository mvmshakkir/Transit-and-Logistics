namespace SerExtraCore.FuelDetails {
    export interface FuelDetailsRow {
        Id?: number;
        TsId?: number;
        PumpId?: number;
        PumpName?: string;
        Date?: string;
        Qty?: number;
        LiterRate?: number;
        TotalAmt?: number;
        Photo?: string;
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
        PumpPumpName?: string;
        PumpPumpPlace?: string;
        PumpAddress?: string;
        AmountType?: AmountType;
        PaymentMethod?: AccountTypes;
        DebitAccountId?: number;
        Expenses?: Accounts.PaymentRow[];
        Supplierid?: number;
        SupplierName?: string;
        FuelId?: Accounts.MoneyOutRow[];
    }

    export namespace FuelDetailsRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'FuelDetails.FuelDetails';
        export const lookupKey = 'FuelDetails.FuelDetails';

        export function getLookup(): Q.Lookup<FuelDetailsRow> {
            return Q.getLookup<FuelDetailsRow>('FuelDetails.FuelDetails');
        }
        export const deletePermission = 'Master:FuelDetails';
        export const insertPermission = 'Master:FuelDetails';
        export const readPermission = 'Master:FuelDetails';
        export const updatePermission = 'Master:FuelDetails';

        export declare const enum Fields {
            Id = "Id",
            TsId = "TsId",
            PumpId = "PumpId",
            PumpName = "PumpName",
            Date = "Date",
            Qty = "Qty",
            LiterRate = "LiterRate",
            TotalAmt = "TotalAmt",
            Photo = "Photo",
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
            PumpPumpName = "PumpPumpName",
            PumpPumpPlace = "PumpPumpPlace",
            PumpAddress = "PumpAddress",
            AmountType = "AmountType",
            PaymentMethod = "PaymentMethod",
            DebitAccountId = "DebitAccountId",
            Expenses = "Expenses",
            Supplierid = "Supplierid",
            SupplierName = "SupplierName",
            FuelId = "FuelId"
        }
    }
}